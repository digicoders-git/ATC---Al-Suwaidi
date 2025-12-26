import { Globe, Mail, Phone, Building2, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GroupCompanies() {
  const companies = [
    {
      name: "Al Suwaidi Paper Factory",
      website: "https://www.alsuwaidipaper.com",
      phone: "4418 0179",
    },
    {
      name: "Al Noor Manufacturing Industries Paper Company",
      email: "corepipe@alsuwaidipaper.com",
      phone: "4418 0197",
    },
    {
      name: "Artisian District Food Factory",
      website: "https://www.artisiandistrict.qa",
      phone: "4469 4369",
    },
    {
      name: "Italian Bakery",
      email: "info@italianbakery.qa",
      phone: "4469 4369",
    },
    {
      name: "Classic Transport",
      email: "hussain.ali@alsuwaidipaper.com",
      phone: "5025 0207",
    },
    {
      name: "Classic Logistic",
      email: "classic.logistics2k18@gmail.com",
      phone: "5025 0207",
    },
    {
      name: "Al Suwaidi Tire Re-Trading",
      email: "al.suwaidi.tire@gmail.com",
      phone: "4460 3035",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
       

        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-orange-100 border border-orange-200 shadow-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
              <Sparkles className="text-white text-sm" />
            </div>
            <span className="text-orange-800 font-semibold text-lg">Corporate Network</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="text-gray-900">Our</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Group of Companies
            </span>
          </h2>
          
          <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
            A diversified business group operating across manufacturing,
            logistics, food production, and industrial services in Qatar.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Background Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-orange-500/30 to-red-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div className="absolute inset-0 rounded-3xl bg-orange-50/50 backdrop-blur-sm" />
              
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 border border-orange-200 h-full">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-orange-500 to-red-500" />

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Building2 className="text-white" size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 leading-snug mb-2">
                      {company.name}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-4">
                  {company.website && (
                    <motion.a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all duration-300 border border-orange-200 hover:border-orange-300 group/link"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                        <Globe size={16} className="text-white" />
                      </div>
                      <span className="text-gray-600 group-hover/link:text-gray-900 transition-colors flex-1 text-sm">
                        Visit Website
                      </span>
                      <ArrowUpRight size={16} className="text-gray-500 group-hover/link:text-gray-900 transition-colors" />
                    </motion.a>
                  )}

                  {company.email && (
                    <motion.a
                      href={`mailto:${company.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all duration-300 border border-orange-200 hover:border-orange-300 group/link"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                        <Mail size={16} className="text-white" />
                      </div>
                      <span className="text-gray-600 group-hover/link:text-gray-900 transition-colors flex-1 text-sm break-all">
                        {company.email}
                      </span>
                    </motion.a>
                  )}

                  <motion.a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all duration-300 border border-orange-200 hover:border-orange-300 group/link"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-white" />
                    </div>
                    <span className="text-gray-600 group-hover/link:text-gray-900 transition-colors flex-1 text-sm">
                      {company.phone}
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
