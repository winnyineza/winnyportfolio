
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">Oyedokun</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 w-full max-w-md">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors text-center">HOME</a>
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors text-center">ABOUT</a>
            <a href="#works" className="text-sm text-gray-400 hover:text-white transition-colors text-center">WORKS</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors text-center">CONTACT</a>
          </div>
          
          <div className="text-sm text-gray-400 flex items-center">
            <span>© With</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>by <a href="#" className="text-blue-500 hover:underline">Oyedokun Kehinde</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
