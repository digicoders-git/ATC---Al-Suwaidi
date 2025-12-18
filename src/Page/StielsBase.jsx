import React from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  Wrench,
  Sparkles,
  Layers,
  Settings,
  GitMerge,
  Phone,
  Factory,
  Hammer,
  Cog,
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award,
} from "lucide-react";
import { motion } from "framer-motion"; // Fixed: Added motion import
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const servicesList = [
  {
    title: "Manufacturing Industry",
    desc: "Large-scale fabrication & assembly — tanks, silos, trailers and more.",
    icon: Factory,
    image: "/Gemini_Generated_Image_l22lsll22lsll22l.png",
    features: ["Industrial Machinery", "Storage Tanks", "Silos", "Trailers"],
  },
  {
    title: "Automobile Industry",
    desc: "Vehicle bodies, flatbeds, trailers and specialized transport solutions.",
    icon: Truck,
    image:
      "/assembly-line-production-new-car-automated-welding-car-body-production-line-robotic-arm-car-production-line-is-working.jpg",
    features: [
      "Vehicle Bodies",
      "Flatbeds",
      "Custom Trailers",
      "Transport Solutions",
    ],
  },
  {
    title: "Construction Industry",
    desc: "Structural steel, sheds, frames and site-ready fabrication works.",
    icon: Hammer,
    image: "/Construction Industry.png",
    features: [
      "Structural Steel",
      "Sheds & Frames",
      "Site Fabrication",
      "Steel Structures",
    ],
  },
  {
    title: "Fabrication Processes, Plan & Design",
    desc: "Design-for-manufacture, shop drawings and project planning support.",
    icon: Layers,
    to: "/services/fabrication-design",
    image: "/Fabrication Processes, Plan & Design.png",
    features: [
      "CAD Design",
      "3D Modeling",
      "Shop Drawings",
      "Project Planning",
    ],
  },
  {
    title: "Sheet & Pipe — Cutting, Bending & Rolling",
    desc: "Precision cutting, plate bending and rolling for plates & pipes.",
    icon: Settings,
    to: "/services/sheet-pipe",
    image: "/two-paddles-axe-and-leatherwork-9wNcZprwco8-unsplash.jpg",
    features: [
      "CNC Cutting",
      "Plate Bending",
      "Pipe Rolling",
      "Precision Work",
    ],
  },
  {
    title: "Assembling, Welding & Finishing",
    desc: "Welding, brazing, sandblasting and high-quality paint finishes.",
    icon: Sparkles,
    to: "/services/welding-finishing",
    image: "/kemal-kozbaev-mun6ABiRJws-unsplash.jpg",
    features: [
      "Arc Welding",
      "MIG/TIG Welding",
      "Sandblasting",
      "Paint Finishing",
    ],
  },
];

