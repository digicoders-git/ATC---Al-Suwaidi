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
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const engineServices = [
  {
    title: "Crank Grinding & Reconditioning",
    desc: "Precision crank grinding and reconditioning services to restore engine crankshafts to factory specifications. We handle all types of crankshafts for diesel and petrol engines.",
    image: "/Crank Grinding & Reconditioning.jpg",
    features: [
      "Precision grinding",
      "Polishing",
      "Dynamic balancing",
      "Hard chrome plating",
    ],
    specs: [
      "Tolerance: ±0.001mm",
      "Material: Alloy Steel",
      "Process: CNC Machining",
    ],
    icon: Cog,
  },
  {
    title: "Block Boring & Honing",
    desc: "Professional cylinder block boring and honing services to ensure perfect cylinder geometry and surface finish for optimal compression and oil control.",
    image: "/Block Boring & Honing.jpg",
    features: [
      "Cylinder boring",
      "Surface honing",
      "Deck resurfacing",
      "Thread repair",
    ],
    specs: [
      "Bore: 0.5-6.0mm oversize",
      "Finish: Cross-hatch pattern",
      "Equipment: CNC Boring",
    ],
    icon: Wrench,
  },
  {
    title: "Liner Fitting & Replacement",
    desc: "Expert cylinder liner fitting and replacement services including wet and dry liners for all types of heavy-duty and automotive engines.",
    image: "/Liner Fitting & Replacement.jpg",
    features: [
      "Wet liner fitting",
      "Dry liner installation",
      "O-ring replacement",
      "Pressure testing",
    ],
    specs: [
      "Types: Wet/Dry liners",
      "Materials: Cast Iron/Steel",
      "Sealing: Rubber/Copper",
    ],
    icon: Package,
  },
  {
    title: "Piston & Ring Fitting",
    desc: "Complete piston and ring assembly services including piston sizing, ring gap setting, and installation for optimal engine performance and longevity.",
    image: "/Piston & Ring Fitting.jpg",
    features: [
      "Piston sizing",
      "Ring gap setting",
      "Assembly",
      "Clearance checking",
    ],
    specs: [
      "Clearance: 0.05-0.15mm",
      "Ring types: Compression/Oil",
      "Materials: Forged/Cast",
    ],
    icon: Settings,
  },
  {
    title: "Head Pressure Checking",
    desc: "Comprehensive cylinder head pressure testing to detect cracks, leaks, and structural weaknesses ensuring complete reliability under operational pressure.",
    image: "/Head Pressure Checking.jpg",
    features: [
      "Pressure testing",
      "Leak detection",
      "Crack testing",
      "Valve seat inspection",
    ],
    specs: [
      "Test pressure: 50-100 PSI",
      "Methods: Air/Water testing",
      "Equipment: Digital",
    ],
    icon: Gauge,
  },
  {
    title: "Valve & Tappet Setting",
    desc: "Precision valve and tappet adjustment services including valve grinding, seat cutting, and clearance setting for optimal engine breathing and performance.",
    image: "/travis-johansen-ivKOpPM3wrI-unsplash.jpg",
    features: [
      "Valve grinding",
      "Seat cutting",
      "Clearance setting",
      "Spring testing",
    ],
    specs: [
      "Clearance: 0.10-0.30mm",
      "Angle: 45°/30°",
      "Equipment: Valve grinding machine",
    ],
    icon: Thermometer,
  },
  {
    title: "Engine Overhauling",
    desc: "Complete engine overhaul services including disassembly, inspection, reconditioning, and reassembly for total engine restoration and performance improvement.",
    image: "/sitraka-9eAUiN6Polk-unsplash.jpg",
    features: [
      "Complete disassembly",
      "Part inspection",
      "Reconditioning",
      "Reassembly",
    ],
    specs: [
      "Types: Diesel/Petrol",
      "Capacity: All sizes",
      "Warranty: 6-12 months",
    ],
    icon: Zap,
  },
  {
    title: "Fuel Injection System",
    desc: "Professional fuel injection system services including pump calibration, nozzle testing, and injection timing adjustment for optimal fuel efficiency and power.",
    image: "/maria-sime-wi1pIxeUWDk-unsplash.jpg",
    features: [
      "Pump calibration",
      "Nozzle testing",
      "Timing adjustment",
      "Pressure setting",
    ],
    specs: [
      "Pressure: 150-300 bar",
      "Calibration: Digital",
      "Nozzle types: Multi-hole/Pintle",
    ],
    icon: Droplets,
  },
];

const stats = [
  { value: "3000+", label: "Engines Repaired", icon: Settings },
  { value: "25+", label: "Years Experience", icon: Clock },
  { value: "95%", label: "Customer Satisfaction", icon: CheckCircle },
  { value: "ISO Certified", label: "Quality Service", icon: Award },
];

