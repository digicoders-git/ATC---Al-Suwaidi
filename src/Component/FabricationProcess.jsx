import React from "react";
import { motion } from "framer-motion";

const fabricationSteps = [
  {
    icon: "🏗️",
    title: "Structural Fabrication",
    description:
      "We fabricate heavy-duty steel structures using quality materials to ensure strength, durability, and resistance to operational stress.",
    image: "/Cormercila/Structural Fabrication.png",
    benefits: [
      "Strong and rigid body structures",
      "Long-lasting fabrication quality",
      "Reduced risk of structural failure",
    ],
  },
  {
    icon: "🔩",
    title: "Chassis Mounting & Reinforcement",
    description:
      "Vehicle bodies are securely mounted and reinforced onto the chassis to ensure stability during loading, transportation, and operation.",
    image: "/Cormercila/Chassis Mounting & Reinforcement.png",
    benefits: [
      "Secure chassis integration",
      "Enhanced load stability",
      "Reduced wear on vehicle frame",
    ],
  },
  {
    icon: "🎨",
    title: "Painting & Finishing",
    description:
      "Final finishing is carried out using protective coatings to enhance durability, corrosion resistance, and appearance.",
    image: "/Cormercila/Painting & Finishing.png",
    benefits: [
      "Corrosion-resistant finish",
      "Professional appearance",
      "Extended service life",
    ],
  },
  {
    icon: "🚛",
    title: "Tail Lift Installation Services (Dautel / Anteo / Dhollandia)",
    description:
      "Tail lifts are essential for safe and efficient loading and unloading operations in commercial and utility vehicles. Professional installation ensures correct structural integration, hydraulic performance, and operational safety in line with manufacturer specifications.",
    image:
      "/Tail Lift Installation Services (Dautel  Anteo  Dhollandia) copy.png",
    benefits: [
      "Safe and reliable lifting operation",
      "Proper load distribution and structural stability",
      "Compliance with manufacturer and safety standards",
    ],
  },
];

export default function FabricationProcess() {
  return (
    <section className=" pt-10 pb-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full border border-orange-200">
            <span className="text-2xl">🏭</span>
            <span className="text-orange-700 font-bold tracking-wide">
              FABRICATION EXCELLENCE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6">
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive industrial solutions designed to meet your specific
            requirements with unmatched quality and precision
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-16">
          {fabricationSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden hover:shadow-3xl transition-all duration-500 group"
            >
              <div className={`grid md:grid-cols-2 gap-0 items-center`}>
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`p-6 ${index % 2 === 0 ? "md:order-2" : ""}`}
                >
                  <div className="bg-gray-50 rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500">
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={`p-8 md:p-12 ${index % 2 === 0 ? "md:order-1" : ""}`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="text-green-500">✨</span>
                      What You'll Get:
                    </h4>

                    <ul className="space-y-3">
                      {step.benefits.map((benefit, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 text-sm font-bold">
                              ✓
                            </span>
                          </div>
                          <span className="text-base">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
