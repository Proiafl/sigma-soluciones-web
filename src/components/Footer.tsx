const Footer = () => {
  return (
    <footer className="border-t border-border py-8 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm" style={{ fontFamily: 'Space Grotesk' }}>Σ</span>
            </div>
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
