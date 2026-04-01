import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Search, Calendar, Loader2, AlertCircle,
  User, BookOpen
} from "lucide-react";

const API_BASE = import.meta.env.VITE_BASE_URL || "http://localhost:3300";

/* ─── MAIN BLOG PAGE ─── */
export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/blog/get`)
      .then((r) => { if (!r.ok) throw new Error("Server se data nahi aaya"); return r.json(); })
      .then((d) => { setBlogs(Array.isArray(d) ? d : d.data || d.blogs || []); setLoading(false); })
      .catch((e) => { setError(e.message); setLoading(false); });
  }, []);

  const getImageUrl = (image) => {
    if (!image) return null;
    if (typeof image === "string") return image.startsWith("http") ? image : `${API_BASE}/${image.replace(/^\//, "")}`;
    if (image.path) return image.path;
    return null;
  };

  const formatDate = (d) =>
    d ? new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "";

  const filtered = blogs.filter((b) =>
    b.heading?.toLowerCase().includes(search.toLowerCase()) ||
    b.description?.toLowerCase().includes(search.toLowerCase()) ||
    b.author?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden mt-20 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-400/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-red-500/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm font-semibold tracking-widest">
            <BookOpen size={14} /> KNOWLEDGE HUB
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            <span className="block bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
              Engineering Insights
            </span>
            <span className="block text-orange-100 mt-2 text-2xl md:text-3xl font-bold">
              From Qatar's Most Trusted Technical Centre
            </span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-orange-100 leading-relaxed">
            Expert articles on fabrication, machining, vehicle engineering, marine services and more — straight from our workshop floor.
          </p>

          {/* Search */}
          <div className="mt-10 max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search articles by title, author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white text-gray-800 font-medium shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm"
            />
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          {!loading && !error && (
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Latest <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Articles</span>
              </h2>
              <div className="mt-3 w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto" />
              <p className="mt-4 text-slate-500 text-sm">{filtered.length} article{filtered.length !== 1 ? "s" : ""} found</p>
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <Loader2 className="animate-spin text-orange-500" size={48} />
              <p className="text-gray-500 font-medium">Articles load ho rahe hain...</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <AlertCircle className="text-red-400" size={48} />
              <p className="text-gray-600 font-semibold text-lg">Articles load nahi hue</p>
              <p className="text-gray-400 text-sm">{error}</p>
              <button onClick={() => window.location.reload()} className="mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:scale-105 transition">
                Dobara Try Karo
              </button>
            </div>
          )}

          {/* Blog Grid */}
          {!loading && !error && (
            <>
              {filtered.length === 0 ? (
                <div className="text-center py-20 text-gray-400 text-lg font-medium">
                  {blogs.length === 0 ? "Abhi koi article publish nahi hua." : "Koi article nahi mila."}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtered.map((blog, idx) => {
                    const imageUrl = getImageUrl(blog.image);
                    return (
                      <article
                        key={blog._id}
                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col"
                        style={{ animation: `fadeUp .5s ease ${idx * 80}ms both` }}
                      >
                        {/* Image */}
                        <div className="relative overflow-hidden h-52 bg-gradient-to-br from-orange-100 to-red-100 flex-shrink-0">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={blog.heading}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => { e.currentTarget.style.display = "none"; }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <BookOpen className="text-orange-300" size={44} />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                          {/* Author badge */}
                          {blog.author && (
                            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                                <User size={8} className="text-white" />
                              </div>
                              <span className="text-xs font-semibold text-gray-700">{blog.author}</span>
                            </div>
                          )}
                        </div>

                        {/* Card Content */}
                        <div className="p-5 flex flex-col flex-1">
                          {blog.createdAt && (
                            <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                              <Calendar size={11} />
                              {formatDate(blog.createdAt)}
                            </div>
                          )}

                          <h2 className="text-sm font-bold text-slate-900 leading-snug mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                            {blog.heading}
                          </h2>

                          <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3 flex-1">
                            {blog.description}
                          </p>

                          <div className="border-t border-slate-100 pt-4 mt-auto">
                            <Link
                              to={`/blog/${blog._id}`}
                              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                            >
                              Read Full Article
                              <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              {/* CTA */}
              <div className="mt-20 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 rounded-3xl p-10 text-center text-white relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
                <h3 className="text-2xl md:text-3xl font-black mb-3">Ready to Start Your Project?</h3>
                <p className="text-orange-100 mb-8 max-w-xl mx-auto">
                  Al Suwaidi Technical Centre — 32+ years of engineering excellence in Qatar.
                </p>
                <Link
                  to="/get-quote"
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-white text-orange-600 font-bold shadow-xl hover:scale-105 transition"
                >
                  Get a Free Quote <ArrowRight size={18} />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
