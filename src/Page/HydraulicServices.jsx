import React from "react";
import { motion } from "framer-motion";
import { FaCog, FaTools, FaWrench, FaIndustry } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  Clock,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

export default function HydraulicServices() {
  const stats = [
    { value: "32+", label: "Years Experience", icon: Clock },
    { value: "1500+", label: "Hydraulic Projects", icon: FaCog },
    { value: "98%", label: "Client Satisfaction", icon: CheckCircle },
    { value: "ISO 9001:2015", label: "Certified Quality", icon: Award },
  ];

  const hydraulicServices = [
    {
      title: "🔧 Hydraulic Cylinder Services",
      description:
        "Hydraulic cylinders operate under high pressure and continuous loading. Precision boring and honing restore internal surface finish and dimensional accuracy to ensure smooth operation and effective sealing.",
      capabilities: "Hydraulic cylinder boring & honing.",
      benefits: [
        "Smooth cylinder movement",
        "Improved sealing performance",
        "Extended cylinder service life",
      ],
      image:
        "/HYDRAULIC, PUMP & FLUID SYSTEM ENGINEERING SERVICES/file_zip/Hydraulic Cylinder Services.png",
      icon: FaCog,
    },
    {
      title: "⚙️ Piston Rod Grinding & Chroming Services",
      description:
        "Piston rods are exposed to wear, corrosion, and surface damage. Grinding and chroming services restore surface finish, straightness, and hardness for reliable hydraulic performance.",
      capabilities: "Piston rod grinding & chroming.",
      benefits: [
        "Reduced seal wear",
        "Improved corrosion resistance",
        "Longer rod service life",
      ],
      image:
        "/HYDRAULIC, PUMP & FLUID SYSTEM ENGINEERING SERVICES/file_zip/Piston Rod Grinding & Chroming Services.png",
      icon: FaTools,
    },
    {
      title: "🔩 Hydraulic Seals & Rod Services",
      description:
        "Hydraulic seals and rods are essential for leak-free operation and pressure retention. Precision surface preparation and fitment support ensure dependable system performance.",
      capabilities: "Hydraulic seals & rods preparation and fitment support.",
      benefits: [
        "Leak-free hydraulic operation",
        "Improved system efficiency",
        "Reduced maintenance issues",
      ],
      image:
        "/HYDRAULIC, PUMP & FLUID SYSTEM ENGINEERING SERVICES/file_zip/Hydraulic Seals & Rod Services.png",
      icon: FaWrench,
    },
    {
      title: "🛠️ Valve Block & Manifold Services",
      description:
        "Valve blocks and manifolds control hydraulic flow and pressure distribution. Precision machining restores flatness, port accuracy, and sealing integrity.",
      capabilities: "Machining and restoration of valve blocks & manifolds.",
      benefits: [
        "Accurate flow control",
        "Reduced internal leakage",
        "Consistent system response",
      ],
      image:
        "/HYDRAULIC, PUMP & FLUID SYSTEM ENGINEERING SERVICES/file_zip/Valve Block & Manifold Services.png",
      icon: FaCog,
    },
    {
      title: "⚡ Hydraulic Pump Part Services",
      description:
        "Hydraulic pump components must maintain tight tolerances for stable output. Machining support restores worn or damaged pump parts to reliable operating condition.",
      capabilities: "Machining and correction of hydraulic pump parts.",
      benefits: [
        "Stable pump performance",
        "Reduced pressure loss",
        "Improved operational reliability",
      ],
      image:
        "/HYDRAULIC, PUMP & FLUID SYSTEM ENGINEERING SERVICES/file_zip/Hydraulic Pump Part Services.png",
      icon: FaIndustry,
    },
    {
      title: "🎯 Actuator & Control Cylinder Services",
      description:
        "Actuators and control cylinders enable precise motion control in hydraulic systems. Machining and refurbishment services restore accuracy and responsiveness.",
      capabilities:
        "Machining and refurbishment of actuators & control cylinders.",
      benefits: [
        "Precise motion control",
        "Smooth system operation",
        "Improved response accuracy",
      ],
      image:
        "/HYDRAULIC, PUMP & FLUID SYSTEM ENGINEERING SERVICES/file_zip/Actuator & Control Cylinder Services.png",
      icon: FaTools,
    },
  ];

  const pumpServices = [
    {
      title: "🚢 Cargo Pump Services (Centrifugal, Screw & Hydraulic)",
      description:
        "Cargo pumps are essential for fluid transfer operations. Precision machining restores internal clearances and operational efficiency.",
      capabilities: "Machining and repair of cargo pump components.",
      benefits: [
        "Efficient fluid transfer",
        "Reduced pump downtime",
        "Improved pumping reliability",
      ],
      image:
        "/HYDRAULIC, PUMP & FLUID SYSTEM ENGINEERING SERVICES/file_zip/Cargo Pump Services (Centrifugal, Screw & Hydraulic).png",
      icon: FaIndustry,
    },
    {
      title: "⚖️ Ballast Pump & Valve Services",
      description:
        "Ballast systems are critical for vessel stability and safety. Machining services restore pump and valve components for controlled ballast operations.",
      capabilities: "Machining and refurbishment of ballast pumps & valves.",
      benefits: [
        "Reliable ballast control",
        "Improved vessel stability",
        "Safe operational performance",
      ],
      image:
        "/HYDRAULIC, PUMP & FLUID SYSTEM ENGINEERING SERVICES/file_zip/Ballast Pump & Valve Services.png",
      icon: FaCog,
    },
    {
      title: "🔄 Pump Impeller & Casing Services",
      description:
        "Pump impellers and casings directly affect flow efficiency and pressure performance. Precision machining restores profiles, clearances, and alignment.",
      capabilities: "Machining and restoration of pump impellers & casings.",
      benefits: [
        "Improved pump efficiency",
        "Reduced vibration and wear",
        "Extended component life",
      ],
      image:
        "/HYDRAULIC, PUMP & FLUID SYSTEM ENGINEERING SERVICES/file_zip/Pump Impeller & Casing Services.png",
      icon: FaWrench,
    },
  ];

  const allServices = [...hydraulicServices, ...pumpServices];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 mt-0 lg:mt-10">
      {/* Hero Section */}
      <header className="relative overflow-hidden mt-20 sm:mt-5 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-md text-white px-6 py-3 text-sm font-semibold mb-8 border border-white/20 shadow-lg"
            >
              <FaCog size={18} className="text-orange-200" />
              HYDRAULIC, PUMP & FLUID SYSTEM ENGINEERING
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              HYDRAULIC & PUMP
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                SYSTEM ENGINEERING
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              Precision Hydraulic & Fluid System Solutions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Hydraulic and fluid systems are critical for power transmission,
              motion control, and vessel stability across marine, shipyard, and
              heavy equipment operations. Precision machining and component
              restoration services ensure reliable pressure control, smooth
              fluid flow, and long-term system performance under demanding
              operating conditions.
            </motion.p>

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
                <span>Request Hydraulic Services Quote</span>
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>View Hydraulic Services</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>

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

      {/* Main Services Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Hydraulic System Services Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">HYDRAULIC SYSTEM</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                SERVICES
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Power transmission and motion control systems engineering
            </p>
          </motion.div>

          <div className="space-y-16">
            {hydraulicServices.map((service, index) => (
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
                      className="text-lg text-slate-600 leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0"
                    >
                      {service.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="mb-4"
                    >
                      <h4 className="font-bold text-slate-900 mb-2 text-base">
                        Capabilities:
                      </h4>
                      <p className="text-slate-600 text-sm mb-4">
                        {service.capabilities}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="mb-8"
                    >
                      <h4 className="font-bold text-slate-900 mb-4 text-lg">
                        What You'll Get:
                      </h4>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {service.benefits.map((benefit, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-slate-800 font-medium rounded-full border-2 border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-300"
                          >
                            ✔ {benefit}
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
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
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
          </div>
        </section>

        {/* Pump System Services Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">PUMP SYSTEM</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                SERVICES
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Fluid transfer and circulation systems engineering
            </p>
          </motion.div>

          <div className="space-y-16">
            {pumpServices.map((service, index) => (
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
                    (index + hydraulicServices.length) % 2 === 1
                      ? "lg:flex-row-reverse"
                      : ""
                  }`}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x:
                        (index + hydraulicServices.length) % 2 === 0 ? -50 : 50,
                    }}
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
                      className="text-lg text-slate-600 leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0"
                    >
                      {service.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="mb-4"
                    >
                      <h4 className="font-bold text-slate-900 mb-2 text-base">
                        Capabilities:
                      </h4>
                      <p className="text-slate-600 text-sm mb-4">
                        {service.capabilities}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="mb-8"
                    >
                      <h4 className="font-bold text-slate-900 mb-4 text-lg">
                        What You'll Get:
                      </h4>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {service.benefits.map((benefit, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-slate-800 font-medium rounded-full border-2 border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-300"
                          >
                            ✔ {benefit}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x:
                        (index + hydraulicServices.length) % 2 === 0 ? 50 : -50,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex-1 lg:w-1/2 relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
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
          </div>
        </section>
      </main>

      <GetDemoSection />

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              OUR PROCESS
            </span>

            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Hydraulic Engineering
              </span>{" "}
              Process
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Precision engineering approach for hydraulic and fluid system
              components
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "System Assessment",
                desc: "Detailed inspection and analysis of hydraulic system components and performance.",
              },
              {
                step: "02",
                title: "Precision Machining",
                desc: "Advanced machining and restoration using hydraulic-grade specifications.",
              },
              {
                step: "03",
                title: "Assembly & Testing",
                desc: "Professional assembly with pressure testing and performance verification.",
              },
              {
                step: "04",
                title: "Quality Assurance",
                desc: "Comprehensive testing and quality control before system delivery.",
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
