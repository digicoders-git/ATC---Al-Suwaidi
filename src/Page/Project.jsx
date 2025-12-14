// components/Projects.jsx
import React, { useState, useEffect } from "react";
import {
  FaChevronRight,
  FaTimes,
  FaExternalLinkAlt,
  FaRocket,
  FaPlay,
  FaAward,
  FaUsers,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GetDemoSection from "../Component/GetDemoSection";

const PROJECTS = [
  {
    id: "sewage-tanker",
    title: "Sewage Tanker",
    subtitle: "Heavy-duty tanker for municipal & industrial use",
    thumb: "/Sewage Tanker.jpg", // replace with real images
    short:
      "Robust sewage tanker designed for heavy transport and discharge operations.",
    specs: [
      ["Overall Length", "8060 mm"],
      ["Diameter", "1950 mm"],
      ["Shell Thickness", "6 mm"],
      ["Baffle Plate Thickness", "6 mm"],
      ["Dish End Thickness", "6 mm"],
      ["Baffle Plates", "4 Nos."],
      ["Man Hole", "2 Nos (450 mm Dia)"],
      ["Suction Valve", '3" – Two Nos.'],
      ["Delivery Valve", '4" – Four Nos.'],
      ["Main Axle", "356 “I” Beam"],
      ["Bogie Axle", "32 Ton Capacity"],
      ["Side Marker Lights", "6 Nos each side"],
      ["Finish", "External Two Coat Epoxy"],
    ],
    category: "Vehicle Bodies",
  },
  {
    id: "low-bed",
    title: "Low Bed Trailer",
    subtitle: "Heavy haulage low bed trailer",
    thumb: "/download.jpg",
    short:
      "Low bed for transporting heavy machinery with high-strength chassis & bogie axles.",
    specs: [
      ["Overall Length", "16000 mm"],
      ["Width", "3200 mm"],
      ["Height (from ground)", "1150 mm"],
      ["Chassis", "533 x 210 x 92 Kg/m I Beam"],
      ["Side Beam", "350 x 175 x 49.6 Kg/m I Beam"],
      ["Cross Members", "150 x 75 x 14 Kg/m"],
      ["Floor", "5 mm Checkered Plate"],
      ["Axle", "3 x 16 Ton (Under Slung Suspension)"],
      ["King Pin", '2" standard'],
      ["Finish", "Two Coat Epoxy"],
      ["Side Marker Lights", "8 Nos each side"],
    ],
    category: "Trailers",
  },
  {
    id: "flat-bed-trailer",
    title: "Flat Bed Trailer",
    subtitle: "Multi-purpose flatbed trailer",
    thumb: "/Flat Bed Trailer.jpg",
    short:
      "Flatbed trailer for container & bulk cargo — durable chassis and checkered floor.",
    specs: [
      ["Overall Length", "12500 mm"],
      ["Width", "2500 mm"],
      ["Chassis", "400 x 200 x 66 Kg/m I Beam"],
      ["Cross Members", "4 mm Thick MS Brackets"],
      ["Floor", "3 mm Checkered Plate"],
      ["Bogie Axle", "32 Ton Capacity"],
      ["Finish", "Two Coat Epoxy"],
      ["Side Marker Lights", "6 Nos each side"],
    ],
    category: "Trailers",
  },
  {
    id: "water-service-cabinet-1",
    title: 'Water Service Cabinet (1" dia)',
    subtitle: "Service cabinet for residential connections",
    thumb: "/download.jpgWater Service Cabinet.jpg",
    short:
      "Aluminium water service cabinet with ventilation and lock provision for single meter.",
    specs: [
      ["Body", "3 mm thickness aluminium sheet"],
      ["Door Panel", "6 mm wired glass + 2 x 8 mm triangular locks"],
      ["Holes", "02 Nos. 42 mm dia (top & bottom)"],
      ["Color", "White"],
      ["Size", "830 x 300 x 230 mm (for 15-42 mm pipe)"],
    ],
    category: "Cabinets",
  },
  {
    id: "water-service-cabinet-2",
    title: 'Water Service Cabinet (2" dia)',
    subtitle: "Larger service cabinet for 54 mm pipe",
    thumb: "/Water Service Cabinet.jpg",
    short:
      "Aluminium cabinet with louvered ventilation and space for Meters & branding.",
    specs: [
      ["Body", "3 mm thickness aluminium sheet"],
      ["Door Panel", "6 mm wired glass + 2 x 8 mm triangular locks"],
      ["Holes", "02 Nos. 56 mm dia (both sides)"],
      ["Color", "White"],
      ["Size", "750 x 650 x 300 mm (for 54 mm pipe)"],
    ],
    category: "Cabinets",
  },
  {
    id: "electric-service-cabinet",
    title: "Electric Service Cabinet",
    subtitle: "Cabinet for electric service piping & meter",
    thumb: "/Electric Service Cabinet.jpg",
    short:
      "Robust electric service cabinet with service door and ventilation for cable entries.",
    specs: [
      ["Body", "3 mm thickness aluminium sheet"],
      ["Holes", "02 Nos 112 mm dia at bottom for electric pipe"],
      ["Door", "1 No 100 x 100 mm service door with lock"],
      ["Glass", "6 mm wired glass + 2 x 8 mm triangular locks"],
      ["Color", "White"],
      ["Size", "830 x 600 x 200 mm"],
    ],
    category: "Cabinets",
  },
  {
    id: "fabrication-works",
    title: "Fabrication & Structural Works",
    subtitle: "Heavy & medium structural steel fabrication",
    thumb: "/Fabrication & Structural Works.jpg",
    short:
      "Custom fabrication including sheds, warehouses, cable trays, panels and structural assemblies.",
    specs: [
      ["Services", "Welding, Die Making, Machining, Fabricating"],
      ["Materials", "MS, SS, All grades as per spec"],
      ["Finish", "Sandblasting & two coat epoxy painting"],
    ],
    category: "Fabrication",
  },
  {
    id: "fuel-tanker",
    title: "Fuel Tanker Trailer",
    subtitle: "High-capacity fuel transport tanker",
    thumb: "/Fuel Tanker Trailer.jpg",
    short:
      "Specialized fuel tanker with safety features for petroleum product transportation.",
    specs: [
      ["Overall Length", "12000 mm"],
      ["Diameter", "2200 mm"],
      ["Capacity", "35000 Liters"],
      ["Shell Thickness", "8 mm"],
      ["Compartments", "4 Nos."],
      ["Safety Valves", "Emergency shut-off system"],
      ["Loading System", "Bottom loading with API coupling"],
      ["Discharge Pump", "Self-priming centrifugal"],
      ["Axle Configuration", "3 x 13 Ton BPW Axles"],
      ["Braking System", "Air brake with ABS"],
      ["Finish", "Specialized fuel-resistant coating"],
    ],
    category: "Tankers",
  },
  {
    id: "container-trailer",
    title: "Container Trailer",
    subtitle: "20ft & 40ft container transport trailer",
    thumb: "/Container Trailer.jpg",
    short:
      "Multi-purpose container trailer with twist locks and adjustable chassis for standard containers.",
    specs: [
      ["Overall Length", "13600 mm"],
      ["Width", "2500 mm"],
      ["Container Size", "20ft & 40ft compatible"],
      ["Chassis", "450 x 200 x 72 Kg/m I Beam"],
      ["Twist Locks", "8 Nos automatic"],
      ["Landing Legs", "Heavy duty mechanical"],
      ["Suspension", "Air suspension system"],
      ["Axles", "3 x 13 Ton capacity"],
      ["King Pin", '2" & 3.5" compatible'],
      ["Finish", "Hot dip galvanized"],
    ],
    category: "Trailers",
  },
  {
    id: "mobile-workshop",
    title: "Mobile Workshop Unit",
    subtitle: "Self-contained mobile maintenance facility",
    thumb: "/Mobile Workshop Unit.jpg",
    short:
      "Fully equipped mobile workshop with tools, compressor, and service equipment for field operations.",
    specs: [
      ["Overall Length", "8500 mm"],
      ["Width", "2500 mm"],
      ["Height", "3200 mm"],
      ["Workshop Area", "15 sq meters"],
      ["Power Supply", "25 KVA Generator"],
      ["Air Compressor", "500 CFM capacity"],
      ["Tool Storage", "Organized cabinet system"],
      ["Lifting Equipment", "2 Ton crane"],
      ["Welding Setup", "AC/DC welding station"],
      ["Climate Control", "AC & heating system"],
      ["Safety Features", "Fire suppression system"],
    ],
    category: "Mobile Units",
  },
  {
    id: "cement-mixer",
    title: "Cement Mixer Truck",
    subtitle: "Ready-mix concrete transport & delivery",
    thumb: "/Cement Mixer Truck.jpg",
    short:
      "High-capacity cement mixer with hydraulic drum rotation for concrete delivery operations.",
    specs: [
      ["Drum Capacity", "8 cubic meters"],
      ["Drum Material", "High-strength steel"],
      ["Rotation Speed", "0-14 RPM variable"],
      ["Hydraulic System", "Closed loop system"],
      ["Discharge Height", "1200 mm"],
      ["Water Tank", "500 Liters capacity"],
      ["Chute Length", "3000 mm extendable"],
      ["Drive System", "PTO driven hydraulic"],
      ["Control System", "Joystick operation"],
      ["Finish", "Corrosion resistant coating"],
    ],
    category: "Concrete Equipment",
  },
  {
    id: "crane-truck",
    title: "Mobile Crane Truck",
    subtitle: "Heavy lifting mobile crane solution",
    thumb: "/Mobile Crane Truck.avif",
    short:
      "Truck-mounted crane with telescopic boom for construction and industrial lifting operations.",
    specs: [
      ["Lifting Capacity", "25 Tons"],
      ["Boom Length", "30 meters telescopic"],
      ["Outrigger Span", "6.2 x 6.0 meters"],
      ["Rotation", "360° continuous"],
      ["Hydraulic System", "Load sensing system"],
      ["Control", "Radio remote + cabin"],
      ["Stabilizers", "4 x hydraulic outriggers"],
      ["Safety Systems", "Load moment indicator"],
      ["Power", "Engine PTO driven"],
      ["Certification", "CE marked"],
    ],
    category: "Lifting Equipment",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen mt-[80px] lg:mt-[2px] bg-white">
      {/* Hero Section */}
      <section className="relative lg:mt-0 min-h-screen  flex items-center overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 pb-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 mt-10 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold tracking-wider">
                    OUR PROJECTS
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl   font-bold leading-none">
                  <span className="block bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                    Engineering Excellence
                  </span>

                  <span className="block text-white ">Delivered</span>
                </h1>

                <p className="text-xl md:text-2xl font-light max-w-2xl text-orange-100 leading-relaxed">
                  Discover our portfolio of
                  <span className="text-orange-300 font-semibold">
                    {" "}
                    world-class industrial projects{" "}
                  </span>
                  - from heavy-duty trailers to precision fabrication works that
                  define Qatar's infrastructure.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-2">
                    102+
                  </div>
                  <div className="text-orange-200 text-sm font-medium">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-2">32+</div>
                  <div className="text-orange-200 text-sm font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-2">
                    100%
                  </div>
                  <div className="text-orange-200 text-sm font-medium">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() =>
                    document
                      .getElementById("projects-grid")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    View Our Projects
                    <FaRocket className="group-hover:animate-bounce" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group flex items-center gap-4 text-white hover:text-orange-300 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <FaPlay className="ml-1" />
                  </div>
                  <div>
                    <div className="font-semibold">Project Showcase</div>
                    <div className="text-sm text-orange-200">
                      2 min overview
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Side - Truck Loader Image */}
            <div
              className="relative animate-slide-in-right"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Main Image Container */}
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700">
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src="/truck-loader.jpg"
                      alt="Heavy Duty Truck Loader"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='100%25' height='100%25' fill='%23374151'/%3E%3Cg transform='translate(300,200)'%3E%3Cpath d='M-80,-60 L80,-60 L80,60 L-80,60 Z' fill='%23f97316' stroke='%23ffffff' stroke-width='2'/%3E%3Ccircle cx='-50' cy='40' r='15' fill='%23000000'/%3E%3Ccircle cx='50' cy='40' r='15' fill='%23000000'/%3E%3Crect x='-60' y='-40' width='120' height='60' fill='%23ef4444'/%3E%3Ctext x='0' y='5' text-anchor='middle' fill='%23ffffff' font-family='Arial' font-size='14' font-weight='bold'%3ETruck Loader%3C/text%3E%3C/g%3E%3C/svg%3E";
                      }}
                    />
                  </div>

                  {/* Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4">
                    <h3 className="text-white font-bold text-lg mb-2">
                      Heavy-Duty Equipment
                    </h3>
                    <p className="text-orange-200 text-sm">
                      Industrial grade machinery for Qatar's infrastructure
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Feature Cards */}
              <div
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-white/20 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                  <h4 className="font-bold text-slate-900">Quality Assured</h4>
                </div>
                <p className="text-slate-600 text-sm">
                  ISO 9001:2015 Certified
                </p>
              </div>

              <div
                className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-white/20 animate-float"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                  <h4 className="font-bold text-slate-900">On-Time Delivery</h4>
                </div>
                <p className="text-slate-600 text-sm">100% Track Record</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section
        id="projects-grid"
        className="py-20 bg-gradient-to-br from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 to-red-100 px-5 py-2 rounded-full text-sm font-semibold mx-auto shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              PROJECT SHOWCASE
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
              Featured Projects
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto  font-semibold">
              Representative projects & shop-fabricated equipment — specs and
              highlights from our portfolio.
            </p>
          </div>

          {/* grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((p, i) => (
              <article
                key={p.id}
                className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-400"
                style={{ animation: `fadeInUp .6s ease ${i * 80}ms both` }}
              >
                {/* top image area */}
                <div className="h-44 bg-slate-100 flex items-center justify-center overflow-hidden">
                  {/* placeholder or real image */}
                  <img
                    src={p.thumb}
                    alt={p.title}
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' alignment-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%239ca3af'%3EProject Image%3C/text%3E%3C/svg%3E";
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">{p.subtitle}</p>

                  <p className="text-sm text-slate-600 mt-4 line-clamp-3">
                    {p.short}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setSelected(p)}
                      className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-orange-600 to-red-500 text-white rounded-xl font-semibold shadow hover:scale-[1.02] transition"
                      aria-haspopup="dialog"
                      aria-controls={`project-modal-${p.id}`}
                    >
                      View Details <FaChevronRight />
                    </button>

                    <span className="text-xs text-slate-400 px-3 py-1 border rounded-full">
                      {p.category}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* modal */}
          {selected && (
            <div
              id={`project-modal-${selected.id}`}
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
            >
              <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setSelected(null)}
              />
              <div className="relative z-10 w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {selected.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {selected.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    aria-label="Close details"
                    className="p-2 rounded-lg hover:bg-slate-100 transition"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="w-full h-44 bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center">
                      <img
                        src={selected.thumb}
                        alt={selected.title}
                        onError={(e) =>
                          (e.currentTarget.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' alignment-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%239ca3af'%3EProject Image%3C/text%3E%3C/svg%3E")
                        }
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="mt-4 text-sm text-slate-600">
                      {selected.short}
                    </p>

                    <Link
                      to="/contact"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:underline"
                    >
                      Request Similar Project <FaExternalLinkAlt />
                    </Link>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">
                      Technical Specifications
                    </h4>

                    <div className="space-y-2 max-h-[320px] overflow-auto pr-2">
                      {selected.specs.map(([k, v], idx) => (
                        <div
                          key={idx}
                          className="flex items-start justify-between gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100"
                        >
                          <div className="text-sm text-slate-700">{k}</div>
                          <div className="text-sm font-medium text-slate-900">
                            {v}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 text-xs text-slate-500">
                      Specifications are extracted from company technical
                      sheets.
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100 flex items-center justify-end gap-3">
                  <Link to="/contact">
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-red-500 text-white font-semibold">
                      Enquire About This
                    </button>
                  </Link>

                  <button
                    onClick={() => setSelected(null)}
                    className="px-4 py-2 rounded-lg bg-white border text-slate-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced CSS Animations */}
          <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slide-in-left {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes slide-in-right {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          
          @keyframes tilt {
            0%, 50%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(1deg); }
            75% { transform: rotate(-1deg); }
          }
          
          .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
          .animate-slide-in-right { animation: slide-in-right 0.8s ease-out 0.2s both; }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-tilt { animation: tilt 10s infinite linear; }
          
          @media (prefers-reduced-motion: no-preference) {
            article { will-change: transform, opacity; }
          }
        `}</style>
        </div>
      </section>

      <GetDemoSection />
      {/* Our Projects Section */}
      <div className="max-w-7xl mx-auto px-4 my-10">
        <section className="mb-24 flex flex-col items-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Completed Projects
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              A glimpse of our successfully completed industrial and mechanical
              projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {[
              {
                title: "Industrial Sheet Metal Fabrication",
                category: "Manufacturing",
                desc: "Custom sheet metal fabrication for industrial applications with high precision.",
              },
              {
                title: "Automotive Engine Overhaul",
                category: "Automotive",
                desc: "Complete engine rebuilding and performance optimization project.",
              },
              {
                title: "Brake & Suspension System Upgrade",
                category: "Mechanical",
                desc: "Heavy-duty brake and suspension upgrade for fleet vehicles.",
              },
              {
                title: "Powder Coating Line Setup",
                category: "Surface Treatment",
                desc: "Installation of automated powder coating and finishing system.",
              },
              {
                title: "Factory Equipment Assembly",
                category: "Assembly",
                desc: "Mechanical assembly and testing of factory machinery units.",
              },
              {
                title: "Quality Inspection & Testing Unit",
                category: "Quality Control",
                desc: "Setup of inspection and functional testing station.",
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                whileHover={{ y: -10, scale: 1.04 }}
                className="group relative w-full max-w-sm 
          rounded-2xl bg-white/80 backdrop-blur-xl 
          border border-gray-200 p-6 
          shadow-sm hover:shadow-2xl transition-all"
              >
                {/* Category */}
                <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">
                  {project.category}
                </span>

                {/* Title */}
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-orange-400/10 to-red-400/10 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
