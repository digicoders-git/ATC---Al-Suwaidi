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

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
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
      title: "245+ Skilled Professionals",
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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-600  pb-20 sm:mb-10 lg:mb-0 ">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-10">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-3 
          bg-gradient-to-r from-orange-400/20 to-red-400/20 
          backdrop-blur-md px-6 py-3 rounded-full 
          border border-orange-300/30 shadow-lg"
              >
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-orange-100 font-semibold tracking-wider">
                  GET IN TOUCH
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                  Contact Al Suwaidi
                </span>

                <span className="block text-orange-100">Technical Centre</span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-orange-100 max-w-2xl leading-relaxed">
                Ready to discuss your next industrial project? Our expert team
                provides
                <span className="text-orange-300 font-semibold">
                  {" "}
                  world-class engineering solutions
                </span>{" "}
                tailored to your specific needs.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-lg">
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-50 mb-1">
                    32+
                  </div>
                  <div className="text-orange-200 text-sm font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-50 mb-1">
                    245+
                  </div>
                  <div className="text-orange-200 text-sm font-medium">
                    Professionals
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-50 mb-1">
                    24/7
                  </div>
                  <div className="text-orange-200 text-sm font-medium">
                    Support
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTACT CARDS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* CALL */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-gradient-to-br from-white/10 to-orange-500/10 
    backdrop-blur-md rounded-2xl p-8 
    border border-orange-300/30 
    hover:border-orange-400/60 
    hover:bg-orange-500/20 
    shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl 
      bg-gradient-to-br from-orange-400 to-red-500 
      flex items-center justify-center 
      shadow-orange-500/40 shadow-lg 
      group-hover:scale-110 transition"
                >
                  <FaPhone className="text-2xl text-white" />
                </div>

                <h3 className="text-orange-100 font-bold mb-2 text-center">
                  Call Us
                </h3>
                <p className="text-orange-200 text-center text-sm">
                  Tel: +974 44601087
                </p>
                <p className="text-orange-300 text-center text-sm">
                  Cell: +974 51711104
                </p>
              </motion.div>

              {/* ADDRESS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-gradient-to-br from-white/10 to-orange-500/10 
    backdrop-blur-md rounded-2xl p-8 
    border border-orange-300/30 
    hover:border-orange-400/60 
    hover:bg-orange-500/20 
    shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl 
      bg-gradient-to-br from-orange-500 to-red-500 
      flex items-center justify-center 
      shadow-orange-500/40 shadow-lg 
      group-hover:scale-110 transition"
                >
                  <FaMapMarkerAlt className="text-2xl text-white" />
                </div>

                <h3 className="text-orange-100 font-bold mb-2 text-center">
                  Visit Us
                </h3>
                <p className="text-orange-200 text-center text-sm">
                  P.O. Box No: 40600
                </p>
                <p className="text-orange-300 text-center text-sm">
                  Zone: 57, Street: 18, Gate: 35
                </p>
              </motion.div>

              {/* EMAIL */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-gradient-to-br from-white/10 to-orange-500/10 
    backdrop-blur-md rounded-2xl p-8 
    border border-orange-300/30 
    hover:border-orange-400/60 
    hover:bg-orange-500/20 
    shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl 
      bg-gradient-to-br from-red-400 to-orange-500 
      flex items-center justify-center 
      shadow-red-500/40 shadow-lg 
      group-hover:scale-110 transition"
                >
                  <FaEnvelope className="text-2xl text-white" />
                </div>

                <h3 className="text-orange-100 font-bold mb-2 text-center">
                  Email Us
                </h3>
                <p className="text-orange-200 text-center text-sm break-all">
                  Karthick@alsuwaidipaper.com
                </p>
                <p className="text-orange-300 text-center text-sm break-all">
                  suwaidigroup@yahoo.com
                </p>
              </motion.div>

              {/* WORKING HOURS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-gradient-to-br from-white/10 to-orange-500/10 
    backdrop-blur-md rounded-2xl p-8 
    border border-orange-300/30 
    hover:border-orange-400/60 
    hover:bg-orange-500/20 
    shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl 
      bg-gradient-to-br from-orange-400 to-orange-600 
      flex items-center justify-center 
      shadow-orange-500/40 shadow-lg 
      group-hover:scale-110 transition"
                >
                  <FaClock className="text-2xl text-white" />
                </div>

                <h3 className="text-orange-100 font-bold mb-2 text-center">
                  Working Hours
                </h3>
                <p className="text-orange-200 text-center text-sm">
                  Sunday – Thursday
                </p>
                <p className="text-orange-300 text-center text-sm">
                  7:00 AM – 10:00 PM
                </p>
              </motion.div>
            </div>
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
      <section className="py-20 bg-white">
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
                      Karthick@alsuwaidipaper.com
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
                      {
                        icon: FaTwitter,
                        href: "https://twitter.com/alsuwaiditechnical",
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
                    name="phone"
                    value={formData.phone}
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
    </div>
  );
};

export default ContactUs;
