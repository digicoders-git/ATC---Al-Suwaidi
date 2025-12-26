import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaUsers, FaQuoteLeft, FaCheckCircle, FaStar } from "react-icons/fa";

export default function CustomerCommitment() {
  const commitments = [
    "Clear communication throughout the project",
    "Timely and well-planned execution", 
    "Attention to detail and quality control",
    "Ongoing support and long-term cooperation"
  ];

  const peopleValues = [
    "Employee retention and development",
    "Safe and respectful work environments",
    "Knowledge sharing and skill enhancement", 
    "Teamwork across all levels"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Customer Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                <FaHandshake className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Customer Commitment</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2" />
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Customer satisfaction is central to everything we do. We work closely with our clients to understand their operational needs and deliver solutions that are practical, efficient, and dependable.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our commitment includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{commitment}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
              <p className="text-gray-700 text-lg font-medium italic text-center">
                "We measure our success not only by project completion, but by lasting client relationships."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Managing Director Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 lg:p-12 border border-orange-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-orange-100 px-6 py-3 rounded-full mb-6">
                <FaQuoteLeft className="text-orange-600" />
                <span className="text-orange-800 font-semibold">Leadership Message</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Message from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Managing Director</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                  <FaUsers className="text-white text-2xl" />
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Rashid Abdullah Al Suwaidi</h3>
                <p className="text-lg font-semibold text-orange-600">Managing Director</p>
                <p className="text-gray-600">Al Suwaidi Technical Center</p>
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed space-y-4 italic">
                <p>
                  "Since the establishment of Al Suwaidi Technical Center in 1991, our journey has been guided by a clear commitment to quality workmanship, reliability, and responsible engineering practices."
                </p>
                <p>
                  "What began as a small technical workshop has grown steadily into a trusted industrial engineering and technical services organization. This growth has been achieved through consistent performance, disciplined execution, and the trust of our clients built over many years."
                </p>
                <p>
                  "Our focus has always been on delivering practical and dependable engineering solutions that perform effectively in real operating conditions. We place strong emphasis on maintaining high standards, investing in our people, and continuously improving our processes to meet evolving industry requirements."
                </p>
                <p>
                  "As we look toward the future, we remain committed to engineering excellence, continuous improvement, and long-term partnerships, ensuring that Al Suwaidi Technical Center continues to be a reliable partner for our clients."
                </p>
              </blockquote>

              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                <FaStar className="text-orange-500" />
                <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our People Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                <FaUsers className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our People</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2" />
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our people are our strongest asset. The experience, skill, and dedication of our team directly reflect the quality of work we deliver.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">We place strong emphasis on:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {peopleValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
              <p className="text-gray-700 text-lg font-medium italic text-center">
                "By investing in our people, we ensure continuity, consistency, and technical excellence."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}