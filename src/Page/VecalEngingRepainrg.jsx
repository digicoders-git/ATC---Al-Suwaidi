import React from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  Wrench,
  Cog,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  Sparkles,
  Gauge,
  Thermometer,
  Droplets,
  HardHat,
  Factory,
  Menu,
  X,
  Package,
  Cpu,
  Search,
  RotateCcw,
  Layers,
  TestTube,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const servicesList = [
  {
    title: "⚙️ Crankshaft Grinding",
    desc: "Crankshaft grinding is performed using precision machining techniques to restore correct journal size, alignment, and surface finish. This process is essential to maintain smooth rotation and protect bearings from premature wear. Each crankshaft is measured and ground within specified tolerances to ensure long-term reliability under continuous operation.",
    icon: RotateCcw,
    image: "/Crankshaft Grinding.png",
    features: [
      "Restored crankshaft geometry and balance",
      "Reduced vibration and bearing stress",
      "Smooth engine rotation and improved durability",
    ],
  },
  {
    title: "🧱 Block Boring",
    desc: "We carry out high-accuracy block boring to correct cylinder wear, taper, and distortion caused by prolonged engine use. This restores proper piston clearance and ensures optimal compression levels. Block boring is executed with strict dimensional control to support reliable piston and ring operation.",
    icon: Settings,
    image: "/Block Boring.png",
    features: [
      "Corrected cylinder dimensions",
      "Improved compression and combustion efficiency",
      "Extended engine service life",
    ],
  },
  {
    title: "🧩 Cylinder Liner Fitting",
    desc: "Cylinder liner fitting is performed to rebuild worn or damaged cylinders, restoring internal sealing and reducing oil consumption. Liners are fitted with precision to ensure correct alignment and heat transfer. This service is particularly effective for engines operating under heavy load or high temperatures.",
    icon: Layers,
    image: "/Cylinder Liner Fitting.png",
    features: [
      "Proper sealing and reduced blow-by",
      "Lower oil consumption",
      "Reliable cylinder performance under load",
    ],
  },
  {
    title: "🧪 Head Pressure Checking",
    desc: "Cylinder heads undergo pressure testing to identify cracks, leaks, or structural weaknesses that can lead to coolant loss, overheating, or engine failure. This step is critical for ensuring head integrity before reassembly.",
    icon: TestTube,
    image: "/Head Pressure Checking.png",
    features: [
      "Leak-free cylinder heads",
      "Reliable cooling system operation",
      "Prevention of major engine damage",
    ],
  },
  {
    title: "⚙️ Head Tappet Setting",
    desc: "Accurate tappet setting and valve clearance adjustment ensures correct valve timing and smooth engine operation. Proper tappet setting reduces noise, wear, and stress on valve train components. This service enhances overall engine efficiency and stability.",
    icon: Settings,
    image: "/Head Tappet Setting.png",
    features: [
      "Smooth and quiet valve operation",
      "Improved engine timing accuracy",
      "Stable and efficient engine performance",
    ],
  },
  {
    title: "🔄 Piston Ring Fitting",
    desc: "We replace and fit piston rings to restore combustion efficiency and minimize power loss. Correct ring fitting ensures proper sealing between the piston and cylinder wall, improving engine output and fuel economy. Each ring set is installed with attention to clearance and alignment for optimal performance.",
    icon: Cog,
    image: "/Piston Ring Fitting.png",
    features: [
      "Improved compression and power delivery",
      "Reduced oil burning and emissions",
      "Better fuel efficiency",
    ],
  },
  {
    title: "🔧 Engine Assembly & Reassembly",
    desc: "After machining and component restoration, engines are carefully assembled using correct torque values, clearances, and alignment procedures. Each assembly step follows controlled engineering practices. This ensures long-term reliability and consistent performance.",
    icon: Wrench,
    image: "/Engine Assembly & Reassembly.png",
    features: [
      "Accurate component fitment",
      "Reduced mechanical stress",
      "Reliable, long-lasting engine operation",
    ],
  },
  {
    title: "🧪 Final Testing & Performance Verification",
    desc: "Before delivery, engines undergo functional testing and performance verification to confirm smooth operation, correct alignment, and reliability under operating conditions. Testing ensures the engine is ready for installation and service.",
    icon: TestTube,
    image: "/Final Testing & Performance Verification.png",
    features: [
      "Verified performance and reliability",
      "Reduced risk of post-installation issues",
      "Installation-ready engine",
    ],
  },
  {
    title: "🔧 Cylinder Head Facing Services",
    desc: "Cylinder head facing restores flatness and sealing surfaces required for proper compression and efficient engine operation.",
    icon: Settings,
    image: "/ENGINE RECONDITIONING & DRIVETRAIN SERVICES/file_zip/Cylinder Head Facing Services.png",
    capabilities: "Precision head facing, surface finish correction, dimensional accuracy restoration.",
    features: [
      "Proper head-to-block sealing",
      "Improved compression efficiency",
      "Reduced risk of gasket failure",
    ],
  },
  {
    title: "🎯 Cylinder Head Valve Grinding Services",
    desc: "Valve grinding ensures accurate seating of intake and exhaust valves for optimal airflow and combustion efficiency.",
    icon: Cog,
    image: "/ENGINE RECONDITIONING & DRIVETRAIN SERVICES/file_zip/Cylinder Head Valve Grinding Services.png",
    capabilities: "Valve grinding, valve seat correction, sealing surface restoration.",
    features: [
      "Improved engine breathing",
      "Reduced compression loss",
      "Enhanced engine performance",
    ],
  },
  {
    title: "🔄 Transmission Repair & Reconditioning Services",
    desc: "Transmissions transfer engine power to the drivetrain and require precise alignment and component integrity. Repair and reconditioning services restore smooth gear shifting and reliable power delivery.",
    icon: Wrench,
    image: "/ENGINE RECONDITIONING & DRIVETRAIN SERVICES/file_zip/Transmission Repair & Reconditioning Services.png",
    capabilities: "Transmission inspection, component machining, bearing fitment support, alignment correction.",
    features: [
      "Smooth and reliable gear shifting",
      "Reduced drivetrain vibration",
      "Extended transmission service life",
    ],
  },
  {
    title: "🔧 Differential Housing & Axle Services",
    desc: "Differential housings and axles distribute torque and support load-bearing functions. Precision machining and refurbishment restore alignment and structural integrity.",
    icon: Settings,
    image: "/ENGINE RECONDITIONING & DRIVETRAIN SERVICES/file_zip/Differential Housing & Axle Services.png",
    capabilities: "Machining of differential housings, axle refurbishment, bearing seat correction.",
    features: [
      "Balanced torque distribution",
      "Reduced mechanical stress",
      "Extended drivetrain service life",
    ],
  },
];

