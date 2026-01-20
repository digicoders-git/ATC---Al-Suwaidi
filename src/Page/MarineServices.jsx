import React from "react";
import { motion } from "framer-motion";
import {
  FaShip,
  FaAnchor,
  FaCog,
  FaTools,
  FaWrench,
  FaIndustry,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  Clock,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

export default function MarineServices() {
  const stats = [
    { value: "32+", label: "Years Experience", icon: Clock },
    { value: "2000+", label: "Marine Projects", icon: FaShip },
    { value: "95%", label: "Client Satisfaction", icon: CheckCircle },
    { value: "ISO 9001:2015", label: "Certified Quality", icon: Award },
  ];

  const marineServices = [
    {
      title: "🚢 Main Propulsion Engine Services",
      description:
        "Precision machining and reconditioning of main propulsion engine components to restore original performance parameters and ensure safe, efficient vessel operation. Our work focuses on maintaining correct tolerances, alignment, and surface finishes critical to engine reliability.",
      capabilities:
        "Crankshaft machining, cylinder liner boring & honing, piston refurbishment.",
      benefits: [
        "Restored engine efficiency",
        "Accurate component alignment",
        "Extended engine service life",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Main Propulsion Engine Services.png",
      icon: FaCog,
    },
    {
      title: "⚡ Auxiliary Diesel Generator Services",
      description:
        "Auxiliary generators are essential for onboard power supply. We support their mechanical integrity through precision machining and component correction, ensuring dependable electrical generation for navigation, safety systems, and onboard operations.",
      capabilities:
        "Generator engine machining, shaft alignment, bearing seating correction.",
      benefits: [
        "Reliable power supply",
        "Smooth generator operation",
        "Reduced breakdown risk",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Auxiliary Diesel Generator Services.png",
      icon: FaTools,
    },
    {
      title: "⚙️ Marine Gearbox & Reduction Gear Services",
      description:
        "Marine gearboxes and reduction gears must transmit power smoothly under variable loads. We provide machining and alignment support to restore gear accuracy and bearing integrity, reducing noise, vibration, and premature failures.",
      capabilities:
        "Gear machining, shaft grinding, bearing housing correction.",
      benefits: [
        "Smooth power transfer",
        "Reduced vibration and noise",
        "Longer gearbox lifespan",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Marine Gearbox & Reduction Gear Services.png",
      icon: FaCog,
    },
    {
      title: "🔧 Propeller & Intermediate Shaft Services",
      description:
        "We machine and align propeller and intermediate shafts to correct runout, surface damage, and alignment issues that directly impact propulsion efficiency and bearing life.",
      capabilities: "Shaft straightening, grinding, alignment correction.",
      benefits: [
        "Vibration-free operation",
        "Accurate shaft alignment",
        "Improved propulsion efficiency",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Propeller & Intermediate Shaft Services.png",
      icon: FaShip,
    },
    {
      title: "🛠️ Rudder & Steering Gear Component Services",
      description:
        "Steering reliability is critical for vessel safety. We recondition rudder and steering gear components to ensure smooth, responsive maneuvering under all operating conditions.",
      capabilities:
        "Rudder component machining, steering gear alignment, bush & bearing fitting.",
      benefits: [
        "Reliable steering control",
        "Smooth maneuvering",
        "Enhanced operational safety",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Rudder & Steering Gear Component Services.png",
      icon: FaWrench,
    },
    {
      title: "⚓ Stern Tube & Bearing Services",
      description:
        "We support stern tube assemblies by restoring bearing housings and alignment to ensure smooth shaft rotation and effective sealing.",
      capabilities:
        "Bearing housing repair, sleeve machining, alignment correction.",
      benefits: ["Reduced wear", "Stable shaft support", "Longer bearing life"],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Stern Tube & Bearing Services.png",
      icon: FaTools,
    },
    {
      title: "🏗️ Winch & Windlass Services",
      description:
        "Deck machinery is subjected to heavy loads and harsh environments. We provide machining and repair support for winches and windlasses used in anchoring, mooring, and towing operations.",
      capabilities: "Drum machining, shaft repair, gear refurbishment.",
      benefits: [
        "Safe load handling",
        "Reliable deck operations",
        "Improved equipment durability",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Winch & Windlass Services.png",
      icon: FaAnchor,
    },
    {
      title: "🚁 Thruster (Bow & Stern) Services",
      description:
        "Thrusters are vital for precise vessel positioning during docking and maneuvering. We support thruster components through machining and alignment services to maintain stable thrust performance.",
      capabilities: "Shaft machining, housing repair, component alignment.",
      benefits: [
        "Improved maneuverability",
        "Smooth thruster operation",
        "Reduced mechanical stress",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Thruster (Bow & Stern) Services.png",
      icon: FaShip,
    },
  ];

  const shipyardServices = [
    {
      title: "🏭 Dry Dock Capstan & Hauling Winch Services",
      description:
        "We machine and refurbish dock handling equipment to ensure safe and efficient vessel movement during docking and maintenance operations.",
      capabilities: "Shaft machining, drum repair, gear alignment.",
      benefits: [
        "Safe vessel handling",
        "Heavy-duty performance",
        "Reduced downtime",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Dry Dock Capstan & Hauling Winch Services.png",
      icon: FaIndustry,
    },
    {
      title: "🛤️ Slipway Roller & Rail Services",
      description:
        "Precision machining and alignment of slipway rollers and rails for smooth vessel launching and retrieval.",
      capabilities: "Roller machining, rail alignment correction.",
      benefits: [
        "Smooth vessel movement",
        "Accurate load distribution",
        "Reduced structural stress",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Slipway Roller & Rail Services.png",
      icon: FaTools,
    },
    {
      title: "🏗️ Dock Crane Component Services",
      description:
        "Dock cranes rely on precise mechanical components for safe lifting. Machining support restores accuracy and load reliability.",
      capabilities:
        "Slew ring machining support, pin and shaft refurbishment, bearing housing correction.",
      benefits: [
        "Safe lifting operations",
        "Accurate load control",
        "Extended crane life",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Dock Crane Component Services.png",
      icon: FaCog,
    },
    {
      title: "⚖️ Floating Dock Ballast System Services",
      description:
        "Floating dock ballast systems are essential for dock stability. Machining and alignment support ensures reliable ballast control.",
      capabilities:
        "Component machining, alignment correction, fitment support.",
      benefits: [
        "Controlled dock operation",
        "Reliable ballast performance",
        "Improved operational safety",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Floating Dock Ballast System Services.png",
      icon: FaWrench,
    },
    {
      title: "⚓ Mooring Dolphin & Bollard Services",
      description:
        "Mooring structures must withstand high loads and environmental exposure. Fabrication and repair services restore structural integrity.",
      capabilities:
        "Steel fabrication, welding repair, alignment and reinforcement work.",
      benefits: [
        "Secure vessel mooring",
        "Durable marine infrastructure",
        "Long-term reliability",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Mooring Dolphin & Bollard Services.png",
      icon: FaAnchor,
    },
  ];

  const heavyEquipmentServices = [
    {
      title: "🚜 Excavator, Loader & Forklift Component Services",
      description:
        "Heavy equipment components are subject to continuous wear and impact. Machining services restore critical load-bearing parts.",
      capabilities:
        "Pin and bushing machining, joint refurbishment, wear surface build-up.",
      benefits: [
        "Reduced equipment downtime",
        "Improved operational efficiency",
        "Lower maintenance costs",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Excavator, Loader & Forklift Component Services.png",
      icon: FaIndustry,
    },
    {
      title: "🏗️ Crane Component Services",
      description:
        "Crane components must meet strict safety and alignment requirements. Precision machining ensures reliable lifting performance.",
      capabilities:
        "Boom pin machining, sheave resurfacing, shaft alignment correction.",
      benefits: [
        "Safe lifting performance",
        "Accurate load movement",
        "Extended service life",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Crane Component Services.png",
      icon: FaCog,
    },
  ];

  const specializedServices = [
    {
      title: "🔧 Rudder Stock & Pintle Services",
      description:
        "Rudder stocks and pintles form the primary load-bearing elements of a vessel's steering system. Precision machining and refurbishment services restore correct fitment, alignment, and load transfer to ensure safe and reliable rudder operation under continuous marine loading.",
      capabilities: "Machining and refurbishment of rudder stocks and pintles.",
      benefits: ["Reliable rudder support", "Improved steering durability"],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Rudder Stock & Pintle Services.png",
      icon: FaWrench,
    },
    {
      title: "⚙️ Deck Machinery Gear Services",
      description:
        "Deck machinery gears operate under heavy loads during anchoring, mooring, and cargo handling. Precision gear machining and restoration ensure smooth torque transmission and reduced mechanical stress during deck operations.",
      capabilities:
        "Precision machining and restoration of deck machinery gears.",
      benefits: ["Smooth gear operation", "Reduced gear wear"],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Deck Machinery Gear Services.png",
      icon: FaCog,
    },
    {
      title: "⛓️ Anchor Chain Link Repair Machining",
      description:
        "Anchor chains are critical safety components exposed to wear, deformation, and corrosion. Repair machining restores dimensional accuracy and load-bearing capability of damaged or worn anchor chain links.",
      capabilities:
        "Machining and correction of worn or damaged anchor chain links.",
      benefits: ["Safe anchoring operations", "Extended chain service life"],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Anchor Chain Link Repair Machining.png",
      icon: FaAnchor,
    },
    {
      title: "🛞 Fairlead & Roller Services",
      description:
        "Fairleads and rollers guide mooring lines and anchor chains under high tension. Machining and resurfacing services restore smooth contact surfaces, reducing friction and preventing premature line damage.",
      capabilities: "Machining and resurfacing of fairleads and rollers.",
      benefits: ["Smooth mooring line handling", "Reduced line wear"],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Fairlead & Roller Services.png",
      icon: FaTools,
    },
    {
      title: "📦 Hatch Cover Roller & Track Services",
      description:
        "Hatch cover rollers and tracks are essential for smooth cargo access and weather protection. Precision machining and alignment services restore movement accuracy and reduce operational resistance.",
      capabilities:
        "Machining and alignment of hatch cover rollers and tracks.",
      benefits: [
        "Smooth hatch cover movement",
        "Improved cargo handling reliability",
      ],
      image:
        "/MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING SERVICES/file_zip/Hatch Cover Roller & Track Services.png",
      icon: FaShip,
    },
  ];

  // const allServices = [...marineServices, ...shipyardServices, ...heavyEquipmentServices, ...specializedServices];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 mt-0 lg:mt-10">
      {/* Hero Section */}
      <header className="relative overflow-hidden mt-20 sm:mt-5 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-md text-white px-6 py-3 text-sm font-semibold mb-8 border border-white/20 shadow-lg"
            >
              <FaShip size={18} className="text-orange-200" />
              MARINE, SHIPYARD & HEAVY EQUIPMENT ENGINEERING
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              MARINE & SHIPYARD
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                ENGINEERING SERVICES
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              Mission-Critical Marine Component Engineering
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Al Suwaidi Technical Center delivers end-to-end machine shop and
              engineering support for marine vessels, shipyards, and heavy
              equipment operations. We specialize in handling mission-critical
              components that operate under extreme loads, corrosive
              environments, and continuous duty cycles — where precision,
              durability, and reliability are non-negotiable.
              <p> 
                <p>
                  Our services are designed to restore performance, extend
                  equipment life, and reduce operational downtime, supporting
                  both planned maintenance and urgent repair requirements.
                </p>
              </p>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <Link
                to="/get-quote"
                className="group inline-flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105 hover:-translate-y-1"
              >
                <Phone size={20} className="group-hover:animate-pulse" />
                <span>Request Marine Services Quote</span>
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>View Marine Services</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>

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

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Our</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Service Categories
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive engineering solutions across four specialized domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Marine & Vessel Equipment */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <FaShip className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">MARINE & VESSEL EQUIPMENT</h3>
                <p className="text-sm text-gray-600 mb-4">Critical systems for propulsion, maneuvering, and onboard operations</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Main propulsion engines
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Auxiliary diesel generators
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Marine gearboxes & reduction gears
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Propeller & intermediate shafts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Rudder & Steering Gear Component Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Stern Tube & Bearing Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Winch & Windlass Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Thruster (Bow & Stern) Services
                </li>
              </ul>
            </motion.div>

            {/* Shipyard & Dock Equipment */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <FaIndustry className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">SHIPYARD & DOCK EQUIPMENT</h3>
                <p className="text-sm text-gray-600 mb-4">Heavy-duty equipment supporting vessel handling and port operations</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Dry dock capstans & hauling winches
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Slipway rollers & rails
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Dock Crane Component Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Floating dock ballast systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Mooring dolphins & bollards
                </li>
              </ul>
            </motion.div>

            {/* Heavy Equipment Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <FaCog className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">HEAVY EQUIPMENT ENGINEERING</h3>
                <p className="text-sm text-gray-600 mb-4">High-wear components for construction and industrial machinery</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Excavators, loaders & forklifts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Crane Component Services
                </li>
              </ul>
            </motion.div>

            {/* Specialized Marine Components */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <FaAnchor className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">SPECIALIZED MARINE COMPONENTS</h3>
                <p className="text-sm text-gray-600 mb-4">Marine-specific parts exposed to extreme loads and environments</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Rudder Stock & Pintle Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Deck Machinery Gear Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Anchor Chain Link Repair Machining
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Fairleads & rollers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Hatch Cover Roller & Track Services
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Description Section */}


      {/* Main Services Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Marine & Vessel Equipment Services Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">MARINE & VESSEL</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                EQUIPMENT SERVICES
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Precision machining and engineering support for critical marine
              vessel components
            </p>
          </motion.div>

          <div className="space-y-16">
            {marineServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-red-50/10 rounded-3xl shadow-2xl border border-orange-100/50 backdrop-blur-sm group"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-200/15 to-transparent rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>

                <div
                  className={`relative flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 lg:w-1/2 text-center lg:text-left"
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-xl lg:text-2xl font-black text-slate-900 mb-3 leading-tight"
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-lg text-slate-600 leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0"
                    >
                      {service.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="mb-4"
                    >
                      <h4 className="font-bold text-slate-900 mb-2 text-base">
                        Capabilities:
                      </h4>
                      <p className="text-slate-600 text-sm mb-4">
                        {service.capabilities}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="mb-8"
                    >
                      <h4 className="font-bold text-slate-900 mb-4 text-lg">
                        What You'll Get:
                      </h4>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {service.benefits.map((benefit, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-slate-800 font-medium rounded-full border-2 border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-300"
                          >
                            ✔ {benefit}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex-1 lg:w-1/2 relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500"></div>

                      <div className="relative bg-white rounded-3xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Shipyard & Dock Equipment Services Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">SHIPYARD & DOCK</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                EQUIPMENT SERVICES
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive support for shipyard infrastructure and dock
              equipment
            </p>
          </motion.div>

          <div className="space-y-16">
            {shipyardServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-red-50/10 rounded-3xl shadow-2xl border border-orange-100/50 backdrop-blur-sm group"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-200/15 to-transparent rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>

                <div
                  className={`relative flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16 ${
                    (index + marineServices.length) % 2 === 1
                      ? "lg:flex-row-reverse"
                      : ""
                  }`}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: (index + marineServices.length) % 2 === 0 ? -50 : 50,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 lg:w-1/2 text-center lg:text-left"
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-xl lg:text-2xl font-black text-slate-900 mb-3 leading-tight"
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-lg text-slate-600 leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0"
                    >
                      {service.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="mb-4"
                    >
                      <h4 className="font-bold text-slate-900 mb-2 text-base">
                        Capabilities:
                      </h4>
                      <p className="text-slate-600 text-sm mb-4">
                        {service.capabilities}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="mb-8"
                    >
                      <h4 className="font-bold text-slate-900 mb-4 text-lg">
                        What You'll Get:
                      </h4>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {service.benefits.map((benefit, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-slate-800 font-medium rounded-full border-2 border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-300"
                          >
                            ✔ {benefit}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: (index + marineServices.length) % 2 === 0 ? 50 : -50,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex-1 lg:w-1/2 relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500"></div>

                      <div className="relative bg-white rounded-3xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Heavy Equipment Engineering Services Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">HEAVY EQUIPMENT</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                ENGINEERING SERVICES
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Precision machining and repair for heavy industrial equipment
            </p>
          </motion.div>

          <div className="space-y-16">
            {heavyEquipmentServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-red-50/10 rounded-3xl shadow-2xl border border-orange-100/50 backdrop-blur-sm group"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-200/15 to-transparent rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>

                <div
                  className={`relative flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16 ${
                    (index + marineServices.length + shipyardServices.length) %
                      2 ===
                    1
                      ? "lg:flex-row-reverse"
                      : ""
                  }`}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x:
                        (index +
                          marineServices.length +
                          shipyardServices.length) %
                          2 ===
                        0
                          ? -50
                          : 50,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 lg:w-1/2 text-center lg:text-left"
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-xl lg:text-2xl font-black text-slate-900 mb-3 leading-tight"
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-lg text-slate-600 leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0"
                    >
                      {service.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="mb-4"
                    >
                      <h4 className="font-bold text-slate-900 mb-2 text-base">
                        Capabilities:
                      </h4>
                      <p className="text-slate-600 text-sm mb-4">
                        {service.capabilities}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="mb-8"
                    >
                      <h4 className="font-bold text-slate-900 mb-4 text-lg">
                        What You'll Get:
                      </h4>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {service.benefits.map((benefit, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-slate-800 font-medium rounded-full border-2 border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-300"
                          >
                            ✔ {benefit}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x:
                        (index +
                          marineServices.length +
                          shipyardServices.length) %
                          2 ===
                        0
                          ? 50
                          : -50,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex-1 lg:w-1/2 relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500"></div>

                      <div className="relative bg-white rounded-3xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Specialized Marine Component Services Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">SPECIALIZED MARINE</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                COMPONENT SERVICES
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Expert machining and refurbishment of specialized marine
              components
            </p>
          </motion.div>

          <div className="space-y-16">
            {specializedServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-red-50/10 rounded-3xl shadow-2xl border border-orange-100/50 backdrop-blur-sm group"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-200/15 to-transparent rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>

                <div
                  className={`relative flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16 ${
                    (index +
                      marineServices.length +
                      shipyardServices.length +
                      heavyEquipmentServices.length) %
                      2 ===
                    1
                      ? "lg:flex-row-reverse"
                      : ""
                  }`}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x:
                        (index +
                          marineServices.length +
                          shipyardServices.length +
                          heavyEquipmentServices.length) %
                          2 ===
                        0
                          ? -50
                          : 50,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 lg:w-1/2 text-center lg:text-left"
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-xl lg:text-2xl font-black text-slate-900 mb-3 leading-tight"
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-lg text-slate-600 leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0"
                    >
                      {service.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="mb-4"
                    >
                      <h4 className="font-bold text-slate-900 mb-2 text-base">
                        Capabilities:
                      </h4>
                      <p className="text-slate-600 text-sm mb-4">
                        {service.capabilities}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="mb-8"
                    >
                      <h4 className="font-bold text-slate-900 mb-4 text-lg">
                        What You'll Get:
                      </h4>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {service.benefits.map((benefit, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-slate-800 font-medium rounded-full border-2 border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-300"
                          >
                            ✔ {benefit}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x:
                        (index +
                          marineServices.length +
                          shipyardServices.length +
                          heavyEquipmentServices.length) %
                          2 ===
                        0
                          ? 50
                          : -50,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex-1 lg:w-1/2 relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500"></div>

                      <div className="relative bg-white rounded-3xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <GetDemoSection />

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              OUR PROCESS
            </span>

            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Marine Engineering
              </span>{" "}
              Process
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Precision engineering approach for marine and heavy equipment
              components
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Component Assessment",
                desc: "Detailed inspection and analysis of marine components and equipment condition.",
              },
              {
                step: "02",
                title: "Precision Machining",
                desc: "Advanced machining and restoration using marine-grade specifications.",
              },
              {
                step: "03",
                title: "Assembly & Alignment",
                desc: "Professional assembly with precise alignment and fitment verification.",
              },
              {
                step: "04",
                title: "Testing & Delivery",
                desc: "Comprehensive testing and quality assurance before component delivery.",
              },
            ].map((process, idx) => (
              <div
                key={idx}
                className="relative group bg-white rounded-3xl p-8 text-center shadow-lg border border-orange-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 blur transition duration-500" />

                <div className="relative z-10">
                  <div className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-600 to-red-500 flex items-center justify-center text-white font-black text-lg shadow-lg">
                    {process.step}
                  </div>

                  <h4 className="font-black text-gray-900 mb-4 text-xl">
                    {process.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
