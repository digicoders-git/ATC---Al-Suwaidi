import React from "react";
import { Users, Heart, Award, TrendingUp, Shield, Target } from "lucide-react";

export default function AboutContent() {
  const sections = [
    {
      icon: Award,
      title: "About Us",
      content:
        "Since 1991, Al Suwaidi Technical Center has been a trusted and diversified provider of Lathe manufacturing works and Steel engineering solutions in Qatar. With over three decades of experience, we have built a strong reputation in the engineering and transportation industries by delivering high-quality, customized fabrication and machining services. Our commitment to excellence and innovation has enabled us to serve a wide range of sectors with reliable and efficient solutions.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      content:
        "At Al Suwaidi Technical Center, customer satisfaction is our highest priority. We are dedicated to understanding and exceeding our clients' expectations by delivering superior quality, timely services, and tailored solutions. Our experienced team works closely with each customer to ensure seamless project execution and lasting partnerships built on trust and reliability. We continuously strive to improve our processes and innovate, ensuring that every client receives the best value and support throughout their engagement with us.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Users,
      title: "Employee Retention",
      content:
        "Employee retention is a key goal we strive to achieve at Al Suwaidi Technical Center. We recognize that our company's extensive experience and success are a direct reflection of the collective expertise, dedication, and commitment of our valued employees. By fostering a supportive and rewarding work environment, we aim to retain top talent who contribute to our continued growth and excellence in delivering engineering solutions.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "32+", label: "Years Experience" },
    { icon: Shield, value: "ISO", label: "Certified Quality" },
    { icon: Target, value: "100%", label: "Client Satisfaction" },
    { icon: Users, value: "50+", label: "Expert Team" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={20} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
              }`}
            >
              {/* Background Pattern */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-50`}
              ></div>

              {/* Animated Circles */}
              <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-24 h-24 sm:w-40 sm:h-40 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-24 h-24 sm:w-40 sm:h-40 bg-white/30 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              <div
                className={`relative bg-white/80 backdrop-blur-sm border-l-4 sm:border-l-8 border-gradient-to-b ${section.gradient}`}
              >
                <div className="p-6 sm:p-8 md:p-12">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg transform transition-all duration-500 hover:rotate-12 hover:scale-110`}
                    >
                      <section.icon className="text-white" size={28} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2
                        className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                      >
                        {section.title}
                      </h2>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        {section.content}
                      </p>

                      {/* Decorative Line */}
                      <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3">
                        <div
                          className={`h-1 w-12 sm:w-20 rounded-full bg-gradient-to-r ${section.gradient}`}
                        ></div>
                        <div
                          className={`h-1 w-8 sm:w-12 rounded-full bg-gradient-to-r ${section.gradient} opacity-60`}
                        ></div>
                        <div
                          className={`h-1 w-4 sm:w-6 rounded-full bg-gradient-to-r ${section.gradient} opacity-30`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
}
