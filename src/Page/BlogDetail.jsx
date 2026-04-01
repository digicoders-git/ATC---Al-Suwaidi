import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Loader2, AlertCircle, ArrowRight, BookOpen, Clock } from "lucide-react";

const API_BASE = "http://localhost:5000";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${API_BASE}/blog/get/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Blog nahi mila");
        return res.json();
      })
      .then((data) => {
        setBlog(data.data || data.blog || data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const getImageUrl = (image) => {
    if (!image) return null;
    if (typeof image === "string") return image.startsWith("http") ? image : `${API_BASE}/${image.replace(/^\//, "")}`;
    if (image.path) return image.path;
    return null;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  // Loading
  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 mt-20 bg-slate-50">
      <Loader2 className="animate-spin text-orange-500" size={52} />
      <p className="text-gray-500 font-medium text-lg">Article load ho raha hai...</p>
    </div>
  );

  // Error
  if (error) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 mt-20 bg-slate-50">
      <AlertCircle className="text-red-400" size={52} />
      <p className="text-gray-600 font-bold text-xl">Article nahi mila</p>
      <p className="text-gray-400 text-sm">{error}</p>
      <Link to="/blog" className="mt-3 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:scale-105 transition">
        <ArrowLeft size={16} /> Back to Blog
      </Link>
    </div>
  );

  const imageUrl = getImageUrl(blog?.image);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO BANNER */}
      <section className="relative mt-20 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-20">
          {/* Back */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 backdrop-blur border border-white/25 text-white text-sm font-semibold hover:bg-white/25 transition mb-10"
          >
            <ArrowLeft size={15} /> Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 mb-5">
            {blog?.author && (
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur rounded-full px-4 py-1.5 border border-white/20">
                <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
                  <User size={12} className="text-white" />
                </div>
                <span className="text-white text-sm font-semibold">{blog.author}</span>
              </div>
            )}
            {blog?.createdAt && (
              <div className="flex items-center gap-2 text-orange-100 text-sm">
                <Calendar size={13} />
                {formatDate(blog.createdAt)}
              </div>
            )}
            <div className="flex items-center gap-2 text-orange-100 text-sm">
              <Clock size={13} />
              {Math.max(1, Math.ceil((blog?.description?.length || 0) / 1000))} min read
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            {blog?.heading}
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-6 pb-20">

        {/* Featured Image — overlapping hero */}
        {imageUrl && (
          <div className="relative -mt-10 mb-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={imageUrl}
              alt={blog?.heading}
              className="w-full h-64 md:h-[420px] object-cover"
              onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }}
            />
          </div>
        )}

        {/* Article Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">

          {/* Article header strip */}
          <div className="h-1.5 bg-gradient-to-r from-orange-500 to-red-500" />

          <div className="p-8 md:p-12">
            {/* Article label */}
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="text-orange-500" size={18} />
              <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Article</span>
            </div>

            {/* Description / Body */}
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-8 whitespace-pre-line">
                {blog?.description}
              </p>
            </div>
          </div>

          {/* Author footer */}
          {blog?.author && (
            <div className="border-t border-slate-100 px-8 md:px-12 py-6 bg-slate-50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg flex-shrink-0">
                <User size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-900">{blog.author}</p>
                <p className="text-sm text-slate-500">Al Suwaidi Technical Centre</p>
              </div>
              {blog?.createdAt && (
                <span className="ml-auto text-xs text-slate-400 flex items-center gap-1">
                  <Calendar size={11} /> {formatDate(blog.createdAt)}
                </span>
              )}
            </div>
          )}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 rounded-2xl p-8 md:p-10 text-center text-white relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          <h3 className="text-2xl md:text-3xl font-black mb-2">Ready to Work With Us?</h3>
          <p className="text-orange-100 mb-7 max-w-lg mx-auto text-sm md:text-base">
            Qatar's most trusted engineering partner — 32+ years of precision, quality and reliability.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-orange-600 font-bold hover:scale-105 transition shadow-lg text-sm"
            >
              Get a Free Quote <ArrowRight size={15} />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition text-sm"
            >
              <ArrowLeft size={15} /> More Articles
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
