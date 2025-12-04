import React, { useState } from "react";
import { Link } from "react-router-dom";

const OficinaMiami = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({
    src: "",
    alt: "",
    caption: "",
  });

  const openLightbox = (src: string, alt: string, caption: string) => {
    setLightboxImage({ src, alt, caption });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="font-sans text-gray-900 antialiased bg-white">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-x-4">
            {/* Logo */}
            <div className="flex items-center container mx-auto">
              <Link to="/">
                <img
                  alt="Immigrant Gateway Logo"
                  className="h-14 md:h-16 w-auto"
                  src="https://res.cloudinary.com/dqqabrluc/image/upload/v1756677682/logo-immigrant_iankzn.avif"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-red-600 font-medium transition"
              >
                Inicio
              </Link>
              <Link
                to="/#servicios"
                className="text-gray-700 hover:text-red-600 font-medium transition"
              >
                Servicios
              </Link>
              <Link
                to="/#nosotros"
                className="text-gray-700 hover:text-red-600 font-medium transition"
              >
                Nosotros
              </Link>
              <Link
                to="/oficina-miami"
                className="text-red-600 font-semibold border-b-2 border-red-600"
              >
                Oficina Miami
              </Link>
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

            {/* Mobile Menu Button (Simplified for this page, could be stateful like Home) */}
            <div className="md:hidden">
              <Link to="/" className="text-gray-700">
                <span className="material-icons">home</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center text-center text-white pt-28 md:pt-40 pb-16 md:pb-24 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 24, 38, 0.85), rgba(16, 24, 38, 0.9)), url('https://res.cloudinary.com/dqqabrluc/image/upload/v1764776695/WhatsApp_Image_2025-10-06_at_6.37.47_PM_1_tzadrl.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Badge */}
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              style={{ backgroundColor: "#B3292E", color: "white" }}
            >
              <span className="material-icons text-base mr-2">location_on</span>
              Ahora en Miami, Florida
            </div>

            {/* H1 Principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-normal">
              Somos tu Puente Seguro al
              <br />
              <span style={{ color: "#B3292E" }}>Sueño Americano</span>
            </h1>

            {/* Subtítulo con PUV */}
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed text-white/95">
              Expertos comprometidos con tu futuro migratorio, ahora más cerca
              de ti
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center bg-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl"
                style={{ color: "rgb(16, 24, 38)" }}
              >
                <span className="material-icons mr-2">event</span>
                Visítanos en Miami
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=12134621458&text=Hola,%20quiero%20agendar%20una%20cita%20en%20la%20oficina%20de%20Miami&type=phone_number&app_absent=0"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#061475] transition transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-icons mr-2">chat</span>
                Agenda tu Consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* La Oficina Section */}
      <section id="oficina" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestra Oficina en Miami
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Un espacio profesional y acogedor diseñado para brindarte la mejor
              atención
            </p>
          </div>

          {/* Galería de Fotos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Foto 1: Fachada */}
            <div
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() =>
                openLightbox(
                  "https://res.cloudinary.com/dqqabrluc/image/upload/v1764776694/WhatsApp_Image_2025-10-06_at_6.37.44_PM_ruhxaq.jpg",
                  "Fachada de la oficina Immigrant Gateway Miami - Brickell",
                  "Fachada del Edificio"
                )
              }
            >
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/v1764776694/WhatsApp_Image_2025-10-06_at_6.37.44_PM_ruhxaq.jpg"
                alt="Fachada de la oficina Immigrant Gateway Miami - Brickell"
                className="w-full h-64 object-cover"
              />
              <div
                style={{ backgroundColor: "rgb(16, 24, 38)" }}
                className="text-white p-4"
              >
                <h3 className="font-semibold flex items-center">
                  <span className="material-icons mr-2">business</span>
                  Fachada del Edificio
                </h3>
              </div>
            </div>

            {/* Foto 2: Recepción */}
            <div
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() =>
                openLightbox(
                  "https://res.cloudinary.com/dqqabrluc/image/upload/v1764776694/WhatsApp_Image_2025-10-06_at_6.37.49_PM_2_wlbin2.jpg",
                  "Recepción de la oficina Immigrant Gateway Miami",
                  "Área de Recepción"
                )
              }
            >
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/v1764776694/WhatsApp_Image_2025-10-06_at_6.37.49_PM_2_wlbin2.jpg"
                alt="Recepción de la oficina Immigrant Gateway Miami"
                className="w-full h-64 object-cover"
              />
              <div
                style={{ backgroundColor: "rgb(16, 24, 38)" }}
                className="text-white p-4"
              >
                <h3 className="font-semibold flex items-center">
                  <span className="material-icons mr-2">meeting_room</span>
                  Área de Recepción
                </h3>
              </div>
            </div>

            {/* Foto 3: Sala de Reuniones */}
            <div
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() =>
                openLightbox(
                  "https://res.cloudinary.com/dqqabrluc/image/upload/v1764776696/WhatsApp_Image_2025-10-06_at_6.41.24_PM_1_pr2aht.jpg",
                  "Sala de consultas Immigrant Gateway Miami",
                  "Sala de Consultas"
                )
              }
            >
              <img
                src="https://res.cloudinary.com/dqqabrluc/image/upload/v1764776696/WhatsApp_Image_2025-10-06_at_6.41.24_PM_1_pr2aht.jpg"
                alt="Sala de consultas Immigrant Gateway Miami"
                className="w-full h-64 object-cover"
              />
              <div
                style={{ backgroundColor: "rgb(16, 24, 38)" }}
                className="text-white p-4"
              >
                <h3 className="font-semibold flex items-center">
                  <span className="material-icons mr-2">groups</span>
                  Sala de Consultas
                </h3>
              </div>
            </div>
          </div>

          {/* Dirección y Horarios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dirección */}
            <div
              className="p-8 rounded-2xl shadow-lg border"
              style={{
                background: "linear-gradient(to bottom right, #EDEDED, white)",
                borderColor: "rgb(16, 24, 38)",
              }}
            >
              <div className="flex items-start mb-6">
                <div
                  className="text-white p-3 rounded-full mr-4"
                  style={{ backgroundColor: "rgb(16, 24, 38)" }}
                >
                  <span className="material-icons text-3xl">location_on</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Dirección
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <strong>
                      South Tower, 1101 Brickell Ave
                      <br />
                      8th floor suit 122
                    </strong>
                    <br />
                    Miami, FL 33131
                    <br />
                    Estados Unidos
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=South+Tower+1101+Brickell+Ave+8th+floor+suit+122+Miami+FL+33131"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B3292E] transition"
                style={{ backgroundColor: "rgb(16, 24, 38)" }}
              >
                <span className="material-icons mr-2">directions</span>
                Abrir en Google Maps
              </a>
            </div>

            {/* Horarios */}
            <div
              className="p-8 rounded-2xl shadow-lg border"
              style={{
                background: "linear-gradient(to bottom right, #EDEDED, white)",
                borderColor: "#B3292E",
              }}
            >
              <div className="flex items-start mb-6">
                <div
                  className="text-white p-3 rounded-full mr-4"
                  style={{ backgroundColor: "#B3292E" }}
                >
                  <span className="material-icons text-3xl">schedule</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Horarios de Atención
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between items-center">
                      <span className="font-medium">Lunes - Viernes:</span>
                      <span
                        className="font-semibold"
                        style={{ color: "rgb(16, 24, 38)" }}
                      >
                        9:00 AM - 6:00 PM
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">Sábado:</span>
                      <span
                        className="font-semibold"
                        style={{ color: "rgb(16, 24, 38)" }}
                      >
                        10:00 AM - 2:00 PM
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">Domingo:</span>
                      <span className="text-gray-500">Cerrado</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="p-4 rounded"
                style={{
                  backgroundColor: "#EDEDED",
                  borderLeft: "4px solid #B3292E",
                }}
              >
                <p className="text-sm text-gray-700">
                  <span
                    className="material-icons text-sm align-middle mr-1"
                    style={{ color: "#B3292E" }}
                  >
                    info
                  </span>
                  <strong>Importante:</strong> Se recomienda agendar cita previa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tus Consultores en Miami Section */}
      <section id="consultor" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Tus Consultores Certificados en California
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Conoce al equipo experto que te acompañará en tu proceso
              migratorio
            </p>
          </div>

          {/* Tarjeta de Perfil de Consultores */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Foto del Equipo */}
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dqqabrluc/image/upload/v1756750272/IG-115_uzlagv.jpg"
                  alt="Consultores Certificados Angelvis Arrieche y Ester Gomez - Immigrant Gateway Miami"
                  className="w-full h-full object-cover min-h-[400px] lg:min-h-[600px]"
                />
                {/* Badge sobre la imagen */}
                <div className="absolute top-6 left-6">
                  <div
                    className="inline-flex items-center text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                    style={{ backgroundColor: "#B3292E" }}
                  >
                    <span className="material-icons text-sm mr-1">
                      verified
                    </span>
                    Consultores Certificados
                  </div>
                </div>
              </div>

              {/* Información de Consultores */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Angelvis Arrieche & Ester Gomez
                </h3>
                <p
                  className="text-xl font-semibold mb-6"
                  style={{ color: "rgb(16, 24, 38)" }}
                >
                  Consultores de Inmigración - Oficina Miami
                </p>

                <div className="space-y-4 mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nuestro equipo en Miami cuenta con{" "}
                    <strong>amplia experiencia</strong> en procesos migratorios,
                    especializándose en casos de asilo, ajustes de estatus y
                    reunificación familiar.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Con un enfoque humanitario y atención personalizada,
                    Angelvis y Ester han ayudado a{" "}
                    <strong>cientos de familias</strong> en el área de Miami a
                    alcanzar sus sueños en Estados Unidos.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nuestro equipo entiende los desafíos únicos de la comunidad
                    latina y está comprometido a brindarte claridad y
                    tranquilidad en cada paso del proceso.
                  </p>
                </div>

                {/* Especialidades */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span
                      className="material-icons mr-2"
                      style={{ color: "rgb(16, 24, 38)" }}
                    >
                      workspace_premium
                    </span>
                    Especialidades:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      className="flex items-center p-3 rounded-lg"
                      style={{ backgroundColor: "#EDEDED" }}
                    >
                      <span
                        className="material-icons text-sm mr-2"
                        style={{ color: "rgb(16, 24, 38)" }}
                      >
                        check_circle
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "rgb(16, 24, 38)" }}
                      >
                        Asilo Político
                      </span>
                    </div>
                    <div
                      className="flex items-center p-3 rounded-lg"
                      style={{ backgroundColor: "#EDEDED" }}
                    >
                      <span
                        className="material-icons text-sm mr-2"
                        style={{ color: "rgb(16, 24, 38)" }}
                      >
                        check_circle
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "rgb(16, 24, 38)" }}
                      >
                        Ajuste de Estatus
                      </span>
                    </div>
                    <div
                      className="flex items-center p-3 rounded-lg"
                      style={{ backgroundColor: "#EDEDED" }}
                    >
                      <span
                        className="material-icons text-sm mr-2"
                        style={{ color: "rgb(16, 24, 38)" }}
                      >
                        check_circle
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "rgb(16, 24, 38)" }}
                      >
                        Reunificación Familiar
                      </span>
                    </div>
                    <div
                      className="flex items-center p-3 rounded-lg"
                      style={{ backgroundColor: "#EDEDED" }}
                    >
                      <span
                        className="material-icons text-sm mr-2"
                        style={{ color: "rgb(16, 24, 38)" }}
                      >
                        check_circle
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "rgb(16, 24, 38)" }}
                      >
                        Permisos de Trabajo
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Personalizado */}
                <a
                  href="https://api.whatsapp.com/send/?phone=12134621458&text=Hola,%20quiero%20agendar%20una%20cita%20en%20la%20oficina%20de%20Miami&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg"
                  style={{ backgroundColor: "#B3292E" }}
                >
                  <span className="material-icons mr-2">event</span>
                  Agendar Cita con Nuestro Equipo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa e Instrucciones Section */}
      <section id="mapa" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Cómo Llegar
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Estamos ubicados en el corazón de Miami, fácil acceso desde
              cualquier punto de la ciudad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Google Maps Embebido */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4!2d-80.1918!3d25.7617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b68c1e0e0e0e%3A0x1e0e0e0e0e0e0e0e!2s1101%20Brickell%20Ave%2C%20Miami%2C%20FL%2033131!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
              ></iframe>
            </div>

            {/* Instrucciones de Llegada */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="material-icons text-blue-600 mr-2">
                    directions_car
                  </span>
                  En Automóvil
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="material-icons text-blue-600 text-sm mr-2 mt-1">
                      check_circle
                    </span>
                    <strong>Estacionamiento disponible en el edificio</strong>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-blue-600 text-sm mr-2 mt-1">
                      check_circle
                    </span>
                    Acceso directo desde <strong>I-95 y I-395</strong>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-blue-600 text-sm mr-2 mt-1">
                      check_circle
                    </span>
                    Cerca del <strong>Bayside Marketplace</strong>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="material-icons text-amber-600 mr-2">
                    directions_transit
                  </span>
                  Transporte Público
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="material-icons text-amber-600 text-sm mr-2 mt-1">
                      check_circle
                    </span>
                    <strong>Metromover:</strong> Estación College/Bayside
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-amber-600 text-sm mr-2 mt-1">
                      check_circle
                    </span>
                    <strong>Metrorail:</strong> Estación Government Center
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-amber-600 text-sm mr-2 mt-1">
                      check_circle
                    </span>
                    Múltiples rutas de autobús disponibles
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="material-icons text-green-600 mr-2">
                    place
                  </span>
                  Puntos de Referencia
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="material-icons text-green-600 text-sm mr-2 mt-1">
                      check_circle
                    </span>
                    A 2 cuadras del <strong>Bayfront Park</strong>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-green-600 text-sm mr-2 mt-1">
                      check_circle
                    </span>
                    Frente al <strong>American Airlines Arena</strong>
                  </li>
                  <li className="flex items-start">
                    <span className="material-icons text-green-600 text-sm mr-2 mt-1">
                      check_circle
                    </span>
                    En el <strong>distrito financiero de Downtown Miami</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos Section */}
      <section
        className="py-20 text-white"
        style={{
          background:
            "linear-gradient(to bottom right, rgb(16, 24, 38), rgb(16, 24, 38))",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              ¿Por Qué Elegir Nuestra Oficina de Miami?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Más que una oficina, somos tu aliado en el camino hacia tu sueño
              americano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Beneficio 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:transform hover:-translate-y-1 hover:shadow-xl transition duration-300">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: "#B3292E" }}
              >
                <span className="material-icons text-white text-3xl">
                  location_city
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Presencia Local
              </h3>
              <p className="text-blue-100 text-center leading-relaxed">
                Oficina física en Miami para atenderte personalmente. No somos
                solo una página web, somos una realidad tangible.
              </p>
            </div>

            {/* Beneficio 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:transform hover:-translate-y-1 hover:shadow-xl transition duration-300">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: "#B3292E" }}
              >
                <span className="material-icons text-white text-3xl">
                  verified_user
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Experiencia Comprobada
              </h3>
              <p className="text-blue-100 text-center leading-relaxed">
                Más de 20 años ayudando a familias en Miami y toda Florida a
                alcanzar sus objetivos migratorios.
              </p>
            </div>

            {/* Beneficio 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:transform hover:-translate-y-1 hover:shadow-xl transition duration-300">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: "#B3292E" }}
              >
                <span className="material-icons text-white text-3xl">
                  favorite
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Atención Humanizada
              </h3>
              <p className="text-blue-100 text-center leading-relaxed">
                Entendemos tus miedos y esperanzas. Te acompañamos con empatía y
                profesionalismo en cada paso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contacto" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto rounded-3xl shadow-2xl p-12 text-center text-white"
            style={{
              background: "linear-gradient(to bottom right, #B3292E, #B3292E)",
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Da el Primer Paso Hacia tu Futuro
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/95">
              Visítanos en nuestra oficina de Miami o agenda tu consulta hoy
              mismo
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://api.whatsapp.com/send/?phone=12134621458&text=Hola,%20quiero%20agendar%20una%20cita%20en%20la%20oficina%20de%20Miami&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl"
                style={{ color: "#B3292E" }}
              >
                <span className="material-icons mr-2">chat</span>
                Agenda por WhatsApp
              </a>
              <a
                href="tel:+12134621458"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition transform hover:scale-105 hover:text-[#B3292E]"
              >
                <span className="material-icons mr-2">phone</span>
                Llámanos: (213) 462-1458
              </a>
            </div>

            {/* Información de Contacto */}
            <div className="border-t border-white/30 pt-8 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <span className="block font-bold mb-1">Dirección:</span>
                  1101 Brickell Ave, Miami, FL
                </div>
                <div>
                  <span className="block font-bold mb-1">Email:</span>
                  info@immigrantgateway.com
                </div>
                <div>
                  <span className="block font-bold mb-1">Horario:</span>
                  Lun-Vie: 9am - 6pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          id="lightbox"
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-red-500 transition focus:outline-none"
            onClick={closeLightbox}
          >
            <span className="material-icons text-4xl">close</span>
          </button>
          <div
            className="max-w-4xl w-full max-h-screen flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-xl mt-4 font-medium text-center">
              {lightboxImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OficinaMiami;
