import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Truck,
  Wrench,
  Factory,
  Settings,
  Shield,
  X,
  Eye,
} from "lucide-react";

const products = [
  {
    id: 1,
    title: "Cargo Body Fabrication with 12-Ton UNIC Crane Installation",
    description:
      "Robust cargo body fabrication integrated with a 12-ton UNIC crane, designed for heavy lifting, material handling, and reliable cargo transport in demanding industrial and commercial environments. This solution combines precision-engineered cargo body fabrication with professional crane installation, ensuring structural strength, operational safety, and long-term performance. Reinforced chassis construction provides enhanced stability, balanced load distribution, and dependable lifting capability. Built to integrate seamlessly with Fuso 6×2 chassis, the fabrication follows exact dimensional and engineering specifications, ensuring accurate fitment, alignment, and functionality. Every stage of fabrication and installation reflects a strong commitment to quality workmanship and engineering excellence.",
    image:
      "/ProductMAin/Cargo Body Fabrication with 12-Ton UNIC Crane Installation.png",
    icon: Truck,
    specs: [
      { label: "Chassis Compatibility", value: "Fuso 6×2" },
      { label: "Cargo Body Type", value: "Heavy-duty fabricated cargo body" },
      { label: "Crane Capacity", value: "12-Ton UNIC Crane" },
      { label: "Body Length", value: "6200 mm" },
      { label: "Body Width", value: "2500 mm" },
      { label: "Body Height", value: "500 mm" },
      {
        label: "Structural Reinforcement",
        value: "Reinforced chassis & load-bearing members",
      },
      {
        label: "Installation",
        value: "Professionally mounted with balanced load distribution",
      },
      {
        label: "Application",
        value: "Material handling, lifting operations, cargo transport",
      },
      { label: "Finish", value: "Industrial-grade fabrication finish" },
    ],
  },
  {
    id: 2,
    title: "Cage Body Supply & Installation",
    description:
      "Heavy-duty steel cage body designed for secure and efficient cargo transportation. Fabricated with reinforced structural members and professionally installed to ensure durability, stability, and reliable performance in commercial transport operations.",
    image: "/ProductMAin/Cage Body Supply & Installation.png",
    icon: Factory,
    specs: [
      { label: "Body Type", value: "Heavy-duty cage body" },
      { label: "Installation", value: "Supply & professional installation" },
      { label: "Body Length", value: "7000 mm" },
      { label: "Body Width", value: "2300 mm" },
      { label: "Body Height", value: "2300 mm" },
      { label: "Structure", value: "Reinforced steel framework" },
      { label: "Mounting", value: "Securely mounted on chassis" },
      { label: "Application", value: "Commercial cargo transport" },
      { label: "Finish", value: "Industrial-grade fabrication finish" },
    ],
  },
  {
    id: 3,
    title: "Sliding Recovery Body Fabrication",
    description:
      "Heavy-duty sliding recovery body professionally fabricated and installed for reliable vehicle recovery operations. Engineered for smooth sliding performance, structural strength, and long-term durability on Canter chassis platforms.",
    image: "/ProductMAin/Sliding Recovery Body Fabrication.png",
    icon: Wrench,
    specs: [
      { label: "Product Type", value: "Sliding Recovery Body" },
      {
        label: "Application",
        value: "Vehicle recovery and roadside assistance",
      },
      {
        label: "Body Construction",
        value: "Heavy-duty structural steel fabrication",
      },
      {
        label: "Platform Type",
        value: "Hydraulically operated sliding recovery platform",
      },
      {
        label: "Sliding Mechanism",
        value: "Smooth linear sliding system with reinforced guides",
      },
      { label: "Chassis Compatibility", value: "Canter chassis (VIN: 013101)" },
      { label: "Chassis No.", value: "SK013179" },
      {
        label: "Mounting System",
        value: "Rigid chassis-mounted structure with reinforced anchor points",
      },
      {
        label: "Load Stability",
        value: "Optimized load balance with anti-flex structural reinforcement",
      },
      {
        label: "Operation Control",
        value: "Manual / hydraulic control mechanism",
      },
      {
        label: "Safety Features",
        value: "Secure locking system and reinforced structural edges",
      },
      {
        label: "Surface Finish",
        value: "Industrial-grade protective coating for corrosion resistance",
      },
      {
        label: "Build Standard",
        value:
          "Precision-engineered fabrication with professional installation",
      },
      {
        label: "Usage Environment",
        value: "Urban, highway, and commercial recovery operations",
      },
    ],
  },
  {
    id: 4,
    title: "Custom Fabricated Industrial Work Table",
    description:
      "Custom-fabricated industrial work table manufactured to exact specifications, featuring precision machining, reinforced steel construction, epoxy-coated finish, and third-party quality certification for reliable industrial use.",
    image: "/ProductMAin/Custom Fabricated Industrial Work Table.png",
    icon: Settings,
    specs: [
      { label: "Product Type", value: "Industrial Fabricated Work Table" },
      { label: "Overall Size", value: '36" (W) × 36" (L) × 26" (H)' },
      {
        label: "Table Top Plate",
        value: '25 mm thick (1") - Material: ASTM A36 or equivalent',
      },
      {
        label: "Precision Machining",
        value: "Drilled and threaded holes as per drawing",
      },
      { label: "Table Legs", value: "SHS 100 × 100 × 10 mm thick" },
      {
        label: "Base Plate",
        value: '25 mm thick - Size: 8" (W) × 8" (L) - Material: ASTM A36',
      },
      {
        label: "Base Plate Holes",
        value: '4 Nos. holes - 18 mm diameter - 6" C/C spacing',
      },
      {
        label: "Fabrication Process",
        value:
          "Cutting, machining, drilling, threading, and assembly as per approved drawings",
      },
      { label: "Surface Treatment", value: "Sandblasting" },
      {
        label: "Paint System",
        value: "Primer + Intermediate Coat + Epoxy Top Coat - Color: RAL 9010",
      },
      {
        label: "Quality Certification",
        value: "MPI certification by third-party inspection agency",
      },
      {
        label: "Application",
        value:
          "Industrial workshops, fabrication facilities, machining and assembly operations",
      },
    ],
  },
  {
    id: 5,
    title: "Isuzu Full-Down Recovery Vehicle Fabrication",
    description:
      "Custom-fabricated Isuzu full-down recovery vehicle featuring reinforced steel construction, integrated winch and hydraulic systems, durable paneling, and professional finishing for reliable recovery operations.",
    image: "/ProductMAin/Isuzu Full-Down Recovery Vehicle Fabrication.png",
    icon: Truck,
    specs: [
      { label: "Vehicle Type", value: "Full-Down Recovery Vehicle" },
      { label: "Base Vehicle", value: "Isuzu chassis" },
      { label: "Overall Length", value: "6.0 meters" },
      { label: "Overall Width", value: "2.5 meters" },
      { label: "Overall Height", value: "2.5 meters" },
      {
        label: "Steel Tube Frame",
        value: "80 × 80 mm, 40 × 40 mm, 120 × 60 mm",
      },
      { label: "Steel Channel", value: "100 × 50 mm" },
      {
        label: "Floor Construction",
        value: "Chequered Plate: 3 mm, Side Plate: 8 mm (clearance)",
      },
      {
        label: "Panel Construction",
        value: "Sandwich Panel: 50 mm (upper side), Base Plate: 3 mm",
      },
      {
        label: "Center Panel",
        value: "50 mm sandwich panel with 8 mm acrylic sheet",
      },
      {
        label: "Front & Side Panels",
        value: "Acrylic glass sheets (upper and lower sections)",
      },
      {
        label: "Recovery System",
        value: "Heavy-duty roller system, winch machine, hydraulic jack",
      },
      {
        label: "Power System",
        value: "PTO-driven pump, operating cables, remote control system",
      },
      {
        label: "Electrical & Finishing",
        value:
          "Complete wiring installation, professional painting finish, inspection stickers",
      },
      {
        label: "Fabrication Scope",
        value:
          "Cutting, welding, assembly, reinforcement, system integration, finishing, and final inspection",
      },
    ],
  },
  {
    id: 6,
    title: "Low Bed Trailer Fabrication (3 Axle | 50 Ton Capacity)",
    description:
      "Heavy-duty low bed trailer with 3-axle configuration and 50-ton payload capacity, featuring reinforced steel construction, loading ramps, and durable industrial paint finish.",
    image:
      "/ProductMAin/Low Bed Trailer Fabrication (3 Axle  50 Ton Capacity).png",
    icon: Shield,
    specs: [
      { label: "Trailer Type", value: "Low Bed Trailer – New Fabrication" },
      { label: "Axle Configuration", value: "3 Axle" },
      { label: "Payload Capacity", value: "Up to 50 Tons" },
      { label: "Overall Length", value: "12 meters" },
      { label: "Overall Width", value: "3.2 meters" },
      { label: "Overall Height", value: "1 meter" },
      {
        label: "Loading System",
        value: "2 Nos. heavy-duty rear loading ramps (new fabrication)",
      },
      {
        label: "Structure & Fabrication",
        value: "Heavy-duty steel chassis construction",
      },
      {
        label: "Frame Design",
        value: "Reinforced frame for high-load applications",
      },
      {
        label: "Welding Quality",
        value: "Precision welding and structural alignment",
      },
      { label: "Surface Treatment", value: "Primer application" },
      { label: "Finish", value: "Industrial-grade paint finish" },
      {
        label: "Application",
        value:
          "Heavy machinery transport, construction equipment hauling, industrial logistics and project cargo transport",
      },
    ],
  },
];

