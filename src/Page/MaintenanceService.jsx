import React from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  Wrench,
  Cog,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Award,
  Sparkles,
  HardHat,
  Factory,
  RotateCw,
  Circle,
  Square,
  Hexagon,
  GitPullRequest,
  Package,
  Zap,
  Hammer,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const maintenanceServices = [
  {
    title: "🧱 Under-Floor Damage Repair",
    desc: "Our repair process includes inspection, removal of damaged sections, structural reinforcement, and replacement using suitable steel or aluminium components. Under-floor damage repair focuses on restoring the structural base of vehicle bodies affected by impact, corrosion, overloading, or long-term wear.",
    image: "/MRO/Under-Floor Damage Repair.png",
    features: [
      "Inspection of under-floor beams and supports",
      "Removal of corroded or damaged floor sections",
      "Structural welding and reinforcement",
      "Load-bearing strength restoration",
    ],
    benefits: [
      "✔ Restored structural integrity",
      "✔ Improved load distribution", 
      "✔ Enhanced safety and durability",
    ],
    icon: Square,
  },
  {
    title: "🧱 Floor & Wall Damage Repair",
    desc: "We restore alignment, strength, and rigidity while maintaining operational functionality. Floor and wall damage repair addresses dents, cracks, deformation, and wear on internal and external body panels caused by cargo movement, impact, or environmental exposure.",
    image: "/MRO/Floor & Wall Damage Repair.png",
    features: [
      "Floor plate straightening and replacement",
      "Side wall panel repair and reinforcement",
      "Alignment correction",
      "Structural fastening and welding",
    ],
    benefits: [
      "✔ Strong and reinforced panels",
      "✔ Improved durability under heavy use",
      "✔ Extended vehicle service life",
    ],
    icon: Hammer,
  },
  {
    title: "🚪 Door & Edge Damage Repair",
    desc: "This service prevents water ingress, load damage, and operational delays. Door and edge damage repair restores damaged doors, hinges, frames, and body edges to ensure smooth operation and proper sealing.",
    image: "/MRO/Door & Edge Damage Repair.png",
    features: [
      "Door panel straightening and repair",
      "Hinge replacement or fabrication",
      "Edge reinforcement and sealing",
      "Locking and alignment correction",
    ],
    benefits: [
      "✔ Smooth and reliable door operation",
      "✔ Proper sealing and alignment",
      "✔ Reduced future damage",
    ],
    icon: Package,
  },
  {
    title: "🧰 Structural Reinforcement & Strengthening",
    desc: "This service improves long-term durability and prevents recurring damage. Structural reinforcement strengthens weakened or stress-prone sections of vehicle bodies exposed to heavy loads or harsh operating conditions.",
    image: "/MRO/Structural Reinforcement & Strengthening.png",
    features: [
      "Identification of stress-prone zones",
      "Addition of steel reinforcements and supports",
      "Welding and structural integration",
      "Load capacity enhancement",
    ],
    benefits: [
      "✔ Increased body strength",
      "✔ Improved load resistance",
      "✔ Longer asset lifespan",
    ],
    icon: Shield,
  },
  {
    title: "🔩 Body Panel Repair & Replacement",
    desc: "Panels are repaired where possible and replaced when necessary. Body panel repair and replacement restores damaged external and internal panels while maintaining structural continuity and appearance.",
    image: "/MRO/Body Panel Repair & Replacement (2).png",
    features: [
      "Panel dent removal and straightening",
      "Replacement of severely damaged panels",
      "Panel alignment and fitting",
      "Structural fastening and finishing",
    ],
    benefits: [
      "✔ Restored body appearance",
      "✔ Structural integrity maintained",
      "✔ Reduced risk of progressive damage",
    ],
    icon: Wrench,
  },
  {
    title: "🛠️ Chassis & Frame Alignment",
    desc: "This service improves drivability and reduces uneven wear. Chassis and frame alignment corrects misalignment caused by impact, uneven loading, or prolonged use, ensuring stable vehicle operation.",
    image: "/MRO/Chassis & Frame Alignment.png",
    features: [
      "Alignment measurement and inspection",
      "Frame straightening and correction",
      "Structural repositioning",
      "Alignment verification",
    ],
    benefits: [
      "✔ Correct chassis geometry",
      "✔ Improved vehicle stability",
      "✔ Reduced component wear",
    ],
    icon: Settings,
  },
  {
    title: "🧯 Corrosion Repair & Prevention",
    desc: "Essential for vehicles operating in humid or harsh environments. Corrosion repair and prevention removes rust-affected areas and applies protective treatments to prevent future corrosion.",
    image: "/MRO/Corrosion Repair & Prevention.png",
    features: [
      "Rust removal and surface preparation",
      "Corrosion treatment application",
      "Protective coating and sealing",
      "Structural inspection post-treatment",
    ],
    benefits: [
      "✔ Corrosion-free surfaces",
      "✔ Extended body lifespan",
      "✔ Improved structural safety",
    ],
    icon: Circle,
  },
  {
    title: "🧼 Surface Repair, Painting & Finishing",
    desc: "Surface repair and finishing protects repaired sections and restores professional appearance while improving resistance to environmental damage.",
    image: "/MRO/Surface Repair, Painting & Finishing.png",
    features: [
      "Surface preparation and smoothing",
      "Primer and protective coating application",
      "Final paint finishing",
      "Visual quality inspection",
    ],
    benefits: [
      "✔ Uniform and durable finish",
      "✔ Protection against wear and weather",
      "✔ Improved visual condition",
    ],
    icon: Sparkles,
  },
  {
    title: "🔧 Component Refitting & Final Assembly",
    desc: "This final stage ensures operational readiness. Component refitting ensures all repaired or replaced parts are correctly reinstalled and aligned before vehicle delivery.",
    image: "/MRO/Component Refitting & Final Assembly.png",
    features: [
      "Refitting of doors, panels, and fittings",
      "Alignment and fastening checks",
      "Functional inspection",
      "Final readiness verification",
    ],
    benefits: [
      "✔ Correct component installation",
      "✔ Fully functional vehicle body",
      "✔ Ready-for-operation asset",
    ],
    icon: Wrench,
  },
];

