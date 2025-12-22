import React from "react";
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
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const vehicleServices = [
  {
    title: "🚚 Logistics Industry",
    desc: "We support logistics companies with robust vehicle bodies designed for continuous operation, heavy loads, and long-distance transportation. Our fabrication process combines engineering design, structural fabrication, secure chassis mounting, and quality finishing.",
    icon: Truck,
    image: "/Cormercila/Logistics Industry.png",
    features: [
      "Flatbed and trailer bodies for goods transport",
      "Load-optimized vehicle body structures",
      "Durable fabrication for high-usage fleets",
      "Reduced maintenance and longer service life"
    ],
  },
  {
    title: "🏗️ Construction Industry",
    desc: "Our vehicle bodies are designed to handle tough construction environments, heavy materials, and repetitive loading operations. From design to delivery, every vehicle body is fabricated to ensure performance, stability, and operational efficiency.",
    icon: HardHat,
    image: "/Cormercila/Construction Industry.png",
    features: [
      "Dump and tipper truck bodies",
      "Reinforced structures for heavy materials",
      "Bodies built for rough site conditions",
      "Reliable performance on construction sites"
    ],
  },
  {
    title: "🏛️ Municipal Services",
    desc: "We fabricate vehicle bodies that support essential municipal operations, ensuring reliability and compliance with operational requirements. Purpose-built solutions for public utilities and services.",
    icon: Factory,
    image: "/Cormercila/Municipal Services.png",
    features: [
      "Sewage tanker bodies",
      "Tow truck bodies",
      "Utility-focused vehicle designs",
      "Long-lasting solutions for public services"
    ],
  },
  {
    title: "🧮 Vehicle Body Design & Load Calculation",
    desc: "Every vehicle body project begins with design and load calculation to ensure structural integrity, correct weight distribution, and safe operation.",
    icon: Layers,
    image: "/Cormercila/Vehicle Body Design & Load Calculation.png",
    features: [
      "Optimized vehicle body design",
      "Accurate load capacity planning",
      "Improved vehicle balance and safety"
    ],
  },
  {
    title: "🏗️ Structural Fabrication",
    desc: "We fabricate heavy-duty steel structures using quality materials to ensure strength, durability, and resistance to operational stress.",
    icon: Hammer,
    image: "/Cormercila/Structural Fabrication.png",
    features: [
      "Strong and rigid body structures",
      "Long-lasting fabrication quality",
      "Reduced risk of structural failure"
    ],
  },
  {
    title: "🔩 Chassis Mounting & Reinforcement",
    desc: "Vehicle bodies are securely mounted and reinforced onto the chassis to ensure stability during loading, transportation, and operation.",
    icon: Cog,
    image: "/Cormercila/Chassis Mounting & Reinforcement.png",
    features: [
      "Secure chassis integration",
      "Enhanced load stability",
      "Reduced wear on vehicle frame"
    ],
  },
  {
    title: "🎨 Painting & Finishing",
    desc: "Final finishing is carried out using protective coatings to enhance durability, corrosion resistance, and appearance.",
    icon: Sparkles,
    image: "/Cormercila/Painting & Finishing.png",
    features: [
      "Corrosion-resistant finish",
      "Professional appearance",
      "Extended service life"
    ],
  },
];

