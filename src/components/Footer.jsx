import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "/assets/logo.png";

function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-black via-gray-900 to-black border-t border-green-400/20">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="w-24">
              <img src={logo} alt="logo" />
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              The Student & Public Relations Society of NSUT, bridging
              connections and creating opportunities for growth and excellence.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-2">
              <a href="https://www.instagram.com/crosslinks.nsut/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
                <div className="w-11 h-11 rounded-lg bg-linear-to-br from-green-400/20 to-green-600/10 hover:from-green-400 hover:to-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/50 text-white">
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a href="https://www.linkedin.com/company/crosslinks-nsut/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group">
                <div className="w-11 h-11 rounded-lg bg-linear-to-br from-green-400/20 to-green-600/10 hover:from-green-400 hover:to-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/50 text-white">
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a href="https://www.facebook.com/crosslinks.nsut/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group">
                <div className="w-11 h-11 rounded-lg bg-linear-to-br from-green-400/20 to-green-600/10 hover:from-green-400 hover:to-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/50 text-white">
                  <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:crosslinks.nsut@gmail.com"
                className="flex items-start text-gray-400 hover:text-green-400 transition-colors duration-300 group"
              >
                <Mail size={18} className="mr-3 text-green-400 mt-0.5" />
                <span className="text-sm">
                  crosslinks.nsut@gmail.com
                </span>
              </a>
              <a
                href="tel:+918888604009"
                className="flex items-start text-gray-400 hover:text-green-400 transition-colors duration-300 group"
              >
                <Phone size={18} className="mr-3 text-green-400 mt-0.5" />
                <span className="text-sm">
                  +91 8888604009
                </span>
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin size={18} className="mr-3 text-green-400 mt-0.5" />
                <span className="text-sm">
                  Sector 3, Dwarka<br />
                  Delhi, 110078
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Crosslinks NSUT. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-green-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-500 hover:text-green-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
