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
import MainProductsComponent from "../Component/MainProductsComponent";
import ServiceSooller from "../Component/ServiceSooller";

const PROJECTS = [
  {
    id: "sewage-tanker",
    title: "Sewage Tanker",
    subtitle: "Heavy-duty tanker for municipal & industrial use",
    thumb: "/Cormercila/Sewage Tank.png",
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
    thumb: "/Cormercila/low bed trailer (spec).png",
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
    thumb: "/Cormercila/Flatbed Trailer  product card.png",
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
    id: "electric-service-cabinet",
    title: "Electrical Service Cabinet",
    subtitle: "Utility-approved electrical enclosure",
    thumb: "/Electrical Service Cabinet copy.png",
    short:
      "The Electrical Service Cabinet is designed to safely house electrical service connections and associated components. It provides protection against environmental exposure while allowing easy access for inspection, servicing, and meter reading. Suitable for outdoor installation and long-term utility use.",
    specs: [
      ["Construction", "Durable aluminium body"],
      ["Access", "Secure lockable service door"],
      ["Ventilation", "Proper ventilation for heat dissipation"],
      ["Installation", "Suitable for outdoor electrical installations"],
      ["Dimensions", "830 × 600 × 230 mm"],
    ],
    category: "Cabinets",
  },

  {
    id: "water-service-cabinet-1",
    title: 'Water Service Cabinet – 1" Dia',
    subtitle: "Single water meter cabinet",
    thumb: "/Water Service Cabinet 1 Dia copy 2.png",
    short:
      "The Water Service Cabinet – 1” Dia is designed to house a single domestic water meter and service pipe. It protects the meter from damage while allowing clear visibility and easy access for inspection and maintenance.",
    specs: [
      ["Application", "Single water meter installation"],
      ["Construction", "Weather-resistant aluminium enclosure"],
      ["Access", "Easy inspection and maintenance access"],
      ["Pipe Size", "For 15–42 mm dia pipe"],
      ["Dimensions", "830 × 300 × 230 mm"],
    ],
    category: "Cabinets",
  },

  {
    id: "water-service-cabinet-2",
    title: 'Water Service Cabinet – 2" Dia',
    subtitle: "High-capacity water meter cabinet",
    thumb: "/Water service cabinet 2 Dia copy 2.png",
    short:
      "The Water Service Cabinet – 2” Dia is suitable for larger water service connections requiring higher flow capacity. It offers sufficient internal space for larger pipes while ensuring protection, accessibility, and compliance with utility standards.",
    specs: [
      ["Application", "High-capacity water service connections"],
      ["Construction", "Strong and durable aluminium body"],
      ["Design", "Utility-compliant outdoor design"],
      ["Pipe Size", "For 54 mm dia pipe"],
      ["Dimensions", "750 × 650 × 300 mm"],
    ],
    category: "Cabinets",
  },
  {
    id: "fabrication-works",
    title: "Fabrication & Structural Works",
    subtitle: "Heavy & medium structural steel fabrication",
    thumb: "/Structural Steel Fabrication copy 2.png",
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
    thumb: "/Cormercila/Tank Trailer.png",
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
    thumb: "/Cormercila/Mobile Workshop Truck.png",
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
    thumb: "/Cormercila/Boom Truck.png",
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
    <div className="min-h-screen mt-[80px] lg:mt-[40px] bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden mt-20 sm:mt-5 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 pt-5 pt-lg-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              OUR
              PROJECTS
              className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-md text-white px-6 py-3 text-sm font-semibold mb-8 border border-white/20 shadow-lg"
            >
              <FaRocket size={18} className="text-orange-200" />
              PROJECT PORTFOLIO & ENGINEERING EXCELLENCE
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              OUR
              <span className=" ms-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                PROJECTS
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              Showcasing 32+ Years of Engineering Excellence & Quality
              Craftsmanship
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Explore our comprehensive portfolio of successfully completed
              industrial projects including heavy-duty trailers, precision
              fabrication works, KAHRAMAA-approved cabinets, and custom
              engineering solutions that define Qatar's infrastructure
              development.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects-grid")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105 hover:-translate-y-1"
              >
                <FaRocket size={20} className="group-hover:animate-pulse" />
                <span>View Our Projects</span>
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>Request Custom Project</span>
                <FaChevronRight size={20} />
              </Link>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto"
            >
              {[
                { value: "5000+", label: "Projects Completed", icon: FaAward },
                { value: "32+", label: "Years Experience", icon: FaCog },
                { value: "80+", label: "Expert Team", icon: FaUsers },
                { value: "98%", label: "Client Satisfaction", icon: FaAward },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <stat.icon className="text-orange-200" size={24} />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-white/80 font-medium text-center">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <ServiceSooller />
      </section>

      <MainProductsComponent />

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
              className="
    fixed inset-0 z-[9999]
    flex items-start justify-center
    px-3 py-4
    pt-20 sm:pt-60   /* 👈 MOBILE NAVBAR HEIGHT FIX */
  "
            >
              {/* BACKDROP */}
              <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setSelected(null)}
              />

              {/* MODAL */}
              <div
                className="
      relative z-10 w-full max-w-3xl bg-white rounded-2xl shadow-2xl
      max-h-[calc(100vh-6rem)]
      flex flex-col overflow-hidden
    "
              >
                {/* HEADER */}
                <div className="flex items-start justify-between gap-3 p-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {selected.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      {selected.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    aria-label="Close details"
                    className="p-2 rounded-lg hover:bg-slate-100 transition shrink-0"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* CONTENT */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* LEFT */}
                    <div>
                      <div className="w-full h-40 sm:h-44 bg-slate-100 rounded-lg overflow-hidden">
                        <img
                          src={selected.thumb}
                          alt={selected.title}
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

                    {/* RIGHT */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">
                        Technical Specifications
                      </h4>

                      <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                        {selected.specs.map(([k, v], idx) => (
                          <div
                            key={idx}
                            className="flex items-start justify-between gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100"
                          >
                            <div className="text-sm text-slate-700">{k}</div>
                            <div className="text-sm font-medium text-slate-900 text-right">
                              {v}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 text-xs text-slate-500">
                        Specifications are extracted from company technical
                        sheets.
                      </div>
                    </div>
                  </div>
                </div>

                {/* FOOTER */}
                <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-end">
                  <Link to="/contact" className="w-full sm:w-auto">
                    <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-red-500 text-white font-semibold">
                      Enquire About This
                    </button>
                  </Link>

                  <button
                    onClick={() => setSelected(null)}
                    className="w-full sm:w-auto px-4 py-2 rounded-lg border bg-white"
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
