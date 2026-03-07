import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Droplets, Wrench, Sparkles, ShieldCheck, ThermometerSun, Paintbrush, Bug, Timer } from "lucide-react";

const servicios = [
  {
    icon: Droplets,
    title: "Limpieza de Piscinas",
    desc: "Servicio profesional de limpieza integral: aspirado de fondo, cepillado de paredes, limpieza de línea de agua y recolección de residuos superficiales. Dejamos tu piscina impecable.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    desc: "Plan periódico de mantenimiento que incluye revisión de equipos, limpieza de filtros, control de niveles de agua y verificación del sistema de recirculación.",
  },
  {
    icon: ShieldCheck,
    title: "Tratamiento Químico del Agua",
    desc: "Análisis y balance químico completo: control de pH, cloro, alcalinidad y dureza. Aplicación de productos certificados para un agua cristalina y segura.",
  },
  {
    icon: ThermometerSun,
    title: "Instalación de Calentadores",
    desc: "Instalación y mantenimiento de calentadores solares, eléctricos y a gas. Disfruta de tu piscina todo el año con la temperatura ideal.",
  },
  {
    icon: Sparkles,
    title: "Reparación de Acabados",
    desc: "Restauración de gresite, mosaicos y acabados interiores dañados. Reparación de fisuras, juntas y revestimientos para devolver la belleza original.",
  },
  {
    icon: Paintbrush,
    title: "Pintura y Impermeabilización",
    desc: "Aplicación de pintura epóxica y sistemas de impermeabilización de alta durabilidad. Protección total contra filtraciones y humedad.",
  },
  {
    icon: Bug,
    title: "Control de Algas y Plagas",
    desc: "Tratamiento especializado anti-algas con productos de acción prolongada. Eliminación de microorganismos y prevención de agua verde.",
  },
  {
    icon: Timer,
    title: "Automatización de Sistemas",
    desc: "Instalación de temporizadores, sensores de nivel y sistemas de dosificación automática para que tu piscina se mantenga sola.",
  },
];

const ServiciosPage = () => (
  <div className="min-h-screen pt-16 md:pt-20">
    <Navbar />
    <section className="py-16 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-3">
            Qué hacemos
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Ofrecemos soluciones completas para la construcción, mantenimiento y cuidado de tu piscina y jacuzzi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {servicios.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-water transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-water flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                {s.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20un%20servicio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-water text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Solicitar servicio por WhatsApp
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ServiciosPage;
