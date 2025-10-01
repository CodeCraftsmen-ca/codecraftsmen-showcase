import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#insurers", label: "Insurers" },
    { href: "#faq", label: "FAQ" },
    { href: "#careers", label: "Careers" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <img src={logo} alt="CodeCraftsmen Logo" className="h-10 w-10 transition-transform group-hover:scale-110" />
            <span className={`text-2xl font-bold transition-colors group-hover:opacity-80 ${
              isScrolled ? "text-primary" : "text-white"
            }`}>
              CodeCraftsmen
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-sm font-medium transition-smooth relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full ${
                  isScrolled 
                    ? "text-foreground hover:text-primary after:bg-primary" 
                    : "text-white hover:text-white/80 after:bg-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className={isScrolled 
                ? "bg-primary hover:bg-primary-hover transition-smooth" 
                : "bg-white text-primary hover:bg-white/90 transition-smooth"
              }
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-medium text-foreground hover:text-primary transition-smooth px-4 py-2 relative after:absolute after:bottom-0 after:left-4 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-[calc(100%-2rem)]"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-primary hover:bg-primary-hover transition-smooth"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
