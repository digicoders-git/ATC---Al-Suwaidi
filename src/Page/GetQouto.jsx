import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Factory,
  Shield,
  Sparkles,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Clock,
  Headphones,
  Briefcase,
  Users,
  MessageCircle,
  Video,
  Calendar,
  Zap,
  Check,
  Star,
  TrendingUp,
  Target,
  Globe,
  ShieldCheck,
  FileText,
  Download,
} from "lucide-react";
import GetDemoSection from "../Component/GetDemoSection";

const GetQuotePage = () => {
  

  // Handle contact method clicks


  // Handle quick action clicks
  const handleQuickAction = (action) => {
    switch (action) {
      case "emergency":
        window.open("tel:+97444601087", "_self");
        break;
      case "consultation":
        window.open("https://calendly.com/alsuwaidi-technical", "_blank");
        break;
      case "tour":
        window.open(
          "mailto:pankajsuwaidigroup@gmail.com?subject=Factory Tour Request",
          "_self"
        );
        break;
      default:
        break;
    }
  };

  // Handle team member contact
  const handleTeamContact = () => {
    window.open("tel:+97444601087", "_self");
  };

  const contactMethods = [
    {
      id: "phone",
      title: "Direct Phone Line",
      description: "Speak with our technical experts",
      icon: Phone,
      color: "from-orange-500 to-red-500",
      details: "+974 44601087",
      subtext: "Tel: +974 44601087 | Cell: +974 51711104",
      action: "Call Now",
      actionIcon: Phone,
      actionLink: "tel:+97444601087",
      type: "phone",
    },
    {
      id: "whatsapp",
      title: "WhatsApp Business",
      description: "Quick chat with engineering team",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-600",
      details: "97451711104",
      subtext: "Send drawings & get instant quote",
      action: "Start Chat",
      actionIcon: MessageCircle,
      actionLink: "https://wa.me/97451711104",
      type: "whatsapp",
    },
    {
      id: "email",
      title: "Email Inquiry",
      description: "Send detailed project requirements",
      icon: Mail,
      color: "from-blue-500 to-cyan-500",
      details: "pankajsuwaidigroup@gmail.com",
      subtext: "Also: suwaidigroup@yahoo.com",
      action: "Send Email",
      actionIcon: Mail,
      actionLink: "mailto:pankajsuwaidigroup@gmail.com",
      type: "email",
    },
    {
      id: "visit",
      title: "Visit Our Facility",
      description: "10,000 SQM manufacturing facility",
      icon: MapPin,
      color: "from-purple-500 to-pink-500",
      details: "Street No. 18, Gate No. 35",
      subtext: "P.O. Box 40600, Industrial Area, Doha",
      action: "Get Directions",
      actionIcon: MapPin,
      actionLink: "https://www.google.com/maps/search/Street+No+18+Gate+No+35+Industrial+Area+Doha+Qatar",
      type: "location",
    },
  ];

  const expertTeam = [
    {
      name: "Rashid Al Suwaidi",
      role: "Managing Director",
      exp: "32+ years",
      contact: "+974 44601087",
      specialization: "Industrial Engineering",
    },
    {
      name: "Pankaj Singh",
      role: "Sales Director",
      exp: "15+ years",
      contact: "+974 44601087",
      specialization: "Project Management",
    },
    {
      name: "K.P. Karthik",
      role: "General Manager",
      exp: "20+ years",
      contact: "+974 44601087",
      specialization: "Quality Control",
    },
    {
      name: "S. Dharmalingam",
      role: "Engineering Head",
      exp: "18+ years",
      contact: "+974 44601087",
      specialization: "Technical Design",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Background Elements */}

      <section className="relative overflow-hidden mt-20 sm:mt-5 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Animated background blobs */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-red-400/20 rounded-full blur-3xl animate-pulse" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-md text-white px-6 py-3 text-sm font-semibold mb-8 border border-white/20 shadow-lg"
            >
              <Sparkles size={18} className="text-orange-200" />
              GET INSTANT QUOTE FROM EXPERTS
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              GET YOUR CUSTOM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                QUOTE INSTANTLY
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              Connect Directly with Our Fabrication Experts
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Skip the forms and waiting time. Get direct access to our engineering team for immediate project consultation, technical discussions, and competitive pricing for your industrial fabrication needs.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <a
                href="tel:+97444601087"
                className="group inline-flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105 hover:-translate-y-1"
              >
                <Phone size={20} className="group-hover:animate-pulse" />
                <span>Call Now: +974 44601087</span>
              </a>

              <a
                href="https://wa.me/97451711104"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>WhatsApp Chat</span>
                <MessageSquare size={20} />
              </a>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto"
            >
              {[
                { value: "32+", label: "Years Experience", icon: Award },
                { value: "245+", label: "Expert Team", icon: Users },
                { value: "ISO 9001", label: "Certified Quality", icon: ShieldCheck },
                { value: "24/7", label: "Support Available", icon: Clock },
              ].map((stat, idx) => (
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
      </section>

      {/* Quick Contact Cards Section */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 to-red-100 px-5 py-2 rounded-full text-sm font-semibold mx-auto shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              CONTACT METHODS
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
              Choose Your Contact Method
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto font-semibold">
              Multiple ways to connect instantly with our fabrication experts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CALL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-orange-100"
            >
              <div className="p-7 flex flex-col min-h-[200px]">
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl 
      bg-gradient-to-br from-orange-400 to-red-500 
      flex items-center justify-center 
      shadow-orange-500/40 shadow-lg 
      group-hover:scale-110 transition"
                >
                  <Phone className="text-2xl text-white" />
                </div>

                <h3 className="text-slate-900 font-bold mb-2 text-center text-xl">
                  Call Us
                </h3>
                <p className="text-slate-600 text-center text-sm">
                  Tel: +974 44601087
                </p>
                <p className="text-orange-600 text-center text-sm font-semibold">
                  Cell: +974 51711104
                </p>
              </div>
            </motion.div>

            {/* WHATSAPP */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-orange-100"
            >
              <div className="p-7 flex flex-col min-h-[200px]">
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl 
      bg-gradient-to-br from-green-500 to-emerald-600 
      flex items-center justify-center 
      shadow-green-500/40 shadow-lg 
      group-hover:scale-110 transition"
                >
                  <MessageSquare className="text-2xl text-white" />
                </div>

                <h3 className="text-slate-900 font-bold mb-2 text-center text-xl">
                  WhatsApp
                </h3>
                <p className="text-slate-600 text-center text-sm">
                  +974 51711104
                </p>
                <p className="text-green-600 text-center text-sm font-semibold">
                  Chat on WhatsApp
                </p>
              </div>
            </motion.div>

            {/* EMAIL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-orange-100"
            >
              <div className="p-7 flex flex-col min-h-[200px]">
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl 
      bg-gradient-to-br from-blue-500 to-cyan-500 
      flex items-center justify-center 
      shadow-blue-500/40 shadow-lg 
      group-hover:scale-110 transition"
                >
                  <Mail className="text-2xl text-white" />
                </div>

                <h3 className="text-slate-900 font-bold mb-2 text-center text-xl">
                  Email Us
                </h3>
                <p className="text-slate-600 text-center text-sm break-all">
                  pankajsuwaidigroup@gmail.com
                </p>
                <p className="text-blue-600 text-center text-sm break-all font-semibold">
                  suwaidigroup@yahoo.com
                </p>
              </div>
            </motion.div>

            {/* VISIT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-orange-100"
            >
              <div className="p-7 flex flex-col min-h-[200px]">
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl 
      bg-gradient-to-br from-purple-500 to-pink-500 
      flex items-center justify-center 
      shadow-purple-500/40 shadow-lg 
      group-hover:scale-110 transition"
                >
                  <MapPin className="text-2xl text-white" />
                </div>

                <h3 className="text-slate-900 font-bold mb-2 text-center text-xl">
                  Visit Us
                </h3>
                <p className="text-slate-600 text-center text-sm">
                  Street No. 18, Gate No. 35
                </p>
                <p className="text-purple-600 text-center text-sm font-semibold">
                  Industrial Area, Doha
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Detailed Contact Methods
            </h2>
            <p className="text-lg text-gray-600">
              Choose the best way to connect with our team
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={`rounded-3xl p-8 border transition-all duration-500 flex flex-col bg-white shadow-lg hover:shadow-2xl border-orange-100 hover:border-orange-400`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                    <method.icon className="text-white" size={28} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {method.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-center text-lg leading-relaxed flex-grow">
                  {method.description}
                </p>

                {/* Contact Detail */}
                <div className="text-center mb-6">
                  {method.type === "phone" && (
                    <a
                      href={`tel:${method.details.replace(/\s+/g, "")}`}
                      className="text-lg font-bold text-orange-600 hover:underline block"
                    >
                      {method.details}
                    </a>
                  )}

                  {method.type === "email" && (
                    <a
                      href={`mailto:${method.details}`}
                      className="text-lg font-bold text-orange-600 hover:underline block break-all"
                    >
                      {method.details}
                    </a>
                  )}

                  {method.type === "whatsapp" && (
                    <a
                      href={`https://wa.me/${method.details}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-orange-600 hover:underline block"
                    >
                      +{method.details}
                    </a>
                  )}

                  <div className="text-lg text-gray-500 mt-1 px-2">
                    {method.subtext}
                  </div>
                </div>

                {/* Action Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={method.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-xl transition mt-auto flex items-center justify-center gap-2"
                >
                  <method.actionIcon size={18} />
                  {method.action}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-24">
          <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-red-50 p-10 border border-orange-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>

                <p className="text-gray-700 mb-8">
                  Our experts are ready to assist with quotations, planning, and
                  execution.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: Clock,
                      label: "Response Time",
                      value: "Fast & Reliable",
                    },
                    {
                      icon: Headphones,
                      label: "Support Level",
                      value: "Expert Engineers",
                    },
                    {
                      icon: Briefcase,
                      label: "Prepare",
                      value: "Drawings & Requirements",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <item.icon className="text-orange-600" size={22} />
                      <span className="font-semibold">{item.label}:</span>
                      <span className="text-gray-700">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl" />
                <div className="relative bg-white rounded-2xl p-8 shadow-xl text-center">
                  <Users className="mx-auto mb-4 text-orange-600" size={32} />
                  <div className="text-4xl font-extrabold text-gray-900">
                    24/7
                  </div>
                  <div className="text-gray-600 mt-2">
                    Project Support Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600">
              Specialists in fabrication & engineering
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertTeam.map((expert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-2xl font-bold">
                  {expert.name[0]}
                </div>

                <h3 className="text-xl font-bold">{expert.name}</h3>
                <p className="text-orange-600 font-semibold">{expert.role}</p>
                <p className="text-sm text-gray-600 mb-4">
                  {expert.exp} experience
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTeamContact(expert.name)}
                  className="w-full py-2 rounded-lg border border-orange-500 text-orange-600 hover:bg-orange-50 transition cursor-pointer"
                >
                  Schedule Call
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <GetDemoSection />

      <div className=" max-w-7xl  mx-auto  my-15">
        <motion.section className="text-center">
          <h3 className="text-3xl font-extrabold mb-10">
            Need Immediate Assistance?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Emergency Project",
                action: "Call Now",
                color: "from-red-500 to-orange-500",
                icon: Zap,
              },
              {
                title: "Consultation",
                action: "Book Online",
                color: "from-blue-500 to-cyan-500",
                icon: Video,
              },
              {
                title: "Plant Visit",
                action: "Schedule Tour",
                color: "from-green-500 to-emerald-500",
                icon: Calendar,
              },
            ].map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  handleQuickAction(["emergency", "consultation", "tour"][i])
                }
                className={`py-5 rounded-2xl text-white font-bold bg-gradient-to-r ${item.color} shadow-xl hover:shadow-2xl transition cursor-pointer`}
              >
                <span className="flex items-center justify-center gap-3">
                  <item.icon size={20} />
                  <div>
                    <div className="text-sm">{item.title}</div>
                    <div className="text-lg">{item.action}</div>
                  </div>
                  <ArrowRight size={18} />
                </span>
              </motion.button>
            ))}
          </div>
        </motion.section>
        <motion.section className="my-28">
          <div
            className="relative rounded-3xl overflow-hidden 
    bg-white 
    p-10 sm:p-14 
    border border-gray-200 
    shadow-xl"
          >
            {/* Soft Decorative Accents */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-orange-200/40 rounded-full " />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-200/40 rounded-full " />

            {/* Heading */}
            <div className="relative z-10 text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Our Simple 3-Step Process
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                From first contact to final delivery — simple, clear and
                transparent
              </p>
            </div>

            {/* Steps */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
              {[
                {
                  step: "01",
                  title: "Initial Contact",
                  desc: "Reach out via phone, email or WhatsApp",
                },
                {
                  step: "02",
                  title: "Technical Discussion",
                  desc: "Detailed review with our engineering team",
                },
                {
                  step: "03",
                  title: "Quote & Planning",
                  desc: "Receive pricing, timeline & execution plan",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-2xl 
          bg-white 
          border border-gray-200 
          p-8 text-center 
          shadow-sm hover:shadow-xl 
          hover:border-orange-400/60 
          transition-all"
                >
                  {/* Step Number */}
                  <div
                    className="relative mx-auto mb-6 w-16 h-16 
            rounded-full 
            bg-gradient-to-r from-orange-500 to-red-500 
            flex items-center justify-center 
            text-white text-lg font-bold 
            shadow-lg 
            group-hover:scale-110 transition"
                  >
                    {item.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 
            group-hover:opacity-100 transition 
            bg-gradient-to-br from-orange-400/10 to-red-400/10 
            pointer-events-none"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default GetQuotePage;