export default function MainProductsComponent() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block mb-4 sm:mb-6 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 font-bold tracking-wide text-sm sm:text-base shadow-lg">
            OUR PRODUCTS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
            Industrial Fabrication{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed font-medium">
            Precision-engineered solutions for industrial, commercial, and
            specialized applications
          </p>
        </motion.div>

        {/* Products - Side by Side Layout */}
        <div className="space-y-16 sm:space-y-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white via-orange-50/20 to-red-50/10 rounded-3xl shadow-2xl border border-orange-100 overflow-hidden hover:shadow-3xl transition-all duration-700 group"
            >
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/15 to-transparent rounded-full blur-3xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-200/15 to-transparent rounded-full blur-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <div
                className={`grid lg:grid-cols-2 gap-0 items-center ${
                  index % 2 === 1 ? "lg:grid-cols-2" : ""
                }`}
              >
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`relative p-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group/card">
                    <div className="relative h-80 lg:h-96 overflow-hidden ">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                      {/* Card overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group/card-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={`relative p-8 lg:p-12 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight group-hover:text-orange-600 transition-colors">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8 font-medium line-clamp-4">
                    {product.description}
                  </p>

                  {/* Key Specifications Preview */}
                  <div className="mb-8">
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider">
                      Key Specifications
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {product.specs.slice(0, 4).map((spec, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          className="flex items-start gap-3 bg-white/50 rounded-lg p-3 border border-orange-100"
                        >
                          <CheckCircle
                            size={16}
                            className="text-orange-500 flex-shrink-0 mt-1"
                          />
                          <div className="text-sm sm:text-base">
                            <span className="font-bold text-slate-900">
                              {spec.label}:
                            </span>{" "}
                            <span className="text-slate-700 font-medium">
                              {spec.value}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  >
                    <motion.button
                      onClick={() => setSelectedProduct(product)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-base font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                    >
                      <Eye size={18} />
                      Learn More
                    </motion.button>

                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg">
                      <CheckCircle size={16} className="text-orange-600" />
                      <span className="text-sm font-bold text-orange-700">
                        ISO 9001:2015 Certified
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex justify-center p-4 bg-black/70 backdrop-blur-md"
              style={{ paddingTop: "150px" }}
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-3xl max-w-4xl w-full h-fit max-h-[calc(100vh-220px)] overflow-hidden"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      <selectedProduct.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                        {selectedProduct.title}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(100vh-400px)]">
                  {/* Description */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Product Description
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* All Specifications */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">
                      Complete Technical Specifications
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProduct.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100"
                        >
                          <CheckCircle
                            size={16}
                            className="text-orange-500 flex-shrink-0 mt-1"
                          />
                          <div>
                            <span className="font-bold text-gray-900 block">
                              {spec.label}
                            </span>
                            <span className="text-gray-700">{spec.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-orange-600" />
                      <span className="font-bold text-orange-700">
                        ISO 9001:2015 Certified Quality
                      </span>
                    </div>
                    <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                      Request Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
      </div>
    </section>
  );
}
