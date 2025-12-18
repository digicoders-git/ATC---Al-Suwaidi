import React from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  Wrench,
  Cog,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Sparkles,
  Gauge,
  Thermometer,
  HardHat,
  Factory,
  Menu,
  X,
  Package,
  RotateCw,
  Zap,
  Circle,
  Square,
  Hexagon,
  GitPullRequest,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const bearingServices = [
  {
    title: "Axle Bearing Removal & Fitting",
    desc: "Professional axle bearing services including removal of worn bearings and precision fitting of new bearings for smooth vehicle operation.",
    image: "/Gemini_Generated_Image_37ct9237ct9237ct.png",
    features: [
      "Safe removal",
      "Proper lubrication",
      "Correct torque",
      "Alignment check",
    ],
    specs: [
      "Types: Tapered/Roller",
      "Sizes: 20-150mm",
      "Tools: Hydraulic press",
    ],
    icon: RotateCw,
  },
  {
    title: "Hub Bearing Replacement",
    desc: "Complete hub bearing replacement services including diagnosis, removal of old bearings, and installation of high-quality replacements.",
    image: "/Gemini_Generated_Image_ux13j0ux13j0ux13.png",
    features: [
      "Noise diagnosis",
      "Seal replacement",
      "ABS sensor check",
      "Wheel alignment",
    ],
    specs: [
      "Types: Press-in/Bolt-on",
      "Vehicles: All types",
      "Warranty: 1 year",
    ],
    icon: Circle,
  },
  {
    title: "Lower Arm Bush Replacement",
    desc: "Professional lower control arm bush replacement services to restore suspension performance and vehicle handling.",
    image: "/Gemini_Generated_Image_fthmdafthmdafthm.png",
    features: ["Bush pressing", "Alignment check", "Bolt torque", "Test drive"],
    specs: [
      "Materials: Rubber/Polyurethane",
      "Sizes: Standard/Custom",
      "Tools: Hydraulic press",
    ],
    icon: GitPullRequest,
  },
  {
    title: "Upper Arm Bush Replacement",
    desc: "Upper control arm bush replacement services to eliminate suspension noise and improve steering response.",
    image: "/Gemini_Generated_Image_lmt906lmt906lmt9.png",
    features: [
      "Bush inspection",
      "Precision fitting",
      "Alignment setup",
      "Quality check",
    ],
    specs: [
      "Types: OEM/Performance",
      "Materials: Various",
      "Installation: Press fit",
    ],
    icon: Square,
  },
  {
    title: "Steering Kit Fitting",
    desc: "Complete steering system overhaul including tie rods, ends, and rack fitting for precise steering control.",
    image: "/Gemini_Generated_Image_dnas76dnas76dnas.png",
    features: [
      "Tie rod replacement",
      "Rack inspection",
      "Alignment check",
      "Steering test",
    ],
    specs: [
      "Kit types: Complete/Partial",
      "Vehicles: All makes",
      "Alignment: Computerized",
    ],
    icon: Wrench,
  },
  {
    title: "King Pin Removal & Fitting",
    desc: "Professional king pin services including removal of worn pins and precision fitting of new pins for heavy vehicles.",
    image: "/Gemini_Generated_Image_yv3rryyv3rryyv3r.png",
    features: [
      "Pin removal",
      "Bush replacement",
      "Grease fitting",
      "Play adjustment",
    ],
    specs: [
      "Types: Tapered/Straight",
      "Sizes: Various",
      "Materials: Hardened steel",
    ],
    icon: Hexagon,
  },
  {
    title: "Door Hinges Making & Fitting",
    desc: "Custom door hinge manufacturing and fitting services for all types of commercial and industrial vehicles.",
    image: "/Gemini_Generated_Image_7s4ovw7s4ovw7s4o.png",
    features: [
      "Custom fabrication",
      "Precision welding",
      "Surface finishing",
      "Proper alignment",
    ],
    specs: [
      "Materials: Steel/Brass",
      "Types: Butt/Piano",
      "Finishing: Paint/Plating",
    ],
    icon: Package,
  },
  {
    title: "Gear Removal & Fitting",
    desc: "Professional gear removal and fitting services for transmissions and differentials with precision alignment.",
    image: "/Gemini_Generated_Image_ecvmyiecvmyiecvm.png",
    features: [
      "Gear inspection",
      "Proper meshing",
      "Clearance check",
      "Lubrication",
    ],
    specs: [
      "Gear types: Spur/Helical",
      "Vehicles: All types",
      "Tools: Specialized",
    ],
    icon: Cog,
  },
];

const stats = [
  { value: "10,000+", label: "Bearings Replaced", icon: Circle },
  { value: "25+", label: "Years Experience", icon: Clock },
  { value: "98%", label: "Customer Satisfaction", icon: CheckCircle },
  { value: "ISO Certified", label: "Quality Service", icon: Award },
];

