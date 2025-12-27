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
import FabricationProcess from "../Component/FabricationProcess";

const stats = [
  { value: "32+", label: "Years Experience", icon: Clock },
  { value: "5000+", label: "Vehicle Bodies Built", icon: Truck },
  { value: "98%", label: "Client Satisfaction", icon: CheckCircle },
  { value: "ISO 9001:2015", label: "Certified Quality", icon: Award },
];
const commercialProducts = [
  {
    title: "Cargo Transporter Truck (Drop Side)",
    subtitle: "Efficient cargo handling solution",
    description:
      "Drop-side cargo transporter designed for easy loading and unloading, ideal for commercial logistics and material transport.",
    image: "/Cargo Transporter Truck (Drop Side).png",
  },
  {
    title: "Tipper Dump Trailer",
    subtitle: "Heavy-duty dumping solution",
    description:
      "Strong and reliable tipper dump trailer built for construction, mining, and bulk material handling operations.",
    image: "/Tipper Dump Trailer.png",
  },
  {
    title: "Flatbed Trailer",
    subtitle: "Versatile transport platform",
    description:
      "Flatbed trailer suitable for transporting oversized machinery, equipment, and construction materials with stability.",
    image: "/Flatbed Trailer  product card.png",
  },
  {
    title: "High Side Trailer",
    subtitle: "Secure bulk material transport",
    description:
      "High side trailer engineered for safe and efficient bulk load transportation with enhanced side protection.",
    image: "/High Side Trailer.png",
  },
];

export default function CommercialVehicleBodiesPage() {
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
      <FabricationProcess />

      {/* ===== COMMERCIAL VEHICLE BODIES PRODUCT GALLERY ===== */}
      <section className="relative py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* ================= Heading ================= */}

          {/* ================= Cards ================= */}
        </div>
      </section>

      <section className="mb-20 px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h3 className="text-3xl md:text-4xl font-black text-gray-900">
            OUR{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              OTHER PRODUCTS
            </span>
          </h3>
        </motion.div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "High Side Trailer",
              desc: "Flatbed trailer with side walls for secure transport of loose or stacked materials.",
              image: "/CommercialImage/High Side Trailer.png",
            },
            {
              title: "Low Bed Trailer",
              desc: "Heavy-duty low-bed trailer for moving construction equipment and heavy machinery.",
              image: "/CommercialImage/Low bed trailer (2).png",
            },
            {
              title: "Double Deck Car Carrier",
              desc: "Specialized trailer for transporting multiple vehicles efficiently in two levels.",
              image: "/CommercialImage/Double deck car carrier.png",
            },
            {
              title: "Refrigerated Reefer Trailer",
              desc: "Temperature-controlled trailer for transporting perishable goods.",
              image: "/CommercialImage/Refrigerated Reefer Trailer.png",
            },
            {
              title: "Refrigerated Utility Trailer",
              desc: "Compact refrigerated trailer for utility and distribution applications.",
              image: "/CommercialImage/Refrigerated Utility Trailer.png",
            },
            {
              title: "Tanker Truck",
              desc: "Vehicle-mounted tanker for transporting liquids such as water, fuel, or sewage.",
              image: "/CommercialImage/Tanker Truck.png",
            },
            {
              title: "Tanker Trailer",
              desc: "High-capacity trailer tanker for bulk liquid transportation.",
              image: "/CommercialImage/Tank Trailer.png",
            },
            {
              title: "Boom Truck / Block Crane",
              desc: "Truck-mounted crane solution for lifting and material handling operations.",
              image: "/CommercialImage/Boom Truck.png",
            },
            {
              title: "Tipper Dump Truck",
              desc: "Truck body designed for carrying and unloading bulk construction materials.",
              image: "/CommercialImage/Tripper Dump Truck.png",
            },
            {
              title: "Tipper Dump Trailer",
              desc: "Trailer-based tipper solution for large-volume material transport.",
              image: "/CommercialImage/Tipper Dump Trailer.png",
            },
            {
              title: "Mobile Home Trailer (Caravan)",
              desc: "Fabricated mobile units used as site offices or accommodation.",
              image: "/CommercialImage/mobile home trailer.png",
            },
            {
              title: "Car Recovery Truck",
              desc: "Vehicle body designed for towing and recovering disabled vehicles.",
              image: "/CommercialImage/Car Recovery Truck.png",
            },
            {
              title: "Cargo Transporter Truck (Drop Side)",
              desc: "Drop-side truck body for flexible loading and unloading of goods.",
              image: "/CommercialImage/Cargo Transporter Truck (Drop Side).png",
            },
            {
              title: "Dianna Truck (Fixed Side)",
              desc: "Fixed-side cargo truck body for secure goods transportation.",
              image: "/CommercialImage/Dianna Truck (Fixed Side).png",
            },
            {
              title: "Mobile Workshop Truck",
              desc: "Fully fabricated truck body equipped as a mobile maintenance workshop.",
              image: "/CommercialImage/Mobile Workshop Truck.png",
            },
            {
              title: "Refrigerated Box Pick-Up",
              desc: "Pick-up truck with insulated refrigerated box for cold-chain delivery.",
              image: "/CommercialImage/Refrigerated Box pick up.png",
            },

            {
              title: "Shelters & Cold Stores",
              desc: "Fabricated shelters and cold storage units for industrial and site use.",
              image: "/CommercialImage/Shelters and cold stores.png",
            },
            {
              title: "Tail Lifts (Dautel / Anteo / Dhollandia)",
              desc: "Hydraulic tail lift systems integrated into vehicles for easy cargo handling.",
              image: "/CommercialImage/Dautel Tail Lifts.png",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden
                   hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          
        </div>

 <div className=" max-w-7xl  flex mx-auto">
          <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {commercialProducts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-[28px] overflow-hidden
                         shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                         hover:shadow-[0_35px_80px_rgba(0,0,0,0.18)]
                         transition-all duration-500"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-7 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-gray-600 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
 </div>
      </section>

      <GetDemoSection />

      {/* Fabrication Process */}

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
