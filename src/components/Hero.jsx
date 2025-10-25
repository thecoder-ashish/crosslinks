import groupPhoto from "../assets/groupPhoto.png";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 z-10 bg-black flex items-center justify-center overflow-visible">
      {/* Decorative Blobs */}
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
  );
}

export default Hero;