const stats = [
  { value: "32+", label: "Years Experience", icon: Clock },
  { value: "100%", label: "Quality-Driven", icon: CheckCircle },
  { value: "80+", label: "Expert Technicians", icon: Users },
  { value: "ISO 9001:2015", label: "Certified Quality", icon: Award },
];

export default function VehicleEngineRepairPage() {
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
              <Sparkles size={18} className="text-orange-200" />
              ADVANCED ENGINE RECONDITIONING & DRIVETRAIN SERVICES
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              ENGINE RECONDITIONING &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                DRIVETRAIN SERVICES
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              Precision Engine Restoration Specialists
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Al Suwaidi Technical Centre delivers comprehensive engine reconditioning and drivetrain services designed to restore engine efficiency, reliability, and performance for commercial vehicles and industrial applications. Our approach combines detailed diagnosis, precision machining, and controlled assembly to ensure engines operate smoothly and reliably over an extended service life. From inspection to final testing, every engine component is restored to meet operational standards, performance requirements, and durability expectations.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105 hover:-translate-y-1"
              >
                <Phone size={20} className="group-hover:animate-pulse" />
                <span> To Know More, Contact Us</span>
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>VIEW SERVICES</span>
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
          {servicesList.map((service, index) => (
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
                          ✔ {feature}
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
                        className="w-full  object-cover transition-transform duration-700 hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80";
                        }}
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
      </main>

      <GetDemoSection />

      {/* ===== MODERN PROCESS FLOW ===== */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              OUR ENGINE REPAIR PROCESS
            </span>

            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Engine Repair
              </span>{" "}
              Process
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our engine repair services follow a structured workflow to ensure
              precision, reliability, and consistency
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Engine Inspection & Diagnosis",
                desc: "Detailed evaluation to identify wear and repair requirements.",
              },
              {
                step: "02",
                title: "Machining & Repair",
                desc: "Precision machining and corrective repairs using proven methods.",
              },
              {
                step: "03",
                title: "Assembly & Testing",
                desc: "Careful reassembly followed by testing to ensure performance and reliability.",
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

          {/* Products/Outputs Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                {" "}
                Outputs
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <CheckCircle className="text-orange-500" size={20} />
                  <span className="text-gray-700 font-medium">
                    Fully reconditioned engines
                  </span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <CheckCircle className="text-orange-500" size={20} />
                  <span className="text-gray-700 font-medium">
                    Serviced and machined engine blocks
                  </span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <CheckCircle className="text-orange-500" size={20} />
                  <span className="text-gray-700 font-medium">
                    Performance-restored engine components
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-3xl px-12 py-8">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                  👉 To Know More, Contact Us
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Get professional engine repair services with guaranteed
                  quality and reliability
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
