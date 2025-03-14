
import { Heart, Github, Linkedin, Phone, Palmtree } from "lucide-react";
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
            <a href="https://github.com/winny-ineza" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://behance.net/winny-ineza" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Palmtree className="h-5 w-5" />
            </a>
            <a href="tel:+250788000000" className="social-icon">
              <Phone className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/winny-didine-ineza" target="_blank" rel="noopener noreferrer" className="social-icon">
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
