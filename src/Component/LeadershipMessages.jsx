import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaUser, FaBriefcase, FaRocket, FaCheckCircle, FaStar, FaAward } from "react-icons/fa";

export default function LeadershipMessages() {
  const messages = [
    {
      name: "K. P. Karthik",
      title: "Manager",
      icon: FaBriefcase,
      message: "Our strength lies in disciplined execution and attention to detail. Every project we handle is approached with a clear understanding of technical requirements, safety, and quality expectations. At Al Suwaidi Technical Center, we continuously work to improve our processes, develop our team, and deliver reliable engineering solutions that our clients can depend on.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      name: "K. C. Prashannah", 
      title: "BUISNESS DEVELOPMENT EXECUTIVE",
      icon: FaUser,
      message: "Client relationships are built on trust, communication, and consistent delivery. My focus is on understanding client needs clearly and ensuring that our solutions align with their operational goals. We aim to create long-term partnerships by being responsive, transparent, and dependable at every stage of engagement.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  const futureGoals = [
    "Continuous improvement of engineering practices",
    "Investment in skilled manpower and systems", 
    "Sustainable growth through long-term partnerships"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
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
            <FaQuoteLeft className="text-orange-600" />
            <span className="text-orange-800 font-semibold">Leadership Insights</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Messages from Our</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Leadership Team
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Insights and perspectives from our experienced leaders on our mission and future direction
          </p>
        </motion.div>

        {/* Leadership Messages */}
        <div className="space-y-12 mb-20">
          {messages.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${leader.bgColor} opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
              
              <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Leader Info */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={`w-24 h-24 mx-auto lg:mx-0 mb-4 rounded-2xl bg-gradient-to-br ${leader.color} flex items-center justify-center shadow-lg`}
                    >
                      <leader.icon className="text-white text-2xl" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${leader.color} bg-clip-text text-transparent mb-4`}>
                      {leader.title}
                    </p>
                    
                    <div className={`h-1 w-16 mx-auto lg:mx-0 bg-gradient-to-r ${leader.color} rounded-full`} />
                  </div>
                  
                  {/* Message */}
                  <div className="flex-1">
                    <div className="relative">
                      <FaQuoteLeft className={`text-4xl text-gray-200 absolute -top-4 -left-2`} />
                      <blockquote className="text-gray-700 text-lg leading-relaxed italic pl-8">
                        "{leader.message}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Looking Ahead Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 lg:p-12 border border-orange-100">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-100 px-6 py-3 rounded-full mb-6">
                <FaRocket className="text-orange-600" />
                <span className="text-orange-800 font-semibold">Future Vision</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Looking <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Ahead</span>
              </h3>
              
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
                As industries evolve and project demands become more complex, Al Suwaidi Technical Center remains committed to strengthening its capabilities while staying true to its core values.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {futureGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  
                  <p className="text-gray-800 font-semibold leading-relaxed">{goal}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-700 text-lg font-medium mb-6 max-w-3xl mx-auto">
                With a strong foundation built since 1991, we continue our journey with confidence, responsibility, and purpose.
              </p>
              
              <div className="flex items-center justify-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                <FaStar className="text-orange-500 text-xl" />
                <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
  <div className="bg-white rounded-3xl p-8 lg:p-12 text-center shadow-xl">
  {/* Icon */}
  <div className="flex items-center justify-center mb-6">
    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
      <FaAward className="text-white text-2xl" />
    </div>
  </div>

  {/* Title */}
  <h3 className="text-3xl md:text-4xl font-bold mb-4">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
      AL SUWAIDI TECHNICAL CENTER
    </span>
  </h3>

  {/* Subtitle */}
  <p className="text-xl text-gray-700 mb-6">
    Industrial Engineering & Technical Works
  </p>

  {/* Values */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg font-semibold text-gray-800">
    <span className="flex items-center gap-2">
      <FaAward className="text-orange-500" />
      Experience
    </span>

    <span className="hidden sm:block text-gray-400">•</span>

    <span className="flex items-center gap-2">
      <FaCheckCircle className="text-orange-500" />
      Precision
    </span>

    <span className="hidden sm:block text-gray-400">•</span>

    <span className="flex items-center gap-2">
      <FaStar className="text-orange-500" />
      Reliability
    </span>
  </div>
</div>

        </motion.div>
      </div>
    </section>
  );
}