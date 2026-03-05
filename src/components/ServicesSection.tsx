import { Droplets, Wrench, Sparkles, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Construcción de Piscinas",
    desc: "Piscinas a medida con los mejores materiales y acabados premium.",
  },
  {
    icon: Sparkles,
    title: "Jacuzzis y Spa",
    desc: "Diseño e instalación de jacuzzis con sistema de hidromasaje.",
  },
  {
    icon: Wrench,
    title: "Equipos y Accesorios",
    desc: "Bombas, filtros, iluminación LED, calentadores y más.",
  },
  {
    icon: ShieldCheck,
    title: "Mantenimiento",
    desc: "Servicio integral de limpieza y mantenimiento periódico.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-3">
            Qué hacemos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-water transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-water flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
