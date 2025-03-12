
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 bg-black border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <Link to="/" className="text-2xl font-bold text-white">Oyedokun</Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8 w-full max-w-md">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors text-center">HOME</Link>
            <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors text-center">ABOUT</Link>
            <Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors text-center">SERVICES</Link>
            <Link to="/works" className="text-sm text-gray-400 hover:text-white transition-colors text-center">WORKS</Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors text-center">CONTACT</Link>
          </div>
          
          <div className="text-sm text-gray-400 flex items-center">
            <span>© 2023 With</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>by <a href="#" className="text-white hover:underline">Oyedokun Kehinde</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
