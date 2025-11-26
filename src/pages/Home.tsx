import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ClipboardCheck, Users } from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";

const Home = () => {
  const expertises = [
    {
      icon: Building2,
      title: "Conception & Dimensionnement",
      description: "Calculs structurels et dimensionnement d'ouvrages en béton armé, métal et bois selon les normes en vigueur.",
    },
    {
      icon: ClipboardCheck,
      title: "Expertise Structurelle",
      description: "Diagnostic, audit et analyse de pathologies sur ouvrages existants avec recommandations techniques détaillées.",
    },
    {
      icon: Users,
      title: "Assistance & Conseils Techniques",
      description: "Accompagnement MOA/MOE, suivi de chantier et vérification d'études pour garantir la conformité de vos projets.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-primary-foreground">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Bureau d'Études Structure – Béton, Métal, Bois
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Conception, optimisation et expertise technique pour vos ouvrages
            </p>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Dynamix Ingénierie est spécialisé dans le dimensionnement, la conception et l'optimisation des structures en béton armé, métal et bois. Nous accompagnons architectes, maîtres d'œuvre et entreprises dans toutes les phases de leurs projets : étude, expertise, assistance et conseils.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">Demander une étude</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertises Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Expertises</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions techniques complètes pour tous vos projets structurels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertises.map((expertise, index) => {
              const Icon = expertise.icon;
              return (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{expertise.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{expertise.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'une expertise structurelle ?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir une étude technique adaptée à vos besoins.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/contact">Demander une étude gratuite</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
