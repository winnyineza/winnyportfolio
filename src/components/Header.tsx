
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Download, Phone, Github, Linkedin, Palmtree } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/", path: "/" },
    { name: "About", href: "/about", path: "/about" },
    { name: "Services", href: "/services", path: "/services" },
    { name: "Works", href: "/works", path: "/works" },
    { name: "Certifications", href: "/certifications", path: "/certifications" },
    { name: "Contact", href: "/contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-5 px-6 transition-all duration-300",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          Winny
        </Link>

        {isMobile ? (
          <>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {isMobileMenuOpen && (
              <div className="fixed inset-0 top-[72px] bg-black/95 z-40 animate-fade-in">
                <nav className="flex flex-col items-center justify-center h-full">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={cn(
                        "py-6 text-xl font-medium transition-colors",
                        isActive(link.path) ? "text-white" : "text-gray-400 hover:text-gray-300"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="flex space-x-4 mt-8">
                    <a href="https://github.com/winnyineza" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="https://www.behance.net/winnydineza1/" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Palmtree className="h-5 w-5" />
                    </a>
                    <a href="+250784258883" className="social-icon">
                      <Phone className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/winnydid/" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive(link.path) ? "text-white" : "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <a 
              href="#"
              className="flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
