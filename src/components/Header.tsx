
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
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
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white">
          Oyedokun
        </a>

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
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="py-6 text-xl font-medium text-white hover:text-gray-300 transition-colors"
                    >
                      {link.name}
                    </button>
                  ))}
                  <a 
                    href="#"
                    className="mt-6 flex items-center gap-2 bg-zinc-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-300"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
            <a 
              href="#"
              className="flex items-center gap-2 bg-zinc-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-300"
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
