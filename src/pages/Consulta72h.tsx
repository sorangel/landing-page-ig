import { useMemo, useRef } from "react";
import { useUtmParams } from "../hooks/useUtm";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const BLUE = "#061475";
const RED = "#B3292E";

function HiddenUtmFields() {
  const utm = useUtmParams();
  return (
    <>
      <input type="hidden" name="utm_source" value={utm.source ?? ""} />
      <input type="hidden" name="utm_medium" value={utm.medium ?? ""} />
      <input type="hidden" name="utm_campaign" value={utm.campaign ?? ""} />
    </>
  );
}

function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-center items-center">
          <div>
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-tight text-center lg:text-left"
              style={{ color: BLUE }}
            >
              Profesionales en inmigración que sí te entienden.
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-gray-800 text-center lg:text-left">
              Claridad migratoria en ≤72 horas. Consultores registrados en
              California, preparación de documentos con revisión detallada y
              organización administrativa profesional.
            </h2>
            <div className="mt-8 text-center lg:text-left">
              <button
                onClick={onCta}
                className="px-6 py-4 rounded-xl text-white font-semibold shadow hover:brightness-110 focus:outline-none focus:ring-2 ring-offset-2"
                style={{ backgroundColor: RED }}
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductBreakdown() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h3
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          style={{ color: BLUE }}
        >
          Consulta Informativa de Trámites
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="text-sm font-semibold mb-2" style={{ color: RED }}>
              Paso 1
            </div>
            <h4 className="text-xl font-bold mb-2">Revisión - 30 min</h4>
            <p className="text-gray-700">
              Análisis administrativo. Identificamos tu situación y explicamos
              los trámites posibles.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="text-sm font-semibold mb-2" style={{ color: RED }}>
              Paso 2
            </div>
            <h4 className="text-xl font-bold mb-2">Formulación - ≤72h</h4>
            <p className="text-gray-700">
              Recibes tu Plan de Acción Personal: checklist de documentos,
              cronograma, presupuesto y análisis de riesgos.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="text-sm font-semibold mb-2" style={{ color: RED }}>
              Bonus
            </div>
            <h4 className="text-xl font-bold mb-2">WhatsApp SOS 30 días</h4>
            <p className="text-gray-700">
              Incluye 30 días de soporte WhatsApp SOS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Locations() {
  const item = (city: string) => (
    <div className="bg-white rounded-2xl p-6 shadow text-center">
      <span
        className="inline-block text-sm font-semibold tracking-wide"
        style={{ color: BLUE }}
      >
        Oficina
      </span>
      <div className="mt-2 text-xl font-bold">{city}</div>
    </div>
  );
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h3
          className="text-2xl md:text-3xl font-bold text-center mb-8"
          style={{ color: BLUE }}
        >
          Nuestras ubicaciones
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {item("Miami, FL")}
          {item("Los Angeles, CA")}
          {item("Ontario, CA")}
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const utm = useUtmParams();

  // Create a composed query string for GET fallback submissions
  const utmQuery = useMemo(() => {
    const p = new URLSearchParams();
    if (utm.source) p.set("utm_source", utm.source);
    if (utm.medium) p.set("utm_medium", utm.medium);
    if (utm.campaign) p.set("utm_campaign", utm.campaign);
    return p.toString();
  }, [utm]);

  return (
    <section id="formulario" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8 text-center">
          <h3
            className="text-3xl md:text-4xl font-bold"
            style={{ color: BLUE }}
          >
            Reserva tu Consulta 2FT™
          </h3>
          <p className="mt-3 text-gray-700">
            Completa el formulario para agendar y recibir tu Plan de Acción en
            ≤72h.
          </p>
        </div>
        <form
          ref={formRef}
          method="GET"
          // En este MVP redirigimos a schedule.html con datos + UTM para seguimiento
          action={`/schedule${utmQuery ? "?" + utmQuery : ""}`}
          className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow grid grid-cols-1 gap-4"
        >
          <HiddenUtmFields />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre Completo
            </label>
            <input
              name="name"
              required
              placeholder="Tu nombre"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 ring-igw-red"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="nombre@correo.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 ring-igw-red"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+1 555 555 5555"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 ring-igw-red"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de consulta
            </label>
            <select
              name="plan"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 ring-igw-red"
            >
              <option value="consulta-2ft">Consulta 2FT™</option>
              <option value="consulta-express">Consulta Express</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contexto de tu caso
            </label>
            <textarea
              name="notes"
              rows={4}
              placeholder="Cuéntanos brevemente tu situación"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 ring-igw-red"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-2 px-6 py-4 rounded-xl text-white font-semibold shadow w-full md:w-auto"
            style={{ backgroundColor: RED }}
          >
            Continuar a Agendamiento / Pago
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Tus datos se usarán exclusivamente para brindarte el servicio
            solicitado.
          </p>
        </form>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" aria-label="Volver a la landing principal">
            <img
              src="https://res.cloudinary.com/dqqabrluc/image/upload/v1756677682/logo-immigrant_iankzn.avif"
              alt="Immigrant Gateway"
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-sm md:text-base font-medium text-gray-700 hover:text-gray-900 underline underline-offset-4"
            aria-label="Ir a la landing principal"
          >
            Volver a la landing
          </Link>
          <a
            href="#formulario"
            className="hidden md:inline-block px-5 py-2 rounded-full text-white font-medium"
            style={{ backgroundColor: RED }}
          >
            Agenda en 72h
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Consulta72h() {
  const scrollToForm = () => {
    const el = document.getElementById("formulario");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header />
      <Hero onCta={scrollToForm} />
      <ProductBreakdown />

      <BookingForm />
      <Locations />
      <Footer />
    </>
  );
}
