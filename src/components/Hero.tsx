import { motion } from "framer-motion";
import { ArrowDown, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, hsl(var(--foreground)) 50px, hsl(var(--foreground)) 51px),
            repeating-linear-gradient(90deg, transparent, transparent 50px, hsl(var(--foreground)) 50px, hsl(var(--foreground)) 51px)`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                Mantenimiento Integral
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Soluciones
              <br />
              <span className="text-primary">técnicas</span>
              <br />
              que perduran
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Electricidad, plomería, pintura, impermeabilizaciones y más. 
              Resolvemos los problemas de tu hogar, comercio o consorcio con eficiencia y profesionalismo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="#contacto">Solicitar presupuesto</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <a href="#servicios">Ver servicios</a>
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-2 border-primary/20 flex items-center justify-center">
                <div className="w-60 h-60 rounded-full border-2 border-primary/40 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wrench className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-8 bg-card border border-border rounded-lg px-4 py-2 flex items-center gap-2 shadow-lg"
              >
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Garantía</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 left-4 bg-card border border-border rounded-lg px-4 py-2 flex items-center gap-2 shadow-lg"
              >
                <span className="text-2xl font-bold text-primary">+500</span>
                <span className="text-xs text-muted-foreground">trabajos<br/>realizados</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
