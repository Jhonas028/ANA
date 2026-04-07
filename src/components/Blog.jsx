import { Calendar, Clock, ChevronRight } from "lucide-react";
import posts from "../json/blog.json";

const Blog = () => {
  const [featured, ...rest] = posts;

  return (
    <section id="Blog" className="py-20 bg-light-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">
            Our Journal
          </p>
          <h2 className="text-text-primary">Stories We've Written Together</h2>
          <p className="text-text-muted mt-2 max-w-md mx-auto">
            Thoughts, reflections, and little love notes from our life together.
          </p>
        </div>

        {/* Featured Post */}
        <article className="card mb-10 md:flex group cursor-pointer">
          <div className="md:w-1/2 h-64 md:h-auto overflow-hidden rounded-none">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide w-fit mb-4">
              {featured.category}
            </span>
            <h2 className="text-text-primary mb-3 group-hover:text-primary transition-colors duration-200">
              {featured.title}
            </h2>
            <p className="mb-6">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-text-muted text-xs mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {featured.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {featured.readTime}
              </span>
            </div>
            <a
              href="#"
              className="text-primary text-sm font-medium flex items-center gap-1 hover:text-primary-dark transition-colors self-start"
            >
              Read Story <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </article>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rest.map((post) => (
            <article
              key={post.id}
              className="bg-white group cursor-pointer overflow-hidden  rounded-2xl"
              style={{ isolation: "isolate" }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-text-primary group-hover:text-primary transition-colors duration-200 mb-2">
                  {post.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <a className="text-primary text-sm font-medium flex items-center gap-1 hover:text-primary-dark transition-colors">
                  Read Story <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
