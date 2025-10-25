import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT US' },
    { href: '#events', label: 'EVENTS' },
    { href: '#gallery', label: 'GALLERY' },
    { href: '#team', label: 'TEAM' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-green-400/20 shadow-lg">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="w-28 shrink-0">
          <img src={logo} alt="logo" className="w-full h-auto" />
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-green-400 transition-all duration-300 text-lg font-medium relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-white hover:text-green-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      
      {menuOpen && (
        <div className="md:hidden bg-black/90 border-t border-green-400/20">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 rounded text-white hover:text-green-400 hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
