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
import ServiceCabinetCards from "../Component/CabinateType";



const stats = [
  { value: "ISO 9001:2015", label: "Quality Certified", icon: Award },
  { value: "5,000+", label: "Cabinets Installed", icon: Factory },
  { value: "32+", label: "Years Experience", icon: Clock },
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
              ISO 9001:2015 CERTIFIED MANUFACTURING
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
                <span>VIEW  SERVICES</span>
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
                  <div className="flex flex-col items-center justify-center h-50 gap-3">
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
<section
  id="services"
  className="relative py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white"
>
  <div className="max-w-7xl mx-auto px-4 text-center">

    {/* Logo */}
    <div className="flex justify-center mb-6">
      <img
        src="/kahramaa.png"
        alt="Kahramaa"
        className="h-20 sm:h-30 object-contain"
      />
    </div>

    {/* Subtitle */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-3 text-orange-600 font-semibold mb-5 tracking-wide"
    >
      <span className="h-px w-10 bg-orange-600"></span>
      QUALITY MANUFACTURING
      <span className="h-px w-10 bg-orange-600"></span>
    </motion.div>

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
    >
      KAHRAMAA Approval & Compliance
    </motion.h2>

    {/* Description Card */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 sm:p-10"
    >
      <ul className="space-y-4 text-gray-700 text-base sm:text-lg text-left sm:text-center">
        <li className="flex items-start sm:items-center gap-3 justify-start sm:justify-center">
          <span className="text-orange-500 text-xl">✔</span>
          KAHRAMAA-Approved Designs
        </li>

        <li className="flex items-start sm:items-center gap-3 justify-start sm:justify-center">
          <span className="text-orange-500 text-xl">✔</span>
          Manufactured strictly as per KAHRAMAA specifications
        </li>

        <li className="flex items-start sm:items-center gap-3 justify-start sm:justify-center">
          <span className="text-orange-500 text-xl">✔</span>
          Accepted for official water meter and electrical service installations
        </li>

        <li className="flex items-start sm:items-center gap-3 justify-start sm:justify-center">
          <span className="text-orange-500 text-xl">✔</span>
          Suitable for government, municipal, and EPC projects
        </li>
      </ul>
    </motion.div>

  </div>
</section>

        <ServiceCabinetCards/>

        {/* Cabinet Services - Modern Side-by-Side Cards */}


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
                    title: "ISO 9001:2015 Certified",
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
                    "ISO 9001:2015 Certified",
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
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  {/* Manufacturing Enquiry */}
  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
    <div className="flex items-center gap-4">
      <div className="w-9 h-9 rounded-md bg-orange-100 flex items-center justify-center">
        <Phone className="text-orange-600" size={16} />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900">
          Manufacturing Enquiry
        </h4>
        <p className="text-xs text-gray-600 mt-1">
          +974 4460 1087
        </p>
      </div>
    </div>
  </div>

  {/* Email */}
  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
    <div className="flex items-center gap-4">
      <div className="w-9 h-9 rounded-md bg-orange-100 flex items-center justify-center">
        <Mail className="text-orange-600" size={16} />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900">
          Email
        </h4>
        <p className="text-xs text-gray-600 mt-1 break-all">
          info@alsuwaiditechnical.com
        </p>
      </div>
    </div>
  </div>

  {/* Working Hours */}
  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
    <div className="flex items-start gap-4">
      <div className="w-9 h-9 rounded-md bg-orange-100 flex items-center justify-center mt-0.5">
        <Clock className="text-orange-600" size={16} />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900">
          Working Hours
        </h4>
        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
          Sun – Thu<br />
          7:00 am – 12:00 pm<br />
          2:30 pm – 6:00 pm
        </p>
      </div>
    </div>
  </div>

  {/* Ramadan Timing */}
  <div className="bg-white p-5 rounded-xl border border-orange-200 shadow-sm hover:shadow-md transition">
    <div className="flex items-start gap-4">
      <div className="w-9 h-9 rounded-md bg-orange-100 flex items-center justify-center mt-0.5">
        <Clock className="text-orange-600" size={16} />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-orange-600">
          Ramadan Timing
        </h4>
        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
          7:00 am – 12:00 pm<br />
          8:00 pm – 10:00 pm
        </p>
      </div>
    </div>
  </div>

</section>

      </div>
    </div>
  );
}