export default function BearingsRemovalFittingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 pt-20 lg:pt-0">
        {/* Desktop Navigation */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 rounded-full bg-white/20 backdrop-blur-sm text-white px-4 py-2 text-sm font-semibold mb-6 border border-white/30"
              >
                <Circle size={16} /> BEARINGS & SUSPENSION SPECIALISTS
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Bearings Removal & Fitting Services
              </h1>

              <p className="mt-6 max-w-xl text-white/90 text-lg leading-relaxed">
                Professional bearings removal and fitting services for all types
                of vehicles. From axle bearings and hub bearings to steering
                kits and door hinges - we provide precision mechanical services
                for commercial and industrial vehicles.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/get-quote"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-orange-600 font-semibold shadow-lg hover:shadow-xl transform transition-all hover:scale-105"
                >
                  <span>Request Service Quote</span>
                  <Phone size={18} className="group-hover:animate-pulse" />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition"
                >
                  View Our Services
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Stats Bar - Responsive */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-1 sm:gap-2 text-white">
                      <stat.icon
                        className="text-orange-300 mx-auto sm:mx-0"
                        size={20}
                      />
                      <div className="text-xl sm:text-2xl font-bold">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image - Responsive */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Gemini_Generated_Image_kd6s2hkd6s2hkd6s.png"
                  alt="Bearings and Mechanical Workshop"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                {/* Floating Card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-2xl"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1 sm:p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                      <Shield className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">
                        Certified Mechanical Services
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Precision work since 1992
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <ServiceSooller />
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Introduction */}
        <section id="services" className="mb-12 sm:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-orange-600 font-semibold mb-4"
          >
            <div className="h-px w-4 sm:w-8 bg-orange-600"></div>
            PROFESSIONAL MECHANICAL SERVICES
            <div className="h-px w-4 sm:w-8 bg-orange-600"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            All Types of Bearings & Mechanical Services
          </motion.h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We provide comprehensive bearings removal and fitting services for
            commercial and industrial vehicles. Our experienced technicians use
            specialized tools and techniques to ensure precise installation and
            long-lasting results.
          </p>
        </section>

        {/* Bearing Services - Side by Side Cards */}
        <section className="mb-16 space-y-12 sm:space-y-20">
          {bearingServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group flex flex-col lg:flex-row gap-6 sm:gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 lg:w-1/2 px-4 sm:px-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-orange-50 to-red-50">
                    <service.icon className="text-orange-600" size={20} />
                  </div>
                  <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                    Mechanical Service
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
                  {service.desc}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                    Service Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-orange-50 text-orange-700 text-sm rounded-full border border-orange-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                    Technical Details:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-500 flex-shrink-0"
                        />
                        <span className="text-sm sm:text-base">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-lg transition text-sm sm:text-base"
                  >
                    View service Detail
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/get-quote"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition text-sm sm:text-base"
                  >
                    Get Custom Quote
                  </Link>
                </div>
              </div>

              {/* Image Content */}
              <div className="flex-1 lg:w-1/2 w-full px-4 sm:px-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>

                  {/* Overlay Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                    <div className="text-sm font-semibold text-gray-900">
                      Expert Service
                    </div>
                    <div className="text-xs text-orange-600">
                      Precision Work
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Additional Services Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Related Mechanical Services
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              We also provide these additional mechanical services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: RotateCw,
                title: "Wheel Alignment",
                desc: "Computerized wheel alignment services",
              },
              {
                icon: Circle,
                title: "Suspension Repair",
                desc: "Complete suspension system repairs",
              },
              {
                icon: Wrench,
                title: "Brake Service",
                desc: "Disc and drum brake services",
              },
              {
                icon: Gauge,
                title: "Steering Repair",
                desc: "Power steering system repairs",
              },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, type: "spring" }}
                whileHover={{ y: -8, scale: 1.04 }}
                className="group relative rounded-2xl 
        bg-white/80 backdrop-blur-xl 
        border border-gray-200 
        p-6 shadow-sm hover:shadow-2xl 
        transition-all"
              >
                {/* Icon */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 w-fit mb-5 group-hover:scale-110 transition">
                  <service.icon className="text-orange-600" size={26} />
                </div>

                {/* Content */}
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-orange-400/10 to-red-400/10 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <GetDemoSection />

      <div className=" max-w-7xl mx-auto py-15">
        {/* Why Choose Us Section */}
        <section className="mb-16 bg-gradient-to-br from-orange-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-orange-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Bearing Services?
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Expert Technicians",
                    desc: "Skilled mechanics with 10+ years experience",
                  },
                  {
                    icon: Settings,
                    title: "Specialized Tools",
                    desc: "Professional tools for bearing removal/fitting",
                  },
                  {
                    icon: Award,
                    title: "Quality Parts",
                    desc: "Genuine and high-quality replacement parts",
                  },
                  {
                    icon: Clock,
                    title: "Quick Service",
                    desc: "Fast turnaround without compromising quality",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-white transition"
                  >
                    <div className="p-2 sm:p-3 rounded-lg bg-orange-100 flex-shrink-0">
                      <item.icon className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
                <div className="mb-6">
                  <h4 className="text-xl sm:text-2xl font-bold mb-4">
                    Service Benefits
                  </h4>
                  <p className="text-orange-100 text-sm sm:text-base">
                    Our professional bearing services deliver these key benefits
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Improved Vehicle Safety",
                    "Smooth Operation",
                    "Extended Component Life",
                    "Reduced Noise & Vibration",
                    "Better Fuel Efficiency",
                    "Warranty on Services",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle
                        size={16}
                        className="text-orange-200 flex-shrink-0"
                      />
                      <span className="text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-3 rounded-lg bg-orange-100 flex-shrink-0">
                <Phone className="text-orange-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  Emergency Service
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
                  mechanical@alsuwaidi.com
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
                  Service Hours
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  7:00 AM - 10:00 PM
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
    </div>
  );
}