export default function VehicleEngineRepairPage() {
  return (
    <div>
      {/* HERO SECTION */}
      <header className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 pt-20 lg:pt-0">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 lg:pt-28 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <Settings size={16} /> ENGINE REPAIR SPECIALISTS
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Vehicle Engine & Mechanical
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mt-2">
                  Repair Services
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-white/90 text-lg leading-relaxed">
                Professional engine repair and reconditioning services including
                crank grinding, block boring, liner fitting, valve setting, and
                complete engine overhauling. Trusted by commercial fleets since
                1992.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/get-quote"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-orange-600 font-semibold shadow-lg hover:shadow-xl transform transition-all hover:scale-105"
                >
                  <span>Request Service Quote</span>
                  <Phone size={18} className="group-hover:animate-pulse" />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition"
                >
                  View Services
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Stats Bar - Responsive */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-1 sm:gap-2 text-white">
                      <stat.icon
                        className="text-orange-300 mx-auto sm:mx-0"
                        size={20}
                      />
                      <div className="text-xl sm:text-2xl font-bold">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image - Responsive */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Vehicle Engine & Mechanical.jpg"
                  alt="Engine Repair Workshop"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                {/* Floating Card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-2xl"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1 sm:p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                      <Shield className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">
                        Certified Engine Repair
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Precision engineering since 1992
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

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Introduction */}
        <section className="mb-12 sm:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-orange-600 font-semibold mb-4"
          >
            <div className="h-px w-4 sm:w-8 bg-orange-600"></div>
            PRECISION ENGINE SERVICES
            <div className="h-px w-4 sm:w-8 bg-orange-600"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            Complete Engine Repair & Reconditioning
          </motion.h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We provide professional engine repair and reconditioning services
            for all types of commercial and industrial vehicles. Our expert
            technicians use precision equipment to ensure your engine performs
            like new.
          </p>
        </section>

        {/* Engine Services - Side by Side Cards */}
        <section className="mb-16 space-y-12 sm:space-y-20">
          {engineServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group flex flex-col lg:flex-row gap-6 sm:gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 lg:w-1/2 px-4 sm:px-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-orange-50 to-red-50">
                    <service.icon className="text-orange-600" size={20} />
                  </div>
                  <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                    Engine Service
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
                  {service.desc}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-orange-50 text-orange-700 text-sm rounded-full border border-orange-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                    Specifications:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-500 flex-shrink-0"
                        />
                        <span className="text-sm sm:text-base">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-lg transition text-sm sm:text-base"
                  >
                    View service Detail
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/get-quote"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition text-sm sm:text-base"
                  >
                    Get Custom Quote
                  </Link>
                </div>
              </div>

              {/* Image Content */}
              <div className="flex-1 lg:w-1/2 w-full px-4 sm:px-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>

                  {/* Overlay Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                    <div className="text-sm font-semibold text-gray-900">
                      Precision Service
                    </div>
                    <div className="text-xs text-orange-600">
                      Expert Technicians
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Additional Services Section */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Other Mechanical Services
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We also provide these additional mechanical services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cog,
                title: "Gearbox Repair",
                desc: "Manual & automatic gearbox services",
              },
              {
                icon: Wrench,
                title: "Suspension Work",
                desc: "All suspension system repairs",
              },
              {
                icon: Gauge,
                title: "Brake System",
                desc: "Complete brake system overhaul",
              },
              {
                icon: Thermometer,
                title: "Cooling System",
                desc: "Radiator & cooling repairs",
              },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="p-3 rounded-lg bg-orange-100 w-fit mb-4">
                  <service.icon className="text-orange-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <GetDemoSection />

<div className="max-w-7xl mx-auto my-10">

        {/* Why Choose Us Section */}
      <section className="mb-16 bg-gradient-to-br from-orange-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-orange-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Our Engine Services?
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  icon: Shield,
                  title: "Certified Technicians",
                  desc: "Factory-trained and certified professionals",
                },
                {
                  icon: Settings,
                  title: "Precision Equipment",
                  desc: "State-of-the-art diagnostic and repair tools",
                },
                {
                  icon: Award,
                  title: "Quality Parts",
                  desc: "Genuine and high-quality replacement parts",
                },
                {
                  icon: Clock,
                  title: "Fast Turnaround",
                  desc: "Quick and efficient service completion",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-white transition"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-orange-100 flex-shrink-0">
                    <item.icon className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
              <div className="mb-6">
                <h4 className="text-xl sm:text-2xl font-bold mb-4">
                  Service Benefits
                </h4>
                <p className="text-orange-100 text-sm sm:text-base">
                  Our professional engine services deliver these key benefits to
                  your business
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Extended Engine Life",
                  "Improved Fuel Efficiency",
                  "Reduced Downtime",
                  "Warranty Coverage",
                  "Professional Diagnosis",
                  "Cost-Effective Solutions",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle
                      size={16}
                      className="text-orange-200 flex-shrink-0"
                    />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


 

      {/* Contact Info */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                service@alsuwaidi.com
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
                Working Hours
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