const stats = [
  { value: "5,000+", label: "Vehicles Restored", icon: Circle },
  { value: "30+", label: "Years Experience", icon: Clock },
  { value: "99%", label: "Customer Satisfaction", icon: CheckCircle },
  { value: "ISO Certified", label: "Quality Service", icon: Award },
];

export default function MaintenanceServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 mt-0 lg:mt-10">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden mt-20 sm:mt-5 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600">
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
              className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-md text-white px-6 py-3 text-sm font-semibold mb-8 border border-white/20 shadow-lg"
            >
              <Settings size={18} className="text-orange-200" />
              MAINTENANCE, REPAIR & OVERHAUL (MRO)
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              COMPLETE VEHICLE BODY
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                RESTORATION
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              Extending Asset Life Through Expert Repairs
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Al Suwaidi Technical Centre delivers comprehensive Maintenance, Repair & Overhaul (MRO) services focused on restoring commercial vehicle bodies to safe, functional, and operational condition. Our MRO approach combines detailed damage assessment, precision repair techniques, and controlled restoration processes to minimize downtime and extend the service life of vehicle assets.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <Link
                to="/get-quote"
                className="group inline-flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105 hover:-translate-y-1"
              >
                <Phone size={20} className="group-hover:animate-pulse" />
                <span>Request MRO Quote</span>
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>View MRO Services</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, idx) => (
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
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* ===== MODERN SIDE-BY-SIDE SERVICE CARDS ===== */}
        <section id="services" className="mb-16 space-y-16">
          {maintenanceServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-red-50/10 rounded-3xl shadow-2xl border border-orange-100/50 backdrop-blur-sm group"
            >
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-200/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              
              <div className={`relative flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 lg:w-1/2 text-center lg:text-left"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center gap-4 justify-center lg:justify-start mb-6"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-red-50 border-2 border-orange-200 shadow-lg"
                    >
                      <service.icon className="text-orange-600" size={23} />
                    </motion.div>
                    <div className="text-left">
                      <span className="text-sm font-bold text-orange-600 uppercase tracking-wider block">
                        MRO SERVICE
                      </span>
                    </div>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl lg:text-2xl font-black text-slate-900 mb-3 leading-tight"
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0"
                  >
                    {service.desc}
                  </motion.p>

                  {/* Scope of Work */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-6"
                  >
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">
                      Scope of Work Includes:
                    </h4>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {service.features.map((feature, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-slate-800 font-medium rounded-full border-2 border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-300"
                        >
                          • {feature}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* What You'll Get */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mb-8"
                  >
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">
                      What You'll Get:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-700">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  >
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 hover:-translate-y-1"
                    >
                      <span>View Details</span>
                      <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/get-quote"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-orange-300 text-orange-700 font-bold rounded-2xl hover:bg-orange-50 hover:border-orange-500 transition-all hover:scale-105"
                    >
                      <Phone size={20} />
                      <span>Get Quote</span>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex-1 lg:w-1/2 relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm"
                  >
                    {/* Animated Border Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500"></div>
                    
                    <div className="relative bg-white rounded-3xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                      
                      {/* Enhanced Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, type: "spring" }}
                        className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-orange-200 hover:scale-110 transition-transform duration-300"
                      >
                        <div className="text-sm font-black text-slate-900">
                          {service.title.split(" ")[0]}
                        </div>
                        <div className="text-xs text-orange-600 font-semibold">MRO Service</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* OUTPUTS Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              OUTPUTS
            </span>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our MRO{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Service Results
              </span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From structural damage to body wear and tear, we ensure every repair meets operational requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Fully restored vehicle bodies",
                desc: "Complete restoration to operational condition",
              },
              {
                icon: Clock,
                title: "Reduced downtime and repair cycles",
                desc: "Minimized operational interruptions",
              },
              {
                icon: Award,
                title: "Extended asset service life",
                desc: "Maximized return on vehicle investment",
              },
              {
                icon: CheckCircle,
                title: "Improved safety and operational reliability",
                desc: "Enhanced performance and safety standards",
              },
            ].map((output, idx) => (
              <motion.div
                key={output.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, type: "spring" }}
                whileHover={{ y: -8, scale: 1.04 }}
                className="group relative rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Icon */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 w-fit mb-6 group-hover:scale-110 transition">
                  <output.icon className="text-orange-600" size={28} />
                </div>

                {/* Content */}
                <h4 className="font-bold text-gray-900 text-lg mb-3">
                  {output.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {output.desc}
                </p>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-orange-400/10 to-red-400/10 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      
      <GetDemoSection />

      {/* ===== MRO PROCESS FLOW ===== */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              OUR MRO PROCESS
            </span>

            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                MRO Workflow
              </span>{" "}
              Process
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A structured workflow to ensure consistency and reliability
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Damage Inspection & Assessment",
                desc: "Detailed evaluation of body damage and repair requirements.",
              },
              {
                step: "02",
                title: "Repair & Restoration",
                desc: "Precision repair of damaged sections using appropriate methods and materials.",
              },
              {
                step: "03",
                title: "Reinforcement & Finishing",
                desc: "Strengthening, alignment correction, and finishing for durability.",
              },
              {
                step: "04",
                title: "Final Inspection & Delivery",
                desc: "Quality checks to ensure safety and operational readiness.",
              },
            ].map((process, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-15">
        {/* Contact Info */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-6">
          <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-3 rounded-lg bg-orange-100 flex-shrink-0">
                <Phone className="text-orange-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  Emergency MRO Service
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  +974 44601087
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-3 rounded-lg bg-orange-100 flex-shrink-0">
                <Mail className="text-orange-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  Email
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  mro@alsuwaidi.com
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-3 rounded-lg bg-orange-100 flex-shrink-0">
                <Clock className="text-orange-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  Service Hours
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  24/7 Emergency MRO
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}