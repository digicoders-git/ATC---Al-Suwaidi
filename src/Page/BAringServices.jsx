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
  MapPin,
  Clock,
  Award,
  Sparkles,
  Gauge,
  Thermometer,
  HardHat,
  Factory,
  Menu,
  X,
  Package,
  RotateCw,
  Zap,
  Circle,
  Square,
  Hexagon,
  GitPullRequest,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const bearingServices = [
  {
    title: "🔧 Axle Bearing Removing & Fixing",
    desc: "Safe and precise axle bearing removal and installation to restore smooth wheel rotation and load handling capability. Axle bearing removal and fixing involves replacing worn or damaged bearings that support axle rotation and load distribution.",
    image: "/Baring/Axle Bearing Removing & Fixing.png",
    features: [
      "✔ Correct axle alignment",
      "✔ Smooth wheel rotation",
      "✔ Reduced bearing wear and noise",
      "Safe removal process",
    ],
    specs: [
      "Types: Tapered/Roller",
      "Sizes: 20-150mm",
      "Tools: Hydraulic press",
    ],
    icon: RotateCw,
  },
  {
    title: "⚙️ Hub Bearing Fitting",
    desc: "Accurate hub bearing installation using proper tools and techniques to maintain wheel stability and safety. Hub bearing fitting ensures proper mounting of bearings within the wheel hub for smooth and stable vehicle movement.",
    image: "/hub bearing.png",
    features: [
      "✔ Stable wheel movement",
      "✔ Reduced vibration",
      "✔ Improved driving safety",
      "Proper mounting",
    ],
    specs: [
      "Types: Press-in/Bolt-on",
      "Vehicles: All types",
      "Warranty: 1 year",
    ],
    icon: Circle,
  },
  {
    title: "🛠️ Lower & Upper Arm Bush Fitting",
    desc: "Professional lower and upper arm bush fitting to restore suspension flexibility and comfort. Bush fitting involves replacing suspension bushes that absorb shocks and allow controlled movement of suspension arms.",
    image: "/Baring/Lower & Upper Arm Bush Fitting.png",
    features: [
      "✔ Improved suspension response",
      "✔ Reduced vibration and noise",
      "✔ Enhanced vehicle control",
      "Shock absorption",
    ],
    specs: [
      "Materials: Rubber/Polyurethane",
      "Sizes: Standard/Custom",
      "Tools: Hydraulic press",
    ],
    icon: GitPullRequest,
  },
  {
    title: "🧭 Steering Kit Fitting",
    desc: "Accurate steering kit installation to ensure responsive and reliable steering performance. Steering kit fitting restores proper steering geometry and control by replacing worn steering components.",
    image: "/Baring/Steering Kit Fitting.png",
    features: [
      "✔ Precise steering control",
      "✔ Reduced steering play",
      "✔ Improved driving stability",
      "Geometry restoration",
    ],
    specs: [
      "Kit types: Complete/Partial",
      "Vehicles: All makes",
      "Alignment: Computerized",
    ],
    icon: Wrench,
  },
  {
    title: "🔩 King Pin Removing & Fitting",
    desc: "Careful king pin removal and fitting to maintain steering alignment and load handling. King pin fitting restores the pivot point of steering knuckles in heavy vehicles.",
    image: "/kingpin.png",
    features: [
      "✔ Smooth steering movement",
      "✔ Proper load distribution",
      "✔ Extended steering component life",
      "Pivot point restoration",
    ],
    specs: [
      "Types: Tapered/Straight",
      "Sizes: Various",
      "Materials: Hardened steel",
    ],
    icon: Hexagon,
  },
  {
    title: "🚪 Door Hinge Making & Fitting",
    desc: "Custom door hinge fabrication and installation for commercial vehicle bodies and cabins. Door hinge making and fitting involves fabricating and installing hinges for smooth door operation.",
    image: "/hinge.png",
    features: [
      "✔ Smooth door operation",
      "✔ Strong and durable hinges",
      "✔ Accurate door alignment",
      "Custom fabrication",
    ],
    specs: [
      "Materials: Steel/Brass",
      "Types: Butt/Piano",
      "Finishing: Paint/Plating",
    ],
    icon: Package,
  },
  {
    title: "⚙️ Gear Removing & Refitting",
    desc: "Precise gear removal and reinstallation for mechanical systems and driveline components. Gear removing and refitting restores proper gear positioning and mechanical alignment.",
    image: "/Baring/Gear Removing & Refitting.png",
    features: [
      "✔ Correct gear alignment",
      "✔ Smooth mechanical operation",
      "✔ Reduced component stress",
      "Precision installation",
    ],
    specs: [
      "Gear types: Spur/Helical",
      "Vehicles: All types",
      "Tools: Specialized",
    ],
    icon: Cog,
  },
];

const stats = [
  { value: "10,000+", label: "Bearings Replaced", icon: Circle },
  { value: "32+", label: "Years Experience", icon: Clock },
  { value: "98%", label: "Customer Satisfaction", icon: CheckCircle },
  { value: "ISO 9001:2015", label: "Quality Service", icon: Award },
];

export default function BearingsRemovalFittingPage() {
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
              <Circle size={18} className="text-orange-200" />
              BEARINGS & SUSPENSION SPECIALISTS
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              BEARINGS REMOVING &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                FIXING SERVICES
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              All Types of Bearing & Suspension Works - Safe Installation &
              Precision Alignment Solutions
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Al Suwaidi Technical Centre provides professional bearing removing
              and fixing services for commercial vehicles and heavy-duty
              applications. Our services focus on correct alignment, safe
              installation, and smooth mechanical operation, ensuring reduced
              wear and extended service life of components.
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
                <span>Request Service Quote</span>
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>View Our Services</span>
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
          {bearingServices.map((service, index) => (
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
              <div
                className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-200/15 to-transparent rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <div
                className={`relative flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 lg:w-1/2 text-center lg:text-left"
                >
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

                  {/* Enhanced Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-8"
                  >
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">
                      What You'll Get:
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
                          {feature}
                        </motion.span>
                      ))}
                    </div>
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
              Our Professional{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Service Results
              </span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our professional bearing services deliver these key results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: RotateCw,
                title: "Properly aligned bearing systems",
                desc: "Precise alignment for optimal performance and extended component life",
              },
              {
                icon: Circle,
                title: "Restored steering and suspension performance",
                desc: "Complete system restoration and optimization for smooth operation",
              },
              {
                icon: Wrench,
                title: "Reduced wear and component failure",
                desc: "Extended component life and reliability through professional service",
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
                <h4 className="font-bold text-gray-900 text-xl mb-3">
                  {output.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{output.desc}</p>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-orange-400/10 to-red-400/10 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <GetDemoSection />

      {/* ===== MODERN PROCESS FLOW ===== */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              OUR SERVICE PROCESS
            </span>

            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Bearing Service
              </span>{" "}
              Process
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Using proper tools, skilled technicians, and controlled fitting
              procedures
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Inspection & Diagnosis",
                desc: "Thorough inspection of bearings and related components to identify issues.",
              },
              {
                step: "02",
                title: "Safe Removal Process",
                desc: "Professional removal using specialized tools without damaging components.",
              },
              {
                step: "03",
                title: "Precision Installation",
                desc: "Accurate fitting with proper alignment and torque specifications.",
              },
              {
                step: "04",
                title: "Quality Testing",
                desc: "Final testing and quality check to ensure optimal performance.",
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
                  Emergency Service
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
                  info@alsuwaiditechnical.com
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
                  7:00 AM - 10:00 PM
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
