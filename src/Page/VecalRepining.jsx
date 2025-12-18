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
  HardHat,
  Factory,
  Menu,
  X,
  RotateCw,
  Circle,
  Square,
  Hexagon,
  GitPullRequest,
  Gauge,
  Thermometer,
  Package,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const wheelServices = [
  {
    title: "Disc Facing & Resurfacing",
    desc: "Professional disc brake resurfacing services to restore smooth braking surface and eliminate vibrations, ensuring optimal brake performance.",
    image: "/Dics.png",
    features: [
      "Precision machining",
      "Vibration elimination",
      "Surface finishing",
      "Thickness check",
    ],
    specs: [
      "Tolerance: ±0.005mm",
      "Minimum thickness: As per OEM",
      "Equipment: On-car lathe",
    ],
    icon: Circle,
  },
  {
    title: "Drum Facing & Resurfacing",
    desc: "Complete drum brake resurfacing services to restore braking efficiency and eliminate brake pull, using precision drum lathe machines.",
    image: "/Gemini_Generated_Image_g9wno9g9wno9g9wn.png",
    features: [
      "Drum turning",
      "Surface finishing",
      "Diameter check",
      "Runout correction",
    ],
    specs: [
      "Max diameter: 400mm",
      "Tolerance: ±0.01mm",
      "Finish: Smooth cross-hatch",
    ],
    icon: RotateCw,
  },
  {
    title: "Flywheel Facing & Resurfacing",
    desc: "Precision flywheel resurfacing services to ensure proper clutch engagement and eliminate judder, extending clutch life.",
    image: "/Gemini_Generated_Image_kbg70wkbg70wkbg7.png",
    features: [
      "Surface machining",
      "Step height check",
      "Heat checking repair",
      "Balancing",
    ],
    specs: [
      "Types: Single/Mass flywheel",
      "Step: 0.3-0.8mm",
      "Equipment: CNC flywheel lathe",
    ],
    icon: Settings,
  },
  {
    title: "Wheel Straightening & Balancing",
    desc: "Professional wheel straightening services for alloy and steel wheels, including dynamic balancing for vibration-free driving.",
    image: "/Gemini_Generated_Image_n7dcpwn7dcpwn7dc (2).png",
    features: [
      "Bend correction",
      "Crack repair",
      "Dynamic balancing",
      "Runout correction",
    ],
    specs: [
      "Wheel types: Alloy/Steel",
      "Max size: 24 inches",
      "Balancing: Computerized",
    ],
    icon: Wrench,
  },
  {
    title: "Rim Welding & Machining",
    desc: "Expert rim welding and machining services including crack repair, bead seat repair, and custom rim modifications.",
    image: "/Gemini_Generated_Image_1tjr981tjr981tjr.png",
    features: [
      "Crack welding",
      "Bead seat repair",
      "Custom machining",
      "Surface finishing",
    ],
    specs: [
      "Welding: TIG/MIG",
      "Materials: Aluminum/Steel",
      "Machining: CNC/Lathe",
    ],
    icon: Cog,
  },
  {
    title: "Wheel Alignment Services",
    desc: "Complete wheel alignment services including camber, caster, and toe adjustment for optimal tire wear and handling.",
    image: "/Gemini_Generated_Image_xp5iy3xp5iy3xp5i.png",
    features: [
      "Computerized alignment",
      "Camber adjustment",
      "Caster adjustment",
      "Toe adjustment",
    ],
    specs: [
      "Equipment: 3D alignment",
      "Accuracy: ±0.1°",
      "Vehicles: All types",
    ],
    icon: GitPullRequest,
  },
  {
    title: "Tire Mounting & Demounting",
    desc: "Professional tire mounting and demounting services including TPMS sensor installation and tire pressure monitoring.",
    image: "/Gemini_Generated_Image_9xe409xe409xe409 (1).png",
    features: [
      "Tire mounting",
      "TPMS service",
      "Pressure check",
      "Valve replacement",
    ],
    specs: [
      "Tire sizes: All",
      "TPMS: Sensor programming",
      "Equipment: Automated",
    ],
    icon: Package,
  },
  {
    title: "Custom Wheel Modifications",
    desc: "Custom wheel modification services including color changes, machining, and performance enhancements for special vehicles.",
    image: "/Gemini_Generated_Image_slhut6slhut6slhu.png",
    features: [
      "Color powder coating",
      "Diamond cutting",
      "Widening",
      "Polishing",
    ],
    specs: ["Finishes: Powder/Plating", "Custom sizes", "Materials: Various"],
    icon: Sparkles,
  },
];

