import React from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  Wrench,
  Sparkles,
  Layers,
  Settings,
  Phone,
  Factory,
  Hammer,
  Cog,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";
import Stellbaseindristy from "../Component/Stellbaseindristy";

const servicesList = [
  {
    title: "🧩 Fabrication Process Planning & Engineering Design",
    desc: "We begin every project with detailed fabrication planning and engineering design to ensure accuracy, efficiency, and smooth execution before fabrication starts.",
    icon: Layers,
    image: "/Fabrication Process Planning & Engineering Design.png",
    features: [
      "Clear fabrication drawings & layouts",
      "Optimized material planning",
      "Reduced fabrication errors",
    ],
  },
  {
    title: "✂️ Sheet Metal Cutting",
    desc: "Our sheet metal cutting process delivers precise dimensions and clean edges, forming the foundation for high-quality fabrication and assembly.",
    icon: Settings,
    image: "/Sheet Metal Cutting.png",
    features: [
      "Accurate and clean cuts",
      "Consistent dimensional quality",
      "Improved assembly fitment",
    ],
  },
  {
    title: "🔄 Pipe Cutting, Bending & Rolling",
    desc: "We perform pipe cutting, bending, and rolling to achieve required shapes and angles for structural and industrial applications.",
    icon: Cog,
    image: "/pipe cutting copy.png",
    features: [
      "Uniform pipe shaping",
      "Strong, precise bends & rolls",
      "Reliable structural components",
    ],
  },
  {
    title: "🏗️ Structural Steel Fabrication",
    desc: "We manufacture heavy and medium structural steel components designed for durability and long-term performance in demanding environments.",
    icon: Hammer,
    image: "/Structural Steel Fabrication copy.png",
    features: [
      "High-strength steel structures",
      "Fabrication to project specifications",
      "Reliable load-bearing components",
    ],
  },
  {
    title: "🔧 Assembly, Welding & Finishing",
    desc: "Final assembly is completed with professional welding and finishing, ensuring alignment, strength, and installation readiness.",
    icon: Sparkles,
    image: "/Assembly, Welding & Finishing.png",
    features: [
      "Strong, defect-free welds",
      "Proper alignment and finish",
      "Ready-to-install fabricated products",
    ],
  },
];
// const projects = [
//   {
//     title: "Assembly, Welding & Finishing",
//     image: "/StellFebictaion/Assembly, Welding & Finishing.png",
//   },
//   {
//     title: "Custom-Fabricated Steel Parts",
//     image: "/StellFebictaion/Custom-fabricated steel parts.png",
//   },
//   {
//     title: "Industrial Steel Frames & Structures",
//     image: "/StellFebictaion/Industrial steel frames and structures.png",
//   },
//   {
//     title: "Structural Steel Fabrication",
//     image: "/StellFebictaion/Structural Steel Fabrication.png",
//   },]

const projects = [
  {
    title: "Supports, Brackets, Platforms, and Assemblies",
    subtitle: "Precision steel assembly solutions",
    description:
      "We manufacture strong and reliable steel supports, brackets, platforms, and assemblies with precise welding and finishing to ensure long-lasting performance and structural accuracy.",
    image: "/Supports, brackets, platforms, and assemblies.png",
    category: "Steel Fabrication",
  },
  {
    title: "Custom-Fabricated Steel Parts",
    subtitle: "Tailor-made steel components",
    description:
      "Custom-designed steel parts fabricated according to exact drawings and specifications, delivering accuracy, strength, and consistency for industrial and commercial use.",
    image: "/StellFebictaion/Custom-fabricated steel parts.png",
    category: "Custom Steel",
  },
  {
    title: "Industrial Steel Frames & Structures",
    subtitle: "Heavy-duty industrial structures",
    description:
      "Heavy-duty steel frames and industrial structures engineered to handle high loads, ideal for factories, warehouses, and large-scale industrial facilities.",
    image: "/image copy.png",
    category: "Industrial Steel",
  },
  {
    title: "Structural Steel Fabrication",
    subtitle: "Engineered for strength & safety",
    description:
      "Complete structural steel fabrication services focused on strength, safety, and durability for buildings, infrastructure, and engineering projects.",
    image: "/Structural steel components.png",
    category: "Structural Steel",
  },
];

