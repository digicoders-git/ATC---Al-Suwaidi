import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaHandshake, FaAward, FaUsers, FaHeart } from "react-icons/fa";

export default function CompanyValues() {
  const values = [
    {
      icon: FaShieldAlt,
      title: "Integrity",
      description: "Honest communication and responsible execution",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FaHandshake,
      title: "Reliability", 
      description: "Delivering what we commit, every time",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaAward,
      title: "Quality",
      description: "Consistent standards across all works",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaShieldAlt,
      title: "Safety",
      description: "Protecting people, assets, and environments",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaHeart,
      title: "Commitment",
      description: "Long-term partnerships over short-term gains",
      color: "from-red-500 to-orange-500",
    },
  ];

  const messages = [
    {
      name: "Rashid Abdullah Al Suwaidi",
      title: "Managing Director",
      message: "Since the establishment of Al Suwaidi Technical Center in 1991, our journey has been guided by a clear commitment to quality workmanship, reliability, and responsible engineering practices. What began as a small technical workshop has grown steadily into a trusted industrial engineering and technical services organization. This growth has been achieved through consistent performance, disciplined execution, and the trust of our clients built over many years. Our focus has always been on delivering practical and dependable engineering solutions that perform effectively in real operating conditions. We place strong emphasis on maintaining high standards, investing in our people, and continuously improving our processes to meet evolving industry requirements. As we look toward the future, we remain committed to engineering excellence, continuous improvement, and long-term partnerships, ensuring that Al Suwaidi Technical Center continues to be a reliable partner for our clients.",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "K. P. Karthik",
      title: "Manager",
      message: "Our strength lies in disciplined execution and attention to detail. Every project we handle is approached with a clear understanding of technical requirements, safety, and quality expectations. At Al Suwaidi Technical Center, we continuously work to improve our processes, develop our team, and deliver reliable engineering solutions that our clients can depend on.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "K. C. Prashannah",
      title: "Business Executive",
      message: "Client relationships are built on trust, communication, and consistent delivery. My focus is on understanding client needs clearly and ensuring that our solutions align with their operational goals. We aim to create long-term partnerships by being responsive, transparent, and dependable at every stage of engagement.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Values Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our operations are guided by a clear set of values that define how we work and how we serve our clients. These values have remained constant since our establishment in 1991.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Messages */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Messages</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Insights from our leadership team on our journey, values, and commitment to excellence
            </p>
          </motion.div>

          <div className="space-y-12">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${message.color} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />
                
                <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${message.color} flex items-center justify-center shadow-lg`}>
                        <FaUsers className="text-white text-2xl" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{message.name}</h3>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${message.color} bg-clip-text text-transparent`}>
                          {message.title}
                        </p>
                      </div>
                      
                      <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                        "{message.message}"
                      </blockquote>
                      
                      <div className="mt-6 flex items-center gap-3">
                        <span className={`h-1 w-20 rounded-full bg-gradient-to-r ${message.color}`}></span>
                        <span className={`h-1 w-10 rounded-full bg-gradient-to-r ${message.color} opacity-50`}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Looking Ahead Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 border border-orange-100"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Looking Ahead</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
              As industries evolve and project demands become more complex, Al Suwaidi Technical Center remains committed to strengthening its capabilities while staying true to its core values.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-2">Continuous Improvement</h4>
                <p className="text-gray-600 text-sm">Continuous improvement of engineering practices</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-2">Investment in People</h4>
                <p className="text-gray-600 text-sm">Investment in skilled manpower and systems</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-2">Sustainable Growth</h4>
                <p className="text-gray-600 text-sm">Sustainable growth through long-term partnerships</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mt-8 font-medium">
              With a strong foundation built since 1991, we continue our journey with confidence, responsibility, and purpose.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}