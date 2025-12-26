import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "🚛 Sewage Tanker",
    image: "/Sewage Tank.png",
    description:
      "Designed for efficient and safe liquid waste transportation, this heavy-duty sewage tanker features a robust thick steel tank with multiple baffles for stability during transit. Equipped with dual manholes, high-capacity suction and delivery valves, and a reinforced chassis, it ensures reliable performance in demanding municipal and industrial operations.",
    subtitle: "Heavy-Duty Liquid Waste Transportation",
    points: [
      "Length: 8060 mm",
      "Diameter: 1950 mm",
      "Shell / Baffle / Dish End Thickness: 6 mm",
      "Baffle Plates: 4 Nos.",
      "Manholes: 2 Nos. (Ø450 mm)",
      "Suction Valves: 3 inch - 2 Nos.",
      "Delivery Valves: 4 inch - 4 Nos.",
      "Level Indicator: 1 No.",
      "Main Beam: 356 I Beam",
      "Axle: 32-Ton Capacity Bogie Axle",
      "Side Marker Lights: 6 Nos. each side",
      "Painting: External two-coat finish",
    ],
  },
  {
    title: "🚧 Low Bed Trailer",
    image: "/Low bed trailer (2).png",
    description:
      "Built for transporting heavy equipment and oversized machinery, this low bed trailer offers exceptional load stability and strength. Its heavy beam chassis, underslung suspension axles, and durable checkered plate flooring make it ideal for construction, infrastructure, and industrial hauling applications",
    subtitle: "Heavy Equipment & Machinery Transport",
    points: [
      "Overall Length: 16000 mm",
      "Width: 3200 mm",
      "Height: 1150 mm (from ground)",
      "Chassis: 533 × 210 × 92 kg/m I Beam",
      "Side Beam: 350 × 175 × 49.6 kg/m I Beam",
      "Cross Members: 150 × 75 × 14 kg/m (alternate)",
      "Neck Frame: 125 × 60 × 13.2 kg/m",
      "Ramp Frame: 400 × 200 × 60 kg/m",
      "Floor: 5 mm checkered plate",
      "Axle: 3 × 16-ton (underslung suspension)",
      "King Pin: 2 inch",
      "Painting: Two-coat epoxy",
      "Side Marker Lights: 8 Nos. each side",
    ],
  },
  {
    title: "🚚 Flat Bed Trailer",
    image: "/Flatbed Trailer  product card copy.png",
    description:
      "A versatile solution for general cargo and material transport, this flat bed trailer combines structural strength with operational flexibility. Featuring a sturdy beam chassis, durable flooring, and high-capacity bogie axle, it is suitable for a wide range of commercial and logistics requirements.",
    subtitle: "General Cargo & Material Transport",
    points: [
      "Length: 12500 mm",
      "Width: 2500 mm",
      "Chassis: 400 × 200 × 66 kg/m I Beam",
      "Cross Members: 4 mm thick MS brackets",
      "Floor: 3 mm checkered plate",
      "Bogie Axle: 32-ton capacity",
      "King Pin: 2 inch",
      "Painting: Two-coat epoxy",
      "Side Marker Lights: 6 Nos. each side",
      "Carrier Type: 1 No.",
    ],
  },
];

export default function Products() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white py-20 px-6 space-y-16">
      {products.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          whileHover={{ y: -5 }}
          className="max-w-7xl mx-auto bg-gradient-to-br from-white via-orange-50/20 to-red-50/10 border border-orange-100 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group"
        >
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/15 to-transparent rounded-full blur-3xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div
            className={`relative grid md:grid-cols-2 gap-0 items-center ${
              index % 2 !== 0 ? "md:grid-cols-2" : ""
            }`}
          >
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 ${index % 2 !== 0 ? "md:order-2" : ""}`}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group/card">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group/card-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`p-8 md:p-12 ${index % 2 !== 0 ? "md:order-1" : ""}`}
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-orange-600 mb-4 group-hover:text-orange-700 transition-colors"
              >
                {product.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-slate-700 mb-6 leading-relaxed text-lg"
              >
                {product.description}
              </motion.p>

              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl font-semibold text-slate-900 mb-4"
              >
                {product.subtitle}
              </motion.h4>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 text-sm"
              >
                {product.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 hover:text-slate-800 transition-colors"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"
                    ></motion.span>
                    <span className="text-base">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
