import React from "react";
import { motion } from "framer-motion";

const industries = [
  {
    title: "🏭 Manufacturing Industry",
    desc: "We support manufacturing facilities with custom steel fabrication and engineered components that improve production efficiency and structural reliability. From machinery frames to industrial supports, our solutions are designed to withstand continuous operations and heavy-duty use.",
    image: "/Manufacturing industry.png",
    features: [
      "Structural frames for machinery & equipment",
      "Custom steel components and assemblies",
      "Fabrication support for production facilities",
      "Durable steel solutions for factory environments",
    ],
  },
  {
    title: "🚗 Automobile Industry",
    desc: "Our steel fabrication services assist the automobile sector with accurate, high-strength components used in vehicle manufacturing, body building, and mechanical applications. We deliver fabrication that meets performance, safety, and durability requirements.",
    image: "/automobile industry copy.png",
    features: [
      "Fabrication for vehicle bodies and frames",
      "Structural components for automotive systems",
      "Precision-cut and formed steel parts",
      "Support structures for workshops and service facilities",
    ],
  },
  {
    title: "🏗️ Construction Industry",
    desc: "We provide the construction industry with robust structural steel fabrication for commercial, industrial, and infrastructure developments. Our steel components are engineered for strength, stability, and long-term performance on-site.",
    image: "/construction industry (2) copy.png",
    features: [
      "Structural steel for buildings and sheds",
      "Platforms, supports, and load-bearing elements",
      "Custom-fabricated steel for project-specific needs",
      "Fabrication aligned with construction timelines",
    ],
  },
];

function Stellbaseindristy() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100 font-inter">
      {/* Soft Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_60%)]" />

      <div className="relative max-w-[1600px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span
            className="inline-block mb-5 px-7 py-2 rounded-full 
          bg-orange-100 text-orange-700 
          text-[13px] font-semibold tracking-[0.12em] shadow-sm"
          >
            INDUSTRIES WE SERVE
          </span>

          <h2
            className="text-4xl md:text-5xl 
          font-extrabold text-gray-900 
          leading-[1.15] tracking-tight mb-6"
          >
            Steel Fabrication{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-black">
              Across Industries
            </span>
          </h2>

          <p
            className="text-[17px]
          leading-[1.75] 
          max-w-3xl mx-auto font-bold text-black"
          >
            Delivering high-performance steel fabrication solutions engineered
            for demanding industrial environments across multiple sectors.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl bg-white overflow-hidden 
              border border-gray-100 
              shadow-[0_20px_50px_rgba(0,0,0,0.08)] 
              hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] 
              transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden rounded-full mx-auto mt-6 w-60">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover 
                  transition-transform duration-700 
                  group-hover:scale-125 rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-full" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                <h3
                  className="text-[20px] font-bold 
                text-gray-900 mb-4 tracking-tight 
                group-hover:text-orange-600 transition-colors"
                >
                  {item.title}
                </h3>

                <p
                  className="text-gray-600 text-[18px]  font-semibold
                leading-[1.7] font-normal mb-7"
                >
                  {item.desc}
                </p>

                <h4
                  className=" text-gray-900 
                text-[19px] font-bold uppercase tracking-wider mb-3"
                >
                  Key Services:
                </h4>

                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-[18px] font-semibold text-gray-700 
                      font-medium leading-relaxed 
                      flex items-start gap-3"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 
                      rounded-full bg-gradient-to-r 
                      from-orange-500 to-red-500 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div
                  className="flex items-center gap-2 
                text-orange-600 font-semibold 
                text-[13px] tracking-wide 
                opacity-0 group-hover:opacity-100 
                transition-all duration-500"
                ></div>
              </div>

              {/* Premium Hover Outline */}
              <div
                className="absolute inset-0 rounded-3xl 
              ring-1 ring-transparent 
              group-hover:ring-orange-500/30 
              transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stellbaseindristy;
