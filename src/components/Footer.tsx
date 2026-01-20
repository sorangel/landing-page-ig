import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Slogan */}
          <div>
            <div className="mb-4">
              <img
                alt="Immigrant Gateway logo"
                className="h-12 w-auto"
                src="https://res.cloudinary.com/dqqabrluc/image/upload/v1756677682/logo-immigrant_iankzn.avif"
              />
            </div>
            <p className="text-gray-400">
              Tu puerta de entrada al sueño americano
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <a
                  href="/#servicios"
                  className="text-gray-400 hover:text-white transition"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="/#nosotros"
                  className="text-gray-400 hover:text-white transition"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/#testimonios"
                  className="text-gray-400 hover:text-white transition"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <Link
                  to="/oficina-miami"
                  className="text-gray-400 hover:text-white transition"
                >
                  📍 Oficina Miami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="material-icons text-sm mr-2">email</span>
                <a
                  href="mailto:info@immigrantgateway.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  info@immigrantgateway.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-sm mr-2">phone</span>
                <a
                  href="tel:+12134621458"
                  className="text-gray-400 hover:text-white transition"
                >
                  +1 213-4621458
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/immigrantgatewayconsultores/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition"
              >
                <span className="material-icons text-white">facebook</span>
              </a>
              <a
                href="https://www.instagram.com/immigrantgateway/#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition"
              >
                <span className="material-icons text-white">camera_alt</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 gap-4 mb-8">
          <p className="text-center">
            &copy; 2024 Gateway Immigration Consulting. Todos los derechos
            reservados.
          </p>
          <Link
            to="/privacy"
            className="text-gray-400 hover:text-white transition"
          >
            Política de Privacidad
          </Link>
          <ul className="flex flex-col md:flex-row gap-4 text-xs">
            <li>
              <Link
                to="/privacy#es"
                className="text-gray-500 hover:text-white transition"
              >
                No vender ni compartir mi información personal / Do Not Sell My
                Info
              </Link>
            </li>
            <li>
              <Link
                to="/privacy#es"
                className="text-gray-500 hover:text-white transition"
              >
                Limitar el uso de mi información sensible / Limit Use of My
                Sensitive Info
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Disclaimer */}
        <div className="text-gray-500 text-xs text-center border-t border-gray-800 pt-6">
          <p>
            IG Consulting Services, LLC no es un bufete de abogados. No damos
            consejo legal. Somos Consultores de Inmigración registrados en CA
            con Fianza #423022T. La preparación del Formulario I-589 y otros
            trámites se basa en la transcripción y traducción de datos según
            instrucciones del cliente. 'Cero errores' aplica a documentos
            preparados por IGW, cubiertos por IGW 247™; no garantiza resultados
            ante autoridades.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
