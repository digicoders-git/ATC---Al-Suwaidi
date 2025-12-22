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
    title: "💧 Water Service Cabinet – 42 mm",
    desc: "KAHRAMAA-Approved Water Meter Cabinets. Our Water Service Cabinets are manufactured strictly in accordance with KAHRAMAA specifications, ensuring smooth approvals, reliable performance, and long-term durability in Qatar's outdoor conditions. Designed for residential, commercial, and infrastructure projects.",
    image: "/CabnateMAnifecting/1765970113122.jpg",
    features: [
      "KAHRAMAA-approved dimensions & design",
      "High-grade aluminium construction",
      "Weather & corrosion resistant",
      "Secure locking system",
      "Suitable for outdoor installations",
    ],
    specs: [
      "Material: 3 mm thick aluminium body",
      "Pipe Entry: 2 × Ø42 mm (Top & Bottom)",
      "Door: 6 mm wired glass, 2 × 8 mm triangular locks",
      "Size: 830 × 300 × 230 mm",
      "Colour: White",
      "Ventilation: Louvered with aluminium screen",
    ],
    icon: Droplets,
  },
  {
    title: "💧 Water Service Cabinet – 2″",
    desc: "KAHRAMAA-approved 2″ water service cabinet with durable aluminum construction and high-quality powder coating for long-lasting performance in Qatar's challenging outdoor conditions.",
    image: "/CabnateMAnifecting/WATERSERVICECABINET1” DIA.jpg",
    features: [
      "KAHRAMAA Approved",
      "2 inch Capacity",
      "Corrosion Resistant",
      "Professional Finish",
    ],
    specs: [
      "Material: 3 mm thick aluminium body",
      "Pipe Entry: 2 × Ø56 mm holes (both sides)",
      "Door: 6 mm wired glass, 2 × 8 mm triangular locks",
      "Size: 750 × 650 × 300 mm",
      "Colour: White",
      "Ventilation: Louvered ventilation with aluminium screen",
    ],
    icon: Layers,
  },
  {
    title: "💧 Water Meter Cabinet – 2 Nos Meters",
    desc: "KAHRAMAA-approved dual meter water cabinet designed for multi-unit installations with separate compartments and professional finish. Perfect for residential and commercial developments.",
    image: "/CabnateMAnifecting/WATER (3) METER CABINET.jpg",
    features: [
      "KAHRAMAA Approved",
      "2 Meter Capacity",
      "Separate Compartments",
      "Durable Construction",
    ],
    specs: [
      "Material: 3 mm thick aluminium body",
      "Pipe Entry: 4 × Ø42 mm holes (both sides)",
      "Door: 2 × 6 mm wired glass panels, 2 × 8 mm triangular locks",
      "Size: 660 × 850 × 200 mm",
      "Colour: White",
      "Ventilation: Louvered ventilation with aluminium screen",
    ],
    icon: Box,
  },
  {
    title: "💧 Water Meter Cabinet – 3 Nos Meters",
    desc: "KAHRAMAA-approved three meter water cabinet for apartment complexes with organized layout and high-quality textured finish. Ideal for medium-scale residential projects.",
    image: "/CabnateMAnifecting/WATER (4) METER CABINET.jpg",
    features: [
      "KAHRAMAA Approved",
      "3 Meter Capacity",
      "Organized Layout",
      "Textured Finish",
    ],
    specs: [
      "Material: 3 mm thick aluminium body",
      "Pipe Entry: 6 × Ø42 mm holes (both sides)",
      "Door: 3 × 6 mm wired glass panels, 3 × 8 mm triangular locks",
      "Size: 900 × 850 × 200 mm",
      "Colour: White",
      "Ventilation: Louvered ventilation with aluminium screen",
    ],
    icon: Package,
  },
  {
    title: "💧 Water Meter Cabinet – 4 Nos Meters",
    desc: "KAHRAMAA-approved large capacity water cabinet for multiple unit installations with robust aluminum construction and professional finish. Suitable for large residential and commercial projects.",
    image: "/CabnateMAnifecting/1765969455965.jpg",
    features: [
      "KAHRAMAA Approved",
      "4 Meter Capacity",
      "Heavy-Duty Construction",
      "Professional Finish",
    ],
    specs: [
      "Material: 3 mm thick aluminium body",
      "Pipe Entry: 8 × Ø42 mm holes (both sides)",
      "Door: 4 × 6 mm wired glass panels, 2 × 8 mm triangular locks",
      "Size: 1100 × 850 × 200 mm",
      "Colour: White",
      "Ventilation: Louvered ventilation with aluminium screen",
    ],
    icon: Package,
  },
  {
    title: "💧 Water Meter Cabinet – 5 Nos Meters",
    desc: "KAHRAMAA-approved extra large capacity water cabinet for extensive multi-unit installations with superior aluminum construction and professional finish.",
    image: "/CabnateMAnifecting/1765970113122.jpg",
    features: [
      "KAHRAMAA Approved",
      "5 Meter Capacity",
      "Extra Large Design",
      "Superior Construction",
    ],
    specs: [
      "Material: 3 mm thick aluminium body",
      "Pipe Entry: 10 × Ø42 mm holes (both sides)",
      "Door: 5 × 6 mm wired glass panels, 5 × 8 mm triangular locks",
      "Size: 1300 × 700 × 200 mm",
      "Colour: White",
      "Ventilation: Louvered ventilation with aluminium screen",
    ],
    icon: Package,
  },
  {
    title: "⚡ KAHRAMAA-Approved Electric Service Cabinet",
    desc: "Our Electrical Service Cabinets are engineered to meet KAHRAMAA electrical utility requirements, providing safe and reliable enclosures for electrical service connections across all project types. Widely used in government, EPC, and infrastructure projects where compliance and safety are critical.",
    image: "/CabnateMAnifecting/ELECTRIC SERVICECABINET.jpg",
    features: [
      "KAHRAMAA-compliant design & specifications",
      "Strong aluminium body",
      "Ventilated design for heat control",
      "Secure access & safety compliance",
      "Suitable for residential, commercial & industrial use",
    ],
    specs: [
      "Material: 3 mm thick aluminium body",
      "Pipe Entry: 2 × Ø112 mm holes (bottom side)",
      "Door: 1 × 6 mm wired glass panel, 2 × 8 mm triangular locks",
      "Service Door: 1 × 100 × 100 mm service door with lock",
      "Size: 830 × 600 × 200 mm",
      "Colour: White",
      "Ventilation: Louvered ventilation with aluminium screen",
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
      <header className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-600">
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
              className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-md text-white px-6 mt-10 sm:mt-10 py-3 text-sm font-semibold mb-8 border border-white/20 shadow-lg"
            >
              <Award size={18} className="text-orange-200" />
              ISO 9001:2008 CERTIFIED MANUFACTURING
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              CABINETS
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                MANUFACTURING
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-300 mb-2 max-w-5xl mx-auto"
            >
              KAHRAMAA-Approved Water & Electric Service Cabinets
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-md sm:text-lg text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              We manufacture utility-approved aluminium cabinets designed to
              meet KAHRAMAA standards for water and electrical service
              connections. Our cabinets are trusted across residential,
              commercial, infrastructure, and government projects for their
              durability, precision, and compliance.
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
                <span>Request Manufacturing Quote</span>
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>View Cabinet Types</span>
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
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 hover:bg-white/15 transition-all hover:scale-105"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
                      <stat.icon className="text-orange-200" size={24} />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-white">
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
            KAHRAMAA Approval & Compliance
          </motion.h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            ✔ KAHRAMAA-Approved Designs
            <br />
            ✔ Manufactured strictly as per KAHRAMAA specifications
            <br />
            ✔ Accepted for official water meter and electrical service
            installations
            <br />✔ Suitable for government, municipal, and EPC projects
          </p>
        </section>

        {/* Cabinet Services - Modern Side-by-Side Cards */}
        <section id="services" className="mb-16 space-y-16">
          {cabinetServices.map((service, index) => (
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
                        CABINET MANUFACTURING
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        KAHRAMAA Approved
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
                      Key Features:
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
                          KAHRAMAA
                        </div>
                        <div className="text-xs text-orange-600 font-semibold">Approved</div>
                      </motion.div>
                    </div>
                  </motion.div>
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
                  className="p-2 rounded-2xl 
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
