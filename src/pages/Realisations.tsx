import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

type Realisation = {
  id: string;
  title: string;
  type: string;
  description: string;
  details: string;
  image_url: string;
  order_index: number;
};

const Realisations = () => {
  const [projects, setProjects] = useState<Realisation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Realisation | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      const { data, error } = await supabase
        .from("realisations")
        .select("*")
        .order("order_index", { ascending: true });

      if (!error && data) {
        setProjects(data);
      }
      setIsLoading(false);
    };

    loadProjects();
  }, []);

  return (
    <>
      <Helmet>
        <title>Réalisations Ingénierie Structure | Projets Béton Métal Bois - Dynamix Ingénierie</title>
        <meta name="description" content="Découvrez nos réalisations en ingénierie structurelle : projets béton armé, charpentes métalliques, structures bois. Bureau d'études Strasbourg, Alsace." />
        <link rel="canonical" href="https://dynamix-ingenierie.fr/realisations" />
        <meta property="og:title" content="Réalisations Ingénierie Structure | Dynamix Ingénierie" />
        <meta property="og:description" content="Projets et études structurelles en béton, métal et bois réalisés par notre bureau d'études." />
        <meta property="og:url" content="https://dynamix-ingenierie.fr/realisations" />
      </Helmet>
      <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Réalisations
            </h1>
            <p className="text-xl opacity-95 leading-relaxed">
              Découvrez quelques-unes de nos études et réalisations en ingénierie structurelle. Chaque projet témoigne de notre expertise technique et de notre capacité à trouver des solutions adaptées.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Aucune réalisation disponible pour le moment.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
              <Card 
                key={index} 
                className="border shadow-soft hover:shadow-glow transition-all duration-300 overflow-hidden group hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden relative">
                  {project.image_url ? (
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">Aucune image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">Voir en grand</span>
                  </div>
                </div>
                <CardContent className="p-6 bg-card/80 backdrop-blur-sm">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-accent/20 to-accent/10 text-accent text-xs font-semibold rounded-full mb-3 border border-accent/20">
                    {project.type}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    {project.details}
                  </p>
                </CardContent>
              </Card>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <div className="gradient-soft rounded-2xl p-8 max-w-3xl mx-auto shadow-soft border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
              <h2 className="text-2xl font-bold mb-4 relative z-10">Projets sur Mesure</h2>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                Chaque projet est unique et nécessite une approche spécifique. Nous adaptons nos méthodes et nos solutions techniques à vos contraintes et objectifs. N'hésitez pas à nous contacter pour discuter de votre projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Popup Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden bg-background/95 backdrop-blur-sm">
          {selectedProject && (
            <div className="flex flex-col">
              {selectedProject.image_url && (
                <img
                  src={selectedProject.image_url}
                  alt={selectedProject.title}
                  className="w-full max-h-[70vh] object-contain"
                />
              )}
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-accent/20 to-accent/10 text-accent text-xs font-semibold rounded-full mb-3 border border-accent/20">
                  {selectedProject.type}
                </div>
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-2">{selectedProject.description}</p>
                <p className="text-sm text-muted-foreground italic">{selectedProject.details}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
    </>
  );
};

export default Realisations;
