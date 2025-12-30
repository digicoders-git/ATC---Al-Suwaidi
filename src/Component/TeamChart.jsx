import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaUsers,
  FaCrown,
  FaBriefcase,
  FaCalculator,
  FaCogs,
  FaHardHat,
} from "react-icons/fa";

export default function TeamChart() {
  const leadership = [
    {
      name: "Rashid Abdullah Al Suwaidi",
      title: "Managing Director",
      icon: FaCrown,
      color: "from-orange-500 to-red-500",
      level: 1,
    },
    {
      name: "K.P. Karthik",
      title: "Manager",
      icon: FaBriefcase,
      color: "from-orange-500 to-red-500",
      level: 2,
    },
    {
      name: "K.C. Prashannah",
      title: "Admin / Sales Representative",
      icon: FaUser,
      color: "from-orange-500 to-red-500",
      level: 3,
    },
  ];

  const departments = [
    {
      title: "Accountants",
      icon: FaCalculator,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      members: [
        "Shanker Kasinadhan",
        "Ahmad Elhaj",
        "Nanikaji Kshetri",
        "Cherry D",
      ],
    },
    {
      title: "Engineers",
      icon: FaCogs,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      members: ["S. Dharmalingam", "M. Anbazhagan", "N. Deva Srinivasan"],
    },
    {
      title: "Foremen",
      icon: FaHardHat,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      members: [
        "M. Yousuf",
        "Manu Mehu",
        "K. Balasupprmaniyan",
        "M. Siva Kumar",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 px-6 py-3 rounded-full mb-6">
            <FaUsers className="text-orange-600" />
            <span className="text-orange-800 font-semibold">Our Team</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Meet Our</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Leadership Team
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Experienced professionals leading our organization with expertise
            and dedication
          </p>
        </motion.div>

        {/* Leadership Hierarchy */}
        <div className="mb-20">
          <div className="flex flex-col items-center space-y-8">
            {leadership.map((leader, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${leader.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                  />

                  <div
                    className={`relative bg-gradient-to-br ${leader.color} text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[320px] text-center`}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <leader.icon className="text-2xl text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                    <p className="text-orange-100 font-semibold">
                      {leader.title}
                    </p>
                  </div>
                </motion.div>

                {/* Connector Line */}
                {index < leadership.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 1) * 0.2 }}
                    className="w-1 h-12 bg-gradient-to-b from-orange-500 to-red-500 rounded-full my-4"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Departments
              </span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Specialized teams working together to deliver excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${dept.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Department Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <dept.icon className="text-white text-2xl" />
                    </div>

                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {dept.title}
                    </h4>
                    <div
                      className={`h-1 w-16 mx-auto bg-gradient-to-r ${dept.color} rounded-full`}
                    />
                  </div>

                  {/* Team Members */}
                  <div className="space-y-3">
                    {dept.members.map((member, memberIndex) => (
                      <motion.div
                        key={memberIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + memberIndex * 0.1 }}
                        className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200 group-hover:bg-white"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <FaUser className="text-white text-sm" />
                          </div>
                          <p className="text-gray-800 font-medium">{member}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
      </div>
    </section>
  );
}
