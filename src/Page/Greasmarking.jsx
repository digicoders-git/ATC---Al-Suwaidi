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
  RotateCw,
  Circle,
  Square,
  Drill,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const servicesList = [
  {
    title: "🔄 Turning Services",
    desc: "Turning is a machining process where a rotating workpiece is shaped using a cutting tool to achieve precise cylindrical forms. Precision turning services for cylindrical components requiring accurate diameters, concentricity, and smooth surface finishes. Suitable for shafts, pins, and rotational components used in mechanical and industrial systems. Capabilities: External turning, Internal turning, Step & taper turning.",
    icon: RotateCw,
    image: "/GressMaking/Turning Services.png",
    features: [
      "Accurate cylindrical machining",
      "Smooth and consistent surface finish",
      "Tight dimensional control"
    ],
  },
  {
    title: "🧭 Facing Services",
    desc: "Facing is a machining operation used to create flat, smooth surfaces at the end of a component for proper alignment and fit. Professional facing operations to produce flat, smooth end surfaces that improve component fitment and alignment during assembly. Capabilities: End facing, Precision surface finishing, Alignment correction.",
    icon: Square,
    image: "/GressMaking/Facing Services.png",
    features: [
      "Flat and even surfaces",
      "Improved component alignment",
      "Accurate end finishing"
    ],
  },
  {
    title: "🕳️ Drilling Services",
    desc: "Drilling is the process of creating round holes in a material using a rotating drill bit with controlled depth and accuracy. High-precision drilling services for creating accurate holes required for fastening, mounting, and assembly of mechanical components. Capabilities: Standard drilling, Pilot hole drilling, Controlled-depth drilling.",
    icon: Drill,
    image: "/GressMaking/Drilling Services.png",
    features: [
      "Accurate hole positioning",
      "Clean and burr-free finish",
      "Reliable assembly fit"
    ],
  },
  {
    title: "🧱 Boring Services",
    desc: "Boring is a machining process used to enlarge and refine existing holes to achieve precise diameter and alignment. Precision boring operations to enlarge and finish holes to exact tolerances, ensuring correct fitment for shafts, bearings, and bushings. Capabilities: Line boring, Precision diameter correction, Alignment boring.",
    icon: Circle,
    image: "/GressMaking/Boring Services.png",
    features: [
      "Correct and consistent hole dimensions",
      "Improved roundness and surface finish",
      "Reliable component fitment"
    ],
  },
  {
    title: "🔩 Threading Services",
    desc: "Threading is the machining of internal or external helical grooves used for fastening and mechanical connections. Internal and external threading services for mechanical fastening applications requiring accuracy and strength. Capabilities: Metric threading, Internal & external threads, Custom thread profiles.",
    icon: Settings,
    image: "/GressMaking/Threading Services.png",
    features: [
      "Accurate thread profiles",
      "Secure and reliable fastening",
      "Consistent thread quality"
    ],
  },
  {
    title: "🧲 Knurling Services",
    desc: "Knurling is a machining process that creates textured patterns on a component's surface to improve grip and handling. Professional knurling services for gears, shafts, handles, adjusters, and mechanical components to enhance grip and surface aesthetics. Capabilities: Diamond knurl, Straight knurl, Cross knurl, Custom patterns.",
    icon: Layers,
    image: "/GressMaking/Knurling Services.png",
    features: [
      "Enhanced grip surfaces",
      "Improved handling and control",
      "Durable textured finish"
    ],
  },
  {
    title: "⚙️ Gear Milling Services",
    desc: "Gear milling is a machining process used to cut gear teeth with precise profiles using milling cutters. Accurate gear milling services for producing gears used in mechanical transmission systems across industrial applications. Capabilities: Spur gear milling, Helical gear milling, Custom gear profiles.",
    icon: Cog,
    image: "/GressMaking/Gear Milling Services.png",
    features: [
      "Accurate gear tooth profiles",
      "Smooth gear engagement",
      "Reliable power transmission"
    ],
  },
  {
    title: "⚙️ Gear Hobbing Services",
    desc: "Gear hobbing is a continuous cutting process used to produce precise gear teeth efficiently and consistently. High-precision gear hobbing services for manufacturing gears with uniform tooth geometry and high repeatability. Capabilities: Spur gear hobbing, Helical gear hobbing, Batch & repeat production.",
    icon: Wrench,
    image: "/GressMaking/Gear Hobbing Services.png",
    features: [
      "Uniform and accurate gear teeth",
      "High production consistency",
      "Durable and reliable gears"
    ],
  },
];

const stats = [
  { value: "30+", label: "Years Experience", icon: Clock },
  { value: "5000+", label: "Gears Manufactured", icon: CheckCircle },
  { value: "25+", label: "Expert Machinists", icon: Users },
  { value: "ISO 9001", label: "Certified Quality", icon: Award },
];

export default function GearsMakingMillingPage() {
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
              HIGH-ACCURACY MACHINING & COMPONENT MANUFACTURING
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              GEARS MAKING &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                MILLING WORKS
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              Precision Machining Solutions
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Al Suwaidi Technical Centre provides precision gear making and milling services for industrial, automotive, and mechanical applications. Our machining operations focus on dimensional accuracy, surface finish, and durability, ensuring components perform reliably under operational loads. Using skilled machinists and precision machines, we manufacture and machine components that meet exact technical specifications and functional requirements. From single components to batch production, our machining services support maintenance, repair, and manufacturing needs.
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
                <span>👉 To Know More, Contact Us</span>
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>View Machining Services</span>
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
                        MACHINING SERVICE
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        Precision Manufacturing
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

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  >
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center justify-center gap-3 px-8 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 hover:-translate-y-1"
                    >
                      <span>View Details</span>
                      <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
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
                        className="w-full h-80 lg:h-150 object-cover transition-transform duration-700 hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80";
                        }}
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
                          Precision
                        </div>
                        <div className="text-xs text-orange-600 font-semibold">Machining</div>
                      </motion.div>
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
              OUR MACHINING PROCESS
            </span>

            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Precision Machining
              </span>{" "}
              Process
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our machining services follow a structured workflow to ensure precision, quality, and consistency
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Design & Planning",
                desc: "Technical drawings and machining process planning for optimal results.",
              },
              {
                step: "02",
                title: "Precision Machining",
                desc: "CNC machining operations with strict quality control and tolerances.",
              },
              {
                step: "03",
                title: "Quality Inspection",
                desc: "Final inspection and testing to ensure specifications are met.",
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

          {/* Products Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Products</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <CheckCircle className="text-orange-500" size={20} />
                  <span className="text-gray-700 font-medium">Precision-machined gears</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <CheckCircle className="text-orange-500" size={20} />
                  <span className="text-gray-700 font-medium">Machined shafts</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <CheckCircle className="text-orange-500" size={20} />
                  <span className="text-gray-700 font-medium">Custom precision machined components</span>
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
                  Get professional gear making and milling services with guaranteed precision and quality
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