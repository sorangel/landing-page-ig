import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="font-sans text-gray-800 antialiased bg-white">
      {/* Header / Breadcrumb */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              alt="Immigrant Gateway logo"
              className="h-10 w-auto"
              src="https://res.cloudinary.com/dqqabrluc/image/upload/v1756677682/logo-immigrant_iankzn.avif"
            />
            <span className="sr-only">Volver al inicio</span>
          </Link>
          <Link to="/" className="text-sm text-blue-700 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="mb-8">
          <strong>Last Updated: February 1, 2025</strong>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Introduction</h2>
        <p>
          This Privacy Policy describes how Immigrant Gateway ("we," "us," or
          "our") collects, uses, and discloses your personal information when
          you use our website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Information We Collect
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Personal identification information (name, email address, phone
            number)
          </li>
          <li>Immigration case information and documentation</li>
          <li>Communication preferences</li>
          <li>Website usage data</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          How We Use Your Information
        </h2>
        <p>We use your information to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Process and manage your immigration case</li>
          <li>Communicate with you about your case status</li>
          <li>Send promotional messages and special offers via text message</li>
          <li>Improve our services and website functionality</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Text Message Communications
        </h2>
        <p>
          By accepting this Privacy Policy, you expressly consent to receive:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Case status updates and notifications via text message</li>
          <li>Marketing communications about our services and promotions</li>
          <li>Special offers and company news</li>
        </ul>
        <p className="mt-2">
          You can opt-out of these communications at any time by texting STOP or
          contacting us directly.
        </p>

        <hr className="my-10" />

        <h1 className="text-4xl font-bold mb-2">Política de Privacidad</h1>
        <p className="mb-8">
          <strong>Última actualización: 1 de febrero de 2025</strong>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Introducción</h2>
        <p>
          Esta Política de Privacidad describe cómo Immigrant Gateway
          («nosotros», «nos» o «nuestro») recopila, utiliza y divulga su
          información personal cuando usted utiliza nuestro sitio web y nuestros
          servicios.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Póngase en contacto con nosotros
        </h2>
        <p>
          Si tiene alguna pregunta sobre esta Política de Privacidad o sobre
          nuestras prácticas de privacidad, póngase en contacto con nosotros en:
        </p>
        <p>
          <a
            href="mailto:info@immigrantgateway.com"
            className="text-blue-700 hover:underline"
          >
            info@immigrantgateway.com
          </a>
        </p>
        <p>
          <a href="tel:+13239423057" className="text-blue-700 hover:underline">
            +1 323 942 3057
          </a>
        </p>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <img
              alt="Immigrant Gateway logo"
              className="h-8 w-auto"
              src="https://res.cloudinary.com/dqqabrluc/image/upload/v1756677682/logo-immigrant_iankzn.avif"
            />
            <span className="text-sm text-gray-400">
              © 2025 Immigrant Gateway
            </span>
          </div>
          <Link to="/" className="text-gray-300 hover:text-white text-sm">
            Volver al inicio
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
