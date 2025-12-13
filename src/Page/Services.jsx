// components/Services.jsx
import React, { useState } from "react";
import {
  FaIndustry,
  FaPaintRoller,
  FaCogs,
  FaTruck,
  FaWrench,
  FaBoxes,
  FaHardHat,
  FaTools,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

/* ===================== DATA ===================== */

const SERVICES = [
  {
    id: "steel-fab",
    title: "Steel Fabrication Works",
    icon: FaIndustry,
    short:
      "Heavy & medium structural steel works — sheds, warehouses & assemblies.",
    details:
      "Fabrication of heavy and medium structural steel works, warehouse sheds, structural assemblies and onsite installation.",
    category: "Fabrication",
  },
  {
    id: "sandblast-paint",
    title: "Sandblasting & Painting",
    icon: FaPaintRoller,
    short:
      "Surface preparation, sandblasting, epoxy coating & protective finishes.",
    details:
      "Surface treatment including sandblasting, epoxy coating and finishing works to industry standards.",
    category: "Finishing",
  },
  {
    id: "machining",
    title: "Machining Works",
    icon: FaCogs,
    short: "Lathe, milling, shearing, bending, rolling & precision machining.",
    details:
      "Complete machining services: lathe, milling, shearing, bending, rolling, punching and press operations.",
    category: "Machining",
  },
  {
    id: "vehicle-body",
    title: "Vehicle Body Works",
    icon: FaTruck,
    short: "Road tankers, trailers, flatbeds & dry cargo transport bodies.",
    details:
      "Design & fabrication of road tankers, flatbed trailers and container carriers.",
    category: "Transportation",
  },
  {
    id: "welding",
    title: "Welding & Brazing",
    icon: FaWrench,
    short: "Certified welding & brazing for structural and pressure equipment.",
    details:
      "Welding and brazing works with QA/QC procedures for critical fabrications.",
    category: "Fabrication",
  },
  {
    id: "cabinet-trays",
    title: "Cabinet & Tray Manufacturing",
    icon: FaBoxes,
    short: "SS cable trays, meter cabinets & customized enclosures.",
    details:
      "Design & manufacture of cabinets, cable trays and utility housings.",
    category: "Cabinets",
  },
  {
    id: "structural-sheds",
    title: "Structural Steel Sheds",
    icon: FaHardHat,
    short: "Industrial sheds & steel buildings with erection services.",
    details:
      "Structural steel shed fabrication, site erection and finishing works.",
    category: "Construction",
  },
  {
    id: "custom-fab",
    title: "Custom Fabrication",
    icon: FaTools,
    short: "Tanks, piping, platforms & bespoke industrial solutions.",
    details:
      "Custom-built storage tanks, piping assemblies and special fabrications.",
    category: "Custom",
  },
];

/* ===================== COMPONENT ===================== */

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-600">
        {/* background effects */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-400/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-red-500/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm font-semibold tracking-widest">
            OUR SERVICES
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            <span className="block bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
              Engineering & Fabrication
            </span>
            <span className="block text-orange-100 mt-2">
              Solutions You Can Trust
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-orange-100">
            Al Suwaidi Technical Centre delivers end-to-end industrial
            engineering, fabrication and manufacturing services backed by
            decades of expertise.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="px-8 py-4 rounded-xl bg-white text-orange-600 font-bold shadow-lg hover:scale-105 transition"
            >
              Explore Services
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl border border-white/40 text-white font-bold hover:bg-white/10 transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES SECTION ===================== */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Our Core Services
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
              Comprehensive industrial services designed for durability,
              precision and long-term performance.
            </p>
          </div>

          {/* grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  onMouseEnter={() => setActive(s.id)}
                  onMouseLeave={() => setActive(null)}
                  className="group relative bg-white rounded-3xl p-6 border border-slate-100
                  shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                  style={{
                    animation: `fadeUp .6s ease ${idx * 90}ms both`,
                  }}
                >
                  {/* icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5
                    bg-gradient-to-br from-orange-500 to-red-500 shadow-lg"
                  >
                    <Icon className="text-white text-xl" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600">{s.short}</p>

                  <div className="mt-6 flex items-center justify-between">
                    <button className="flex items-center gap-2 text-sm font-semibold text-orange-600">
                      Learn more <FaChevronRight />
                    </button>
                    <span className="text-xs px-3 py-1 rounded-full border text-slate-400">
                      {s.category}
                    </span>
                  </div>

                  {/* hover details */}
                  <div
                    className={`mt-4 text-sm text-slate-700 transition-all duration-300 overflow-hidden ${
                      active === s.id
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {s.details}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl
              bg-gradient-to-r from-orange-600 to-red-500 text-white font-bold
              shadow-xl hover:scale-105 transition"
            >
              Request a Custom Quote
              <FaChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* animation */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
