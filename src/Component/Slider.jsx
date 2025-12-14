import React, { useState, useEffect } from "react";
import {
  Award,
  ArrowRight,
  Phone,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CheckCircle,
  ThumbsUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playing, setPlaying] = useState(true);

  const heroSlides = [
    {
      id: 1,
      title: "Premium Truck Loading Solutions",
      subtitle: "Industrial Excellence",
      description:
        "Advanced hydraulic systems and automated loading equipment for maximum efficiency and safety in cargo handling.",
      image: "/1.jpg",
      cta: "Explore Products",
    },
    {
      id: 2,
      title: "Smart Loading Automation",
      subtitle: "Technology Driven",
      description:
        "State-of-the-art automated loading systems that reduce operational costs by 40% and improve safety standards.",
      image: "/2.jpg",
      cta: "View Technology",
    },
    {
      id: 3,
      title: "Custom Truck Solutions",
      subtitle: "Tailored Design",
      description:
        "Bespoke truck equipment solutions designed specifically for your business needs and operational challenges.",
      image: "/3.jpg",
      cta: "Get Custom Quote",
    },
  ];

  // Autoplay
  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [playing, heroSlides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  return (
    <>
      {/* ================= HERO SLIDER ================= */}
      <section className="relative h-[86vh] mt-20 lg:mt-0.5 min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              currentSlide === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-2xl text-white">
                  <div
                    className={`transition-all duration-1000 ${
                      currentSlide === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-sm font-semibold mb-6">
                      <Award size={16} />
                      Industry Leader Since 1998
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                      {slide.title}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-8">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        to="/project"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-500 rounded-xl font-bold hover:scale-105 transition"
                      >
                        {slide.cta}
                        <ArrowRight size={20} />
                      </Link>

                      {/* CALL NOW */}
                      <a
                        href="tel:+97444601087"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/30 rounded-xl font-bold hover:bg-white/20 transition"
                      >
                        <Phone size={20} />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex gap-3 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-3 rounded-full transition-all ${
                currentSlide === i ? "w-10 bg-orange-500" : "w-3 bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full text-white"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full text-white"
        >
          <ChevronRight />
        </button>

        {/* Play / Pause */}
        <button
          onClick={() => setPlaying(!playing)}
          className="hidden md:block absolute top-4 right-4 p-3 bg-white/10 rounded-full text-white"
        >
          {playing ? <Pause /> : <Play />}
        </button>
      </section>

      {/* ================= STATS BAR ================= */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              {
                value: "5000+",
                label: "Projects Completed",
                icon: <CheckCircle className="text-green-400" />,
              },
              {
                value: "98%",
                label: "Client Satisfaction",
                icon: <ThumbsUp className="text-blue-400" />,
              },
              {
                value: "250+",
                label: "Active Clients",
                icon: <Users className="text-orange-400" />,
              },
              {
                value: "25+",
                label: "Years Experience",
                icon: <Award className="text-yellow-400" />,
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-2xl md:text-4xl font-bold text-white">
                    {item.value}
                  </span>
                </div>
                <span className="text-gray-300 text-sm md:text-base">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
