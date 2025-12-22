import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Award,
  Users,
  Building,
  Wrench,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Factory,
  Sparkles,
  Target,
  TrendingUp,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const milestones = [
  {
    year: "1991",
    title: "🏗️ Foundation",
    subtitle: "Established in Industrial Area, Doha, Qatar",
    desc: "Al Suwaidi Technical Center was established in 1991 as a technical engineering workshop, focused on fabrication, repair works, and practical engineering solutions for industrial needs.",
    icon: Building,
  },
  {
    year: "2000",
    title: "⚙️ Expansion",
    subtitle: "Growth into Steel Fabrication & Industrial Works",
    desc: "Expanded operations to include structural steel fabrication, industrial engineering works, and vehicle-related services, supporting growing infrastructure and construction projects.",
    icon: Factory,
  },
  {
    year: "2010",
    title: "📈 Growth Phase",
    subtitle: "Major Industrial & Construction Projects",
    desc: "Achieved significant growth by supporting large-scale industrial, construction, logistics, and fleet operations, strengthening technical capacity and workforce.",
    icon: TrendingUp,
  },
  {
    year: "2015",
    title: "🛠️ System Implementation",
    subtitle: "Quality & Safety Systems Introduced",
    desc: "Implemented structured quality management procedures, safety protocols, and standardized operational processes to improve consistency, reliability, and compliance.",
    icon: Shield,
  },
  {
    year: "2022",
    title: "🏅 ISO Certification",
    subtitle: "Quality Management Excellence",
    desc: "Achieved ISO 9001:2015 certification, reinforcing commitment to quality control, process improvement, and customer satisfaction.",
    icon: Award,
  },
  {
    year: "2024",
    title: "👤 Present Day",
    subtitle: "Established Industry Leader",
    desc: "Operating as a comprehensive industrial engineering and technical services provider, supported by an experienced leadership team, skilled professionals, and a well-equipped facility serving multiple industries.",
    icon: Star,
  },
];

