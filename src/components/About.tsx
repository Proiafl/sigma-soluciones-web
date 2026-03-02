import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="nosotros" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto lg:mx-0 relative">
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20" />
              <div className="absolute inset-0 rounded-2xl bg-card border border-border p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl font-bold text-primary" style={{ fontFamily: 'Space Grotesk' }}>Σ</div>
                    <div>
                      <div className="text-xl font-bold text-foreground">SIGMA</div>
                      <div className="text-sm text-muted-foreground">Mantenimiento Integral</div>
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { num: "+500", label: "Trabajos" },
                      { num: "+200", label: "Clientes" },
                      { num: "100%", label: "Compromiso" },
                      { num: "24/7", label: "Disponibilidad" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-3 rounded-lg bg-background">
                        <div className="text-2xl font-bold text-primary">{stat.num}</div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Nosotros</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Profesionalismo en cada detalle
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Sigma Mantenimiento Integral es una empresa especializada en soluciones técnicas para hogares, 
              comercios y consorcios. Nos enfocamos en brindar servicios con profesionalismo, responsabilidad 
              y atención personalizada.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestro objetivo es resolver los problemas de nuestros clientes de manera eficiente, prolija 
              y segura, garantizando trabajos duraderos y bien ejecutados.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <Target className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Misión</h3>
                  <p className="text-sm text-muted-foreground">
                    Resolver problemas de mantenimiento con eficiencia, calidad y atención personalizada.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <Eye className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Visión</h3>
                  <p className="text-sm text-muted-foreground">
                    Convertirnos en empresa de referencia en mantenimiento en Argentina, 
                    destacándonos por calidad, confianza y cumplimiento.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
