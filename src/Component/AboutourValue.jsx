import { motion } from "framer-motion";
import { FaShieldAlt, FaHandshake, FaAward, FaUsers, FaHeart, FaStar } from "react-icons/fa";

export default function WhoWeAre() {
  const values = [
    {
      icon: FaShieldAlt,
      title: "Integrity",
      text: "Honest communication and responsible execution",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
    },
    {
      icon: FaHandshake,
      title: "Reliability",
      text: "Delivering what we commit, every time",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: FaAward,
      title: "Quality",
      text: "Consistent standards across all works",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: FaUsers,
      title: "Safety",
      text: "Protecting people, assets, and environments",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: FaHeart,
      title: "Commitment",
      text: "Long-term partnerships over short-term gains",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-50 to-orange-50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 px-6 py-3 rounded-full mb-6">
            <FaStar className="text-orange-600" />
            <span className="text-orange-800 font-semibold">Our Foundation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Who We Are &</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Our Values
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Engineering excellence built on strong foundations and unwavering principles
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -8 }}
          className="relative group mb-20"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
          
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Accent Gradient */}
            <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-orange-500 to-red-500" />
            
            <div className="p-8 md:p-12">
              {/* Who We Are Section */}
              <div className="mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                    <FaUsers className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Who We Are</h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6 text-gray-700 leading-relaxed text-lg"
                >
                  <p>
                    Al Suwaidi Technical Center is an engineering-driven organization
                    focused on solving practical challenges through sound technical
                    judgment and hands-on expertise. We believe that strong engineering
                    solutions are built on careful planning, skilled execution, and
                    accountability at every stage.
                  </p>

                  <p>
                    Rather than focusing on volume, we focus on quality, reliability,
                    and long-term value. This approach has helped us earn the trust of
                    clients who rely on us for critical engineering and technical
                    works.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Core Values</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These values have remained constant since our establishment in 1991
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                  >
                    <value.icon className="text-white text-2xl" />
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.text}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-6 flex items-center justify-center gap-2">
                    <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${value.color} transform origin-center group-hover:scale-x-150 transition-transform duration-500`} />
                    <div className={`h-1 w-6 rounded-full bg-gradient-to-r ${value.color} opacity-50`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
            <p className="text-gray-700 text-lg font-medium max-w-3xl mx-auto">
              "Our commitment to these values ensures that every project we undertake reflects our dedication to excellence, integrity, and long-term partnership with our clients."
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
              <FaStar className="text-orange-500" />
              <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