const stats = [
  { value: "30+", label: "Years Experience", icon: Clock },
  { value: "5000+", label: "Vehicle Bodies Built", icon: Truck },
  { value: "98%", label: "Client Satisfaction", icon: CheckCircle },
  { value: "ISO 9001", label: "Certified Quality", icon: Award },
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
              Al Suwaidi Technical Centre specializes in custom fabrication of commercial vehicle bodies engineered for strength, durability, and long service life. We support logistics operators, construction companies, and municipal services with vehicle bodies built to perform reliably under demanding operational conditions.
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
                <span>View Vehicle Services</span>
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

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* ===== MODERN SIDE-BY-SIDE SERVICE CARDS ===== */}
        <section id="services" className="mb-16 space-y-16">
          {vehicleServices.map((service, index) => (
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
                        VEHICLE BODY FABRICATION
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
                      How We Support:
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
                          • {feature}
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
                      className="group/btn inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 hover:-translate-y-1"
                    >
                      <span>View Details</span>
                      <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/get-quote"
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
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-110"
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
                          {service.title.split(" ")[0]}
                        </div>
                        <div className="text-xs text-orange-600 font-semibold">Service</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* ===== COMMERCIAL VEHICLE BODIES PRODUCT CARDS ===== */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              PRODUCT RANGE
            </span>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Commercial Vehicle Bodies –{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Product Cards
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { emoji: "🚚", title: "Flatbed Trailer", desc: "Open flatbed trailer designed for transporting heavy and oversized cargo safely." },
              { emoji: "🚛", title: "High Side Trailer", desc: "Flatbed trailer with side walls for secure transport of loose or stacked materials." },
              { emoji: "🚜", title: "Low Bed Trailer", desc: "Heavy-duty low-bed trailer for moving construction equipment and heavy machinery." },
              { emoji: "🚗", title: "Double Deck Car Carrier", desc: "Specialized trailer for transporting multiple vehicles efficiently in two levels." },
              { emoji: "❄️", title: "Refrigerated Reefer Trailer", desc: "Temperature-controlled trailer for transporting perishable goods." },
              { emoji: "❄️", title: "Refrigerated Utility Trailer", desc: "Compact refrigerated trailer for utility and distribution applications." },
              { emoji: "🛢️", title: "Tanker Truck", desc: "Vehicle-mounted tanker for transporting liquids such as water, fuel, or sewage." },
              { emoji: "🛢️", title: "Tanker Trailer", desc: "High-capacity trailer tanker for bulk liquid transportation." },
              { emoji: "🏗️", title: "Boom Truck / Block Crane", desc: "Truck-mounted crane solution for lifting and material handling operations." },
              { emoji: "🚧", title: "Tipper Dump Truck", desc: "Truck body designed for carrying and unloading bulk construction materials." },
              { emoji: "🚧", title: "Tipper Dump Trailer", desc: "Trailer-based tipper solution for large-volume material transport." },
              { emoji: "🏠", title: "Mobile Home Trailer (Caravan)", desc: "Fabricated mobile units used as site offices or accommodation." },
              { emoji: "🚑", title: "Car Recovery Truck", desc: "Vehicle body designed for towing and recovering disabled vehicles." },
              { emoji: "📦", title: "Cargo Transporter Truck (Drop Side)", desc: "Drop-side truck body for flexible loading and unloading of goods." },
              { emoji: "🚛", title: "Dianna Truck (Fixed Side)", desc: "Fixed-side cargo truck body for secure goods transportation." },
              { emoji: "🛠️", title: "Mobile Workshop Truck", desc: "Fully fabricated truck body equipped as a mobile maintenance workshop." },
              { emoji: "🚙", title: "Refrigerated Box Pick-Up", desc: "Pick-up truck with insulated refrigerated box for cold-chain delivery." },
              { emoji: "📦", title: "Dry Cargo Box Pick-Up", desc: "Enclosed box body pick-up for secure transport of dry goods." },
              { emoji: "🧊", title: "Shelters & Cold Stores", desc: "Fabricated shelters and cold storage units for industrial and site use." },
              { emoji: "⬆️", title: "Tail Lifts (Dautel / Anteo / Dhollandia)", desc: "Hydraulic tail lift systems integrated into vehicles for easy cargo handling." },
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl hover:border-orange-300 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{product.emoji}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{product.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                <Link
                  to="/get-quote"
                  className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm hover:text-orange-700 transition"
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== DETAILED SPECIFICATIONS ===== */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Detailed{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Specifications
              </span>
            </h3>
          </div>

          <div className="space-y-12">
            {/* Sewage Tanker */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-orange-50/30 rounded-3xl p-8 shadow-xl border border-orange-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🚛</div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Sewage Tanker</h4>
                  <p className="text-orange-600 font-semibold">Heavy-Duty Liquid Waste Transportation</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Length: 8060 mm</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Diameter: 1950 mm</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Shell Thickness: 6 mm</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Baffle Plates: 4 Nos.</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Manholes: 2 Nos. (Ø450 mm)</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Suction Valves: 3" – 2 Nos.</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Delivery Valves: 4" – 4 Nos.</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Main Beam: 356 "I" Beam</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Axle: 32-Ton Capacity Bogie</span></div>
              </div>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
                  <span>👉 View Details / Enquire</span>
                </Link>
              </div>
            </motion.div>

            {/* Low Bed Trailer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-orange-50/30 rounded-3xl p-8 shadow-xl border border-orange-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🚧</div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Low Bed Trailer</h4>
                  <p className="text-orange-600 font-semibold">Heavy Equipment & Machinery Transport</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Overall Length: 16000 mm</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Width: 3200 mm</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Height: 1150 mm (from ground)</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Chassis: 533 × 210 × 92 kg/m "I" Beam</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Side Beam: 350 × 175 × 49.6 kg/m</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Floor: 5 mm checkered plate</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Axle: 3 × 16-ton (underslung)</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>King Pin: 2"</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Painting: Two-coat epoxy</span></div>
              </div>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
                  <span>👉 View Details / Enquire</span>
                </Link>
              </div>
            </motion.div>

            {/* Flat Bed Trailer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-orange-50/30 rounded-3xl p-8 shadow-xl border border-orange-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🚚</div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Flat Bed Trailer</h4>
                  <p className="text-orange-600 font-semibold">General Cargo & Material Transport</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Length: 12500 mm</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Width: 2500 mm</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Chassis: 400 × 200 × 66 kg/m "I" Beam</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Cross Members: 4 mm thick MS brackets</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Floor: 3 mm checkered plate</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Bogie Axle: 32-ton capacity</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>King Pin: 2"</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Painting: Two-coat epoxy</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /><span>Side Marker Lights: 6 Nos. each side</span></div>
              </div>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
                  <span>👉 View Details / Enquire</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
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