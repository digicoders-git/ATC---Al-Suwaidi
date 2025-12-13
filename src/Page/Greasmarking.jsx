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
  HardHat,
  Factory,
  Menu,
  X,
  Package,
  Cpu,
  Drill,
  Layers,
  RotateCw,
  Circle,
  Square,
  Triangle,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const gearServices = [
  {
    title: "Turning Operations",
    desc: "Precision turning operations for gear manufacturing including OD turning, ID turning, and taper turning on CNC lathes for accurate gear profiles.",
    image:
      "/Turning Operations.jpg",
    features: [
      "CNC Turning",
      "Precision Tolerances",
      "Multiple Materials",
      "Custom Profiles",
    ],
    specs: [
      "Tolerance: ±0.005mm",
      "Materials: Steel, Brass, Aluminum",
      "Max Diameter: 500mm",
    ],
    icon: RotateCw,
  },
  {
    title: "Threading Services",
    desc: "High-precision threading services including internal and external threads for gear assemblies and mechanical components.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    features: [
      "Internal Threading",
      "External Threading",
      "Metric & Imperial",
      "Multi-start Threads",
    ],
    specs: [
      "Thread Types: Metric, UN, ACME",
      "Pitch: 0.5-10mm",
      "Accuracy: Class 2-6",
    ],
    icon: Settings,
  },
  {
    title: "Boring Operations",
    desc: "Precision boring services for gear housings and bearing seats ensuring perfect alignment and concentricity.",
    image:
      "/Boring Operations.jpg",
    features: ["Line Boring", "Fine Boring", "Back Boring", "Deep Hole Boring"],
    specs: [
      "Bore Size: 10-1000mm",
      "Tolerance: IT6-IT8",
      "Surface Finish: Ra 0.8-3.2",
    ],
    icon: Circle,
  },
  {
    title: "Drilling Operations",
    desc: "Precision drilling services including deep hole drilling, micro-drilling, and multi-spindle drilling for gear components.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    features: [
      "Deep Hole Drilling",
      "Micro Drilling",
      "Step Drilling",
      "Multi-spindle Drilling",
    ],
    specs: ["Drill Size: 0.5-50mm", "Depth: Up to 20xD", "Accuracy: ±0.01mm"],
    icon: Drill,
  },
  {
    title: "Facing Operations",
    desc: "Precision facing operations for gear blanks and components ensuring perfect flatness and surface finish.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    features: [
      "CNC Facing",
      "Fly Cutting",
      "Surface Grinding",
      "Double Disc Grinding",
    ],
    specs: [
      "Flatness: 0.01mm/m",
      "Surface Finish: Ra 0.4-1.6",
      "Max Size: 1000x1000mm",
    ],
    icon: Square,
  },
  {
    title: "Knurling Services",
    desc: "Professional knurling services for gear handles, adjusters, and mechanical components for better grip and aesthetics.",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    features: [
      "Diamond Knurl",
      "Straight Knurl",
      "Cross Knurl",
      "Custom Patterns",
    ],
    specs: [
      "Patterns: Diamond/Straight",
      "Pitch: 0.5-2.0mm",
      "Depth: 0.1-0.5mm",
    ],
    icon: Layers,
  },
  {
    title: "Gear Milling",
    desc: "Complete gear milling services including spur gears, helical gears, bevel gears, and worm gears using advanced CNC milling machines.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    features: [
      "Spur Gear Milling",
      "Helical Gear Milling",
      "Bevel Gear Milling",
      "Worm Gear Milling",
    ],
    specs: [
      "Module: 0.5-10",
      "Accuracy: DIN 6-8",
      "Materials: Steel, Bronze, Plastic",
    ],
    icon: Cog,
  },
  {
    title: "Gear Hobbing",
    desc: "Precision gear hobbing services for high-volume production of spur and helical gears with excellent surface finish.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    features: [
      "Spur Gear Hobbing",
      "Helical Gear Hobbing",
      "Worm Gear Hobbing",
      "Spline Hobbing",
    ],
    specs: ["Module Range: 0.5-8", "Max Diameter: 500mm", "Teeth: 10-200"],
    icon: Wrench,
  },
];

