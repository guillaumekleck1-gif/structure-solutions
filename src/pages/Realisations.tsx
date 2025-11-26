import { Card, CardContent } from "@/components/ui/card";
import concreteImg from "@/assets/project-concrete.jpg";
import metalImg from "@/assets/project-metal.jpg";
import woodImg from "@/assets/project-wood.jpg";

const Realisations = () => {
  const projects = [
    {
      title: "Immeuble de Logements Collectifs",
      type: "Béton Armé",
      description: "Étude complète d'une structure béton de 6 niveaux avec parking souterrain. Dimensionnement des fondations, voiles, dalles et escaliers.",
      image: concreteImg,
      details: "Mission complète : conception, calculs, plans d'exécution",
    },
    {
      title: "Entrepôt Logistique",
      type: "Structure Métallique",
      description: "Conception d'une charpente métallique pour entrepôt industriel de 3000 m². Portiques métalliques et pannes en acier.",
      image: metalImg,
      details: "Mission : dimensionnement, notes de calcul, plans de détail",
    },
    {
      title: "Extension en Ossature Bois",
      type: "Structure Bois",
      description: "Étude structurelle d'une extension résidentielle en ossature bois avec toiture charpente traditionnelle.",
      image: woodImg,
      details: "Mission : calculs structure, plans d'exécution",
    },
    {
      title: "Réhabilitation d'un Bâtiment Industriel",
      type: "Béton & Métal",
      description: "Expertise et renforcement structurel d'un bâtiment industriel existant pour changement d'usage.",
      image: concreteImg,
      details: "Mission : diagnostic, calculs de renforcement, suivi travaux",
    },
    {
      title: "Centre Commercial",
      type: "Structure Mixte",
      description: "Étude de structure mixte béton/métal pour centre commercial. Grandes portées et charges d'exploitation importantes.",
      image: metalImg,
      details: "Mission : conception, optimisation, assistance technique",
    },
    {
      title: "Maison Individuelle à Ossature Bois",
      type: "Bois",
      description: "Conception complète de la structure d'une maison BBC en ossature bois avec isolation renforcée.",
      image: woodImg,
      details: "Mission : étude complète, plans d'exécution, métrés",
    },
  ];

  return (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="border shadow-soft hover:shadow-glow transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
    </main>
  );
};

export default Realisations;
