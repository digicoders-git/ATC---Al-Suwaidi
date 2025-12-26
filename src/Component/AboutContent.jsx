import React from "react";
import { Users, Heart, Award, TrendingUp, Shield, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutContent() {
  const sections = [
    {
      icon: Award,
      title: "Who We Are",
      content:
        "Al Suwaidi Technical Center is an engineering-driven organization focused on solving practical challenges through sound technical judgment and hands-on expertise. We believe that strong engineering solutions are built on careful planning, skilled execution, and accountability at every stage. Rather than focusing on volume, we focus on quality, reliability, and long-term value. This approach has helped us earn the trust of clients who rely on us for critical engineering and technical works.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: Heart,
      title: "Customer Commitment",
      content:
        "Customer satisfaction is central to everything we do. We work closely with our clients to understand their operational needs and deliver solutions that are practical, efficient, and dependable. Our commitment includes clear communication throughout the project, timely and well-planned execution, attention to detail and quality control, and ongoing support and long-term cooperation. We measure our success not only by project completion, but by lasting client relationships.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Users,
      title: "Our People",
      content:
        "Our people are our strongest asset. The experience, skill, and dedication of our team directly reflect the quality of work we deliver. We place strong emphasis on employee retention and development, safe and respectful work environments, knowledge sharing and skill enhancement, and teamwork across all levels. By investing in our people, we ensure continuity, consistency, and technical excellence.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "32+", label: "Years Experience" },
    { icon: Shield, value: "ISO", label: "Certified Quality" },
    { icon: Target, value: "100%", label: "Client Satisfaction" },
    { icon: Users, value: "245+", label: "Expert Team" },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 shadow-md">
                <stat.icon className="text-white" size={26} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Cards */}
        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow background */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${section.bgGradient} opacity-70 blur-xl`}
              ></div>

              <motion.div
                whileHover={{ y: -8 }}
                className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-200 p-10 md:p-14 transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Icon */}
                  <div className="md:col-span-2 flex md:justify-center">
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <section.icon className="text-white" size={32} />
                    </motion.div>
                  </div>

                  {/* Text */}
                  <div className="md:col-span-10">
                    <h2
                      className={`text-3xl md:text-4xl font-bold mb-5 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                    >
                      {section.title}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {section.content}
                    </p>

                    {/* Divider */}
                    <div className="mt-6 flex items-center gap-3">
                      <span
                        className={`h-1 w-20 rounded-full bg-gradient-to-r ${section.gradient}`}
                      ></span>
                      <span
                        className={`h-1 w-10 rounded-full bg-gradient-to-r ${section.gradient} opacity-50`}
                      ></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
