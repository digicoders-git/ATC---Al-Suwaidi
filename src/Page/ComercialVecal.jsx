import React from "react";
import { Link, Navigate } from "react-router-dom";
import {
  Truck,
  Wrench,
  Factory,
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
  Cog,
  HardHat,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const vehicleServices = [
  {
    title: "Sewage Tanker Bodies",
    desc: "Heavy-duty sewage tankers with corrosion-resistant materials, high-capacity storage, and advanced pumping systems for efficient waste management.",
    image: "/maxim-tolchinskiy-UQ7-BmNeq5A-unsplash.jpg",
    features: [
      "Corrosion-resistant",
      "High-capacity",
      "Pumping systems",
      "Safety valves",
    ],
    specs: [
      "Capacity: 5,000-20,000L",
      "Material: Stainless Steel",
      "Pump: Hydraulic",
    ],
    icon: Truck,
  },
  {
    title: "Dump Truck Bodies",
    desc: "Robust dump truck bodies for construction and mining industries, featuring reinforced structures and hydraulic systems for reliable material handling.",
    image: "/Dump Truck Bodies.jpg",
    features: [
      "Reinforced structure",
      "Hydraulic system",
      "Heavy-duty chassis",
      "Safety locks",
    ],
    specs: [
      "Capacity: 10-30 tons",
      "Material: High-tensile steel",
      "Lift: Hydraulic",
    ],
    icon: HardHat,
  },
  {
    title: "Tow Truck Bodies",
    desc: "Specialized tow truck bodies with integrated winch systems, recovery equipment, and adjustable boom arms for vehicle recovery operations.",
    image: "/Tow Truck Bodies.webp",
    features: [
      "Integrated winch",
      "Recovery equipment",
      "Adjustable boom",
      "Light bars",
    ],
    specs: ["Winch: 10-25 tons", "Boom: Hydraulic", "Lights: LED"],
    icon: Zap,
  },
  {
    title: "Tipper Truck Bodies",
    desc: "Efficient tipper bodies for construction and agriculture with smooth dumping mechanisms, reinforced sides, and durable flooring.",
    image: "/Tipper Truck Bodies.jpg",
    features: [
      "Smooth dumping",
      "Reinforced sides",
      "Durable flooring",
      "Safety latches",
    ],
    specs: [
      "Capacity: 15-25 cubic meters",
      "Material: Wear-resistant steel",
      "Tilt: 45-50 degrees",
    ],
    icon: Truck,
  },
  {
    title: "Flatbed Truck Bodies",
    desc: "Versatile flatbed bodies for general cargo transport with tie-down points, removable sides, and durable construction for various loads.",
    image: "/Flatbed Truck Bodies.jpg",
    features: [
      "Tie-down points",
      "Removable sides",
      "Non-slip surface",
      "Loading ramps",
    ],
    specs: ["Length: 20-40ft", "Material: Steel decking", "Load: 15-30 tons"],
    icon: Wrench,
  },
  {
    title: "Trailer Truck Bodies",
    desc: "Custom trailer bodies including semi-trailers, container carriers, and specialized transport solutions with advanced suspension systems.",
    image: "/Trailer Truck Bodies.jpg",
    features: [
      "Custom length",
      "Advanced suspension",
      "Braking systems",
      "Lighting systems",
    ],
    specs: ["Types: Semi/Full", "Axles: 2-5", "Suspension: Air/Leaf"],
    icon: Cog,
  },
  {
    title: "Refrigerated Truck Bodies",
    desc: "Insulated refrigerated bodies with temperature control systems for perishable goods transport across various temperature ranges.",
    image: "/Refrigerated Truck Bodies.jpg",
    features: [
      "Temperature control",
      "Insulated walls",
      "Refrigeration unit",
      "Hygiene lining",
    ],
    specs: [
      "Temp: -20°C to +20°C",
      "Insulation: PU foam",
      "Power: Diesel/Electric",
    ],
    icon: Sparkles,
  },
  {
    title: "Fuel Tanker Bodies",
    desc: "Safety-certified fuel tanker bodies with compartmentalized tanks, safety valves, and advanced metering systems for petroleum transport.",
    image: "/Fuel Tanker Bodies.jpg",
    features: [
      "Compartmentalized",
      "Safety valves",
      "Metering systems",
      "Anti-static",
    ],
    specs: [
      "Capacity: 10,000-40,000L",
      "Compartments: 3-5",
      "Certification: ADR",
    ],
    icon: Shield,
  },
];

const stats = [
  { value: "5000+", label: "Vehicle Bodies Built", icon: Truck },
  { value: "30+", label: "Years Experience", icon: Clock },
  { value: "98%", label: "Client Satisfaction", icon: CheckCircle },
  { value: "ISO 9001", label: "Certified Quality", icon: Award },
];

export default function CommercialVehicleBodiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-5">
      {/* MOBILE NAVIGATION */}

      {/* HERO SECTION */}
      <header className="relative  overflow-hidden mt-10 lg:mt-0 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 pt-20 lg:pt-0">
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
                <Truck size={16} /> COMMERCIAL VEHICLE SPECIALISTS
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Commercial Vehicle
                <span className="block mt-2">Bodies Fabrication</span>
              </h1>

              <p className="mt-6 max-w-xl text-white/90 text-lg leading-relaxed">
                Custom-built, heavy-duty vehicle bodies for sewage tankers, dump
                trucks, tow trucks, tipper trucks, flatbeds, trailers, and
                specialized transport solutions. Engineered for durability and
                performance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/get-quote"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-orange-600 font-semibold shadow-lg hover:shadow-xl transform transition-all hover:scale-105"
                >
                  <span>Request Custom Quote</span>
                  <Phone size={18} className="group-hover:animate-pulse" />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition"
                >
                  View Our Work
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
                  src="/chandler-cruttenden-S_wWZf0dZqc-unsplash.jpg"
                  alt="Commercial Vehicle Fabrication"
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
                        Certified Vehicle Fabrication
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Built to industry standards since 1992
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
        <section id="services" className="mb-12 sm:mb-16 text-center ">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-orange-600 font-semibold mb-4"
          >
            <div className="h-px w-4 sm:w-8 bg-orange-600"></div>
            CUSTOM FABRICATION SOLUTIONS
            <div className="h-px w-4 sm:w-8 bg-orange-600"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            All Types of Commercial Vehicle Bodies
          </motion.h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We specialize in custom fabrication of commercial vehicle bodies for
            various industries. Each vehicle is engineered for specific
            operational requirements with focus on durability, safety, and
            efficiency.
          </p>
        </section>

        {/* Vehicle Services - Responsive Side by Side Cards */}
        <section className="mb-16 space-y-12 sm:space-y-20">
          {vehicleServices.map((service, index) => (
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
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
                    <service.icon className="text-orange-600" size={20} />
                  </div>
                  <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                    Vehicle Body Type
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
                      Custom Built
                    </div>
                    <div className="text-xs text-orange-600">
                      To Your Specifications
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </section>
      </main>

      <GetDemoSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <section className="mb-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 via-white to-orange-100 p-8 sm:p-12 border border-orange-200 shadow-xl">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-300/20 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-8">
                Our Fabrication Capabilities
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: HardHat,
                    title: "Structural Engineering",
                    desc: "Advanced CAD design & structural analysis",
                  },
                  {
                    icon: Wrench,
                    title: "Custom Fabrication",
                    desc: "Precision cutting, bending & welding",
                  },
                  {
                    icon: Cog,
                    title: "Mechanical Integration",
                    desc: "Hydraulic & mechanical assemblies",
                  },
                  {
                    icon: Shield,
                    title: "Quality Assurance",
                    desc: "Strict testing & compliance checks",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-start gap-4 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-md hover:shadow-xl transition"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-orange-600 to-red-600 p-8 text-white shadow-2xl">
                <h4 className="text-2xl font-bold mb-4">Why Choose Us?</h4>
                <p className="text-orange-100 mb-6">
                  30+ years of experience delivering world-class commercial
                  vehicle bodies.
                </p>

                <div className="space-y-3">
                  {[
                    "30+ Years Experience",
                    "Custom Engineering",
                    "Premium Materials",
                    "On-Time Delivery",
                    "After-Sales Support",
                    "Competitive Pricing",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-orange-200" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Phone,
              title: "Phone",
              value: "+974 44601087",
            },
            {
              icon: Mail,
              title: "Email",
              value: "info@alsuwaidi.com",
            },
            {
              icon: MapPin,
              title: "Location",
              value: "Doha, Qatar",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white">
                  <item.icon size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <p className="font-semibold text-gray-900">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}
