import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Pencil, Trash2, Plus, LogOut } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type Realisation = {
  id: string;
  title: string;
  type: string;
  description: string;
  details: string;
  image_url: string;
  order_index: number;
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [realisations, setRealisations] = useState<Realisation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    details: "",
    image_url: "",
    order_index: 0,
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      navigate("/admin-auth");
      return;
    }

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roles) {
      await supabase.auth.signOut();
      navigate("/admin-auth");
      return;
    }

    setIsAuthenticated(true);
    setCheckingAuth(false);
    loadRealisations();
  };

  const loadRealisations = async () => {
    const { data, error } = await supabase
      .from("realisations")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les réalisations",
        variant: "destructive",
      });
      return;
    }

    setRealisations(data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin-auth");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (editingId) {
      const { error } = await supabase
        .from("realisations")
        .update(formData)
        .eq("id", editingId);

      if (error) {
        toast({
          title: "Erreur",
          description: "Impossible de modifier la réalisation",
          variant: "destructive",
        });
      } else {
        toast({ title: "Réalisation modifiée avec succès" });
        resetForm();
        loadRealisations();
      }
    } else {
      const { error } = await supabase
        .from("realisations")
        .insert([formData]);

      if (error) {
        toast({
          title: "Erreur",
          description: "Impossible d'ajouter la réalisation",
          variant: "destructive",
        });
      } else {
        toast({ title: "Réalisation ajoutée avec succès" });
        resetForm();
        loadRealisations();
      }
    }

    setIsLoading(false);
  };

  const handleEdit = (realisation: Realisation) => {
    setEditingId(realisation.id);
    setFormData({
      title: realisation.title,
      type: realisation.type,
      description: realisation.description,
      details: realisation.details,
      image_url: realisation.image_url,
      order_index: realisation.order_index,
    });
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    const { error } = await supabase
      .from("realisations")
      .delete()
      .eq("id", deleteId);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer la réalisation",
        variant: "destructive",
      });
    } else {
      toast({ title: "Réalisation supprimée" });
      loadRealisations();
    }

    setDeleteId(null);
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: "",
      type: "",
      description: "",
      details: "",
      image_url: "",
      order_index: 0,
    });
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-soft p-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin - Réalisations</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>
                {editingId ? "Modifier la réalisation" : "Ajouter une réalisation"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Titre</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="type">Type</Label>
                  <Input
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    required
                    placeholder="Ex: Béton Armé, Structure Métallique..."
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="details">Détails de la mission</Label>
                  <Textarea
                    id="details"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="image_url">URL de l'image</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <Label htmlFor="order_index">Ordre d'affichage</Label>
                  <Input
                    id="order_index"
                    type="number"
                    value={formData.order_index}
                    onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" disabled={isLoading} className="flex-1">
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : editingId ? (
                      <Pencil className="mr-2 h-4 w-4" />
                    ) : (
                      <Plus className="mr-2 h-4 w-4" />
                    )}
                    {editingId ? "Modifier" : "Ajouter"}
                  </Button>
                  {editingId && (
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Annuler
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Réalisations existantes</h2>
            {realisations.length === 0 ? (
              <Card className="shadow-soft">
                <CardContent className="p-8 text-center text-muted-foreground">
                  Aucune réalisation pour le moment
                </CardContent>
              </Card>
            ) : (
              realisations.map((realisation) => (
                <Card key={realisation.id} className="shadow-soft">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold">{realisation.title}</h3>
                        <p className="text-sm text-muted-foreground">{realisation.type}</p>
                        <p className="text-sm mt-2">{realisation.description.slice(0, 80)}...</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(realisation)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setDeleteId(realisation.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. La réalisation sera définitivement supprimée.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Supprimer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Admin;
