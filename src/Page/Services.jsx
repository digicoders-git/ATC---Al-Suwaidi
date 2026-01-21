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
    id: "steel-fabrication",
    title: "Fabrication & Structural Engineering Solutions",
    icon: FaIndustry,
    short:
      "Heavy and medium structural steel fabrication, industrial structures, base frames, skids, pipe spools, and custom fabrication works.",
    details:
      "Complete structural steel fabrication including heavy and medium steel works, industrial structures, base frames, skids, pipe spools, flanges, and engineered fabrication solutions with professional installation services.",
    category: "Fabrication",
  },
  {
    id: "vehicle-bodies",
    title: "Commercial Vehicle Body Building & Special Purpose Vehicles",
    icon: FaTruck,
    short:
      "Custom vehicle bodies including tankers, trailers, flatbeds, refrigerated bodies, and special-purpose transport solutions.",
    details:
      "Design and fabrication of commercial vehicle bodies including tankers, trailers, refrigerated bodies, mobile workshops, tail lift installations, and specialized transport solutions.",
    category: "Vehicle Bodies",
  },
  {
    id: "engine-repair",
    title: "Engine Reconditioning & Drivetrain Services",
    icon: FaCogs,
    short:
      "Engine reconditioning, cylinder head services, crankshaft grinding, transmission repair, and drivetrain refurbishment.",
    details:
      "Complete engine reconditioning, cylinder head services, transmission repair, differential and axle refurbishment for heavy-duty vehicles with professional assembly services.",
    category: "Engine Repair",
  },
  {
    id: "gears-milling",
    title:
      "Precision Machining, Gear Manufacturing & Power Transmission Services",
    icon: FaWrench,
    short:
      "Precision machining, gear milling & hobbing, gearboxes, reduction gears, and power transmission components.",
    details:
      "High-precision machining, gear milling & hobbing, gearboxes, reduction gears, and industrial power transmission components with quality assurance.",
    category: "Machining",
  },
  {
    id: "bearings",
    title: "Bearing, Shaft & Precision Fitment Services",
    icon: FaTools,
    short:
      "Bearing removal and fitting, bush installation, shaft alignment, stern tube bearings, and precision fitment services.",
    details:
      "Bearing installation, bush fitting, shaft alignment, stern tube bearings, and precision fitment for rotating assemblies with expert craftsmanship.",
    category: "Bearings",
  },
  {
    id: "wheels-repair",
    title: "Wheel & Rotating Component Repair Services",
    icon: FaBoxes,
    short:
      "Wheel alignment, balancing, disc and drum facing, flywheel resurfacing, and rotating component repair services.",
    details:
      "Wheel alignment, balancing, resurfacing, straightening, and rotating component repair for commercial and industrial vehicles with precision equipment.",
    category: "Wheel Services",
  },
  {
    id: "cabinets",
    title: "Cabinet Manufacturing (KAHRAMAA Approved)",
    icon: FaHardHat,
    short:
      "KAHRAMAA-approved electrical and water service cabinets, panel boards, and enclosure manufacturing.",
    details:
      "KAHRAMAA-approved electrical and water service cabinets, panels, and enclosure manufacturing with ISO quality certification and compliance.",
    category: "Manufacturing",
  },
  {
    id: "hydraulic-services",
    title: "Hydraulic, Pump & Fluid System Engineering Services",
    icon: FaPaintRoller,
    short:
      "Hydraulic cylinders, pumps, valves, actuators, cargo and ballast pump systems with precision repair and restoration.",
    details:
      "Hydraulic cylinders, pumps, valves, actuators, cargo and ballast pump systems with precision machining and restoration services for industrial applications.",
    category: "Hydraulics",
  },
  {
    id: "marine-services",
    title: "Marine, Shipyard & Heavy Equipment Engineering Services",
    icon: FaIndustry,
    short:
      "Engineering and machining support for marine vessels, shipyard equipment, cranes, and heavy construction machinery.",
    details:
      "Engineering and machining support for marine vessels, shipyard equipment, cranes, and heavy construction machinery with specialized expertise and equipment.",
    category: "Marine Engineering",
  },
];

/* ===================== COMPONENT ===================== */

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden mt-20 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <Link
                      to={`/services/${s.id}`}
                      className="flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
                    >
                      Learn more <FaChevronRight />
                    </Link>
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
