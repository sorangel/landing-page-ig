import React, { useState } from "react";
import { Link } from "react-router-dom";

const Booking = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans text-white antialiased bg-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className="material-icons text-red-600 text-3xl mr-2">
                travel_explore
              </span>
              <span className="text-2xl font-bold text-gray-800">Gateway</span>
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
                to="/#testimonios"
                className="text-gray-700 hover:text-red-600 font-medium transition"
              >
                Testimonios
              </Link>
              <Link
                to="/#contacto"
                className="text-gray-700 hover:text-red-600 font-medium transition"
              >
                Contacto
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition">
                SOY CLIENTE
              </button>
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
              <Link
                to="/"
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/#servicios"
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                to="/#nosotros"
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                to="/#testimonios"
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link
                to="/#contacto"
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition w-fit">
                SOY CLIENTE
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Page Title */}
          <h2 className="text-4xl font-bold text-center mb-16">
            Agenda una cita
          </h2>

          {/* Service Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-2xl transition duration-300 mb-12">
            <img
              src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Consulta legal"
              className="w-full h-64 object-cover"
            />

            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 tracking-wider">
                EVALUACIÓN DE SU CASO
              </h3>
              <p className="text-gray-600 mb-6 text-lg">30 min</p>

              <Link
                to="/schedule"
                className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition transform hover:scale-105 w-full md:w-auto inline-block"
              >
                Reservar ahora
              </Link>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="text-center mb-16">
            <p className="text-gray-300 mb-4 text-lg">También puedes:</p>
            <a
              href="https://api.whatsapp.com/send/?phone=13239423057&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition"
            >
              AGENDAR POR WHATSAPP
            </a>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gray-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-6">Mantente conectado</h3>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email*"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-600 text-white placeholder-gray-300 border border-gray-500 focus:border-red-500 focus:outline-none"
                />
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Slogan */}
            <div>
              <div className="flex items-center mb-4">
                <span className="material-icons text-red-600 text-3xl mr-2">
                  travel_explore
                </span>
                <span className="text-2xl font-bold">Gateway</span>
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
                  <Link
                    to="/#servicios"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#nosotros"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#testimonios"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Testimonios
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="material-icons text-sm mr-2">
                    location_on
                  </span>
                  <span className="text-gray-400">123 Main St, Miami, FL</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-sm mr-2">email</span>
                  <span className="text-gray-400">info@gateway.com</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-sm mr-2">phone</span>
                  <a
                    href="tel:+13239423057"
                    className="text-gray-400 hover:text-white transition"
                  >
                    +1 323 942 3057
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition"
                >
                  <span className="material-icons text-white">facebook</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition"
                >
                  <span className="material-icons text-white">web</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition"
                >
                  <span className="material-icons text-white">email</span>
                </a>
              </div>
            </div>
          </div>

          <hr className="border-gray-800 my-8" />
          <div className="text-center text-gray-400">
            <p>
              &copy; 2024 Gateway Immigration Consulting. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Booking;
