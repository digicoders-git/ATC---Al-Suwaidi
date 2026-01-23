import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaAward,
  FaUsers,
  FaShieldAlt,
  FaTools,
  FaPaperPlane,
  FaCheckCircle,
  FaFax,
  FaMobile,
  FaIndustry,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/contact/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // console.log("Form submitted successfully:", formData);
        toast.success('Message sent successfully! We will get back to you soon.');
        setIsSubmitted(true);
        setFormData({ name: "", email: "", mobile: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        // console.error('Failed to submit form');
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      // console.error('Error submitting form:', error);
      toast.error('Error sending message. Please try again.');
    }
  };

  const whyChooseUs = [
    {
      icon: FaAward,
      title: "32+ Years Experience",
      description:
        "Over three decades of excellence in industrial engineering and fabrication",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FaUsers,
      title: "80+ Skilled Professionals",
      description:
        "Expert team of engineers, technicians, and project managers",
      color: "from-red-500 to-orange-600",
    },
    {
      icon: FaShieldAlt,
      title: "ISO 9001:2015 Certified",
      description: "Quality management system ensuring consistent excellence",
      color: "from-orange-600 to-red-600",
    },
    {
      icon: FaTools,
      title: "10,000 SQM Facility",
      description: "State-of-the-art manufacturing and testing facilities",
      color: "from-red-600 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
              <FaPhone size={18} className="text-orange-200" />
              GET IN TOUCH WITH OUR EXPERTS
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              CONTACT AL SUWAIDI
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                TECHNICAL CENTER
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              Ready to Transform Your Industrial Vision into Reality?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Connect with our expert engineering team for world-class industrial solutions. From heavy-duty fabrication to precision manufacturing, we deliver excellence tailored to your specific project requirements.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105 hover:-translate-y-1"
              >
                <FaPaperPlane size={20} className="group-hover:animate-pulse" />
                <span>Send Message</span>
              </button>

              <a
                href="tel:+97444601087"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>Call Now: +974 44601087</span>
                <FaPhone size={20} />
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
                { value: "32+", label: "Years Experience", icon: FaAward },
                { value: "80+", label: "Expert Team", icon: FaUsers },
                { value: "24/7", label: "Support Available", icon: FaClock },
                { value: "98%", label: "Client Satisfaction", icon: FaShieldAlt },
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
              QUICK CONTACT
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
              Get In Touch
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto font-semibold">
              Multiple ways to reach our expert team for immediate assistance
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
                    <FaPhone className="text-2xl text-white" />
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

              {/* ADDRESS */}
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
        bg-gradient-to-br from-orange-500 to-red-500 
        flex items-center justify-center 
        shadow-orange-500/40 shadow-lg 
        group-hover:scale-110 transition"
                  >
                    <FaMapMarkerAlt className="text-2xl text-white" />
                  </div>

                  <h3 className="text-slate-900 font-bold mb-2 text-center text-xl">
                    Visit Us
                  </h3>
                  <p className="text-slate-600 text-center text-sm">
                    P.O. Box No: 40600
                  </p>
                  <p className="text-orange-600 text-center text-sm font-semibold">
                    Zone: 57, Street: 18, Gate: 35
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
        bg-gradient-to-br from-red-400 to-orange-500 
        flex items-center justify-center 
        shadow-red-500/40 shadow-lg 
        group-hover:scale-110 transition"
                  >
                    <FaEnvelope className="text-2xl text-white" />
                  </div>

                  <h3 className="text-slate-900 font-bold mb-2 text-center text-xl">
                    Email Us
                  </h3>
                  <p className="text-slate-600 text-center text-sm break-all">
                    info@alsuwaiditechnical.com
                  </p>
                  <p className="text-orange-600 text-center text-sm break-all font-semibold">
                    suwaidigroup@yahoo.com
                  </p>
                </div>
              </motion.div>

              {/* WORKING HOURS */}
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
        bg-gradient-to-br from-orange-400 to-orange-600 
        flex items-center justify-center 
        shadow-orange-500/40 shadow-lg 
        group-hover:scale-110 transition"
                  >
                    <FaClock className="text-2xl text-white" />
                  </div>

                  <h3 className="text-slate-900 font-bold mb-2 text-center text-xl">
                    Working Hours
                  </h3>
                  <p className="text-slate-600 text-center text-sm">
                    Sunday - Thursday
                  </p>
                  <p className="text-slate-600 text-center text-sm">
                    7 am to 12:00 pm
                  </p>
                  <p className="text-slate-600 text-center text-sm">
                    2:30pm to 6:00pm
                  </p>
                  <p className="text-orange-600 text-center text-sm font-semibold mt-2">
                    Ramadan timing
                  </p>
                  <p className="text-slate-600 text-center text-sm">
                    7:00 am to 12:00 pm
                  </p>
                  <p className="text-slate-600 text-center text-sm">
                    8:00 pm to 10:00 pm
                  </p>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-6 py-3 rounded-full mb-6">
              <FaAward className="text-orange-600" />
              <span className="text-orange-800 font-semibold">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Partner with
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {" "}
                Al Suwaidi
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of engineering excellence, cutting-edge facilities,
              and unwavering commitment to quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="text-2xl text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  Let's Start Your
                  <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Next Project
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Ready to transform your industrial vision into reality? Our
                  team of experts is standing by to discuss your project
                  requirements and provide tailored solutions.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="group flex items-start gap-4 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      Our Location
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      AL SUWAIDI TECHNICAL CENTER
                      <br />
                      P.O. Box No: 40600
                      <br />
                      East Industrial Area, Zone: 57
                      <br />
                      Street No: 18, Gate No: 35
                      <br />
                      Doha – Qatar
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      Phone Numbers
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Tel: +974 44601087
                      <br />
                      Cell: +974-51711104
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      Email Address
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      info@alsuwaiditechnical.com
                      <br />
                      suwaidigroup@yahoo.com
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="group p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                  <h4 className="font-bold text-gray-900 mb-4 text-center">
                    Follow Us
                  </h4>

                  <div className="flex justify-center space-x-4">
                    {[
                      {
                        icon: FaFacebook,
                        href: "https://www.facebook.com/share/1JqUbVkVuF/?mibextid=wwXIfr",
                      },
                      {
                        icon: FaInstagram,
                        href: "https://www.instagram.com/alsuwaiditechnicalcenter",
                      },
                      {
                        icon: FaWhatsapp,
                        href: "https://wa.me/97451711104",
                      },

                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
          w-12 h-12 
          rounded-xl 
          flex items-center justify-center 
          text-white 
          bg-gradient-to-br from-orange-600 to-red-600
          shadow-lg 
          hover:scale-110 
          hover:shadow-xl 
          transition-all duration-300
        "
                      >
                        <social.icon className="text-xl" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-2xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900 resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-4 px-8 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white hover:shadow-xl"
                  }`}
                >
                  {isSubmitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <FaCheckCircle />
                      Message Sent Successfully!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FaPaperPlane />
                      Send Message
                    </span>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}

      {/* loction map end  */}
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ContactUs;
