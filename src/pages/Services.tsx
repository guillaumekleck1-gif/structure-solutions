import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Search, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <title>Services Ingénierie Structure | Dimensionnement, Expertise - Dynamix Ingénierie</title>
        <meta name="description" content="Services de dimensionnement, expertise structurelle et assistance technique. Calculs béton armé, métal, bois selon Eurocodes. Bureau d'études Strasbourg." />
        <link rel="canonical" href="https://dynamix-ingenierie.fr/services" />
        <meta property="og:title" content="Services Ingénierie Structure | Dynamix Ingénierie" />
        <meta property="og:description" content="Dimensionnement, expertise et assistance technique pour structures béton, métal et bois." />
        <meta property="og:url" content="https://dynamix-ingenierie.fr/services" />
      </Helmet>
      <main className="pt-20">
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dimensionnement, Expertise & Assistance
            </h1>
            <p className="text-xl opacity-95 leading-relaxed">
              Ingénieurs spécialisés en calcul, expertise structurelle et assistance technique pour ouvrages béton, métal et bois. Une approche rigoureuse et des solutions adaptées à chaque projet. Découvrez également <Link to="/bureau-etudes" className="underline hover:opacity-100 transition-opacity">nos missions de bureau d'études</Link>.
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
                <Card 
                  key={index} 
                  className="border shadow-soft hover:shadow-glow overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="grid md:grid-cols-3">
                    <div className="gradient-soft p-8 flex flex-col items-center justify-center text-center border-r border-border/50">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                        <Icon size={40} />
                      </div>
                      <CardTitle className="text-2xl mb-3 group-hover:text-accent transition-colors">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="md:col-span-2 p-8 bg-card/50 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        Prestations détaillées
                        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent"></div>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                            <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{detail}</span>
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
      <section className="py-16 gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            Un projet en cours ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discutons ensemble de vos besoins et trouvons la solution technique la plus adaptée. Consultez nos <Link to="/realisations" className="text-accent hover:text-accent-light underline transition-colors">réalisations</Link> pour découvrir notre savoir-faire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-glow bg-accent hover:bg-accent-light transition-all hover:scale-105">
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:bg-background/50 transition-all">
              <Link to="/realisations">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Services;
