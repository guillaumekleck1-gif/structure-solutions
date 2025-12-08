import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="Dynamix Ingénierie" className="h-12 w-auto mb-4" />
            <p className="text-sm opacity-90">
              Bureau d'études structure spécialisé en conception, dimensionnement et expertise pour vos ouvrages en béton, métal et bois.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/bureau-etudes" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Bureau d'Études
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <p className="text-sm opacity-90">
                  79 rue de la Plaine des Bouchers<br />
                  67100 Strasbourg
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a
                  href="tel:+33388226663"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  +33 3 88 22 66 63
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:contact@dynamix-ingenierie.com"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  contact@dynamix-ingenierie.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Dynamix Ingénierie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
