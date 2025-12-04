import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({
    src: "",
    alt: "",
    caption: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "processing" | "success" | "error"
  >("idle");
  const [formFeedback, setFormFeedback] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  // Testimonials Data extracted from original HTML
  const testimonials = [
    {
      text: "Gateway me ayudó a obtener mi asilo político después de años de incertidumbre. Su equipo no solo fue profesional, sino que me brindó el apoyo emocional que necesitaba. Ahora mi familia y yo vivimos tranquilos en América.",
      author: "María González",
      role: "Asilo Político Aprobado",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      text: "Profesionales, humanos y eficientes. Me acompañaron en todo mi proceso de permiso de trabajo. Hoy puedo proveer a mi familia con tranquilidad.",
      author: "Carlos Ramírez",
      role: "Permiso de Trabajo Aprobado",
      image:
        "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      text: "Gracias a Gateway, reunimos a nuestra familia. El proceso fue claro y rápido. Los recomiendo sin dudar.",
      author: "Familia Hernández",
      role: "Reunificación Familiar",
      image:
        "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
  ];

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("-QoHg53x_w9YvS58H");
  }, []);

  const handleTestimonialChange = (index: number) => {
    setCurrentTestimonial((index + testimonials.length) % testimonials.length);
  };

  const openLightbox = (src: string, alt: string, caption: string) => {
    setLightboxImage({ src, alt, caption });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormStatus("processing");
    setFormFeedback("");

    const emailInput = formRef.current.querySelector(
      "#user_email_input"
    ) as HTMLInputElement;
    const nameInput = formRef.current.querySelector(
      "#user_name_input"
    ) as HTMLInputElement;

    try {
      // Send email
      await emailjs.send("service_bb90c6o", "template_j68921b", {
        user_email: emailInput.value,
        user_name: nameInput.value,
        to_email: "info@immigrantgateway.com",
        from_name: "Immigrant Gateway Web",
        reply_to: emailInput.value,
        subject: `Nueva solicitud de guía – ${nameInput.value}`,
        message: `Solicitud de descarga de guía migratoria de ${nameInput.value} <${emailInput.value}>`,
      });

      setFormStatus("success");
      setFormFeedback("¡Enviado! Iniciando tu descarga...");

      // Trigger download
      const pdfUrl = new URL(
        "/Guia-Migratoria-Immigrant-Gateway.pdf",
        window.location.origin
      ).href;
      const a = document.createElement("a");
      a.href = pdfUrl;
      a.download = "Guia-Migratoria-Immigrant-Gateway.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setTimeout(() => {
        setFormStatus("idle");
        setFormFeedback("");
        formRef.current?.reset();
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");
      setFormFeedback(
        "Iniciando tu descarga... (No se pudo enviar la notificación)"
      );

      // Fallback download
      const pdfUrl = new URL(
        "/Guia-Migratoria-Immigrant-Gateway.pdf",
        window.location.origin
      ).href;
      window.location.href = pdfUrl;
    }
  };

  return (
    <div className="font-sans text-gray-900 antialiased bg-white">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-x-4">
            {/* Logo */}
            <div className="flex items-center container mx-auto">
              <img
                alt="logo"
                className="h-10 md:h-16 w-auto"
                src="https://res.cloudinary.com/dqqabrluc/image/upload/v1756677682/logo-immigrant_iankzn.avif"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-red-600 font-medium transition"
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-gray-700 hover:text-red-600 font-medium transition"
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="text-gray-700 hover:text-red-600 font-medium transition"
              >
                Nosotros
              </a>
              <a
                href="#testimonios"
                className="text-gray-700 hover:text-red-600 font-medium transition"
              >
                Testimonios
              </a>
              <Link
                to="/oficina-miami"
                className="text-gray-700 hover:text-red-600 font-medium transition"
              >
                📍 Oficina Miami
              </Link>
              <a
                href="#contacto"
                className="text-gray-700 hover:text-red-600 font-medium transition"
              >
                Contacto
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="https://api.whatsapp.com/send/?phone=13239423057&text&type=phone_number&app_absent=0"
                className="bg-red-600 text-white md:px-8 py-2 rounded-full font-medium hover:bg-red-700 transition inline-block whitespace-nowrap min-w-[160px] text-center px-5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar Cita por WhatsApp"
              >
                Agendar Cita
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                id="mobile-menu-btn"
                className="text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="material-icons">menu</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } md:hidden mt-4 pb-4`}
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#testimonios"
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonios
              </a>
              <Link
                to="/oficina-miami"
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                📍 Oficina Miami
              </Link>
              <a
                href="#contacto"
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=13239423057&text&type=phone_number&app_absent=0"
                className="bg-red-600 text-white px-6 py-4 rounded-full font-medium hover:bg-red-700 transition w-fit inline-block whitespace-nowrap min-w-[160px] text-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar Cita por WhatsApp"
              >
                Agendar Cita
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="hero-bg min-h-screen flex items-center justify-center text-center text-white pt-20 md:pt-40 pb-10 md:pb-24"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-8xl font-bold mb-6 md:mb-10 tracking-wide ">
            Somos tu Puente Seguro al
            <br />
            Sueño Americano
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Somos expertos en procesos migratorios con más de 20 años de
            experiencia ayudando a familias a cumplir el sueño americano
          </p>
          <a
            href="#guia-gratuita"
            className="text-white px-8 py-4 rounded-full text-lg font-semibold transition inline-block hover:brightness-110"
            style={{ backgroundColor: "#B3292E" }}
            aria-label="QUIERO MI GUÍA GRATIS"
          >
            QUIERO MI GUÍA SIN COSTO
          </a>
          <p className="mt-4 text-white/90">Descargala al instante.</p>
        </div>
      </section>

      {/* Barra de Confianza */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4 p-6 md:p-7 rounded-2xl bg-gray-50">
              <span className="material-icons text-red-600 text-4xl md:text-5xl">
                group
              </span>
              <span className="font-semibold text-gray-800 text-lg md:text-xl">
                +500 Familias Guiadas
              </span>
            </div>
            <div className="flex items-center space-x-4 p-6 md:p-7 rounded-2xl bg-gray-50">
              <span className="material-icons text-red-600 text-4xl md:text-5xl">
                event
              </span>
              <span className="font-semibold text-gray-800 text-lg md:text-xl">
                +20 Años de Experiencia
              </span>
            </div>
            <div className="flex items-center space-x-4 p-6 md:p-7 rounded-2xl bg-gray-50">
              <span className="material-icons text-red-600 text-4xl md:text-5xl">
                description
              </span>
              <span className="font-semibold text-gray-800 text-lg md:text-xl">
                Licencia del Estado de California
              </span>
            </div>
            <div className="flex items-center space-x-4 p-6 md:p-7 rounded-2xl bg-gray-50">
              <span className="material-icons text-red-600 text-4xl md:text-5xl">
                verified
              </span>
              <span className="font-semibold text-gray-800 text-lg md:text-xl">
                Certificación BBB
              </span>
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/v1757684763/Better-Business-Bureau-Logo_sbpgtb.png"
                alt="Logo Certificación BBB"
                className="h-12 md:h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Destacada (Card) */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Evita los Errores que Ponen en Riesgo tu Caso. Descarga Nuestra
              Guía Migratoria Gratuita.
            </h3>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            ¿Por qué nuestros clientes confían en nosotros?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-blue-600 text-2xl">
                  verified_user
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Más de 20 Años de Experiencia Combinada
              </h3>
              <p className="text-gray-600">
                Nuestra trayectoria se traduce en estrategias legales probadas y
                eficientes para tu caso.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-blue-600 text-2xl">
                  trending_up
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Éxito Comprobado con +500 Familias
              </h3>
              <p className="text-gray-600">
                Cada familia que hemos ayudado es un testimonio de nuestra
                dedicación y resultados.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-blue-600 text-2xl">
                  support_agent
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Máxima Credibilidad y Confianza
              </h3>
              <p className="text-gray-600">
                Contamos con licencia del Estado de California y certificación
                BBB, garantizando un servicio profesional y ético.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-blue-600 text-2xl">
                  schedule
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Comunicación rápida y segura
              </h3>
              <p className="text-gray-600">
                Contestamos tus dudas en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card: Solicitud de asilo */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/v1757784817/AdobeStock_633062844_Editorial_Use_Only_hipkod.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Solicitud de asilo"
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Solicitud de asilo
                </h3>
                <p className="text-gray-600 mb-4">
                  Acompañamiento experto para preparar y presentar tu caso con
                  la documentación adecuada.
                </p>
                <a
                  href="#"
                  className="text-red-600 font-semibold hover:text-red-700 transition"
                >
                  Saber más →
                </a>
              </div>
            </div>
            {/* Card: Permiso de trabajo */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/v1757784819/envelopes-with-letter-from-uscis-united-states-flag-from-department-homeland-security_1_hancnm.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Permiso de trabajo"
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Permiso de trabajo
                </h3>
                <p className="text-gray-600 mb-4">
                  Tramitamos tu autorización de empleo para que puedas trabajar
                  legalmente en EE. UU.
                </p>
                <a
                  href="#"
                  className="text-red-600 font-semibold hover:text-red-700 transition"
                >
                  Saber más →
                </a>
              </div>
            </div>
            {/* Card: Perdón o Waiver */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/v1757784818/border-patrol-officers-walk-along-corrugated-metal-fence-wear-protective-vests-utility-uniforms_f7eslb.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Perdón o Waiver"
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Perdón o Waiver
                </h3>
                <p className="text-gray-600 mb-4">
                  Evaluación y gestión de perdones migratorios según tu
                  situación personal.
                </p>
                <a
                  href="#"
                  className="text-red-600 font-semibold hover:text-red-700 transition"
                >
                  Saber más →
                </a>
              </div>
            </div>
            {/* Card: Ajuste por matrimonio */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/v1757784815/anillos_wkt110.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Ajuste por matrimonio"
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Ajuste por matrimonio
                </h3>
                <p className="text-gray-600 mb-4">
                  Asesoría integral para ajustar estatus a través del matrimonio
                  con ciudadano o residente.
                </p>
                <a
                  href="#"
                  className="text-red-600 font-semibold hover:text-red-700 transition"
                >
                  Saber más →
                </a>
              </div>
            </div>
            {/* Card: Petición familiar */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Petición familiar"
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Petición familiar
                </h3>
                <p className="text-gray-600 mb-4">
                  Reunimos a las familias mediante peticiones y procesos
                  migratorios claros.
                </p>
                <a
                  href="#"
                  className="text-red-600 font-semibold hover:text-red-700 transition"
                >
                  Saber más →
                </a>
              </div>
            </div>
            {/* Card: Más servicios (featured) */}
            <div className="rounded-2xl shadow-lg overflow-hidden bg-gray-900 text-white hover-lift">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Más servicios</h3>
                <p className="opacity-90 mb-6">
                  Explora todas nuestras soluciones migratorias: ciudadanía,
                  renovación de documentos, representación y más.
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=13239423057&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-teal-800 font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition"
                >
                  Saber más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulta 2FT Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Nuevo Servicio
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Consulta 2FT™ Sin costo : Diagnóstico + Formulación
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Obtén un diagnóstico profesional y un plan de acción claro con
                nuestro método exclusivo de{" "}
                <strong>Formación + Formulación</strong>.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <span className="material-icons text-red-600">
                      psychology
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Diagnóstico - 30 min
                    </h4>
                    <p className="text-gray-600">
                      Analizamos tu historia y explicamos tus rutas posibles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <span className="material-icons text-red-600">map</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Mapa de Ruta Personal™
                    </h4>
                    <p className="text-gray-600">
                      Recibe tu plan en ≤72h con checklist, cronograma y
                      presupuesto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <span className="material-icons text-red-600">
                      support_agent
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Soporte Continuo
                    </h4>
                    <p className="text-gray-600">
                      Incluye 30 días de soporte WhatsApp SOS para resolver tus
                      dudas.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/consulta-72h"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-red-600 hover:bg-red-700 transition transform hover:scale-105 shadow-lg"
              >
                Conoce más sobre la Consulta 2FT™
                <span className="material-icons ml-2">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500">
                <img
                  src="https://res.cloudinary.com/dqqabrluc/image/upload/v1763767334/photo_4974551600814820160_y_gzdhlr.jpg"
                  alt="Consulta Migratoria Profesional"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-xl">
                      Tu futuro empieza con un plan claro
                    </p>
                    <p className="text-sm opacity-90">
                      Método IGW 247™: Precisión Digital
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section id="guia-gratuita" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-1">
              <a
                href="https://res.cloudinary.com/dqqabrluc/image/upload/v1757716572/_Ebook_Gui%CC%81a_Marketing_Digital_IG_ze17yr.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir portada de la Guía Migratoria en una nueva pestaña"
              >
                <img
                  src="https://res.cloudinary.com/dqqabrluc/image/upload/v1757716572/_Ebook_Gui%CC%81a_Marketing_Digital_IG_ze17yr.png"
                  alt="Portada de la Guía Migratoria Gratuita"
                  className="w-full max-w-md mx-auto rounded-xl shadow-xl"
                />
              </a>
            </div>
            {/* Right: Content & Form */}
            <div className="order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Todo lo que Necesitas Saber Antes de Iniciar tu Trámite
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nuestra guía gratuita condensa 20 años de experiencia para
                ayudarte a navegar el sistema con seguridad. Descárgala ahora y
                toma el control de tu proceso.
              </p>
              <ul className="space-y-3 mb-8 text-gray-800">
                <li>✅ Aprende a evitar los 5 errores más costosos.</li>
                <li>
                  ✅ Descubre qué documentos son realmente indispensables.
                </li>
                <li>
                  ✅ Entiende el vocabulario clave para no sentirte perdido.
                </li>
              </ul>
              <form
                id="lead-download-form"
                ref={formRef}
                onSubmit={handleDownloadSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="flex-1">
                  <label
                    htmlFor="user_name_input"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="user_name_input"
                    name="user_name"
                    placeholder="Escribe tu nombre"
                    autoComplete="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="user_email_input"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="user_email_input"
                    name="user_email"
                    placeholder="Escribe tu correo para descargar"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white px-6 py-3 rounded-xl font-semibold transition hover:brightness-110 self-end sm:self-auto"
                  style={{ backgroundColor: "#B3292E" }}
                  disabled={formStatus === "processing"}
                >
                  {formStatus === "processing"
                    ? "Procesando..."
                    : "Descargar mi Guía Ahora"}
                </button>
              </form>
              <p
                id="form-feedback"
                className={`mt-2 ${
                  formStatus === "error" ? "text-orange-500" : "text-green-600"
                }`}
              >
                {formFeedback}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Team Section */}
      <section id="nosotros" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Un Equipo que Entiende tu Viaje
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                En Immigrant Gateway, nuestro equipo directivo combina años de
                experiencia y una profunda comprensión del sistema migratorio.
                Su liderazgo y dedicación son la base de nuestro compromiso para
                ofrecerle la mejor asesoría y un servicio cercano y confiable.
              </p>
              <a
                href="https://res.cloudinary.com/dqqabrluc/image/upload/v1757520717/IG-108_tux7nm.jpg"
                className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition transform hover:scale-105 inline-block"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Habla con un experto por WhatsApp"
              >
                Habla con un experto
              </a>
            </div>
            <div className="order-1 text-center lg:text-right">
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/c_crop,ar_1:1/v1757733631/imagen-horizontal-web-isf_1_uw1qqe.png"
                alt="Equipo directivo de Immigrant Gateway"
                className="w-full h-100 object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Clientes Satisfechos
          </h2>
          <div id="testimonial-carousel" className="max-w-4xl mx-auto">
            <div id="testimonial-slides" className="relative min-h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`slide bg-white p-8 rounded-2xl shadow-lg text-center absolute inset-0 transition-opacity duration-500 ${
                    index === currentTestimonial
                      ? "opacity-100 z-10 relative"
                      : "opacity-0 z-0 absolute top-0 left-0 w-full"
                  }`}
                  style={{
                    display: index === currentTestimonial ? "block" : "none",
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={`Cliente satisfecho ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-6 border-4 border-blue-600"
                  />
                  <p className="text-lg italic text-gray-600 mb-6">
                    "{testimonial.text}"
                  </p>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {testimonial.author}
                  </h4>
                  <p className="text-red-600 font-medium">{testimonial.role}</p>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                id="testimonial-prev"
                className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition"
                aria-label="Testimonio anterior"
                onClick={() => handleTestimonialChange(currentTestimonial - 1)}
              >
                <span className="material-icons">chevron_left</span>
              </button>
              <div id="testimonial-dots" className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot w-3 h-3 rounded-full ${
                      index === currentTestimonial
                        ? "bg-red-600"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                    onClick={() => setCurrentTestimonial(index)}
                  ></button>
                ))}
              </div>
              <button
                id="testimonial-next"
                className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition"
                aria-label="Siguiente testimonio"
                onClick={() => handleTestimonialChange(currentTestimonial + 1)}
              >
                <span className="material-icons">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Casos de Éxito
          </h2>
          <div className="masonry mx-auto max-w-6xl columns-1 sm:columns-2 md:columns-3 lg:columns-4 content-stretch">
            {/* Card 1 */}
            <div
              className="masonry-item js-case relative overflow-hidden cursor-zoom-in rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg mb-4"
              tabIndex={0}
              role="button"
              aria-label="Ver caso de éxito"
              onClick={() =>
                openLightbox(
                  "https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784823/IMG-20241217-WA0010_sld7ve.jpg",
                  "Visa de Trabajo",
                  "Visa de Trabajo"
                )
              }
            >
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784823/IMG-20241217-WA0010_sld7ve.jpg"
                alt="Visa de Trabajo"
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0">
                <div className="bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-sm md:text-base font-medium">
                    Visa de Trabajo
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div
              className="masonry-item js-case relative overflow-hidden cursor-zoom-in rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg mb-4"
              tabIndex={0}
              role="button"
              aria-label="Ver caso de éxito"
              onClick={() =>
                openLightbox(
                  "https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784825/WP1_POST_bxlsb2.png",
                  "Residencia Permanente",
                  "Residencia Permanente"
                )
              }
            >
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784825/WP1_POST_bxlsb2.png"
                alt="Residencia Permanente"
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0">
                <div className="bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-sm md:text-base font-medium">
                    Residencia Permanente
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div
              className="masonry-item js-case relative overflow-hidden cursor-zoom-in rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg mb-4"
              tabIndex={0}
              role="button"
              aria-label="Ver caso de éxito"
              onClick={() =>
                openLightbox(
                  "https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784825/WhatsApp_Image_2025-02-17_at_9.53.58_PM_nkzgjj.jpg",
                  "Ciudadanía",
                  "Ciudadanía"
                )
              }
            >
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784825/WhatsApp_Image_2025-02-17_at_9.53.58_PM_nkzgjj.jpg"
                alt="Ciudadanía"
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0">
                <div className="bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-sm md:text-base font-medium">
                    Ciudadanía
                  </p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div
              className="masonry-item js-case relative overflow-hidden cursor-zoom-in rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg mb-4"
              tabIndex={0}
              role="button"
              aria-label="Ver caso de éxito"
              onClick={() =>
                openLightbox(
                  "https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784824/WhatsApp_Image_2024-12-27_at_3.21_edited_lmomjc.jpg",
                  "Reunificación Familiar",
                  "Reunificación Familiar"
                )
              }
            >
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784824/WhatsApp_Image_2024-12-27_at_3.21_edited_lmomjc.jpg"
                alt="Reunificación Familiar"
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0">
                <div className="bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-sm md:text-base font-medium">
                    Reunificación Familiar
                  </p>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div
              className="masonry-item js-case relative overflow-hidden cursor-zoom-in rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg mb-4"
              tabIndex={0}
              role="button"
              aria-label="Ver caso de éxito"
              onClick={() =>
                openLightbox(
                  "https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784825/WP2_POST_1350_cjs9kg.png",
                  "Asilo Político",
                  "Asilo Político"
                )
              }
            >
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784825/WP2_POST_1350_cjs9kg.png"
                alt="Asilo Político"
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0">
                <div className="bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-sm md:text-base font-medium">
                    Asilo Político
                  </p>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div
              className="masonry-item js-case relative overflow-hidden cursor-zoom-in rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg mb-4"
              tabIndex={0}
              role="button"
              aria-label="Ver caso de éxito"
              onClick={() =>
                openLightbox(
                  "https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784824/WhatsApp_Image_2025-02-14_at_1.09.51_AM_b6s3ui.jpg",
                  "DACA",
                  "DACA"
                )
              }
            >
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784824/WhatsApp_Image_2025-02-14_at_1.09.51_AM_b6s3ui.jpg"
                alt="DACA"
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0">
                <div className="bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-sm md:text-base font-medium">
                    DACA
                  </p>
                </div>
              </div>
            </div>
            {/* Card 7 */}
            <div
              className="masonry-item js-case relative overflow-hidden cursor-zoom-in rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg mb-4"
              tabIndex={0}
              role="button"
              aria-label="Ver caso de éxito"
              onClick={() =>
                openLightbox(
                  "https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784823/IMG-20241214-WA0007_xnxfkq.jpg",
                  "Caso de Éxito",
                  "Caso de Éxito"
                )
              }
            >
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784823/IMG-20241214-WA0007_xnxfkq.jpg"
                alt="Publicación IG - Caso de Éxito 2"
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0">
                <div className="bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-sm md:text-base font-medium">
                    Caso de Éxito
                  </p>
                </div>
              </div>
            </div>
            {/* Card 8 */}
            <div
              className="masonry-item js-case relative overflow-hidden cursor-zoom-in rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg mb-4"
              tabIndex={0}
              role="button"
              aria-label="Ver caso de éxito"
              onClick={() =>
                openLightbox(
                  "https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784824/WhatsApp_Image_2025-02-10_at_8.53.58_PM_amnt20.jpg",
                  "Caso de Éxito",
                  "Caso de Éxito"
                )
              }
            >
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1757784824/WhatsApp_Image_2025-02-10_at_8.53.58_PM_amnt20.jpg"
                alt="Publicación IG - Caso de Éxito 1"
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0">
                <div className="bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-sm md:text-base font-medium">
                    Caso de Éxito
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lightbox Modal */}
          {lightboxOpen && (
            <div
              id="case-modal"
              className="fixed inset-0 flex items-center justify-center bg-black/70 p-4 z-[60]"
              aria-hidden="true"
              role="dialog"
              aria-modal="true"
              onClick={closeLightbox}
            >
              <div
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  id="case-modal-close"
                  className="absolute -top-3 -right-3 bg-white text-gray-800 rounded-full w-10 h-10 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
                  aria-label="Cerrar vista ampliada"
                  onClick={closeLightbox}
                >
                  <span className="material-icons">close</span>
                </button>
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                  <img
                    id="case-modal-image"
                    src={lightboxImage.src}
                    alt={lightboxImage.alt}
                    className="w-full h-auto block"
                  />
                  <div className="p-4 border-t">
                    <p
                      id="case-modal-caption"
                      className="text-gray-700 text-base"
                    >
                      {lightboxImage.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-bg py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para comenzar tu proceso?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            No esperes más para hacer realidad tu sueño americano. Nuestro
            equipo de expertos está listo para guiarte en cada paso del camino.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=13239423057&text&type=phone_number&app_absent=0"
            className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition transform hover:scale-105 inline-block"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contáctanos por WhatsApp"
          >
            Contáctanos ahora
          </a>
        </div>
      </section>

      {/* Footer */}
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
                  <a
                    href="#inicio"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonios"
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
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 gap-4">
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
