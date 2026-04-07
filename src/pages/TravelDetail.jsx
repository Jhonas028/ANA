import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft, Calendar, User, MapPin,
  X, ChevronLeft, ChevronRight, Images
} from "lucide-react";
import places from "../json/travel.json";

const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  if (index === null) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/70 hover:text-white cursor-pointer"
      >
        <X className="w-7 h-7" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white/70 hover:text-white cursor-pointer"
      >
        <ChevronLeft className="w-9 h-9" />
      </button>
      <img
        src={images[index]}
        alt={`Photo ${index + 1}`}
        className="max-h-[85vh] max-w-full rounded-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white/70 hover:text-white cursor-pointer"
      >
        <ChevronRight className="w-9 h-9" />
      </button>
      <p className="absolute bottom-5 text-white/50 text-sm">
        {index + 1} / {images.length}
      </p>
    </div>
  );
};

const GalleryGrid = ({ images, onOpen }) => {
  const count = images.length;

  // 1 photo
  if (count === 1) {
    return (
      <div className="rounded-3xl overflow-hidden h-80 cursor-pointer" onClick={() => onOpen(0)}>
        <img src={images[0]} alt="Trip photo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
    );
  }

  // 2 photos
  if (count === 2) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div key={i} className="rounded-3xl overflow-hidden h-64 cursor-pointer" onClick={() => onOpen(i)}>
            <img src={img} alt={`Trip photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    );
  }

  // 3 photos
  if (count === 3) {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-3xl overflow-hidden h-80 cursor-pointer row-span-2" onClick={() => onOpen(0)}>
          <img src={images[0]} alt="Trip photo 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        {images.slice(1).map((img, i) => (
          <div key={i} className="rounded-3xl overflow-hidden h-[152px] cursor-pointer" onClick={() => onOpen(i + 1)}>
            <img src={img} alt={`Trip photo ${i + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    );
  }

  // 4 photos
  if (count === 4) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div key={i} className="rounded-3xl overflow-hidden h-52 cursor-pointer" onClick={() => onOpen(i)}>
            <img src={img} alt={`Trip photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    );
  }

  // 5+ photos — first large, then 2-col grid, last shows "+N more" overlay
  const MAX_VISIBLE = 5;
  const visible = images.slice(0, MAX_VISIBLE);
  const remaining = count - MAX_VISIBLE;

  return (
    <div className="flex flex-col gap-4">
      {/* First image — large */}
      <div className="rounded-3xl overflow-hidden h-80 cursor-pointer" onClick={() => onOpen(0)}>
        <img src={visible[0]} alt="Trip photo 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>

      {/* 2nd and 3rd */}
      <div className="grid grid-cols-2 gap-4">
        {visible.slice(1, 3).map((img, i) => (
          <div key={i} className="rounded-3xl overflow-hidden h-52 cursor-pointer" onClick={() => onOpen(i + 1)}>
            <img src={img} alt={`Trip photo ${i + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>

      {/* 4th and 5th — last one shows "+N more" if there are extras */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-3xl overflow-hidden h-52 cursor-pointer" onClick={() => onOpen(3)}>
          <img src={visible[3]} alt="Trip photo 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="relative rounded-3xl overflow-hidden h-52 cursor-pointer" onClick={() => onOpen(4)}>
          <img src={visible[4]} alt="Trip photo 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          {remaining > 0 && (
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-1">
              <Images className="w-6 h-6 text-white" />
              <p className="text-white font-semibold text-lg">+{remaining} more</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TravelDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const place = places.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handlePrev = () =>
    setLightboxIndex((i) => (i - 1 + place.gallery.length) % place.gallery.length);
  const handleNext = () =>
    setLightboxIndex((i) => (i + 1) % place.gallery.length);

  if (!place) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-text-primary">Place not found</h2>
        <button onClick={() => navigate("/")} className="btn btn--primary !w-auto">
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Image */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src={place.image} alt={place.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-text-primary hover:bg-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="absolute bottom-6 left-6">
          <span className="bg-white/80 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {place.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12 max-w-3xl">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted mb-4">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {place.date}</span>
          <span className="flex items-center gap-1"><User className="w-3 h-3" /> {place.author}</span>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {place.category}</span>
        </div>

        <h1 className="text-text-primary mb-6">{place.title}</h1>

        <p className="text-lg text-text-secondary italic mb-6 border-l-4 border-primary pl-4">
          {place.excerpt}
        </p>

        <p className="text-text-secondary leading-relaxed text-base mb-16">
          {place.content}
        </p>

        {/* Photo Gallery */}
        {place.gallery && place.gallery.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-text-primary">📸 Photos from this trip</h3>
              <span className="text-text-muted text-xs">{place.gallery.length} photos</span>
            </div>
            <GalleryGrid images={place.gallery} onOpen={setLightboxIndex} />
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={place.gallery || []}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default TravelDetail;