import { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#About" },
  { label: "Blog", href: "#Blog" },
  { label: "Gallery", href: "#Gallery" },
  { label: "Travel", href: "#Travel" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 shadow-lg bg-white`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 no-underline">
            <div className="bg-primary rounded-full p-1.5">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-2xl font-semibold font-serif tracking-tight text-text-primary">
              ANA
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="text-primary w-6 h-6" />
            ) : (
              <div className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 bg-primary rounded-full">
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Slide-Down Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
            isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 px-4 py-8 text-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-black hover:text-primary text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default NavBar;
