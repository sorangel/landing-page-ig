import React, { useState } from "react";
import { Link } from "react-router-dom";

const Schedule = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [accordionOpen, setAccordionOpen] = useState(false);

  // Helper to format date for display
  const formatDate = (day: string) => {
    const dateNames: { [key: string]: string } = {
      "10": "miércoles, 10 de septiembre",
      "12": "viernes, 12 de septiembre",
      "13": "sábado, 13 de septiembre",
      "15": "lunes, 15 de septiembre",
      "17": "miércoles, 17 de septiembre",
      "18": "jueves, 18 de septiembre",
      "19": "viernes, 19 de septiembre",
      "20": "sábado, 20 de septiembre",
      "22": "lunes, 22 de septiembre",
      "24": "miércoles, 24 de septiembre",
      "25": "jueves, 25 de septiembre",
      "26": "viernes, 26 de septiembre",
      "27": "sábado, 27 de septiembre",
      "29": "lunes, 29 de septiembre",
    };
    return dateNames[day] || `${day} de septiembre`;
  };

  const handleDateSelect = (day: string) => {
    setSelectedDate(day);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      alert(
        `Cita programada para el ${selectedDate} de septiembre a las ${selectedTime}`
      );
      // Here you would typically redirect or submit form
    }
  };

  const availableDays = [
    "10",
    "12",
    "13",
    "15",
    "17",
    "18",
    "19",
    "20",
    "22",
    "24",
    "25",
    "26",
    "27",
    "29",
  ];

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
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              to="/booking"
              className="text-gray-300 hover:text-white transition flex items-center"
            >
              <span className="material-icons mr-2">arrow_back</span>
              Volver
            </Link>
          </div>

          {/* Page Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Programa tu servicio</h2>
            <p className="text-gray-300 text-lg">
              Revisa nuestra disponibilidad y reserva la fecha y hora que más te
              convengan
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Filtrar según:</span>
              <select className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none">
                <option>Miembro del personal (Todos)</option>
                <option>Dr. García</option>
                <option>Lic. Rodríguez</option>
              </select>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Calendar and Time Selection */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Selecciona fecha y hora
                </h3>
                <p className="text-gray-300 mb-6">
                  Zona horaria: hora estándar de Miami (GMT-5)
                </p>

                {/* Calendar Widget */}
                <div className="bg-gray-700 rounded-2xl p-6">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-6">
                    <button className="p-2 hover:bg-gray-600 rounded-lg transition">
                      <span className="material-icons">chevron_left</span>
                    </button>
                    <h4 className="text-xl font-semibold">Septiembre 2025</h4>
                    <button className="p-2 hover:bg-gray-600 rounded-lg transition">
                      <span className="material-icons">chevron_right</span>
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    <div className="text-center text-gray-400 font-medium py-2">
                      Dom
                    </div>
                    <div className="text-center text-gray-400 font-medium py-2">
                      Lun
                    </div>
                    <div className="text-center text-gray-400 font-medium py-2">
                      Mar
                    </div>
                    <div className="text-center text-gray-400 font-medium py-2">
                      Mié
                    </div>
                    <div className="text-center text-gray-400 font-medium py-2">
                      Jue
                    </div>
                    <div className="text-center text-gray-400 font-medium py-2">
                      Vie
                    </div>
                    <div className="text-center text-gray-400 font-medium py-2">
                      Sáb
                    </div>

                    {/* Calendar Days */}
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                      const dayStr = day.toString();
                      const isAvailable = availableDays.includes(dayStr);
                      const isSelected = selectedDate === dayStr;

                      return (
                        <div
                          key={day}
                          className={`
                            text-center py-3 rounded-lg transition-all
                            ${
                              isAvailable
                                ? "cursor-pointer hover:bg-gray-600"
                                : "text-gray-500"
                            }
                            ${isSelected ? "bg-red-600 text-white" : ""}
                            ${isAvailable && !isSelected ? "relative" : ""}
                          `}
                          onClick={() =>
                            isAvailable && handleDateSelect(dayStr)
                          }
                        >
                          {day}
                          {isAvailable && !isSelected && (
                            <div className="absolute bottom-[2px] left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div id="time-selection" className="animate-fade-in-up">
                  <h4 className="text-xl font-semibold mb-4">
                    Disponibilidad para:{" "}
                    <span id="selected-date">{formatDate(selectedDate)}</span>
                  </h4>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {[
                      "9:00 a.m.",
                      "9:30 a.m.",
                      "10:00 a.m.",
                      "10:30 a.m.",
                      "11:00 a.m.",
                      "11:30 a.m.",
                      "2:00 p.m.",
                      "2:30 p.m.",
                      "3:00 p.m.",
                    ].map((time) => (
                      <button
                        key={time}
                        className={`
                          px-4 py-3 rounded-lg text-center transition
                          ${
                            selectedTime === time
                              ? "bg-red-600 text-white"
                              : "bg-gray-700 hover:bg-red-600 hover:text-white"
                          }
                        `}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="text-red-400 hover:text-red-300 transition"
                  >
                    Mostrar todas las sesiones
                  </a>
                </div>
              )}
            </div>

            {/* Right Column: Preferences and Service Details */}
            <div className="space-y-8">
              {/* Preferences */}
              <div className="bg-gray-700 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold mb-6">Preferencias</h3>
                <div>
                  <label className="block text-gray-300 mb-2">
                    Miembro del personal*
                  </label>
                  <select className="w-full bg-gray-600 text-white px-4 py-3 rounded-lg border border-gray-500 focus:border-red-500 focus:outline-none">
                    <option>Seleccionar consultor</option>
                    <option>Dr. García - Especialista en Asilo</option>
                    <option>Lic. Rodríguez - Experto en Visas</option>
                    <option>Dra. Martínez - Reunificación Familiar</option>
                  </select>
                </div>
              </div>

              {/* Service Details */}
              <div className="bg-gray-700 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold mb-6">
                  Detalles del servicio
                </h3>

                <div className="border border-gray-600 rounded-lg">
                  <button
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-600 transition"
                    onClick={() => setAccordionOpen(!accordionOpen)}
                  >
                    <div>
                      <h4 className="font-semibold">EVALUACIÓN DE SU CASO</h4>
                      <p className="text-gray-300 text-sm">30 min</p>
                    </div>
                    <span className="material-icons">
                      {accordionOpen ? "expand_less" : "expand_more"}
                    </span>
                  </button>

                  {accordionOpen && (
                    <div className="p-4 border-t border-gray-600 animate-fade-in">
                      <p className="text-gray-300 mb-4">
                        Consulta inicial donde evaluaremos su situación
                        migratoria actual, revisaremos su documentación y le
                        proporcionaremos una estrategia personalizada para su
                        caso.
                      </p>
                      <p className="text-gray-300 mb-4">
                        <strong>Incluye:</strong>
                      </p>
                      <ul className="text-gray-300 list-disc list-inside space-y-1">
                        <li>Análisis completo de su caso</li>
                        <li>Revisión de documentos</li>
                        <li>Recomendaciones estratégicas</li>
                        <li>Plan de acción personalizado</li>
                      </ul>
                      <a
                        href="#"
                        className="text-red-400 hover:text-red-300 transition inline-block mt-4"
                      >
                        Más detalles
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Next Button */}
              <button
                id="next-btn"
                className={`
                  w-full py-4 rounded-2xl text-xl font-semibold transition transform
                  ${
                    selectedDate && selectedTime
                      ? "bg-yellow-600 text-gray-900 hover:bg-yellow-500 hover:scale-105"
                      : "bg-yellow-600/50 text-gray-900/50 cursor-not-allowed"
                  }
                `}
                disabled={!selectedDate || !selectedTime}
                onClick={handleNext}
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-20">
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
                  <span className="text-gray-400">+1 (305) 123-4567</span>
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

export default Schedule;
