import { FaBullseye, FaFlagCheckered } from "react-icons/fa";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Vision & Mission
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Building Excellence Through Quality, Innovation & Reliability
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 opacity-20 blur-xl group-hover:opacity-30 transition"></div>

            <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg mb-6">
                <FaBullseye className="text-2xl text-white" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>

              <p className="text-gray-700 text-base lg:text-lg leading-relaxed flex-grow">
                To be Qatar's most trusted and innovative industrial engineering
                and fabrication partner — delivering world-class solutions with
                a commitment to quality, reliability, and safety. We strive to
                lead technological advancement and support Qatar's national
                industrial development.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 opacity-20 blur-xl group-hover:opacity-30 transition"></div>

            <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg mb-6">
                <FaFlagCheckered className="text-2xl text-white" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>

              <p className="text-gray-700 text-base lg:text-lg leading-relaxed flex-grow">
                To provide exceptional engineering, fabrication, and technical
                services using advanced technology, skilled teams, and strict
                quality assurance. We aim to deliver durable, efficient, and
                cost-effective solutions while ensuring customer satisfaction,
                safety excellence, and sustainable growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}