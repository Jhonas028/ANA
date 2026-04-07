import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-section py-12">
      <div className="container">
        {/* Top */}
        <div className="mb-10 flex flex-col items-center text-center md:items-start md:text-left">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="text-white text-lg font-semibold font-serif">
              Ana
            </span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            A personal space filled with love, travel memories, and stories from
            our journey together.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Ana. All rights reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" />{" "}
            for my wife
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
