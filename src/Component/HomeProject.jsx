import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "swiper/css";

const HOME_PROJECTS = [
  {
    id: "sewage-tanker",
    title: "Sewage Tanker",
    thumb: "/Sewage Tanker.jpg",
    short: "Municipal & Industrial Solution",
    description:
      "Heavy-duty sewage tankers with reinforced shells, internal baffles and high-capacity discharge systems.",
  },
  {
    id: "low-bed",
    title: "Low Bed Trailer",
    thumb: "/download.jpg",
    short: "Heavy Machinery Transport",
    description:
      "Designed for oversized equipment with superior load distribution and high-tensile structure.",
  },
  {
    id: "flat-bed",
    title: "Flat Bed Trailer",
    thumb: "/Flat Bed Trailer.jpg",
    short: "Flexible Logistics",
    description:
      "Multi-purpose flatbed trailers suitable for containers and bulk cargo.",
  },
  {
    id: "cabinet",
    title: "Water Service Cabinet",
    thumb: "/Fuel Tanker Trailer copy.jpg",
    short: "Aluminium Cabinets",
    description:
      "Corrosion-resistant aluminium cabinets with secure housing & ventilation.",
  },
  {
    id: "fabrication",
    title: "Fabrication Works",
    thumb: "/Fabrication & Structural Works.jpg",
    short: "Structural & Custom Works",
    description:
      "Complete fabrication solutions including platforms, sheds & steel structures.",
  },
];

export default function HomeProjectsSlider() {
  const swiperRef = useRef(null);
  const [autoPlayOn, setAutoPlayOn] = useState(true);
  const navigate = useNavigate();

  const handleNav = (dir) => {
    if (!swiperRef.current) return;
    swiperRef.current.autoplay.stop();
    setAutoPlayOn(false);
    dir === "next"
      ? swiperRef.current.slideNext()
      : swiperRef.current.slidePrev();
  };

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* animated background blobs */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-red-400/20 rounded-full blur-3xl animate-pulse" />

      {/* glass wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold tracking-wide">
            PROJECT SHOWCASE
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-900">
            Our Key Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">
            Precision engineered fabrication & transport solutions built to
            last.
          </p>
        </div>

        {/* navigation buttons */}
        <div className="hidden lg:block absolute top-1/2 -left-10 z-20">
          <button
            onClick={() => handleNav("prev")}
            className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center
            hover:bg-orange-600 hover:text-white transition-all duration-300"
          >
            <FaChevronLeft />
          </button>
        </div>

        <div className="hidden lg:block absolute top-1/2 -right-10 z-20">
          <button
            onClick={() => handleNav("next")}
            className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center
            hover:bg-orange-600 hover:text-white transition-all duration-300"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* slider */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={(s) => (swiperRef.current = s)}
          autoplay={
            autoPlayOn ? { delay: 2800, disableOnInteraction: false } : false
          }
          loop
          spaceBetween={30}
          grabCursor
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {HOME_PROJECTS.map((p) => (
            <SwiperSlide key={p.id}>
              <div
                className="group h-full rounded-3xl overflow-hidden
                bg-white border border-orange-100 shadow-lg
                hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.thumb}
                    alt={p.title}
                    className="w-full h-full object-cover
                    transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* content */}
                <div className="p-7 flex flex-col min-h-[280px]">
                  <h3 className="text-xl font-bold text-slate-900">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-orange-600">
                    {p.short}
                  </p>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-grow">
                    {p.description}
                  </p>

                  <button
                    onClick={() => navigate("/project")}
                    className="mt-6 inline-flex items-center justify-center gap-2
                    px-5 py-3 rounded-xl font-semibold text-white
                    bg-gradient-to-r from-orange-500 to-red-500
                    hover:scale-105 transition-all duration-300"
                  >
                    View Project →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
