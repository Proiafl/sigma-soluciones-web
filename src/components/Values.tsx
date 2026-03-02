import { motion } from "framer-motion";
import { Award, Clock, FileText, Sparkles, Heart } from "lucide-react";

const values = [
  { icon: Award, title: "Profesionalismo", description: "Cada trabajo refleja nuestro compromiso con la excelencia técnica." },
  { icon: Clock, title: "Puntualidad", description: "Respetamos los tiempos acordados. Tu tiempo es valioso." },
  { icon: FileText, title: "Transparencia", description: "Presupuestos claros y detallados, sin sorpresas." },
  { icon: Sparkles, title: "Trabajo limpio", description: "Dejamos cada espacio ordenado y en perfectas condiciones." },
  { icon: Heart, title: "Compromiso", description: "Nos involucramos con cada cliente como si fuera el único." },
];

const Values = () => {
  return (
    <section id="valores" className="py-24 lg:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Valores</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lo que nos define
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nuestra forma de trabajar se basa en principios que garantizan la mejor experiencia para cada cliente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
