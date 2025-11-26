import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calculator, Layers, TrendingUp } from "lucide-react";

const BureauEtudes = () => {
  const missions = [
    {
      icon: Calculator,
      title: "Calculs & Notes de Calcul",
      description: "Dimensionnement précis selon les Eurocodes et normes en vigueur. Production de notes de calcul détaillées justifiant tous les éléments structurels.",
    },
    {
      icon: FileText,
      title: "Étude d'Exécution",
      description: "Élaboration complète des plans d'exécution avec détails techniques, nomenclatures et spécifications pour la réalisation des ouvrages.",
    },
    {
      icon: Layers,
      title: "Plans de Coffrage & Ferraillage",
      description: "Production de plans de coffrage et ferraillage détaillés pour béton armé, incluant calepinages, nomenclatures et détails constructifs.",
    },
    {
      icon: TrendingUp,
      title: "Optimisation Technique & Économique",
      description: "Analyse et optimisation des structures pour réduire les coûts tout en garantissant la sécurité et la conformité réglementaire.",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Missions de Bureau d'Études Structure
            </h1>
            <p className="text-xl opacity-95 leading-relaxed">
              Dynamix Ingénierie assure l'ensemble des missions d'ingénierie structurelle, de la phase conception jusqu'à la réalisation de vos ouvrages. Notre expertise couvre tous les matériaux : béton armé, structures métalliques et ouvrages bois.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Notre Métier</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En tant que bureau d'études structure, nous intervenons sur l'ensemble du cycle de vie de vos projets de construction ou de rénovation. Nous travaillons en étroite collaboration avec les architectes, maîtres d'ouvrage, promoteurs et entreprises générales pour garantir la faisabilité technique et la sécurité structurelle de chaque ouvrage.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Notre rôle est d'assurer que chaque élément porteur soit correctement dimensionné, que les charges soient reprises efficacement, et que l'ensemble respecte les normes de construction en vigueur (Eurocodes, DTU, règlements parasismiques).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4">
                      <Icon size={24} />
                    </div>
                    <CardTitle className="text-xl">{mission.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Nos Domaines d'Intervention</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Béton Armé</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Dalles et planchers</li>
                  <li>• Poteaux et voiles</li>
                  <li>• Fondations</li>
                  <li>• Escaliers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Structures Métalliques</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Charpentes métalliques</li>
                  <li>• Ossatures</li>
                  <li>• Bardages</li>
                  <li>• Passerelles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Structures Bois</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Charpentes traditionnelles</li>
                  <li>• Ossature bois</li>
                  <li>• Lamellé-collé</li>
                  <li>• CLT</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BureauEtudes;
