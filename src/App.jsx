import "./App.css";
import { useState, useRef } from "react";
import groupPhoto from "./assets/groupPhoto.png";
import logo from "./assets/logo.png";
import thon from "./assets/events/thon.jpg"
import garba from "./assets/events/garba.jpg"
import alumni from "./assets/events/alumni.jpg"
import moksha from "./assets/events/moksha.jpg"
import scribble from "./assets/events/scribble.jpg"
import farewell from "./assets/events/farewell.jpg"
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin, Menu, X } from "lucide-react";

function App() {
  const events = [
    {
      id: 1,
      title: "NSUTTHON",
      description:
        "The annual flagship event of Crosslinks. It consists of orientations, auditions, workshops and competitions organized by various societies. It is a team-based event which promotes teamwork and leadership qualities. Every team is credited with specific points for every participation and win.",
      imageUrl: thon
    },
    {
      id: 2,
      title: "GARBA NIGHT",
      description:
        "A vibrant celebration of culture and tradition with music, dance, and community bonding. Join us for an evening filled with traditional Gujarati folk dance, colorful costumes, and the infectious energy of Garba and Dandiya Raas.",
      imageUrl: garba
    },
    {
      id: 3,
      title: "ALUMNI MEET",
      description:
        "A lovely reunion for all the alumni to reminisce about their good old days together. The alumni gathered to share their experiences with the students and discuss new ideas. It was organized in collaboration with Alumni Association, NSUT.",
      imageUrl: alumni
    },
    {
      id: 4,
      title: "MR. & MS. MOKSHA",
      description:
        "Mr. and Ms. Moksha, an event held at our college, is a celebration of charisma, talent, and personality. This competition showcases the finest qualities of students as they compete for the title with confidence and style.",
      imageUrl: moksha
    },
    {
      id: 5,
      title: "SCRIBBLE DAY",
      description:
        "Scribble Day is a creative see off to our beloved seniors. Cute, funny and some outrageous messages are signed off on t-shirts and even body parts during the event. Together with music and a lot of pictures to capture memories worth many years.",
      imageUrl: scribble
    },
    {
      id: 6,
      title: "FAREWELL",
      description:
        "Farewell day is a bittersweet occasion, marking the end of an important chapter in one's life and the start of a new journey. We at crosslinks organized a farewell day party bidding them a goodbye and wishing them for a new journey in their lives. Their memories and the bonds they formed will always be remembered and will be cherished.",
      imageUrl: farewell
    },
  ];
  

  const testimonials = [
    {
      name: "MITHILESH KOROCHIKAR",
      role: "PRESIDENT, EXTERNAL AFFAIRS",
      quote:
        "Crosslinks = endless opportunities + unmatched experiences. Everything else you hear? Just background noise.",
    },
    {
      name: "PRIYA SHARMA",
      role: "VICE PRESIDENT, INTERNAL AFFAIRS",
      quote:
        "Crosslinks has been my journey of growth, learning, and creating lasting friendships. Every event teaches us something new.",
    },
    {
      name: "RAHUL SINGH",
      role: "TREASURER",
      quote:
        "The opportunities Crosslinks provides are unmatched. From organizing events to networking, it's been an incredible experience.",
    },
  ];
  const [tIndex, setTIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40;
    if (deltaX > threshold) {
      setTIndex((tIndex - 1 + testimonials.length) % testimonials.length);
    } else if (deltaX < -threshold) {
      setTIndex((tIndex + 1) % testimonials.length);
    }
    touchStartX.current = null;
  };
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-green-400/20 shadow-lg">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="w-28 shrink-0">
              <img src={logo} alt="logo" className="w-full h-auto" />
            </div>
            <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white hover:text-green-400 transition-all duration-300 text-lg font-medium relative group"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-white hover:text-green-400 transition-all duration-300 text-lg font-medium relative group"
            >
              ABOUT US
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#events"
              className="text-white hover:text-green-400 transition-all duration-300 text-lg font-medium relative group"
            >
              EVENTS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-green-400 transition-all duration-300 text-lg font-medium relative group"
            >
              GALLERY
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#team"
              className="text-white hover:text-green-400 transition-all duration-300 text-lg font-medium relative group"
            >
              TEAM
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-white hover:text-green-400 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          </div>
          {/* Mobile menu panel */}
          {menuOpen && (
            <div className="md:hidden bg-black/90 border-t border-green-400/20">
              <div className="px-4 py-3 space-y-2">
                {[
                  { href: '#home', label: 'HOME' },
                  { href: '#about', label: 'ABOUT US' },
                  { href: '#events', label: 'EVENTS' },
                  { href: '#gallery', label: 'GALLERY' },
                  { href: '#team', label: 'TEAM' },
                ].map((link) => (
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
      <section id="home" className="relative min-h-screen pt-28 z-10 bg-black flex items-center justify-center overflow-visible">
        {/* Blobs */}
        <div className="hidden md:block absolute top-0 left-0 w-96 h-96 bg-green-600/20 static-blob-1"></div>
        <div className="hidden md:block absolute top-0 right-0 w-80 h-80 bg-white/10 static-blob-2"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-green-500/15 static-blob-3"></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-7xl mx-auto px-6 sm:px-8 w-full gap-10 min-h-[calc(100vh-7rem)]">
          <div className="order-2 lg:order-1 lg:flex-1 max-w-xl text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-green-400 mb-4 sm:mb-6 leading-tight">
              CROSSLINKS
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8">
              The Student & Public Relations Society of NSUT
            </p>
            <button className="btn-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg cursor-pointer">
              JOIN US
            </button>
          </div>
          <div className="order-1 lg:order-2 hidden lg:flex lg:flex-1 relative justify-center lg:justify-end items-center lg:ml-16 mb-8 lg:mb-0">
            <div className="relative w-full max-w-[520px] h-[340px] sm:h-[420px] md:h-[520px] overflow-hidden large-blob-shape bg-green-600/30">
              <img
                src={groupPhoto}
                alt="Crosslinks Group Photo"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-600/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us*/}
      <section id="about" className="py-20 px-8 bg-black relative">
        <div className="absolute top-20 right-20 w-24 h-24 bg-green-500/15 static-blob-6"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-green-500/8 static-blob-7"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-green-400 mb-8">
            WHO ARE WE?
          </h2>
          <p className="text-lg text-white mb-8 leading-relaxed">
            Crosslinks is the Student & Public Relations Society of NSUT. We
            serve as the bridge between students and authorities, promoting our
            college through various events and initiatives. Our mission is to
            foster connections, build industry knowledge, and create
            opportunities for students to showcase their talents and develop
            leadership skills.
          </p>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-16 sm:py-20 px-6 sm:px-8 bg-black relative overflow-hidden">
        {/* Blobs */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-white/8 static-blob-9"></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-green-500/12 static-blob-10"></div>
        <div className="absolute bottom-20 right-1/3 w-56 h-56 bg-green-400/10 static-blob-11"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 text-center mb-10 sm:mb-16">
            EVENTS
          </h2>

          <div className="space-y-16">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                    {event.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {event.description}
                  </p>
                </div>
                <div className="flex-1 relative w-full">
                  <div className="glassmorphism-card w-full h-56 sm:h-72 lg:h-80 rounded-lg overflow-hidden">
                    <img
                      src={event.imageUrl}
                      alt={`${event.title} Event Photo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 sm:py-20 px-6 sm:px-8 bg-black relative overflow-hidden">
        {/* Blobs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-green-600/10 static-blob-12"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 static-blob-13"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 text-center mb-10 sm:mb-16">
            GALLERY
          </h2>

          <div className="relative grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4 md:h-[600px] auto-rows-[120px] sm:auto-rows-[160px] md:auto-rows-auto">
            <div className="col-span-2 md:col-span-6 row-span-2 md:row-span-3 glassmorphism-card rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-lg">Group Photo</span>
            </div>

            <div className="col-span-1 md:col-span-3 row-span-1 md:row-span-2 glassmorphism-card rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Event Photo</span>
            </div>

            <div className="col-span-1 md:col-span-3 row-span-1 glassmorphism-card rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Industry Photo</span>
            </div>

            <div className="col-span-1 md:col-span-3 row-span-1 md:row-span-2 glassmorphism-card rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Connections Photo</span>
            </div>

            <div className="col-span-1 md:col-span-3 row-span-1 glassmorphism-card rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Small Photo 1</span>
            </div>

            <div className="col-span-2 md:col-span-6 row-span-2 glassmorphism-card rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Portfolio Photo</span>
            </div>

            <div className="col-span-1 md:col-span-3 row-span-1 glassmorphism-card rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Team Photo</span>
            </div>

            <div className="col-span-1 md:col-span-3 row-span-1 glassmorphism-card rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Workshop Photo</span>
            </div>

            <div className="col-span-2 md:col-span-6 row-span-1 glassmorphism-card rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Celebration Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="team" className="py-16 sm:py-20 px-6 sm:px-8 bg-black relative overflow-hidden">
        {/* Blobs */}
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-green-600/8 static-blob-14"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-white/5 static-blob-15"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 mb-10 sm:mb-16">
            WORDS FROM CORE
          </h2>

          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'pan-y' }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${testimonials.length * 100}%`,
                transform: `translateX(-${(tIndex * 100) / testimonials.length}%)`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="shrink-0"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="px-4">
                  <div className="glassmorphism-card p-8 rounded-lg max-w-4xl mx-auto">
                    <div className="w-24 h-24 bg-gray-700/50 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-300 text-lg">
                      Photo
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t.name}</h3>
                    <p className="text-green-400 mb-4">{t.role}</p>
                    <p className="text-white italic">"{t.quote}"</p>
                  </div>
                  </div>
                </div>
              ))}
            </div>

            
            <button
              className="inline-flex absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors z-10"
              onClick={() => setTIndex((tIndex - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              className="inline-flex absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors z-10"
              onClick={() => setTIndex((tIndex + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              →
            </button>

            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    tIndex === i ? "bg-green-400 scale-110" : "bg-gray-600 hover:bg-green-400"
                  }`}
                  onClick={() => setTIndex(i)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-linear-to-b from-black via-gray-900 to-black border-t border-green-400/20">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-6">
              <h2 className="w-24">
                <img src={logo} alt="logo" />
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                The Student & Public Relations Society of NSUT, bridging
                connections and creating opportunities for growth and excellence.
              </p>
              <div className="flex space-x-3 pt-2">
                <a href="#" aria-label="Instagram" className="group">
                  <div className="w-11 h-11 rounded-lg bg-linear-to-br from-green-400/20 to-green-600/10 hover:from-green-400 hover:to-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/50 text-white">
                    <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                </a>
                <a href="#" aria-label="LinkedIn" className="group">
                  <div className="w-11 h-11 rounded-lg bg-linear-to-br from-green-400/20 to-green-600/10 hover:from-green-400 hover:to-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/50 text-white">
                    <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                </a>
                <a href="#" aria-label="Facebook" className="group">
                  <div className="w-11 h-11 rounded-lg bg-linear-to-br from-green-400/20 to-green-600/10 hover:from-green-400 hover:to-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/50 text-white">
                    <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-6 tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >Home
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
    </div>
  );
}

export default App;
