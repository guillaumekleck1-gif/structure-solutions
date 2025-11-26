import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Search, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Ruler,
      title: "Dimensionnement",
      description: "Calcul et dimensionnement complet de vos structures selon les normes en vigueur.",
      details: [
        "Calculs de résistance des matériaux",
        "Modélisation numérique 3D",
        "Notes de calcul détaillées",
        "Optimisation des sections",
        "Vérification des déformations",
        "Conformité Eurocodes",
        "Plans de coffrage et ferraillage",
        "Métrés et quantitatifs",
      ],
    },
    {
      icon: Search,
      title: "Expertise",
      description: "Diagnostic structurel et audit technique d'ouvrages existants.",
      details: [
        "Diagnostic structurel complet",
        "Inspection visuelle détaillée",
        "Analyse de pathologies",
        "Évaluation de la capacité portante",
        "Détection de désordres",
        "Rapport d'expertise illustré",
        "Préconisations de renforcement",
        "Estimations budgétaires",
      ],
    },
    {
      icon: Headphones,
      title: "Assistance & Conseils",
      description: "Accompagnement technique tout au long de votre projet.",
      details: [
        "Conseil en ingénierie",
        "Assistance MOA/MOE",
        "Suivi technique de chantier",
        "Aide à la décision",
        "Vérification d'études tierces",
        "Réponse aux appels d'offres",
        "Coordination technique",
        "Formation équipes",
      ],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dimensionnement, Expertise & Assistance
            </h1>
            <p className="text-xl opacity-95 leading-relaxed">
              Ingénieurs spécialisés en calcul, expertise structurelle et assistance technique pour ouvrages béton, métal et bois. Une approche rigoureuse et des solutions adaptées à chaque projet.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des prestations complètes en ingénierie structurelle pour tous types de projets
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border shadow-md overflow-hidden">
                  <div className="grid md:grid-cols-3">
                    <div className="bg-muted p-8 flex flex-col items-center justify-center text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-4">
                        <Icon size={40} />
                      </div>
                      <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <h3 className="text-xl font-semibold mb-6">Prestations détaillées</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Un projet en cours ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discutons ensemble de vos besoins et trouvons la solution technique la plus adaptée.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Demander un devis</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
