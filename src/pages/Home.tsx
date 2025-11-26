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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero opacity-90" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10" />
        
        <div className="container mx-auto px-4 relative z-10 text-primary-foreground animate-fade-in">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              Bureau d'Études Structure – Béton, Métal, Bois
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Conception, optimisation et expertise technique pour vos ouvrages
            </p>
            <p className="text-lg mb-8 opacity-90 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Dynamix Ingénierie est spécialisé dans le dimensionnement, la conception et l'optimisation des structures en béton armé, métal et bois. Nous accompagnons architectes, maîtres d'œuvre et entreprises dans toutes les phases de leurs projets : étude, expertise, assistance et conseils.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button asChild size="lg" className="shadow-glow bg-accent hover:bg-accent-light text-accent-foreground transition-all hover:scale-105">
                <Link to="/contact">Demander une étude</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20 backdrop-blur-sm transition-all hover:scale-105">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertises Section */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Expertises</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions techniques complètes pour tous vos projets structurels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertises.map((expertise, index) => {
              const Icon = expertise.icon;
              return (
                <Card 
                  key={index} 
                  className="border-none shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group bg-card/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-6 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">{expertise.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{expertise.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'une expertise structurelle ?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir une étude technique adaptée à vos besoins.
          </p>
          <Button asChild size="lg" className="shadow-glow bg-accent hover:bg-accent-light text-accent-foreground transition-all hover:scale-105">
            <Link to="/contact">Demander une étude gratuite</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