const stats = [
  { value: "30+", label: "Years Experience", icon: Clock },
  { value: "5000+", label: "Projects Completed", icon: CheckCircle },
  { value: "50+", label: "Expert Engineers", icon: Users },
  { value: "ISO 9001", label: "Certified Quality", icon: Award },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 mt-0 lg:mt-10">
      {/* ===== MODERNIZED HERO SECTION ===== */}
      <header className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 pt-20 lg:pt-0">
        {/* Main Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 rounded-full bg-white/20 backdrop-blur-sm text-white px-4 py-2 text-sm font-semibold mb-6 border border-white/30"
              >
                <Sparkles size={16} /> Precision Engineering & Fabrication
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight text-white">
                Industrial Steel
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mt-2">
                  Fabrication Masters
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-orange-100 text-lg leading-relaxed">
                Delivering industrial-grade fabrication across manufacturing,
                automobile, and construction sectors — from design & planning to
                cutting, welding, and finishing. Trusted for quality since 1992.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/get-quote"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-orange-700 font-bold shadow-xl hover:shadow-2xl transform transition-all hover:scale-105"
                >
                  <span>Get a Free Quote</span>
                  <Phone size={18} className="group-hover:animate-pulse" />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-white/50 text-white font-semibold hover:bg-white/10 hover:border-white transition"
                >
                  Explore Our Services
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Stats Bar - Modern Layout */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex flex-col items-center justify-center text-white">
                      <div className="text-3xl sm:text-4xl font-black">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-orange-200 mt-1 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/Gemini_Generated_Image_5h1am65h1am65h1a.png"
                  alt="Steel Fabrication Workshop"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

                {/* Floating Card - Updated Style */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                      <Shield className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-lg">
                        ISO 9001:2008 Certified
                      </div>
                      <div className="text-sm text-slate-600">
                        Quality fabrication since 1992
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <ServiceSooller />
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Section Header */}
        <section id="services" className="mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-orange-600 font-bold mb-4"
            >
              <div className="h-px w-8 bg-orange-600"></div>
              OUR CORE SERVICES
              <div className="h-px w-8 bg-orange-600"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-black text-slate-900 mb-6"
            >
              Comprehensive Steel Fabrication Solutions
            </motion.h2>

            <p className="text-lg text-slate-600">
              From initial design and prototyping to full shop fabrication and
              finishing — we deliver precision and quality across all
              industries.
            </p>
          </div>
        </section>

        {/* ===== MODERN SIDE-BY-SIDE SERVICE CARDS ===== */}
        <section className="mb-16 space-y-20">
          {servicesList.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // This creates the alternating side-by-side layout
              className={`group flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Card Image Side (Takes half width) */}
              <div className="flex-1 lg:w-1/2 w-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  {/* Frosted Glass Icon Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                    <div className="text-sm font-black text-slate-900">
                      {service.title.split(" ")[0]}
                    </div>
                    <div className="text-xs text-orange-600">Service</div>
                  </div>
                </motion.div>
              </div>

              {/* Card Text Side (Takes half width) */}
              <div className="flex-1 lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-100 to-red-50">
                    <service.icon className="text-orange-600" size={24} />
                  </div>
                  <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">
                    {service.title.split("—")[0]}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  {service.desc}
                </p>

                {/* Key Features as Modern Pills */}
                <div className="mb-8">
                  <h4 className="font-bold text-slate-900 mb-4 text-xl">
                    Key Capabilities:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-slate-800 font-medium rounded-full border border-orange-100 shadow-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-lg transition shadow-md"
                  >
                    View Service Details
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition"
                  >
                    Get Custom Quote
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </main>
      <GetDemoSection />

      {/* ===== MODERN PROCESS FLOW ===== */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              OUR PROCESS
            </span>

            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                4-Step Fabrication
              </span>{" "}
              Process
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A systematic, quality-driven approach from concept to completion
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Design & Planning",
                desc: "CAD modeling, engineering analysis, and detailed shop drawings.",
              },
              {
                step: "02",
                title: "Material Processing",
                desc: "Precision CNC cutting, bending, and rolling of plates & pipes.",
              },
              {
                step: "03",
                title: "Assembly & Welding",
                desc: "MIG / TIG & arc welding by certified professionals.",
              },
              {
                step: "04",
                title: "Finishing & QA",
                desc: "Sandblasting, painting, and ISO-certified quality inspection.",
              },
            ].map((process, idx) => (
              <div
                key={idx}
                className="relative group bg-white rounded-3xl p-8 text-center shadow-lg border border-orange-100 hover:shadow-2xl transition-all duration-300"
              >
                {/* glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 blur transition duration-500" />

                {/* content */}
                <div className="relative z-10">
                  <div className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-600 to-red-500 flex items-center justify-center text-white font-black text-lg shadow-lg">
                    {process.step}
                  </div>

                  <h4 className="font-black text-gray-900 mb-4 text-xl">
                    {process.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODERN CTA SECTION ===== */}
    </div>
  );
}