const stats = [
  { value: "32+", label: "Years of Excellence", icon: Calendar },
  { value: "1000+", label: "Projects Completed", icon: CheckCircle },
  { value: "50+", label: "Skilled Professionals", icon: Users },
  { value: "ISO 9001:2015", label: "Certified Quality", icon: Award },
];

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 mt-0 lg:mt-10">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden mt-20 sm:mt-5 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-md text-white px-6 py-3 text-sm font-semibold mb-8 border border-white/20 shadow-lg"
            >
              <Calendar size={18} className="text-orange-200" />
              ESTABLISHED IN 1991
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              OUR STORY
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                32+ YEARS OF EXCELLENCE
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              From a Small Workshop to a Trusted Industrial Engineering Partner
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Al Suwaidi Technical Center was established in 1991 as a technical engineering workshop with a strong focus on quality workmanship and reliable service delivery. From its early beginnings, the company set out to provide practical engineering and fabrication solutions that meet real operational requirements.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105 hover:-translate-y-1"
              >
                <Phone size={20} className="group-hover:animate-pulse" />
                <span>Contact Us Today</span>
              </Link>

              <a
                href="#journey"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>Our Journey</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <stat.icon className="text-orange-200" size={24} />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-white/80 font-medium text-center">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <ServiceSooller />
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Company Story Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              OUR FOUNDATION
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Steady Growth &{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Evolution
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                As industrial, infrastructure, and transportation sectors expanded, the company continuously enhanced its capabilities to meet changing market needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started with basic technical works gradually expanded into a comprehensive portfolio that includes:
              </p>
              <div className="space-y-3">
                {[
                  "Steel fabrication and engineering works",
                  "Commercial vehicle body fabrication", 
                  "Precision machining and gear works",
                  "Cabinet manufacturing for utility services",
                  "Engine reconditioning and mechanical repairs",
                  "Vehicle wheels repairing works",
                  "Maintenance, Repair & Overhaul (MRO) services"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Engineering Excellence at the Core</h3>
                <p className="mb-6 text-orange-100">
                  Engineering discipline and technical accuracy form the foundation of all operations at Al Suwaidi Technical Center.
                </p>
                <div className="space-y-3">
                  {[
                    "Planning and technical assessment",
                    "Precision fabrication and machining",
                    "Controlled assembly and finishing", 
                    "Inspection, testing, and quality verification"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section id="journey" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              JOURNEY TILL NOW AND BEYOND
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              32 Years of Excellence
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              From a small workshop to Qatar's leading industrial engineering centre
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* vertical connecting line behind the center icons (visible on lg and above) */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-1 bg-gradient-to-b from-orange-200 via-amber-200 to-red-200 rounded-full opacity-70" />

            <motion.div
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {milestones.reduce((pairs, milestone, index) => {
                if (index % 2 === 0) {
                  pairs.push([milestone, milestones[index + 1]]);
                }
                return pairs;
              }, []).map((pair, idx) => {
                const left = pair[0];
                const right = pair[1];
                return (
                  <div
                    key={idx}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start relative"
                  >
                    {/* LEFT CARD */}
                    <div className="col-span-1 lg:col-span-1">
                      {left && (
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: -40, y: 20 },
                            visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6 } },
                          }}
                          whileHover={{ scale: 1.02 }}
                          tabIndex={0}
                          className="bg-white bg-opacity-80 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow"
                              style={{
                                background:
                                  "linear-gradient(135deg,#f97316,#dc2626)",
                              }}
                            >
                              <left.icon size={22} />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">
                                {left.subtitle}
                              </div>
                              <div className="text-xl font-bold text-orange-700">
                                {left.year}
                              </div>
                            </div>
                          </div>

                          <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">
                            {left.title}
                          </h3>
                          <p className="text-gray-600">{left.desc}</p>
                        </motion.div>
                      )}
                    </div>

                    {/* CENTER DOT / ICON */}
                    <div className="col-span-1 flex justify-center lg:items-center z-20">
                      <motion.div
                        variants={{
                          hidden: { scale: 0, opacity: 0 },
                          visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
                        }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-2xl ring-4 ring-white -mt-6 lg:mt-0"
                        style={{ zIndex: 30 }}
                      >
                        {/* show right icon if exists else left icon */}
                        {right ? (
                          <right.icon size={28} />
                        ) : (
                          left && <left.icon size={28} />
                        )}
                      </motion.div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="col-span-1 lg:col-span-1">
                      {right && (
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: 40, y: 20 },
                            visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6 } },
                          }}
                          whileHover={{ scale: 1.02 }}
                          tabIndex={0}
                          className="bg-white bg-opacity-80 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow"
                              style={{
                                background:
                                  "linear-gradient(135deg,#f97316,#dc2626)",
                              }}
                            >
                              <right.icon size={22} />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">
                                {right.subtitle}
                              </div>
                              <div className="text-xl font-bold text-orange-700">
                                {right.year}
                              </div>
                            </div>
                          </div>

                          <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">
                            {right.title}
                          </h3>
                          <p className="text-gray-600">{right.desc}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Industries{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                We Serve
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Factory,
                title: "Manufacturing & Industrial Facilities",
                desc: "Supporting industrial operations with precision engineering"
              },
              {
                icon: Building,
                title: "Construction & Infrastructure Projects", 
                desc: "Structural solutions for construction industry"
              },
              {
                icon: Target,
                title: "Logistics & Transportation Fleets",
                desc: "Vehicle solutions for transportation sector"
              },
              {
                icon: Shield,
                title: "Municipal & Utility Services",
                desc: "Essential services for public utilities"
              }
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all text-center group"
              >
                <div className="p-4 bg-orange-100 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <industry.icon className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Commitment to Quality & Reliability
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  The reputation of Al Suwaidi Technical Center has been built on consistent quality, technical expertise, and dependable service.
                </p>
                <div className="space-y-4">
                  {[
                    "Skilled engineering and technical teams",
                    "Strong quality control practices", 
                    "Safe working methods",
                    "Practical, cost-effective solutions"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-orange-600" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-6">Looking Forward</h3>
                <p className="mb-6 text-orange-100">
                  Today, Al Suwaidi Technical Center continues to strengthen its technical capabilities and expand its service offerings to meet future industry requirements.
                </p>
                <div className="space-y-3">
                  {[
                    "Engineering excellence",
                    "Continuous improvement",
                    "Long-term client partnerships"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Star size={16} className="text-orange-200" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <GetDemoSection />

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto py-15">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-6">
          <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-3 rounded-lg bg-orange-100 flex-shrink-0">
                <Phone className="text-orange-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  Contact Us
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  +974 44601087
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-3 rounded-lg bg-orange-100 flex-shrink-0">
                <Mail className="text-orange-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  Email
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  info@alsuwaidi.com
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-3 rounded-lg bg-orange-100 flex-shrink-0">
                <Clock className="text-orange-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  Experience
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Since 1991
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}