const stats = [
  { value: "20,000+", label: "Wheels Repaired", icon: Circle },
  { value: "25+", label: "Years Experience", icon: Clock },
  { value: "97%", label: "Customer Satisfaction", icon: CheckCircle },
  { value: "ISO Certified", label: "Quality Service", icon: Award },
];

export default function VehicleWheelsRepairPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b mt-5 from-gray-50 to-white">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 pt-20 lg:pt-0">
        {/* Desktop Navigation */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
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
                <Circle size={16} /> WHEEL REPAIR SPECIALISTS
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Vehicle Wheels
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mt-2">
                  Repairing Works
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-white/90 text-lg leading-relaxed">
                Professional wheel repair and resurfacing services including
                disc facing, drum facing, flywheel facing, wheel straightening,
                and rim welding. Precision services for optimal vehicle
                performance and safety.
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
                  View Our Services
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
                  src="/MianHEader.png"
                  alt="Wheel Repair Workshop"
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
                        Certified Wheel Services
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Precision work since 1992
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
        <section id="services" className="mb-12 sm:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-orange-600 font-semibold mb-4"
          >
            <div className="h-px w-4 sm:w-8 bg-orange-600"></div>
            PROFESSIONAL WHEEL SERVICES
            <div className="h-px w-4 sm:w-8 bg-orange-600"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            Complete Wheel Repair & Resurfacing Services
          </motion.h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We provide comprehensive wheel repair and resurfacing services for
            all types of vehicles. Our experienced technicians use specialized
            equipment to ensure precision repairs and optimal performance for
            your vehicle's braking and wheel systems.
          </p>
        </section>

        {/* Wheel Services - Side by Side Cards */}
        <section className="mb-16 space-y-12 sm:space-y-20">
          {wheelServices.map((service, index) => (
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
                    Wheel Service
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
                    Service Features:
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
                    Technical Details:
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

        {/* Additional Wheel Services Section */}
        <section className="mb-5">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Additional Wheel Services
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              We also provide these additional wheel and brake services
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Brake Pad Replacement",
                desc: "Quality brake pads for all vehicle types",
              },
              {
                icon: Gauge,
                title: "Brake Fluid Flush",
                desc: "Complete brake fluid replacement service",
              },
              {
                icon: Thermometer,
                title: "Brake System Inspection",
                desc: "Comprehensive brake system check",
              },
              {
                icon: Zap,
                title: "ABS System Service",
                desc: "ABS sensor and module repairs",
              },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, type: "spring" }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative rounded-2xl 
        bg-white/80 backdrop-blur-xl 
        border border-gray-200 
        p-6 shadow-sm hover:shadow-2xl 
        transition-all"
              >
                {/* Icon */}
                <div
                  className="p-4 rounded-2xl 
        bg-gradient-to-br from-orange-100 to-orange-200 
        w-fit mb-5 
        group-hover:scale-110 transition"
                >
                  <service.icon className="text-orange-600" size={26} />
                </div>

                {/* Text */}
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 
        group-hover:opacity-100 transition 
        bg-gradient-to-br from-orange-400/10 to-red-400/10 
        pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <GetDemoSection />

      <div className="max-w-7xl mx-auto  py-15">
        {/* Why Choose Us Section */}
        <section className="mb-16 bg-gradient-to-br from-orange-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-orange-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Wheel Services?
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Certified Technicians",
                    desc: "Trained and certified wheel specialists",
                  },
                  {
                    icon: Settings,
                    title: "Precision Equipment",
                    desc: "Advanced wheel repair machinery",
                  },
                  {
                    icon: Award,
                    title: "Quality Materials",
                    desc: "Genuine parts and quality consumables",
                  },
                  {
                    icon: Clock,
                    title: "Fast Service",
                    desc: "Quick turnaround for wheel repairs",
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
                    Our professional wheel services deliver these key benefits
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Improved Braking Performance",
                    "Smooth Driving Experience",
                    "Extended Brake Life",
                    "Reduced Vibrations",
                    "Better Fuel Efficiency",
                    "Warranty on Services",
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
                  wheels@alsuwaidi.com
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
