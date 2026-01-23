import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  MapPin,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Briefcase,
  GraduationCap,
  DollarSign,
  Calendar,
  Send,
  User,
  FileText,
  Upload,
  X,
  ZoomIn,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const companyImages = [
  {
    id: 1,
    src: "/atc_groupicture_A40I5327.jpg",
    alt: "Al Suwaidi Technical Center Main Facility",
  },
  {
    id: 2,
    src: "/atc_groupicture_A40I5370 copy.jpg",
    alt: "Professional Engineering Workshop",
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description:
      "Market-competitive compensation packages with performance bonuses",
  },
  {
    icon: Award,
    title: "Professional Development",
    description:
      "Training programs and certification opportunities for career growth",
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Collaborative work culture with experienced professionals",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible working hours and annual leave benefits",
  },
];

const stats = [
  { value: "80+", label: "Team Members", icon: Users },
  { value: "32+", label: "Years Experience", icon: Clock },
  { value: "98%", label: "Employee Satisfaction", icon: CheckCircle },
  { value: "ISO 9001:2015", label: "Quality Standards", icon: Award },
];

export default function CareersPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    coverLetter: "",
    resume: null,
  });

  const handleInputChange = (e) => {
    if (e.target.type === "file") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % companyImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(companyImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? companyImages.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(companyImages[prevIndex]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("coverLetter", formData.coverLetter);

      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      console.log("Submitting to API...");
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/job-application/create`,
        {
          method: "POST",
          body: formDataToSend,
        },
      );

      console.log("Response status:", response.status);
      const result = await response.json();
      console.log("API Response:", result);

      if (result.success) {
        toast.success(
          "Application submitted successfully! We will contact you soon.",
        );
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          coverLetter: "",
          resume: null,
        });
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = "";
      } else {
        toast.error(`Error: ${result.message || "Unknown error occurred"}`);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error(
        `Network Error: ${error.message}. Please check if the API server is running on localhost:3300`,
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 mt-0 lg:mt-10">
      {/* HERO SECTION */}
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
              <Briefcase size={18} className="text-orange-200" />
              JOIN OUR TEAM
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white mb-6"
            >
              BUILD YOUR CAREER
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                WITH AL SUWAIDI
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-100 mb-6 max-w-4xl mx-auto"
            >
              🏆 Join Qatar's Leading Technical Engineering Company
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Be part of a dynamic team that has been delivering engineering
              excellence for over 32 years. We offer exciting career
              opportunities in a collaborative environment with competitive
              benefits and professional growth opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <a
                href="#apply"
                className=" w-80 bg-white inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <span>Apply Now</span>
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

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* COMPANY PICTURES SECTION */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              UNITED WORKFORCE
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            OUR{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                TEAM
              </span>
            </h2>
          </motion.div>

          {/* Company Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {companyImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.2 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' alignment-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%239ca3af'%3ECompany Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 right-4">
                    <ZoomIn className="text-white" size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* BENEFITS SECTION */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              WHY JOIN US
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Employee{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We value our employees and provide comprehensive benefits for
              professional and personal growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 w-fit mb-6">
                  <benefit.icon className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* APPLICATION FORM SECTION */}
        <section id="apply" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-6 px-8 py-3 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 font-bold tracking-wide text-sm uppercase shadow-lg">
              🚀 JOIN OUR TEAM
            </span>
            <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
              Submit Your{" "}
              <span className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 bg-clip-text text-transparent">
                Application
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your career with us? Fill out the form below and
              we'll get back to you within 24 hours
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto   lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-white via-orange-50/30 to-red-50/30 rounded-3xl p-4 sm:p-6 lg:p-10 shadow-2xl border border-orange-200/50 backdrop-blur-sm"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-red-200/20 to-transparent rounded-full translate-x-20 translate-y-20"></div>

              <div className="relative z-10">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-lg shadow-lg mb-4">
                    <Send size={20} className="animate-pulse" />
                    Application Form
                  </div>
                  <p className="text-gray-600 text-lg">
                    Please fill in all required fields marked with *
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-gray-800 font-bold text-lg mb-3">
                        Full Name *
                      </label>
                      <div className="relative group">
                        <User
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10"
                          size={20}
                        />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-lg bg-white/80 backdrop-blur-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-800 font-bold text-lg mb-3">
                        Email Address *
                      </label>
                      <div className="relative group">
                        <Mail
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10"
                          size={20}
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-lg bg-white/80 backdrop-blur-sm"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-800 font-bold text-lg mb-3">
                        Phone Number *
                      </label>
                      <div className="relative group">
                        <Phone
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10"
                          size={20}
                        />
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-lg bg-white/80 backdrop-blur-sm"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-800 font-bold text-lg mb-3">
                        Upload CV/Resume *
                      </label>
                      <div className="relative group">
                        <Upload
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10"
                          size={20}
                        />
                        <input
                          type="file"
                          name="resume"
                          onChange={handleInputChange}
                          required
                          accept=".pdf,.doc,.docx"
                          className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-lg bg-white/80 backdrop-blur-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          PDF, DOC, DOCX
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Please upload your CV in PDF, DOC, or DOCX format (Max
                        5MB)
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-800 font-bold text-lg mb-3">
                      Cover Letter / Additional Information
                    </label>
                    <div className="relative group">
                      <FileText
                        className="absolute left-4 top-4 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10"
                        size={20}
                      />
                      <textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-lg bg-white/80 backdrop-blur-sm resize-none"
                        placeholder="Tell us about yourself, your skills, and why you're interested in joining Al Suwaidi Technical..."
                      />
                    </div>
                  </div>

                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 sm:gap-4 px-6 sm:px-12 py-3 sm:py-5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white font-bold text-lg sm:text-xl rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Send
                        size={20}
                        className="sm:hidden group-hover:animate-bounce relative z-10"
                      />
                      <Send
                        size={24}
                        className="hidden sm:block group-hover:animate-bounce relative z-10"
                      />
                      <span className="relative z-10">Submit Application</span>
                      <ArrowRight
                        size={20}
                        className="sm:hidden group-hover:translate-x-1 transition-transform relative z-10"
                      />
                      <ArrowRight
                        size={24}
                        className="hidden sm:block group-hover:translate-x-1 transition-transform relative z-10"
                      />
                    </button>
                    <p className="text-gray-500 mt-4 text-sm">
                      By submitting this form, you agree to our privacy policy
                      and terms of service.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Contact Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                HR Team
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Have questions about career opportunities? Our HR team is here to
              help you find the right position
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 border border-orange-100"
            >
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 w-fit mx-auto mb-6">
                <Phone className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our HR team
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+97444601087"
                  className="block text-orange-600 font-bold hover:text-orange-700 transition-colors"
                >
                  +974 4460 1087
                </a>
                <a
                  href="tel:+97451711104"
                  className="block text-orange-600 font-bold hover:text-orange-700 transition-colors"
                >
                  +974 5171 1104
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-orange-100"
            >
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 w-fit mx-auto mb-6">
                <Mail className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send your resume and inquiries
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:careers@alsuwaiditechnical.com"
                  className="block text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm break-all"
                >
                  careers@alsuwaiditechnical.com
                </a>
                <a
                  href="mailto:info@alsuwaiditechnical.com"
                  className="block text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm break-all"
                >
                  info@alsuwaiditechnical.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 border border-orange-100"
            >
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 w-fit mx-auto mb-6">
                <MapPin className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Come for an in-person interview
              </p>
              <div className="text-gray-700 font-medium">
                <p>Street No. 18, Gate No. 35</p>
                <p>P.O. Box – 40600</p>
                <p>Industrial Area, Doha, Qatar</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 border border-orange-100"
            >
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 w-fit mx-auto mb-6">
                <Clock className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Office Hours
              </h3>
              <p className="text-gray-600 mb-4">Available for interviews</p>
              <div className="text-gray-700 font-medium">
                <p>Sunday - Thursday</p>
                <p>7:00 AM - 5:00 PM</p>
                <p className="text-sm text-gray-500 mt-2">
                  Friday - Saturday: Closed
                </p>
              </div>
            </motion.div>
          </div>

          {/* Office Hours - Removed as it's now integrated into the 4th card above */}
        </section>
      </main>

      {/* <GetDemoSection /> */}
      <ToastContainer position="top-right" autoClose={5000} theme="light" />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 pt-24">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/20 backdrop-blur-sm rounded-full text-black hover:bg-black/30 transition-all"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
            >
              <ArrowRight size={24} />
            </button>

            {/* Image */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-130 sm:h-150 object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
