import React from "react";
import { motion } from "framer-motion";
import { FaCog, FaTools, FaWrench, FaIndustry } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Clock, Users, Award, CheckCircle } from "lucide-react";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

export default function EngineServices() {
  const stats = [
    { value: "32+", label: "Years Experience", icon: Clock },
    { value: "2000+", label: "Engine Projects", icon: FaCog },
    { value: "98%", label: "Client Satisfaction", icon: CheckCircle },
    { value: "ISO 9001:2015", label: "Certified Quality", icon: Award },
  ];

  const engineServices = [
    {
      title: "🔧 Cylinder Head Facing Services",
      description: "Cylinder head facing restores flatness and sealing surfaces required for proper compression and efficient engine operation.",
      capabilities: "Precision head facing, surface finish correction, dimensional accuracy restoration.",
      benefits: ["Proper head-to-block sealing", "Improved compression efficiency", "Reduced risk of gasket failure"],
      image: "/ENGINE RECONDITIONING & DRIVETRAIN SERVICES/file_zip/Cylinder Head Facing Services.png",
      icon: FaCog
    },
    {
      title: "⚙️ Cylinder Head Valve Grinding Services",
      description: "Valve grinding ensures accurate seating of intake and exhaust valves for optimal airflow and combustion efficiency.",
      capabilities: "Valve grinding, valve seat correction, sealing surface restoration.",
      benefits: ["Improved engine breathing", "Reduced compression loss", "Enhanced engine performance"],
      image: "/ENGINE RECONDITIONING & DRIVETRAIN SERVICES/file_zip/Cylinder Head Valve Grinding Services.png",
      icon: FaTools
    },
    {
      title: "🔩 Transmission Repair & Reconditioning Services",
      description: "Transmissions transfer engine power to the drivetrain and require precise alignment and component integrity. Repair and reconditioning services restore smooth gear shifting and reliable power delivery.",
      capabilities: "Transmission inspection, component machining, bearing fitment support, alignment correction.",
      benefits: ["Smooth and reliable gear shifting", "Reduced drivetrain vibration", "Extended transmission service life"],
      image: "/ENGINE RECONDITIONING & DRIVETRAIN SERVICES/file_zip/Transmission Repair & Reconditioning Services.png",
      icon: FaWrench
    },
    {
      title: "🛠️ Differential Housing & Axle Services",
      description: "Differential housings and axles distribute torque and support load-bearing functions. Precision machining and refurbishment restore alignment and structural integrity.",
      capabilities: "Machining of differential housings, axle refurbishment, bearing seat correction.",
      benefits: ["Balanced torque distribution", "Reduced mechanical stress", "Improved drivetrain reliability"],
      image: "/ENGINE RECONDITIONING & DRIVETRAIN SERVICES/file_zip/Differential Housing & Axle Services.png",
      icon: FaIndustry
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 mt-0 lg:mt-10">
      {/* Hero Section */}
      <header className="relative overflow-hidden mt-20 sm:mt-5 bg-gradient-to-br from-orange-600 via-red-600 to-red-700">
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
              ENGINE RECONDITIONING & DRIVETRAIN SERVICES
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              ENGINE RECONDITIONING
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                & DRIVETRAIN SERVICES
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              Precision Engine & Drivetrain Solutions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Engine and drivetrain systems are central to vehicle performance, efficiency, and reliability. Precision 
              reconditioning and machining services restore critical components to correct tolerances, ensuring smooth 
              power delivery, reduced wear, and dependable operation across commercial, marine, and heavy-duty applications.
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
                <span>Request Engine Services Quote</span>
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>View Engine Services</span>
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
        {/* Engine & Drivetrain Services Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">ENGINE & DRIVETRAIN</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                SERVICES
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Precision reconditioning and machining for optimal performance
            </p>
          </motion.div>

          <div className="space-y-16">
            {engineServices.map((service, index) => (
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
                      <p className="text-slate-600 text-sm mb-4">{service.capabilities}</p>
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
                Engine Reconditioning
              </span>{" "}
              Process
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Precision engineering approach for engine and drivetrain components
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Component Assessment",
                desc: "Detailed inspection and analysis of engine and drivetrain components for wear and damage.",
              },
              {
                step: "02",
                title: "Precision Machining",
                desc: "Advanced machining and reconditioning using engine-grade specifications and tolerances.",
              },
              {
                step: "03",
                title: "Assembly & Testing",
                desc: "Professional assembly with performance testing and operational verification.",
              },
              {
                step: "04",
                title: "Quality Assurance",
                desc: "Comprehensive testing and quality control before component delivery.",
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