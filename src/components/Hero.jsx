const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/love-letter-envelope-with-paper-craft-hearts-flat-lay-pink-valentines-anniversary-background-with-copy-space_650503-9.jpg')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-xl">
          {/* Icon */}
          <div className="mb-4">
            <span className="text-3xl">🤍</span>
          </div>

          {/* Heading */}
          <h1 className="text-white mb-4">
            Our Story, <br />
            One Place at a Time
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-base mb-8 max-w-md">
            A love letter to every destination, every memory, and every moment
            we've shared together.
          </p>

          {/* CTA Button */}
          <a href="#Travel" className="btn btn--outline-white">
            Explore Our Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
