import sigmaLogo from "@/assets/sigma-logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={sigmaLogo} alt="Sigma Mantenimiento Integral" className="h-8 w-auto brightness-0 invert opacity-70" />
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sigma Mantenimiento Integral. Todos los derechos reservados.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-foreground transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
