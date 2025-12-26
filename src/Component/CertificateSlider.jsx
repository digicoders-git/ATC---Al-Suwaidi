import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
  CheckCircle,
  X,
  Eye,
} from "lucide-react";
import "./CertificateSlider.css";

const certificates = [
  {
    id: 1,
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    image: "/Cetifiacte/ISO 9001- 2015 QMS (2)_page-0001.jpg",
  },
  {
    id: 2,
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety",
    image: "/Cetifiacte/ISO 45001- 2018 OHS_page-0001.jpg",
  },
  {
    id: 3,
    title: "ATC Computer Card",
    subtitle: "Digital Certification",
    image: "/Cetifiacte/ATC COMPUTER CARD_page-0001.jpg",
  },
  {
    id: 4,
    title: "Trade License",
    subtitle: "Official Business License",
    image: "/Cetifiacte/ATC TRADE LICENSE UPDATED_page-0001.jpg",
  },
  {
    id: 5,
    title: "KAHRAMAA Approval",
    subtitle: "Utility Services Authorization",
    image: "/Cetifiacte/KAHRAMAA APPROVAL_page-0001.jpg",
  },
];

export default function CertificateSlider() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  const visibleSlides = 3;

  /* AUTO SLIDE */
  useEffect(() => {
    if (hovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % certificates.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [hovered]);

  const next = () => setIndex((prev) => (prev + 1) % certificates.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));

  return (
    <section
      id="certificate"
      className="relative py-28 bg-[#c71c05fa] text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f9731615,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 font-semibold">
            <Shield size={20} />
            CERTIFICATIONS & COMPLIANCE
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black">
            Trusted <span className="text-white">Excellence</span>
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-white text-lg">
            Globally recognized certifications validating quality, safety &
            compliance
          </p>
        </div>

        {/* SLIDER */}
        <div
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="overflow-hidden px-10">
            <div
              className="flex gap-8 transition-transform duration-1000 ease-out"
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
                      className={`flex-shrink-0 transition-all duration-700 ${
                        isCenter
                          ? "w-full sm:w-3/5 lg:w-2/5"
                          : "w-full sm:w-1/3 lg:w-1/4"
                      }`}
                    >
                      <div
                        className={`group relative rounded-3xl overflow-hidden
                        bg-white/5 backdrop-blur-xl border border-white/15
                        shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                        transition-all duration-700 cursor-pointer
                        ${
                          isCenter
                            ? "scale-110 ring-2 ring-orange-500/60"
                            : "scale-95 opacity-60"
                        }`}
                        onClick={() => setActiveCert(cert)}
                      >
                        {/* IMAGE */}
                        <div
                          className={`relative ${isCenter ? "h-80" : "h-64"}`}
                        >
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover"
                          />

                          {/* VERIFIED */}
                          <div className="absolute top-4 left-4 flex items-center gap-2 bg-green-500/90 px-3 py-1 rounded-full text-xs font-semibold">
                            <CheckCircle size={14} />
                            Verified
                          </div>

                          {/* HOVER VIEW */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                            <Eye size={36} />
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-6 text-center">
                          <div className="flex justify-center mb-3">
                            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl">
                              <Award size={22} />
                            </div>
                          </div>
                          <h3 className="font-bold text-lg">{cert.title}</h3>
                          <p className="text-gray-300 text-sm">
                            {cert.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* NAV BUTTONS */}
          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-orange-500 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-orange-500 transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-12 gap-3">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all ${
                i === index ? "w-12 h-3 bg-orange-500" : "w-3 h-3 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-center px-4 pt-[100px]"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 text-white flex justify-between">
              <div>
                <h3 className="text-2xl font-bold">{activeCert.title}</h3>
                <p className="opacity-90">{activeCert.subtitle}</p>
              </div>
              <button onClick={() => setActiveCert(null)}>
                <X />
              </button>
            </div>

            <div className="p-6 flex justify-center">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="max-h-[70vh] rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
