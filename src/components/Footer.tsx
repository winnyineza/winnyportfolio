
import { Heart, Github, Linkedin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 bg-black border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <Link to="/" className="text-2xl font-bold text-white">Winny</Link>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/winnyineza" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.behance.net/winnydineza1/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="https://cdn.iconscout.com/icon/free/png-256/free-adobe-behance-icon-download-in-svg-png-gif-file-formats--logo-be-products-pack-design-development-icons-3516502.png?f=webp&w=256" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide">
                <path d="M8 15H2V9h6a3 3 0 0 1 0 6zm14-6h-8v2h8zm0 4h-8v2h8zm-8-8h6V3h-6zm-6 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
            </a>
            <a href="tel:+250784258883" className="social-icon">
              <Phone className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/winnydid/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-8 w-full max-w-md">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors text-center">HOME</Link>
            <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors text-center">ABOUT</Link>
            <Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors text-center">SERVICES</Link>
            <Link to="/works" className="text-sm text-gray-400 hover:text-white transition-colors text-center">WORKS</Link>
            <Link to="/certifications" className="text-sm text-gray-400 hover:text-white transition-colors text-center">CERTIFICATES</Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors text-center">CONTACT</Link>
          </div>
          
          <div className="text-sm text-gray-400 flex items-center">
            <span>© 2023 With</span>
            <Heart className="h-4 w-4 mx-1 text-purple-500" />
            <span>by <a href="#" className="text-white hover:underline">Winny Didine Ineza</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
