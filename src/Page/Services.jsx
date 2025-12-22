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
    title: "Steel Fabrication Basics",
    icon: FaIndustry,
    short: "Heavy & medium structural steel works, warehouse sheds, industrial structures.",
    details: "Complete structural steel fabrication including heavy and medium steel works, warehouse sheds, industrial buildings, and custom steel structures with professional installation services.",
    category: "Fabrication",
  },
  {
    id: "vehicle-bodies",
    title: "Commercial Vehicle Bodies",
    icon: FaTruck,
    short: "Road tankers, trailers, flatbeds, dump trucks, .",
    details: "Design and fabrication of commercial vehicle bodies including fuel tankers, water tankers, flatbed trailers, dump trucks, refrigerated bodies, and custom transportation solutions.",
    category: "Vehicle Bodies",
  },
  {
    id: "engine-repair",
    title: "Vehicle Engine Repairing",
    icon: FaCogs,
    short: "Engine reconditioning, block boring, crankshaft grinding, and mechanical repairs.",
    details: "Professional engine repair and reconditioning services including block boring, crankshaft grinding, cylinder liner fitting, piston ring fitting, and complete engine assembly.",
    category: "Engine Repair",
  },
  {
    id: "gears-milling",
    title: "Gears Making & Milling",
    icon: FaWrench,
    short: "Precision gear manufacturing, milling operations, and machining services.",
    details: "Advanced gear making and milling services including gear hobbing, turning operations, drilling, boring, and precision machining for industrial applications.",
    category: "Machining",
  },
  {
    id: "bearings",
    title: "Bearings Service",
    icon: FaTools,
    short: "Bearing removal, fitting, hub bearings, and axle bearing services.",
    details: "Comprehensive bearing services including axle bearing removal and fitting, hub bearing installation, king pin services, and bearing maintenance for all vehicle types.",
    category: "Bearings",
  },
  {
    id: "wheels-repair",
    title: "Vehicle Wheels Repair",
    icon: FaBoxes,
    short: "Wheel alignment, balancing, disc facing, and rim repair services.",
    details: "Complete wheel repair services including wheel alignment, straightening and balancing, disc and drum facing, flywheel resurfacing, and custom wheel modifications.",
    category: "Wheel Services",
  },
  {
    id: "cabinets",
    title: "Cabinets Manufacturing",
    icon: FaHardHat,
    short: "KAHRAMAA-approved water and electric service cabinets.",
    details: "Manufacturing of KAHRAMAA-approved utility cabinets including water service cabinets, electric service cabinets, and custom enclosures with ISO quality certification.",
    category: "Manufacturing",
  },
  {
    id: "mro",
    title: "MRO Services",
    icon: FaPaintRoller,
    short: "Maintenance, repair, and overhaul services for industrial equipment.",
    details: "Comprehensive MRO services including body panel repair, chassis alignment, structural reinforcement, surface treatment, and preventive maintenance programs.",
    category: "MRO",
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
