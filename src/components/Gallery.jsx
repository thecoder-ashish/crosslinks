import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";
import gallery7 from "../assets/gallery/gallery7.jpg";
import gallery8 from "../assets/gallery/gallery8.jpg";
import gallery9 from "../assets/gallery/gallery9.jpg";

function Gallery() {
  const galleryImages = [
    { id: 1, src: gallery2, alt: "Gallery image 1", className: "col-span-2 md:col-span-6 row-span-2 md:row-span-3" },
    { id: 2, src: gallery9, alt: "Gallery image 2", className: "col-span-1 md:col-span-3 row-span-1 md:row-span-2" },
    { id: 3, src: gallery8, alt: "Gallery image 3", className: "col-span-1 md:col-span-3 row-span-1" },
    { id: 4, src: gallery7, alt: "Gallery image 4", className: "col-span-1 md:col-span-3 row-span-1 md:row-span-2" },
    { id: 5, src: gallery6, alt: "Gallery image 5", className: "col-span-1 md:col-span-3 row-span-1" },
    { id: 6, src: gallery4, alt: "Gallery image 6", className: "col-span-2 md:col-span-6 row-span-2" },
    { id: 7, src: gallery5, alt: "Gallery image 7", className: "col-span-1 md:col-span-3 row-span-1" },
    { id: 8, src: gallery3, alt: "Gallery image 8", className: "col-span-1 md:col-span-3 row-span-1" },
    { id: 9, src: gallery1, alt: "Gallery image 9", className: "col-span-2 md:col-span-6 row-span-1" },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 px-6 sm:px-8 bg-black relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-600/10 static-blob-12"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 static-blob-13"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 text-center mb-10 sm:mb-16">
          GALLERY
        </h2>

        <div className="relative grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4 md:h-[600px] auto-rows-[120px] sm:auto-rows-[160px] md:auto-rows-auto">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`${image.className} glassmorphism-card rounded-lg flex items-center justify-center overflow-hidden`}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
