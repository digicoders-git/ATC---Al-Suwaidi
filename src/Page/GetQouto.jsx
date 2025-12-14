import React, { useState } from "react";
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
  const [activeMethod, setActiveMethod] = useState("phone");

  // Handle contact method clicks
  const handleContactClick = (method) => {
    switch (method) {
      case "phone":
        window.open("tel:+97444601087", "_self");
        break;
      case "whatsapp":
        window.open("https://wa.me/97451711104", "_blank");
        break;
      case "email":
        window.open("mailto:pankajsuwaidigroup@gmail.com", "_self");
        break;
      case "visit":
        window.open(
          "https://maps.google.com/?q=Street+No+18+Gate+No+35+Industrial+Area+Doha+Qatar",
          "_blank"
        );
        break;
      default:
        break;
    }
  };

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
  const handleTeamContact = (member) => {
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

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-600   py-8 ">
        {/* Decorative Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-red-500/30 rounded-full blur-3xl"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-orange-300/30 shadow-xl">
                <span className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></span>
                <span className="text-orange-100 text-sm font-semibold tracking-widest">
                  GET INSTANT QUOTE
                </span>
              </div>

              <h1 className="font-black leading-tight text-5xl md:text-6xl lg:text-7xl">
                <span className="block bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                  Get Your
                </span>
                <span className="block bg-gradient-to-r from-orange-300 via-red-400 to-orange-500 bg-clip-text text-transparent">
                  Custom Quote
                </span>
                <span className="block text-orange-100">Instantly</span>
              </h1>

              <p className="text-lg md:text-xl text-orange-100 max-w-2xl">
                Connect directly with our fabrication experts.
                <span className="text-orange-300 font-semibold">
                  {" "}
                  No forms. No waiting.
                </span>
              </p>

              <div className="grid grid-cols-3 gap-8 max-w-xl">
                {[
                  { value: "32+", label: "Years Experience" },
                  { value: "245+", label: "Professionals" },
                  { value: "ISO 9001", label: "Certified" },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-black text-white">
                      {item.value}
                    </div>
                    <div className="text-orange-200 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT CONTACT CARDS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: <Phone className="text-2xl text-white" />,
                  title: "Call Us",
                  line1: "+974 44601087",
                  line2: "+974 51711104",
                  link: "tel:+97444601087",
                },
                {
                  icon: <MessageSquare className="text-2xl text-white" />,
                  title: "WhatsApp",
                  line1: "+974 51711104",
                  line2: "Chat on WhatsApp",
                  link: "https://wa.me/97451711104",
                },
                {
                  icon: <Mail className="text-2xl text-white" />,
                  title: "Email Us",
                  line1: "pankajsuwaidigroup@gmail.com",
                  line2: "suwaidigroup@yahoo.com",
                  link: "mailto:pankajsuwaidigroup@gmail.com",
                },
                {
                  icon: <MapPin className="text-2xl text-white" />,
                  title: "Visit Us",
                  line1: "Street No. 18, Gate No. 35",
                  line2: "Industrial Area, Doha, Qatar",
                  link: "https://www.google.com/maps/search/Industrial+Area+Doha+Qatar",
                },
              ].map((card, idx) => (
                <motion.a
                  key={idx}
                  href={card.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative rounded-3xl p-7 bg-white/10 backdrop-blur-xl
                       border border-orange-300/30 hover:border-orange-400/70
                       transition-all duration-500 hover:shadow-2xl
                       cursor-pointer w-full text-center"
                >
                  {/* ICON */}
                  <div
                    className="w-16 h-16 mx-auto mb-5 rounded-2xl
                            bg-gradient-to-br from-orange-500 via-orange-600 to-red-600
                            flex items-center justify-center
                            shadow-xl shadow-orange-500/50
                            group-hover:scale-110 transition-transform"
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-orange-100 font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-orange-200 text-lg break-words">
                    {card.line1}
                  </p>
                  <p className="text-orange-300 text-lg break-words">
                    {card.line2}
                  </p>

                  <div
                    className="absolute inset-0 rounded-3xl opacity-0
                            group-hover:opacity-100 transition
                            bg-gradient-to-br from-orange-400/15 to-red-500/15
                            pointer-events-none"
                  ></div>
                </motion.a>
              ))}
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
              Choose Your Contact Method
            </h2>
            <p className="text-lg text-gray-600">
              Connect instantly with our fabrication experts
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
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {contactMethods.find((m) => m.id === activeMethod)?.title}
                </h3>

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
