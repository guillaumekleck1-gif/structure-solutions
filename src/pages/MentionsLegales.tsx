import { Helmet } from "react-helmet-async";

const MentionsLegales = () => {
  const siteUrl = "www.dynamix-ingenierie.fr";
  const fullUrl = "https://www.dynamix-ingenierie.fr";

  return (
    <>
      <Helmet>
        <title>Mentions Légales | Dynamix Ingénierie - Bureau d'études structure Strasbourg</title>
        <meta name="description" content="Mentions légales du site www.dynamix-ingenierie.fr - Bureau d'études structure spécialisé en béton, métal et bois à Strasbourg, Alsace." />
        <link rel="canonical" href={`${fullUrl}/mentions-legales`} />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Mentions Légales
              </h1>
              <p className="text-xl opacity-95">
                Informations légales concernant le site {siteUrl}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Éditeur du site */}
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold mb-6 text-primary">Éditeur du site {siteUrl}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Le site internet <a href={fullUrl} className="text-accent hover:underline font-medium">{siteUrl}</a> est édité par :
                  </p>
                  <ul className="space-y-2">
                    <li><strong className="text-foreground">Raison sociale :</strong> Dynamix Ingénierie</li>
                    <li><strong className="text-foreground">Forme juridique :</strong> SARL</li>
                    <li><strong className="text-foreground">Siège social :</strong> 79 rue de la Plaine des Bouchers, 67100 Strasbourg</li>
                    <li><strong className="text-foreground">Téléphone :</strong> +33 3 88 22 66 63</li>
                    <li><strong className="text-foreground">Email :</strong> contact@dynamix-ingenierie.com</li>
                    <li><strong className="text-foreground">Site web :</strong> <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a></li>
                  </ul>
                  <p>
                    Dynamix Ingénierie, accessible via <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a>, est un bureau d'études structure spécialisé en ingénierie structurelle pour les constructions en béton armé, structures métalliques et ouvrages en bois.
                  </p>
                </div>
              </div>

              {/* Directeur de publication */}
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold mb-6 text-primary">Directeur de la publication</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Le directeur de la publication du site <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> est le gérant de la société Dynamix Ingénierie.
                  </p>
                  <p>
                    Pour toute question concernant le contenu publié sur <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a>, vous pouvez nous contacter via le formulaire de contact disponible sur notre site.
                  </p>
                </div>
              </div>

              {/* Hébergement */}
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold mb-6 text-primary">Hébergement du site {siteUrl}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Le site <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> est hébergé par :
                  </p>
                  <ul className="space-y-2">
                    <li><strong className="text-foreground">Hébergeur :</strong> Lovable / Netlify</li>
                    <li><strong className="text-foreground">Adresse :</strong> San Francisco, États-Unis</li>
                  </ul>
                  <p>
                    L'hébergeur assure la disponibilité et la sécurité du site <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> conformément aux standards de l'industrie.
                  </p>
                </div>
              </div>

              {/* Conception */}
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold mb-6 text-primary">Conception et réalisation</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Le site <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> a été conçu et développé par :
                  </p>
                  <ul className="space-y-2">
                    <li><strong className="text-foreground">Agence :</strong> Trinity Studio</li>
                    <li><strong className="text-foreground">Site web :</strong> <a href="https://trinity-studio.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.trinity-studio.fr</a></li>
                  </ul>
                  <p>
                    Trinity Studio a accompagné Dynamix Ingénierie dans la création de son identité digitale sur <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a>.
                  </p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold mb-6 text-primary">Propriété intellectuelle</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    L'ensemble du contenu présent sur le site <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> (textes, images, graphismes, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de Dynamix Ingénierie ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a>, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Dynamix Ingénierie.
                  </p>
                  <p>
                    Le nom de domaine <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> et la marque Dynamix Ingénierie sont la propriété exclusive de l'entreprise.
                  </p>
                </div>
              </div>

              {/* Données personnelles */}
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold mb-6 text-primary">Protection des données personnelles</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD), les utilisateurs du site <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> disposent d'un droit d'accès, de rectification, de suppression et d'opposition concernant leurs données personnelles.
                  </p>
                  <p>
                    Les données collectées via le formulaire de contact sur <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> sont uniquement utilisées pour répondre à vos demandes et ne sont jamais transmises à des tiers sans votre consentement.
                  </p>
                  <p>
                    Pour exercer vos droits ou pour toute question relative à la protection de vos données sur <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a>, contactez-nous à : contact@dynamix-ingenierie.com
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold mb-6 text-primary">Politique de cookies</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Le site <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> utilise des cookies techniques essentiels au bon fonctionnement du site. Ces cookies ne collectent aucune donnée personnelle à des fins publicitaires.
                  </p>
                  <p>
                    En naviguant sur <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a>, vous acceptez l'utilisation de ces cookies techniques nécessaires au fonctionnement optimal du site.
                  </p>
                </div>
              </div>

              {/* Responsabilité */}
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold mb-6 text-primary">Limitation de responsabilité</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Dynamix Ingénierie s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a>. Toutefois, Dynamix Ingénierie ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur le site.
                  </p>
                  <p>
                    En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive. Le site <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> peut contenir des liens vers d'autres sites. Dynamix Ingénierie ne peut être tenu responsable du contenu de ces sites externes.
                  </p>
                </div>
              </div>

              {/* Droit applicable */}
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold mb-6 text-primary">Droit applicable</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Les présentes mentions légales du site <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
                  </p>
                  <p>
                    Pour toute question concernant les présentes mentions légales du site <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a>, veuillez nous contacter via notre formulaire de contact ou par email.
                  </p>
                </div>
              </div>

              {/* Activité */}
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold mb-6 text-primary">Activité de Dynamix Ingénierie</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> présente les activités de Dynamix Ingénierie, bureau d'études structure basé à Strasbourg en Alsace. Notre expertise couvre :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Conception et dimensionnement de structures en béton armé</li>
                    <li>Calcul et optimisation de charpentes métalliques</li>
                    <li>Études de structures bois et mixtes</li>
                    <li>Expertise structurelle et diagnostics techniques</li>
                    <li>Assistance à maîtrise d'ouvrage et maîtrise d'œuvre</li>
                  </ul>
                  <p>
                    Pour découvrir l'ensemble de nos services et réalisations, visitez <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a>.
                  </p>
                </div>
              </div>

              {/* Zone d'intervention */}
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50">
                <h2 className="text-2xl font-bold mb-6 text-primary">Zone d'intervention</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Dynamix Ingénierie, dont le site <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> présente les activités, intervient principalement en Alsace (Strasbourg, Colmar, Mulhouse), dans le Grand Est et sur l'ensemble du territoire français pour les projets d'envergure.
                  </p>
                  <p>
                    N'hésitez pas à consulter <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> pour découvrir nos références et nous contacter pour votre projet de construction ou de rénovation.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                <h2 className="text-2xl font-bold mb-6 text-primary">Contact</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Pour toute question concernant le site <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a> ou nos services d'ingénierie structurelle :
                  </p>
                  <ul className="space-y-2">
                    <li><strong className="text-foreground">Adresse :</strong> 79 rue de la Plaine des Bouchers, 67100 Strasbourg</li>
                    <li><strong className="text-foreground">Téléphone :</strong> +33 3 88 22 66 63</li>
                    <li><strong className="text-foreground">Email :</strong> contact@dynamix-ingenierie.com</li>
                    <li><strong className="text-foreground">Site :</strong> <a href={fullUrl} className="text-accent hover:underline">{siteUrl}</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MentionsLegales;