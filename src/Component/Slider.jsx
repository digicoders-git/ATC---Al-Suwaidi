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
      color: "from-orange-600 to-red-500",
    },
    {
      id: 2,
      title: "Smart Loading Automation",
      subtitle: "Technology Driven",
      description:
        "State-of-the-art automated loading systems that reduce operational costs by 40% and improve safety standards.",
      image: "/2.jpg",
      cta: "View Technology",
      color: "from-blue-600 to-cyan-500",
    },
    {
      id: 3,
      title: "Custom Truck Solutions",
      subtitle: "Tailored Design",
      description:
        "Bespoke truck equipment solutions designed specifically for your business needs and operational challenges.",
      image: "/3.jpg",
      cta: "Get Custom Quote",
      color: "from-purple-600 to-pink-500",
    },
  ];

  // Autoplay hero slider
  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [playing, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <>
      <section
        className="relative h-[86vh]  mt-[80px] lg:mt-[2px] min-h-[600px] overflow-hidden"
        aria-roledescription="carousel"
        aria-label="Hero slider"
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              currentSlide === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={currentSlide !== index}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: currentSlide === index ? "scale(1)" : "scale(1.05)",
              }}
            />

            {/* Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <div
                    className={`transform transition-all duration-1000 delay-300 ${
                      currentSlide === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white text-sm font-semibold mb-6">
                      <Award size={16} />
                      Industry Leader Since 1998
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-gray-200 mb-8 max-w-xl">
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
                        aria-label={slide.cta}
                      >
                        {slide.cta}
                        <ArrowRight size={20} />
                      </a>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                        aria-label="Call now"
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

        {/* Dots - Hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-4 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "w-10 bg-gradient-to-r from-orange-500 to-red-500"
                  : "w-3 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons - Hidden on mobile */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 z-20 hidden md:block"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 z-20 hidden md:block"
        >
          <ChevronRight size={24} />
        </button>

        {/* Play/Pause - Hidden on mobile */}
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause autoplay" : "Play autoplay"}
          className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 z-20 hidden md:block"
        >
          {playing ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </section>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {stat.icon}
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
