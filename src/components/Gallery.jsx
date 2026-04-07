import gallery from "../json/gallery.json";

const GalleryRow = ({ images, direction }) => {
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 w-max ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
      >
        {doubled.map((img, index) => (
          <div
            key={index}
            className="w-56 h-44 rounded-xl overflow-hidden flex-shrink-0"
          >
            <img
              src={img.image}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="Gallery" className="py-20 bg-light-section overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">
            Memories
          </p>
          <h2 className="text-text-primary">Moments We'll Never Forget</h2>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <GalleryRow images={gallery.row1} direction="left" />
        <GalleryRow images={gallery.row2} direction="right" />
        <GalleryRow images={gallery.row3} direction="left" />
      </div>
    </section>
  );
};

export default Gallery;