const stats = [
  { value: "32+", label: "Years Experience", icon: Clock },
  { value: "5000+", label: "Projects Completed", icon: CheckCircle },
  { value: "80+", label: "Expert Engineers", icon: Users },
  { value: "ISO 9001:2015", label: "Certified Quality", icon: Award },
];

export default function ServicesPage() {
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [activeIndex, setActiveIndex] = useState(0);
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
              STEEL FABRICATION & ENGINEERING
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              FABRICATION &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                STRUCTURAL ENGINEERING SOLUTIONS
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              Exploring the Basics of Steel Fabrication
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Al Suwaidi Technical Centre delivers comprehensive steel
              fabrication and engineering solutions tailored for the
              manufacturing, automobile, and construction industries. Our
              approach combines engineering planning, precision fabrication, and
              quality-controlled finishing.
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
                <span>Request Steel Fabrication Quote</span>
              </Link>

              <a
                href="#section"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>View Steel Services</span>
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

      <Stellbaseindristy />

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <section id="section" className="mb-16 space-y-16 ">
          {servicesList.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-red-50/10 rounded-3xl shadow-2xl border border-orange-100/50 backdrop-blur-sm group"
            >
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
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500"></div>

                    <div className="relative bg-white rounded-3xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </section>
      </main>

      {/* ================= NEW PRODUCTS SECTION ================= */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              OUR PRODUCTS
            </span>
          </motion.div>

          {/* Products List */}
          <div className="space-y-16">
            {/* Pipe Spools & Flanges */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-red-50/10 rounded-3xl shadow-2xl border border-orange-100/50 backdrop-blur-sm group"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-200/15 to-transparent rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <div className="relative flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 lg:w-1/2 text-center lg:text-left"
                >
                  <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-3 leading-tight">
                    🔧 Pipe Spools & Flanges
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Custom-fabricated pipe spools and flanges manufactured to
                    precise dimensional and alignment requirements for
                    industrial and marine piping systems.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">
                      Key Capabilities:
                    </h4>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {[
                        "Cutting, rolling, bending & welding",
                        "Flange alignment and fit-up",
                        "Dimensional accuracy and pressure-ready fabrication",
                      ].map((feature, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-slate-800 font-medium rounded-full border-2 border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-300"
                        >
                          ✔ {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">
                      Applications:
                    </h4>
                    <p className="text-slate-600">
                      Process piping, utility lines, marine and industrial
                      systems
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex-1 lg:w-1/2 relative"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500"></div>
                    <div className="relative bg-white rounded-3xl overflow-hidden">
                      <img
                        src="/FABRICATION & STRUCTURAL ENGINEERING SOLUTIONS/file_zip/Pipe Spools & Flanges.png"
                        alt="Pipe Spools & Flanges"
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>

            {/* Custom Brackets & Foundations */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-red-50/10 rounded-3xl shadow-2xl border border-orange-100/50 backdrop-blur-sm group"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-200/15 to-transparent rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <div className="relative flex flex-col lg:flex-row-reverse items-center gap-12 p-8 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 lg:w-1/2 text-center lg:text-left"
                >
                  <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-3 leading-tight">
                    🏗️ Custom Brackets & Foundations
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Engineered steel brackets and foundations designed to
                    support equipment loads, absorb vibration, and ensure
                    structural stability.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">
                      Key Capabilities:
                    </h4>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {[
                        "Custom design & fabrication",
                        "Load-bearing structural fabrication",
                        "Alignment and installation-ready construction",
                      ].map((feature, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-slate-800 font-medium rounded-full border-2 border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-300"
                        >
                          ✔ {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">
                      Applications:
                    </h4>
                    <p className="text-slate-600">
                      Machinery mounting, engines, pumps, structural supports
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex-1 lg:w-1/2 relative"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500"></div>
                    <div className="relative bg-white rounded-3xl overflow-hidden">
                      <img
                        src="/FABRICATION & STRUCTURAL ENGINEERING SOLUTIONS/file_zip/Supports, brackets, platforms, and assemblies.png"
                        alt="Custom Brackets & Foundations"
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>

            {/* Heavy Base Frames & Skids */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-red-50/10 rounded-3xl shadow-2xl border border-orange-100/50 backdrop-blur-sm group"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-200/15 to-transparent rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <div className="relative flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 lg:w-1/2 text-center lg:text-left"
                >
                  <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-3 leading-tight">
                    ⚙️ Heavy Base Frames & Skids
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Robust base frames and skids fabricated for heavy machinery
                    and modular equipment assemblies requiring high structural
                    strength and stability.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">
                      Key Capabilities:
                    </h4>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {[
                        "Heavy structural steel fabrication",
                        "Precision leveling and alignment",
                        "Welding, finishing, and load reinforcement",
                      ].map((feature, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-slate-800 font-medium rounded-full border-2 border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-300"
                        >
                          ✔ {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">
                      Applications:
                    </h4>
                    <p className="text-slate-600">
                      Engines, compressors, pumps, packaged equipment
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex-1 lg:w-1/2 relative"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500"></div>
                    <div className="relative bg-white rounded-3xl overflow-hidden">
                      <img
                        src="/FABRICATION & STRUCTURAL ENGINEERING SOLUTIONS/file_zip/Heavy Base Frames & Skids.png"
                        alt="Heavy Base Frames & Skids"
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>

            {/* Jigs, Fixtures & Lifting Lugs */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-red-50/10 rounded-3xl shadow-2xl border border-orange-100/50 backdrop-blur-sm group"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-200/15 to-transparent rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <div className="relative flex flex-col lg:flex-row-reverse items-center gap-12 p-8 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 lg:w-1/2 text-center lg:text-left"
                >
                  <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-3 leading-tight">
                    🔩 Jigs, Fixtures & Lifting Lugs
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Custom jigs, fixtures, and lifting lugs designed to support
                    accurate manufacturing, safe handling, and efficient
                    assembly operations.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">
                      Key Capabilities:
                    </h4>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {[
                        "Precision fabrication",
                        "Load-rated lifting lug design",
                        "Custom fixtures for machining and assembly",
                      ].map((feature, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-slate-800 font-medium rounded-full border-2 border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-300"
                        >
                          ✔ {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">
                      Applications:
                    </h4>
                    <p className="text-slate-600">
                      Manufacturing setups, material handling, maintenance
                      operations
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex-1 lg:w-1/2 relative"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500"></div>
                    <div className="relative bg-white rounded-3xl overflow-hidden">
                      <img
                        src="/FABRICATION & STRUCTURAL ENGINEERING SOLUTIONS/file_zip/Jigs, Fixtures & Lifting Lugs.png"
                        alt="Jigs, Fixtures & Lifting Lugs"
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        {/* Soft Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.14),transparent_65%)]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* ================= Heading ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14 md:mb-20"
          >
            <span
              className="inline-flex items-center justify-center mb-5 px-6 py-2 rounded-full 
                       bg-orange-100 text-orange-700 
                       text-xs font-semibold tracking-widest"
            >
              OUR PRODUCTS
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
              Steel{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Products
              </span>
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              A showcase of our steel fabrication and construction capabilities,
              engineered with precision, strength, and industrial-grade
              excellence.
            </p>
          </motion.div>

          {/* ================= Cards ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative bg-white rounded-3xl overflow-hidden
                 shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                 hover:shadow-[0_35px_80px_rgba(0,0,0,0.18)]
                 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover
                     transition-transform duration-700
                     group-hover:scale-110"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t 
                        from-black/40 via-black/10 to-transparent 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>

                  <p className="text-sm font-medium text-gray-600 mb-2">
                    {project.subtitle}
                  </p>

                  {/* 👇 FIX: description height control */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-2 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Footer */}
                </div>

                {/* Hover Ring */}
                <div
                  className="absolute inset-0 rounded-3xl ring-1 ring-transparent 
                      group-hover:ring-orange-500/30 
                      transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GetDemoSection />

      {/* ===== MODERN PROCESS FLOW ===== */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
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
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 blur transition duration-500" />

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
    </div>
  );
}
