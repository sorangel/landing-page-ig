import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          <a href="#es">🇪🇸 Leer en Español</a> &nbsp;|&nbsp;{" "}
          <a href="#en">🇺🇸 Read in English</a>
        </p>

        <div id="es" className="mt-8 space-y-6">
          <h1 className="text-3xl font-bold">
            POLÍTICA DE PRIVACIDAD Y AVISO AL MOMENTO DE LA RECOPILACIÓN
          </h1>
          <p>
            <strong>Última actualización:</strong> 20 de Enero de 2026
          </p>

          <p>
            <strong>Immigrant Gateway (IG Consulting Services, LLC)</strong>{" "}
            valora su privacidad y su confianza. Somos una Consultoría de
            Inmigración registrada en el Estado de California (Fianza #423022T
            por $100,000).
          </p>

          <div
            style={{
              backgroundColor: "#f8d7da",
              border: "1px solid #f5c6cb",
              padding: "15px",
              borderRadius: "5px",
              color: "#721c24",
            }}
          >
            <strong>AVISO IMPORTANTE:</strong> IG Consulting Services, LLC{" "}
            <strong>
              NO es un bufete de abogados y NO ofrecemos asesoramiento legal
            </strong>
            . Esta política describe cómo manejamos sus datos personales en
            estricto cumplimiento con la Ley de Privacidad del Consumidor de
            California (CCPA), la Ley de Derechos de Privacidad de California
            (CPRA) y el Código de Negocios y Profesiones de California
            (Secciones 22440-22448).
          </div>

          <h2 className="text-2xl font-bold mt-8">
            1. Recopilación de Información Personal Sensible (Cumplimiento CPRA)
          </h2>
          <p>
            De conformidad con la CPRA, podemos recopilar categorías de{" "}
            <strong>"Información Personal Sensible"</strong> necesarias
            exclusivamente para completar sus trámites migratorios bajo su
            dirección y control. Esto incluye:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Estatus de ciudadanía o inmigración:</strong> (Ej. Número
              A, clase de admisión).
            </li>
            <li>
              <strong>Identificadores gubernamentales:</strong> (Ej. Pasaporte,
              Seguro Social, Licencia de conducir).
            </li>
            <li>
              <strong>Origen racial o étnico.</strong>
            </li>
            <li>
              <strong>Datos biométricos:</strong> (Únicamente si son requeridos
              para fotos de pasaporte o huellas digitales para trámites
              específicos).
            </li>
          </ul>
          <p>
            <strong>Su Derecho a Limitar el Uso:</strong> Usted tiene el derecho
            a indicarnos que limitemos el uso de su Información Personal
            Sensible únicamente a lo que sea necesario para prestarle los
            servicios solicitados. No utilizamos su estatus migratorio ni sus
            identificadores para inferir características sobre usted ni para
            fines de marketing no relacionados.
          </p>

          <h2 className="text-2xl font-bold mt-8">
            2. Compartir Datos con Terceros y Relación con Abogados
          </h2>
          <p>
            <strong>Independencia Operativa:</strong> Immigrant Gateway opera de
            manera independiente. Si usted decide contratar servicios legales de
            un abogado externo referido por nosotros, dicha relación es
            estrictamente entre usted y el abogado.
          </p>
          <p>
            <strong>Transferencia de Datos:</strong> No compartimos su
            información personal con abogados externos, bufetes o consultores
            independientes sin su{" "}
            <strong>consentimiento expreso y por escrito</strong>. Al autorizar
            dicha transferencia, usted reconoce que IG actúa meramente como
            facilitador administrativo y no como socio legal.
          </p>
          <p>
            <strong>No Venta de Datos (Cláusula 10DLC):</strong> No vendemos su
            información personal a terceros. Específicamente,{" "}
            <strong>
              su información de consentimiento para recibir mensajes de texto
              (SMS) y su número de teléfono móvil NUNCA serán compartidos,
              vendidos, alquilados ni divulgados
            </strong>{" "}
            a terceros, afiliados o socios de marketing bajo ninguna
            circunstancia, salvo que sea requerido por una orden judicial
            válida.
          </p>

          <h2 className="text-2xl font-bold mt-8">
            3. Retención de Documentos y Devolución de Originales
          </h2>
          <p>
            <strong>Política de Retención (B&P Code § 22443):</strong> Para
            cumplir con el Código de Negocios y Profesiones de California §
            22443(b), estamos obligados por ley a conservar copias de su
            expediente y documentos por un periodo mínimo de{" "}
            <strong>tres (3) años</strong> desde la fecha de nuestro último
            servicio. Durante este periodo, no podremos eliminar estos registros
            específicos incluso si usted ejerce su "Derecho a Eliminar" bajo la
            CCPA, debido a esta obligación legal prevalente.
          </p>
          <p>
            <strong>Devolución de Originales:</strong> Immigrant Gateway{" "}
            <strong>nunca retiene documentos originales</strong> (como
            pasaportes, actas de nacimiento o certificados de matrimonio) más
            allá del tiempo estrictamente necesario para realizar copias
            inmediatas. Devolvemos todos los originales a usted de inmediato.{" "}
            <strong>
              Nunca retenemos sus documentos como garantía de pago de
              honorarios.
            </strong>
          </p>

          <h2 className="text-2xl font-bold mt-8">
            4. Sus Derechos de Privacidad en California (CCPA/CPRA)
          </h2>
          <p>
            Si usted es residente de California, tiene los siguientes derechos
            garantizados:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Derecho a Saber (Right to Know):</strong> Puede solicitar
              qué datos específicos hemos recopilado sobre usted en los últimos
              12 meses.
            </li>
            <li>
              <strong>Derecho a Eliminar (Right to Delete):</strong> Puede
              solicitar que borremos sus datos, sujeto a las excepciones legales
              de retención mencionadas en la sección 3.
            </li>
            <li>
              <strong>Derecho a Corregir (Right to Correct):</strong> Puede
              solicitaros que corrijamos información inexacta en sus registros.
              Dado la naturaleza crítica de los formularios de inmigración,
              priorizamos estas solicitudes.
            </li>
            <li>
              <strong>Derecho a Optar por No Participar (Opt-Out):</strong>{" "}
              Tiene derecho a decirnos "No vender ni compartir mi información
              personal" para fines de publicidad conductual cruzada.
            </li>
            <li>
              <strong>Derecho a la No Discriminación:</strong> No le negaremos
              servicios, no le cobraremos precios diferentes ni le
              proporcionaremos un nivel de calidad distinto por ejercer sus
              derechos de privacidad.
            </li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos, contáctenos a través de
            nuestro formulario web o al correo electrónico oficial de soporte.
          </p>

          <h2 className="text-2xl font-bold mt-8">
            5. Política de Mensajería SMS y Cumplimiento TCPA
          </h2>
          <p>
            Al proporcionarnos su número móvil y marcar la casilla de
            consentimiento en nuestros formularios, usted acepta recibir
            mensajes de texto (SMS/MMS) de Immigrant Gateway relacionados
            exclusivamente con su caso, recordatorios de citas y actualizaciones
            de servicios contratados.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Frecuencia:</strong> La frecuencia de los mensajes varía
              según la actividad de su trámite.
            </li>
            <li>
              <strong>Tarifas:</strong> Pueden aplicar tarifas estándar de
              mensajes y datos de su operador telefónico.
            </li>
            <li>
              <strong>Cancelación (Opt-Out):</strong> Puede cancelar el servicio
              de SMS en cualquier momento enviando la palabra{" "}
              <strong>"ALTO"</strong>, <strong>"STOP"</strong> o{" "}
              <strong>"BAJA"</strong>. Tras enviar el mensaje, recibirá una
              confirmación final y dejaremos de enviarle mensajes SMS.
            </li>
            <li>
              <strong>Ayuda:</strong> Para obtener ayuda técnica, envíe la
              palabra "AYUDA" o "HELP".
            </li>
          </ul>
        </div>

        <hr className="my-16 border-t-2 border-gray-200" />

        <div id="en" className="space-y-6">
          <h1 className="text-3xl font-bold">
            PRIVACY POLICY AND NOTICE AT COLLECTION
          </h1>
          <p>
            <strong>Last Updated:</strong> January 20, 2026
          </p>

          <p>
            <strong>Immigrant Gateway (IG Consulting Services, LLC)</strong>{" "}
            values your privacy and trust. We are an Immigration Consultant
            registered in the State of California (Surety Bond #423022T for
            $100,000).
          </p>

          <div
            style={{
              backgroundColor: "#f8d7da",
              border: "1px solid #f5c6cb",
              padding: "15px",
              borderRadius: "5px",
              color: "#721c24",
            }}
          >
            <strong>IMPORTANT NOTICE:</strong> IG Consulting Services, LLC is{" "}
            <strong>NOT a law firm and does NOT provide legal advice</strong>.
            This policy describes how we handle your personal data in strict
            compliance with the California Consumer Privacy Act (CCPA), the
            California Privacy Rights Act (CPRA), and the California Business
            and Professions Code (Sections 22440-22448).
          </div>

          <h2 className="text-2xl font-bold mt-8">
            1. Collection of Sensitive Personal Information (CPRA Compliance)
          </h2>
          <p>
            Pursuant to the CPRA, we may collect categories of{" "}
            <strong>"Sensitive Personal Information"</strong> necessary
            exclusively to complete your immigration forms under your direction
            and control. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Citizenship or immigration status:</strong> (e.g.,
              A-Number, Class of Admission).
            </li>
            <li>
              <strong>Government identifiers:</strong> (e.g., Passport, Social
              Security, Driver's License).
            </li>
            <li>
              <strong>Racial or ethnic origin.</strong>
            </li>
            <li>
              <strong>Biometric data:</strong> (Only if required for passport
              photos or fingerprints for specific filings).
            </li>
          </ul>
          <p>
            <strong>Your Right to Limit Use:</strong> You have the right to
            direct us to limit the use of your Sensitive Personal Information to
            that which is necessary to perform the services reasonably expected.
            We do not use your immigration status or identifiers to infer
            characteristics about you or for unrelated marketing purposes.
          </p>

          <h2 className="text-2xl font-bold mt-8">
            2. Sharing Data with Third Parties and Attorney Relations
          </h2>
          <p>
            <strong>Operational Independence:</strong> Immigrant Gateway
            operates independently. If you choose to hire legal services from an
            external attorney referred by us, that relationship is strictly
            between you and the attorney.
          </p>
          <p>
            <strong>Data Transfer:</strong> We do not share your personal
            information with external lawyers, law firms, or independent
            consultants without your <strong>express written consent</strong>.
            By authorizing such transfer, you acknowledge that IG acts merely as
            an administrative facilitator and not as a legal partner.
          </p>
          <p>
            <strong>No Sale of Data (10DLC Clause):</strong> We do not sell your
            personal information to third parties. Specifically,{" "}
            <strong>
              your mobile phone number and SMS consent data will NEVER be
              shared, sold, rented, or disclosed
            </strong>{" "}
            to third parties, affiliates, or marketing partners under any
            circumstances, unless required by a valid court order.
          </p>

          <h2 className="text-2xl font-bold mt-8">
            3. Document Retention and Return of Originals
          </h2>
          <p>
            <strong>Retention Policy (B&P Code § 22443):</strong> To comply with
            California Business and Professions Code § 22443(b), we are legally
            required to retain copies of your file and documents for a minimum
            period of <strong>three (3) years</strong> from the date of our last
            service. During this period, we cannot delete these specific records
            even if you exercise your "Right to Delete" under the CCPA, due to
            this prevailing legal obligation.
          </p>
          <p>
            <strong>Return of Originals:</strong> Immigrant Gateway{" "}
            <strong>never retains original documents</strong> (such as
            passports, birth certificates, or marriage certificates) beyond the
            time strictly necessary to make immediate copies. We return all
            originals to you immediately.{" "}
            <strong>
              We never retain your documents as collateral for fee payment.
            </strong>
          </p>

          <h2 className="text-2xl font-bold mt-8">
            4. Your California Privacy Rights (CCPA/CPRA)
          </h2>
          <p>
            If you are a California resident, you have the following guaranteed
            rights:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Right to Know:</strong> You may request specific pieces of
              data we have collected about you in the past 12 months.
            </li>
            <li>
              <strong>Right to Delete:</strong> You may request that we delete
              your data, subject to the legal retention exceptions mentioned in
              Section 3.
            </li>
            <li>
              <strong>Right to Correct:</strong> You may request that we correct
              inaccurate information in your records. Given the critical nature
              of immigration forms, we prioritize these requests.
            </li>
            <li>
              <strong>Right to Opt-Out:</strong> You have the right to tell us
              "Do Not Sell or Share My Personal Information" for cross-context
              behavioral advertising purposes.
            </li>
            <li>
              <strong>Right to Non-Discrimination:</strong> We will not deny you
              services, charge you different prices, or provide a different
              level of quality for exercising your privacy rights.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us via our web form
            or official support email.
          </p>

          <h2 className="text-2xl font-bold mt-8">
            5. SMS Messaging Policy and TCPA Compliance
          </h2>
          <p>
            By providing your mobile number and checking the consent box on our
            forms, you agree to receive text messages (SMS/MMS) from Immigrant
            Gateway related exclusively to your case, appointment reminders, and
            contracted service updates.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Frequency:</strong> Message frequency varies based on your
              case activity.
            </li>
            <li>
              <strong>Rates:</strong> Standard message and data rates may apply
              from your carrier.
            </li>
            <li>
              <strong>Opt-Out:</strong> You may cancel the SMS service at any
              time by texting <strong>"STOP"</strong>, <strong>"END"</strong>,
              or <strong>"QUIT"</strong>. After sending the message, you will
              receive a final confirmation, and we will stop sending you SMS
              messages.
            </li>
            <li>
              <strong>Help:</strong> For technical assistance, text "HELP".
            </li>
          </ul>
        </div>

        <hr className="my-10" />
        <p className="text-center font-bold">
          Contact / Contacto: IG Consulting Services, LLC | 123 Main St, Miami,
          FL 33101 | +1 323 942 3057 | info@immigrantgateway.com
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
