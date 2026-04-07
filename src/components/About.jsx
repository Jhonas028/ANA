import { Heart, MapPin, Camera, Plane } from "lucide-react";

const stats = [
  { icon: Plane, label: "Places Visited", value: "5+" },
  { icon: Camera, label: "Memories Made", value: "100+" },
  { icon: Heart, label: "Years Together", value: "∞" },
];

const About = () => {
  return (
    <section id="About" className="py-20 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-96 w-full">
                <img
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?w=800"
                  alt="Us together"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-md px-5 py-4 flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary fill-primary" />
                <div>
                  <p className="text-text-primary font-semibold text-sm">
                    Together
                  </p>
                  <p className="text-text-muted text-xs">Since day one 🤍</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">
              Our Story
            </p>
            <h2 className="text-text-primary mb-5">
              Two Hearts, One Adventure
            </h2>
            <p className="mb-4">
              We're just two people deeply in love with each other and with the
              world around us. This little corner of the internet is our way of
              holding on to every moment — the big trips, the quiet mornings,
              and everything in between.
            </p>
            <p className="mb-8">
              From the highlands of Benguet to the shores of Masasa, every place
              we've been has added a new chapter to our story. We hope that
              sharing it here inspires you to write your own.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-text-muted text-sm mb-8">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Based in the Philippines 🇵🇭</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-4 text-center shadow-sm border border-rose-50"
                >
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-text-primary font-bold text-lg">{value}</p>
                  <p className="text-text-muted text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
