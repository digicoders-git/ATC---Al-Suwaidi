import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  Wrench,
  Factory,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Users,
  Award,
  Sparkles,
  Cog,
  HardHat,
  Zap,
  Hammer,
  Settings,
  Layers,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";
import Comercialindristy from "../Component/Comerclial";
import Products from "../Component/ComercialVeraclProduct";

const stats = [
  { value: "32+", label: "Years Experience", icon: Clock },
  { value: "5000+", label: "Vehicle Bodies Built", icon: Truck },
  { value: "98%", label: "Client Satisfaction", icon: CheckCircle },
  { value: "ISO 9001:2015", label: "Certified Quality", icon: Award },
];

export default function CommercialVehicleBodiesPage() {
  const [selectedImage, setSelectedImage] = useState(null);

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
              <Truck size={18} className="text-orange-200" />
              COMMERCIAL VEHICLE BODIES FABRICATION
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              ALL TYPES OF
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                COMMERCIAL VEHICLE BODIES
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              Heavy-Duty Vehicle Body Manufacturing Specialists
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Al Suwaidi Technical Centre specializes in custom fabrication of
              commercial vehicle bodies engineered for strength, durability, and
              long service life. We support logistics operators, construction
              companies, and municipal services with vehicle bodies built to
              perform reliably under demanding operational conditions.
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
                <span>Request Vehicle Body Quote</span>
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>VIEW PRODUCTS</span>
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

      <Comercialindristy />
      <Products />

      {/* ===== COMMERCIAL VEHICLE BODIES PRODUCT GALLERY ===== */}
      <section className="relative py-20 md:py-24 ">
        {/* Soft Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <span
              className="inline-block mb-4 px-6 py-2 rounded-full 
      bg-orange-100 text-orange-700 
      text-[13px] font-semibold tracking-widest"
            >
              OUR PRODUCTS
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
              Commercial Vehicle{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Products
              </span>
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              A showcase of our completed commercial vehicle body fabrication
              products, engineered with precision, strength, and reliability.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cargo Transporter Truck (Drop Side)",
                image: "/Cargo Transporter Truck (Drop Side).png",
              },
              {
                title: "Tipper Dump Trailer",
                image: "/Tipper Dump Trailer.png",
              },
              {
                title: "Flatbed Trailer",
                image: "/Flatbed Trailer  product card.png",
              },
              {
                title: "High Side Trailer",
                image: "/High Side Trailer.png",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                onClick={() => setSelectedImage(project)}
                className="group cursor-pointer relative rounded-2xl overflow-hidden bg-white 
          shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
          hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)] 
          transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover 
              transition-transform duration-700 
              group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t 
            from-black/70 via-black/30 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Title */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 
            translate-y-5 group-hover:translate-y-0 
            opacity-0 group-hover:opacity-100 
            transition-all duration-500"
                  >
                    <h3 className="text-white font-semibold text-base tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Border */}
                <div
                  className="absolute inset-0 rounded-2xl ring-1 ring-transparent 
          group-hover:ring-orange-500/40 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0  z-50 bg-black/80 flex items-center justify-center px-4 pt-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-orange-400 transition"
              >
                ×
              </button>

              {/* Image */}
              <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full max-h-[75vh] object-contain mx-auto"
                />
              </div>

              {/* Title */}
              <p className="text-center text-white mt-4 text-base font-semibold tracking-wide">
                {selectedImage.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== DETAILED SPECIFICATIONS ===== */}

      <section className="mb-16  max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Detailed{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Specifications
            </span>
          </h3>
        </div>

        {[
          {
            icon: "🚛",
            title: "Sewage Tanker",
            subtitle: "Heavy-Duty Liquid Waste Transportation",
            specs: [
              "Length: 8060 mm",
              "Diameter: 1950 mm",
              "Shell Thickness: 6 mm",
              "Baffle Plates: 4 Nos.",
              "Manholes: 2 Nos. (Ø450 mm)",
              'Suction Valves: 3" – 2 Nos.',
              'Delivery Valves: 4" – 4 Nos.',
              'Main Beam: 356 "I" Beam',
              "Axle: 32-Ton Capacity Bogie",
            ],
          },
          {
            icon: "🚧",
            title: "Low Bed Trailer",
            subtitle: "Heavy Equipment & Machinery Transport",
            specs: [
              "Overall Length: 16000 mm",
              "Width: 3200 mm",
              "Height: 1150 mm (from ground)",
              'Chassis: 533 × 210 × 92 kg/m "I" Beam',
              "Side Beam: 350 × 175 × 49.6 kg/m",
              "Floor: 5 mm checkered plate",
              "Axle: 3 × 16-ton (underslung)",
              'King Pin: 2"',
              "Painting: Two-coat epoxy",
            ],
          },
          {
            icon: "🚚",
            title: "Flat Bed Trailer",
            subtitle: "General Cargo & Material Transport",
            specs: [
              "Length: 12500 mm",
              "Width: 2500 mm",
              'Chassis: 400 × 200 × 66 kg/m "I" Beam',
              "Cross Members: 4 mm thick MS brackets",
              "Floor: 3 mm checkered plate",
              "Bogie Axle: 32-ton capacity",
              'King Pin: 2"',
              "Painting: Two-coat epoxy",
              "Side Marker Lights: 6 Nos. each side",
            ],
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white to-orange-50/30 
                 rounded-3xl p-8 shadow-xl border border-orange-100 
                 mb-12"
          >
            {/* Header */}
            <div className="flex max-w-7xl mx-auto items-center gap-4 mb-6">
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-orange-600 font-semibold">{item.subtitle}</p>
              </div>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-700">
              {item.specs.map((spec, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-green-500 mt-[2px] shrink-0"
                  />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 
                     bg-orange-600 text-white font-semibold rounded-lg 
                     hover:bg-orange-700 transition"
              >
                👉 View Details / Enquire
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

<section className="mb-20 px-6">
  {/* Heading */}
  <div className="text-center mb-14">
    <h3 className="text-3xl md:text-4xl font-black text-gray-900">
      OUR{" "}
      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
        OTHER PRODUCTS
      </span>
    </h3>
  </div>

  {/* Products Grid */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        icon: "🚛",
        title: "High Side Trailer",
        desc: "Flatbed trailer with side walls for secure transport of loose or stacked materials.",
      },
      {
        icon: "🚜",
        title: "Low Bed Trailer",
        desc: "Heavy-duty low-bed trailer for moving construction equipment and heavy machinery.",
      },
      {
        icon: "🚗",
        title: "Double Deck Car Carrier",
        desc: "Specialized trailer for transporting multiple vehicles efficiently in two levels.",
      },
      {
        icon: "❄️",
        title: "Refrigerated Reefer Trailer",
        desc: "Temperature-controlled trailer for transporting perishable goods.",
      },
      {
        icon: "❄️",
        title: "Refrigerated Utility Trailer",
        desc: "Compact refrigerated trailer for utility and distribution applications.",
      },
      {
        icon: "🛢️",
        title: "Tanker Truck",
        desc: "Vehicle-mounted tanker for transporting liquids such as water, fuel, or sewage.",
      },
      {
        icon: "🛢️",
        title: "Tanker Trailer",
        desc: "High-capacity trailer tanker for bulk liquid transportation.",
      },
      {
        icon: "🏗️",
        title: "Boom Truck / Block Crane",
        desc: "Truck-mounted crane solution for lifting and material handling operations.",
      },
      {
        icon: "🚧",
        title: "Tipper Dump Truck",
        desc: "Truck body designed for carrying and unloading bulk construction materials.",
      },
      {
        icon: "🚧",
        title: "Tipper Dump Trailer",
        desc: "Trailer-based tipper solution for large-volume material transport.",
      },
      {
        icon: "🏠",
        title: "Mobile Home Trailer (Caravan)",
        desc: "Fabricated mobile units used as site offices or accommodation.",
      },
      {
        icon: "🚑",
        title: "Car Recovery Truck",
        desc: "Vehicle body designed for towing and recovering disabled vehicles.",
      },
      {
        icon: "📦",
        title: "Cargo Transporter Truck (Drop Side)",
        desc: "Drop-side truck body for flexible loading and unloading of goods.",
      },
      {
        icon: "🚛",
        title: "Dianna Truck (Fixed Side)",
        desc: "Fixed-side cargo truck body for secure goods transportation.",
      },
      {
        icon: "🛠️",
        title: "Mobile Workshop Truck",
        desc: "Fully fabricated truck body equipped as a mobile maintenance workshop.",
      },
      {
        icon: "🚙",
        title: "Refrigerated Box Pick-Up",
        desc: "Pick-up truck with insulated refrigerated box for cold-chain delivery.",
      },
      {
        icon: "📦",
        title: "Dry Cargo Box Pick-Up",
        desc: "Enclosed box body pick-up for secure transport of dry goods.",
      },
      {
        icon: "🧊",
        title: "Shelters & Cold Stores",
        desc: "Fabricated shelters and cold storage units for industrial and site use.",
      },
      {
        icon: "⬆️",
        title: "Tail Lifts (Dautel / Anteo / Dhollandia)",
        desc: "Hydraulic tail lift systems integrated into vehicles for easy cargo handling.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100
                   hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          <div className="text-3xl">{item.icon}</div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-1">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>        


      <GetDemoSection />

      {/* ===== MODERN PROCESS FLOW ===== */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              OUR FABRICATION PROCESS
            </span>

            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Vehicle Body Fabrication
              </span>{" "}
              Process
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A systematic, quality-driven approach from design to delivery
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Vehicle Body Design & Engineering",
                desc: "Design development and load analysis based on vehicle type and usage.",
              },
              {
                step: "02",
                title: "Structural Fabrication",
                desc: "Fabrication of steel body structures and components.",
              },
              {
                step: "03",
                title: "Chassis Mounting & Assembly",
                desc: "Secure installation and reinforcement onto vehicle chassis.",
              },
              {
                step: "04",
                title: "Painting & Final Inspection",
                desc: "Protective finishing and quality inspection before delivery.",
              },
            ].map((process, idx) => (
              <div
                key={idx}
                className="relative group bg-white rounded-3xl p-8 text-center shadow-lg border border-orange-100 hover:shadow-2xl transition-all duration-300"
              >
                {/* glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 blur transition duration-500" />

                {/* content */}
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
