import logo from "@/assets/logo-kawsay.png";

const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <img src={logo} alt="Kawsay" className="h-10 brightness-0 invert" />
      <p className="font-body text-sm text-background/60">
        © {new Date().getFullYear()} Kawsay Piscinas y Jacuzzis. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
