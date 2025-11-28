import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", path: "/#services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="font-heading text-xl font-bold text-foreground">
              Lovable Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">(123) 456-7890</span>
            </a>
            <Button variant="hero" size="default" asChild>
              <Link to="/contact">Book Free Call</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="section-container py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 px-4 py-3 text-base font-medium text-muted-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-4 h-4" />
              (123) 456-7890
            </a>
            <div className="pt-2">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Book Free Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
