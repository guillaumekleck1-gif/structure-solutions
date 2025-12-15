import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ClipboardCheck, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";
import { useEffect, useState } from "react";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const expertises = [{
    icon: Building2,
    title: "Conception & Dimensionnement",
    description: "Calculs structurels et dimensionnement d'ouvrages en béton armé, métal et bois selon les normes en vigueur."
  }, {
    icon: ClipboardCheck,
    title: "Expertise Structurelle",
    description: "Diagnostic, audit et analyse de pathologies sur ouvrages existants avec recommandations techniques détaillées."
  }, {
    icon: Users,
    title: "Assistance & Conseils Techniques",
    description: "Accompagnement MOA/MOE, suivi de chantier et vérification d'études pour garantir la conformité de vos projets."
  }];
  const benefits = ["Conformité aux normes européennes", "Optimisation technique & économique", "Accompagnement sur mesure", "Délais maîtrisés"];
  return (
    <>
      <Helmet>
        <title>Bureau d'Études Structure Strasbourg | Dynamix Ingénierie - Béton, Métal, Bois</title>
        <meta name="description" content="Bureau d'études structure à Strasbourg spécialisé en conception, dimensionnement et expertise structurelle béton armé, métal et bois. Accompagnement MOA/MOE en Alsace." />
        <link rel="canonical" href="https://dynamix-ingenierie.fr/" />
        <meta property="og:title" content="Bureau d'Études Structure Strasbourg | Dynamix Ingénierie" />
        <meta property="og:description" content="Conception, dimensionnement et expertise structurelle en béton, métal et bois. Bureau d'études structure à Strasbourg, Alsace." />
        <meta property="og:url" content="https://dynamix-ingenierie.fr/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Dynamix Ingénierie",
            "description": "Bureau d'études structure spécialisé en conception, dimensionnement et expertise structurelle béton, métal et bois",
            "url": "https://dynamix-ingenierie.fr",
            "telephone": "+33388226663",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "79 rue de la Plaine des Bouchers",
              "addressLocality": "Strasbourg",
              "postalCode": "67100",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.5568",
              "longitude": "7.7506"
            },
            "areaServed": ["Alsace", "Strasbourg", "Grand Est", "France"],
            "serviceType": ["Dimensionnement structure", "Expertise structurelle", "Calcul béton armé", "Charpente métallique", "Structure bois"]
          })}
        </script>
      </Helmet>
      <main>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-24 md:pt-0">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000" style={{
        backgroundImage: `url(${heroImage})`,
        transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0003})`
      }}>
          <div className="absolute inset-0 gradient-hero opacity-90" />
        </div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent/20 rounded-lg rotate-45 animate-float" />
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-primary-light/30 rounded-full animate-float" style={{
          animationDelay: '0.5s'
        }} />
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-accent/10 backdrop-blur-sm animate-float" style={{
          animationDelay: '1s'
        }} />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        
        <div className="container mx-auto px-4 relative z-10 text-primary-foreground">
          <div className="max-w-4xl">
            
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-accent-light" style={{
            animationDelay: '0.1s'
          }}>
              Bureau d'Études Structure
              <span className="block text-accent-light mt-2">Béton · Métal · Bois</span>
            </h1>
            
            <p className="text-xl md:text-3xl mb-6 opacity-95 animate-slide-up font-light" style={{
            animationDelay: '0.2s'
          }}>
              Conception, optimisation et expertise technique pour vos ouvrages
            </p>
            
            <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed max-w-2xl animate-slide-up" style={{
            animationDelay: '0.3s'
          }}>
              Dynamix Ingénierie est spécialisé dans le dimensionnement, la conception et l'optimisation des structures. Nous accompagnons architectes, maîtres d'œuvre et entreprises dans toutes les phases de leurs projets.
            </p>

            {/* Benefits list */}
            <div className="grid grid-cols-2 gap-3 mb-8 animate-slide-up" style={{
            animationDelay: '0.4s'
          }}>
              {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-2 text-sm md:text-base">
                  <CheckCircle2 className="text-accent-light flex-shrink-0" size={20} />
                  <span className="opacity-90">{benefit}</span>
                </div>)}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{
            animationDelay: '0.5s'
          }}>
              <Button asChild size="lg" className="shadow-glow bg-accent hover:bg-accent-light text-accent-foreground transition-all hover:scale-105 group">
                <Link to="/contact">
                  Demander une étude
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20 backdrop-blur-sm transition-all hover:scale-105">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-accent-light rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Expertises Section */}
      <section className="py-24 gradient-soft relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
              Excellence Technique
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Nos Expertises
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions techniques complètes pour tous vos projets structurels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {expertises.map((expertise, index) => {
            const Icon = expertise.icon;
            return <Card key={index} className="border-none shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-3 group bg-card/80 backdrop-blur-sm relative overflow-hidden" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
                  
                  <CardContent className="pt-10 pb-8 px-6 text-center relative z-10">
                    <div className="relative inline-block mb-6">
                      <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
                      <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 text-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float" style={{
                    animationDelay: `${index * 0.3}s`
                  }}>
                        <Icon size={36} strokeWidth={2} />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                      {expertise.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {expertise.description}
                    </p>
                    
                    <Button asChild variant="ghost" className="group/btn text-accent hover:text-accent-light">
                      <Link to="/services" className="flex items-center gap-2">
                        En savoir plus
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[{
            number: "500+",
            label: "Projets réalisés"
          }, {
            number: "15+",
            label: "Années d'expérience"
          }, {
            number: "98%",
            label: "Clients satisfaits"
          }, {
            number: "24h",
            label: "Délai de réponse"
          }].map((stat, index) => <div key={index} className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-float" style={{
          animationDelay: '0.5s'
        }}></div>
        </div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-accent/30">
              Étude Personnalisée
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Besoin d'une expertise structurelle ?
            </h2>
            
            <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
              Contactez-nous pour discuter de votre projet et obtenir une étude technique adaptée à vos besoins.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="shadow-glow bg-accent hover:bg-accent-light text-accent-foreground transition-all hover:scale-105 group text-lg px-8 py-6">
                <Link to="/contact" className="flex items-center gap-2">
                  Demander une étude gratuite
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20 backdrop-blur-sm transition-all hover:scale-105 text-lg px-8 py-6">
                <Link to="/realisations">Voir nos réalisations</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <p className="text-sm opacity-75 mb-4">Ils nous font confiance</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm opacity-60">
                <span>Architectes</span>
                <span>•</span>
                <span>Promoteurs</span>
                <span>•</span>
                <span>Entreprises BTP</span>
                <span>•</span>
                <span>Collectivités</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};
export default Home;