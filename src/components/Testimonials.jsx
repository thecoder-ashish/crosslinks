import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mithilesh from "../assets/team/mithilesh.png";
import abhinav from "../assets/team/abhinav.png";
import akshath from "../assets/team/akshath.png";
import aryan from "../assets/team/aryan.jpg";
import gauri from "../assets/team/gauri.jpg";
import prisha from "../assets/team/prisha.png";
import sneha from "../assets/team/sneha.jpg";
import udita from "../assets/team/udita.jpg";

function Testimonials() {
  const testimonials = [
    {
      name: "MITHILESH KOROCHIKAR",
      role: "PRESIDENT, EXTERNAL AFFAIRS",
      quote:
        "Crosslinks = endless opportunities + unmatched experiences. Everything else you hear? Just background noise.",
      pfp: mithilesh,
    },
    {
      name: "UDIA JARODIA",
      role: "PRESIDENT, MEDIA",
      quote:
        "We're not just a team, we're a family, forging a stronger bond with everything we do. What we build here isn't just work - it's love, trust, and legacy in the making!",
      pfp: udita,
    },
    {
      name: "AKSHATH BHAMU",
      role: "VICE PRESIDENT",
      quote:
        "Might genuinely have some of the best connections on here , the people are great, the vibes are immaculate, all in all dont join if youre a loser. peace",
      pfp: akshath,
    },
    {
      name: "GAURI BHARDWAJ",
      role: "VICE PRESIDENT",
      quote:
        "We are not just a PR society we are home—the kind where seniors guide, juniors inspire and bonds turn into lifelong friendships. We hustle hard, party harder, and make every campus event unforgettable.",
      pfp: gauri,
    },
    {
      name: "ARYAN KHUDLAIN",
      role: "MANAGING EDITOR",
      quote:
        "moj masti nahi rukni chiye",
      pfp: aryan,
    },
    {
      name: "SNEHA VATS",
      role: "MANAGING EDITOR",
      quote:
        "",
      pfp: sneha,
    },
    {
      name: "PRISHA PRIYA",
      role: "MANAGING EDITOR",
      quote:
        "Crosslinks is all about epic events, amazing people, and unforgettable memories. The kind that makes your college journey truly unforgettable!",
      pfp: prisha,
    },
    {
      name: "ABHINAV KUMAR",
      role: "MANAGING EDITOR",
      quote:
        "",
      pfp: abhinav,
    },
  ];

  const [tIndex, setTIndex] = useState(0);
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
    <section id="team" className="py-16 sm:py-20 px-6 sm:px-8 bg-black relative overflow-hidden">
      {/* Decorative Blobs */}
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
                    <div className="w-36 h-36 bg-gray-700/50 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                      {t.pfp ? (
                        <img
                          src={t.pfp}
                          alt={`${t.name} profile photo`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-300 text-xl font-semibold">
                          {t.name
                            .split(/\s+/)
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t.name}</h3>
                    <p className="text-green-400 mb-4">{t.role}</p>
                    <p className="text-white italic">"{t.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="group absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer focus:outline-none"
            onClick={() => setTIndex((tIndex - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
          >
            <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/40 backdrop-blur ring-1 ring-white/10 text-white shadow-lg transition-all duration-200 group-hover:bg-black/60 group-hover:ring-green-400/50 group-hover:scale-105">
              <ChevronLeft size={18} className="opacity-90" />
            </span>
          </button>
          <button
            className="group absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer focus:outline-none"
            onClick={() => setTIndex((tIndex + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/40 backdrop-blur ring-1 ring-white/10 text-white shadow-lg transition-all duration-200 group-hover:bg-black/60 group-hover:ring-green-400/50 group-hover:scale-105">
              <ChevronRight size={18} className="opacity-90" />
            </span>
          </button>

          {/* Pagination Dots */}
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
  );
}

export default Testimonials;
