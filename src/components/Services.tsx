import { motion } from "framer-motion";
import { Zap, Droplets, Paintbrush, ShieldCheck, Layers, Wrench, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Electricidad",
    description: "Instalaciones domiciliarias e industriales. Tableros, cableado, iluminación y puesta a tierra.",
  },
  {
    icon: Droplets,
    title: "Plomería",
    description: "Reparación de cañerías, destapaciones, instalación de griferías y conexiones de gas.",
  },
  {
    icon: Paintbrush,
    title: "Pintura",
    description: "Pintura interior y exterior. Preparación de superficies, enduido y terminaciones de calidad.",
  },
  {
    icon: ShieldCheck,
    title: "Impermeabilizaciones",
    description: "Tratamiento de humedad en techos, terrazas y muros. Membranas y soluciones definitivas.",
  },
  {
    icon: Layers,
    title: "Microcemento",
    description: "Revestimiento decorativo de alta resistencia para pisos, paredes, baños y cocinas.",
  },
  {
    icon: Wrench,
    title: "Reparaciones Generales",
    description: "Arreglos varios, mantenimiento de aberturas, cerraduras, durlock y pequeñas obras.",
  },
  {
    icon: ClipboardCheck,
    title: "Mantenimiento Preventivo",
    description: "Planes de mantenimiento periódico para consorcios, oficinas y comercios.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Servicios</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluciones integrales
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cubrimos todas las necesidades de mantenimiento de tu propiedad con un solo equipo de confianza.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
