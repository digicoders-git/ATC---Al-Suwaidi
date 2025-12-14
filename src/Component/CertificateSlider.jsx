import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Award, Sparkles } from "lucide-react";
import "./CertificateSlider.css";

const certificates = [
  { id: 1, title: "ISO 9001:2015", image: "/certificates/iso-9001.jpg" },
  { id: 2, title: "Quality Management Certification", image: "/certificates/quality.jpg" },
  { id: 3, title: "Safety Compliance Certificate", image: "/certificates/safety.jpg" },
  { id: 4, title: "Industrial License", image: "/certificates/license.jpg" },
  { id: 5, title: "Environmental Compliance", image: "/certificates/environment.jpg" },
];

export default function CertificateSlider() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const visibleSlides = 3;

  // Auto slide (pause on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % certificates.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const next = () => setIndex((prev) => (prev + 1) % certificates.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-orange-500 animate-spin" size={22} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Our Certifications
            </h2>
            <Sparkles
              className="text-blue-500 animate-spin"
              size={22}
              style={{ animationDirection: "reverse" }}
            />
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Recognized standards that reflect our commitment to quality & compliance
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 🔒 PARENT SAFE PADDING (20px) */}
          <div className="overflow-hidden rounded-2xl px-[20px] py-[20px]">
            <div
              className="flex transition-all duration-1000 ease-out px-[20px]"
              style={{
                transform: `translateX(-${(index * 100) / visibleSlides}%)`,
              }}
            >
              {certificates
                .concat(certificates.slice(0, visibleSlides))
                .map((cert, i) => {
                  const centerIndex = (index + 1) % certificates.length;
                  const isCenter = i % certificates.length === centerIndex;

                  return (
                    <div
                      key={i}
                      className={`px-4 flex-shrink-0 transition-all duration-700 ${
                        isCenter ? "w-full sm:w-3/5 lg:w-2/5" : "w-full sm:w-1/3 lg:w-1/4"
                      }`}
                    >
                      <div
                        className={`bg-white rounded-3xl border-2 h-full relative overflow-hidden
                          transition-all duration-700 transform-gpu
                          ${
                            isCenter
                              ? "scale-125 z-30 shadow-2xl border-orange-300"
                              : "scale-90 opacity-60 shadow-md border-gray-200"
                          }
                        `}
                      >
                        {/* Image */}
                        <div
                          className={`flex items-center justify-center p-6 transition-all duration-500 ${
                            isCenter ? "h-[320px]" : "h-[200px]"
                          }`}
                        >
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className={`max-h-full object-contain transition-all duration-500 ${
                              isCenter ? "scale-110 drop-shadow-2xl" : "opacity-80"
                            }`}
                          />
                        </div>

                        {/* Title */}
                        <div
                          className={`border-t px-4 text-center transition-all duration-500 ${
                            isCenter ? "py-6" : "py-3"
                          }`}
                        >
                          <div
                            className={`flex justify-center items-center gap-2 font-semibold ${
                              isCenter ? "text-orange-600 text-base" : "text-gray-500 text-sm"
                            }`}
                          >
                            <Award size={isCenter ? 20 : 14} />
                            {cert.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/90 p-4 shadow-xl rounded-full hover:bg-orange-500 hover:text-white transition z-30"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white/90 p-4 shadow-xl rounded-full hover:bg-orange-500 hover:text-white transition z-30"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-orange-500 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
