import { useState } from "react";
import { Search, X, MapPin, Calendar, User, ChevronRight } from "lucide-react";
import places from "../json/travel.json";

const Travel = () => {
  const [search, setSearch] = useState("");

  const filtered = places.filter((p) => {
    const query = search.toLowerCase();
    return (
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  });

  return (
    <section id="Travel" className="py-16 bg-white">
      <div className="container">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10">
          <div>
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">
              Our Adventures
            </p>
            <h2 className="text-text-primary">Places We've Been</h2>
            <p className="text-text-muted mt-1">
              Every destination holds a memory we'll treasure forever.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search by place or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-9 py-2 text-sm border border-rose-100 rounded-full outline-none focus:border-primary transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        {search && (
          <p className="text-sm text-text-muted mb-6">
            Found {filtered.length} results for{" "}
            <span className="font-medium">"{search}"</span>
          </p>
        )}

        {/* Empty State */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="bg-primary/10 rounded-full p-5">
              <MapPin className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-text-primary">No places found</h3>
            <p className="text-text-muted max-w-sm">
              We couldn't find any places matching "{search}". Try a different
              keyword or clear your search to see all destinations.
            </p>
            <button
              onClick={() => setSearch("")}
              className="btn btn--primary !w-auto flex items-center gap-2 mt-2"
            >
              <X className="w-4 h-4" /> Clear Search
            </button>
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((place) => (
              <article
                key={place.id}
                className="bg-white group cursor-pointer overflow-hidden"
                style={{ isolation: "isolate" }}
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden rounded-3xl">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                    {place.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {place.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {place.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-text-primary group-hover:text-primary transition-colors duration-200 mb-2">
                    {place.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {place.excerpt}
                  </p>

                  {/* Read More */}
                  <a className="text-primary text-sm font-medium flex items-center gap-1 hover:text-primary-dark transition-colors">
                    Read Story <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Travel;
