import pool1 from "@/assets/pool-1.jpeg";
import pool2 from "@/assets/pool-2.jpeg";
import pool3 from "@/assets/pool-3.png";
import pool5 from "@/assets/pool-5.png";
import pool6 from "@/assets/pool-6.png";
import pool7 from "@/assets/pool-7.png";
import pool8 from "@/assets/pool-8.png";
import pool9 from "@/assets/pool-9.png";

const projects = [
  { img: pool3, title: "Piscina Residencial", desc: "Iluminación LED nocturna" },
  { img: pool1, title: "Jacuzzi de Lujo", desc: "Acabados en piedra natural" },
  { img: pool2, title: "Piscina Familiar", desc: "Diseño moderno con deck" },
  { img: pool7, title: "Piscina Infinity", desc: "Vista panorámica" },
  { img: pool8, title: "Piscina Azul Profundo", desc: "Acabados en cerámica" },
  { img: pool9, title: "Piscina con Iluminación", desc: "Ambiente nocturno" },
  { img: pool5, title: "Piscina Campestre", desc: "Entorno natural" },
  { img: pool6, title: "Piscina Olímpica", desc: "Gran formato" },
];

const GallerySection = () => {
  return (
    <section id="proyectos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-3">
            Portafolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Proyectos
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Cada piscina es una obra única diseñada a la medida de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl shadow-card ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">{p.title}</h3>
                  <p className="font-body text-sm text-primary-foreground/80">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
