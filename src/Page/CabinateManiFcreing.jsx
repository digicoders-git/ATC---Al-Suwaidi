import React from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  Wrench,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Factory,
  Menu,
  X,
  Droplets,
  Zap,
  Package,
  Layers,
  Box,
  HardHat,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const cabinetServices = [
  {
    title: "Water Service Cabinet 42mm",
    desc: "Standard 42mm water service cabinets designed for single meter installations with durable construction and easy access for maintenance.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    features: [
      "42mm pipe compatible",
      "Single meter housing",
      "Lockable door",
      "Weather resistant",
    ],
    specs: [
      "Material: Galvanized Steel",
      "Size: Standard",
      "Finish: Powder coated",
      "ISO 9001:2008",
    ],
    icon: Droplets,
  },
  {
    title: 'Water Service Cabinet 2"',
    desc: 'Heavy-duty 2" water service cabinets for commercial applications with larger pipe capacity and enhanced durability.',
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    features: [
      '2" pipe capacity',
      "Commercial grade",
      "Corrosion resistant",
      "Easy installation",
    ],
    specs: [
      "Material: Stainless Steel",
      "Pipe size: 2 inch",
      "Weatherproof",
      "ISO 9001:2008",
    ],
    icon: Layers,
  },
  {
    title: "Water Cabinet (2 Nos Meters)",
    desc: "Dual meter water cabinets designed for multi-unit installations with separate compartments and individual access.",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    features: [
      "Two meter capacity",
      "Separate compartments",
      "Individual locks",
      "Clear labeling",
    ],
    specs: [
      "Meters: 2 Nos",
      "Material: Powder coated steel",
      "Size: Medium",
      "ISO 9001:2008",
    ],
    icon: Box,
  },
  {
    title: "Water Cabinet (3 Nos Meters)",
    desc: "Three meter water cabinets for apartment complexes and commercial buildings with organized layout and easy maintenance.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    features: [
      "Three meter capacity",
      "Organized layout",
      "Drainage system",
      "Service access",
    ],
    specs: [
      "Meters: 3 Nos",
      "Material: Stainless steel",
      "Waterproof",
      "ISO 9001:2008",
    ],
    icon: Package,
  },
  {
    title: "Water Cabinet (4 Nos Meters)",
    desc: "Large capacity water cabinets for multiple unit installations with robust construction and professional finish.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    features: [
      "Four meter capacity",
      "Heavy-duty construction",
      "Locking system",
      "Ventilation",
    ],
    specs: [
      "Meters: 4 Nos",
      "Material: Industrial grade",
      "Size: Large",
      "ISO 9001:2008",
    ],
    icon: Package,
  },
  {
    title: "Electric Service Cabinet",
    desc: "Professional electrical service cabinets for meter installations, circuit breakers, and electrical distribution systems.",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    features: [
      "Electrical safety",
      "Circuit protection",
      "Meter housing",
      "Cable management",
    ],
    specs: [
      "Material: Fire resistant",
      "IP rating: IP65",
      "Safety compliant",
      "ISO 9001:2008",
    ],
    icon: Zap,
  },
];

const stats = [
  { value: "ISO 9001:2008", label: "Quality Certified", icon: Award },
  { value: "15,000+", label: "Cabinets Installed", icon: Factory },
  { value: "25+", label: "Years Experience", icon: Clock },
  { value: "98%", label: "Client Satisfaction", icon: CheckCircle },
];

export default function CabinetsManufacturingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 to-white">
      {/* MOBILE NAVIGATION */}

      {/* HERO SECTION */}
      <header className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 pt-10 lg:pt-0">
        {/* Background Pattern */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:pt-29 lg:pb-20">
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
                <Award size={16} /> ISO 9001:2008 CERTIFIED
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Cabinets Manufacturing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mt-2">
                  Services
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-white/90 text-lg leading-relaxed">
                Professional manufacturing of water and electric service
                cabinets with ISO 9001:2008 quality certification. We produce
                durable, reliable cabinets for residential, commercial, and
                industrial applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/get-quote"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-orange-600 font-semibold shadow-lg hover:shadow-xl transform transition-all hover:scale-105"
                >
                  <span>Request Manufacturing Quote</span>
                  <Phone size={18} className="group-hover:animate-pulse" />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition"
                >
                  View Cabinet Types
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
                  alt="Cabinets Manufacturing"
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
                        ISO 9001:2008 Certified
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Quality manufacturing since 1992
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
            QUALITY MANUFACTURING
            <div className="h-px w-4 sm:w-8 bg-orange-600"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            Professional Cabinets Manufacturing
          </motion.h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We manufacture high-quality water and electric service cabinets
            following ISO 9001:2008 standards. Our cabinets are designed for
            durability, safety, and easy maintenance for residential,
            commercial, and industrial applications.
          </p>
        </section>

        {/* Cabinet Services - Side by Side Cards */}
        <section className="mb-16 space-y-12 sm:space-y-20">
          {cabinetServices.map((service, index) => (
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
                    Cabinet Type
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
                      ISO 9001:2008
                    </div>
                    <div className="text-xs text-orange-600">
                      Quality Certified
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Manufacturing Capabilities */}
        <section className="mb-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Manufacturing Capabilities
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Advanced manufacturing processes and quality control
            </p>
          </motion.div>

          {/* Capability Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Factory,
                title: "Sheet Metal Fabrication",
                desc: "Precision cutting, bending, and welding",
              },
              {
                icon: Sparkles,
                title: "Surface Treatment",
                desc: "Powder coating and finishing",
              },
              {
                icon: Shield,
                title: "Quality Control",
                desc: "Stringent quality checks at every stage",
              },
              {
                icon: Package,
                title: "Assembly & Testing",
                desc: "Final assembly and functional testing",
              },
            ].map((capability, idx) => (
              <motion.div
                key={capability.title}
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
                  <capability.icon className="text-orange-600" size={26} />
                </div>

                {/* Text */}
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  {capability.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {capability.desc}
                </p>

                {/* Subtle Industrial Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 
          group-hover:opacity-100 transition 
          bg-gradient-to-br from-orange-400/10 to-gray-400/10 
          pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <GetDemoSection />

      <div className=" max-w-7xl mx-auto py-15">
        {/* Why Choose Us Section */}
        <section className="mb-16 bg-gradient-to-br from-orange-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-orange-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Cabinets?
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: Award,
                    title: "ISO 9001:2008 Certified",
                    desc: "Quality management system certified",
                  },
                  {
                    icon: Shield,
                    title: "Durable Materials",
                    desc: "High-quality galvanized and stainless steel",
                  },
                  {
                    icon: Settings,
                    title: "Custom Designs",
                    desc: "Customizable to your specific requirements",
                  },
                  {
                    icon: Clock,
                    title: "Timely Delivery",
                    desc: "Reliable manufacturing and delivery schedule",
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
                    Quality Standards
                  </h4>
                  <p className="text-orange-100 text-sm sm:text-base">
                    Our manufacturing follows strict quality standards
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "ISO 9001:2008 Certified",
                    "Material Quality Testing",
                    "Precision Manufacturing",
                    "Surface Finish Standards",
                    "Functional Testing",
                    "Documentation & Traceability",
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
                  Manufacturing Enquiry
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
                  cabinets@alsuwaidi.com
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