const stats = [
  { value: "50,000+", label: "Gears Manufactured", icon: Cog },
  { value: "25+", label: "Years Experience", icon: Clock },
  { value: "99%", label: "Quality Accuracy", icon: CheckCircle },
  { value: "ISO 9001", label: "Certified Process", icon: Award },
];

export default function GearsMakingMillingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* MOBILE NAVIGATION */}

      {/* HERO SECTION */}
      <header className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 pt-20 lg:pt-0">
        {/* Background Pattern */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20  lg:pt-30 lg:pb-20">
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
                <Cog size={16} /> PRECISION GEAR MANUFACTURING
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Gears Making & Milling
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mt-2">
                  Specialists
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-white/90 text-lg leading-relaxed">
                Professional gear manufacturing and milling services including
                turning, threading, boring, drilling, facing, and knurling
                operations. Precision-engineered gears for industrial
                applications since 1992.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/get-quote"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-orange-600 font-semibold shadow-lg hover:shadow-xl transform transition-all hover:scale-105"
                >
                  <span>Request Gear Quote</span>
                  <Phone size={18} className="group-hover:animate-pulse" />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition"
                >
                  View Gear Types
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
                  src="/Gears Making & Milling.jpg"
                  alt="Gear Manufacturing Workshop"
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
                        Precision Gear Manufacturing
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        ISO Certified since 1992
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
            PRECISION MANUFACTURING
            <div className="h-px w-4 sm:w-8 bg-orange-600"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            Complete Gear Manufacturing & Milling Services
          </motion.h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We specialize in precision gear manufacturing and milling operations
            for industrial, automotive, and machinery applications. From small
            precision gears to large industrial gears, we deliver quality and
            accuracy.
          </p>
        </section>

        {/* Gear Services - Side by Side Cards */}
        <section id="services" className="mb-16 space-y-12 sm:space-y-20">
          {gearServices.map((service, index) => (
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
                    Manufacturing Process
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
                    Capabilities:
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
                    Technical Specifications:
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
                      Precision Machining
                    </div>
                    <div className="text-xs text-orange-600">
                      CNC Controlled
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Gear Types Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Gear Types We Manufacture
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We produce various types of gears for different applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cog,
                title: "Spur Gears",
                desc: "Straight teeth, parallel axes applications",
              },
              {
                icon: RotateCw,
                title: "Helical Gears",
                desc: "Angled teeth, smooth & quiet operation",
              },
              {
                icon: Circle,
                title: "Bevel Gears",
                desc: "Angled axes, direction change applications",
              },
              {
                icon: Layers,
                title: "Worm Gears",
                desc: "High reduction ratio, compact design",
              },
            ].map((gear, idx) => (
              <motion.div
                key={gear.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="p-3 rounded-lg bg-orange-100 w-fit mb-4">
                  <gear.icon className="text-orange-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  {gear.title}
                </h4>
                <p className="text-gray-600 text-sm">{gear.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <GetDemoSection />

      <div className="  max-w-7xl mx-auto py-12 ">
        {/* Why Choose Us Section */}
        <section className="mb-16 bg-gradient-to-br from-orange-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-orange-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Gear Services?
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Quality Assurance",
                    desc: "Stringent quality checks at every stage",
                  },
                  {
                    icon: Cog,
                    title: "Advanced Machinery",
                    desc: "State-of-the-art CNC milling machines",
                  },
                  {
                    icon: Award,
                    title: "Expert Engineers",
                    desc: "Experienced mechanical engineers",
                  },
                  {
                    icon: Clock,
                    title: "Timely Delivery",
                    desc: "Reliable production schedules",
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
                    Our precision gear manufacturing delivers these key benefits
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "High Precision & Accuracy",
                    "Custom Gear Solutions",
                    "Competitive Pricing",
                    "Technical Support",
                    "Material Options",
                    "Fast Prototyping",
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

        {/* CTA Section */}

        {/* Contact Info */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-3 rounded-lg bg-orange-100 flex-shrink-0">
                <Phone className="text-orange-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  Technical Support
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
                  gears@alsuwaidi.com
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
                  Production Hours
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
