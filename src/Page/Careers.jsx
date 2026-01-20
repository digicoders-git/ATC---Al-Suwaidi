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
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Mechanical Engineer",
    department: "Engineering",
    location: "Doha, Qatar",
    type: "Full-time",
    experience: "5+ years",
    salary: "QAR 8,000 - 12,000",
    description: "Lead mechanical design and engineering projects for industrial fabrication and marine applications.",
    requirements: [
      "Bachelor's degree in Mechanical Engineering",
      "5+ years experience in industrial engineering",
      "Proficiency in CAD software (AutoCAD, SolidWorks)",
      "Knowledge of welding and fabrication processes",
      "Strong project management skills"
    ]
  },
  {
    id: 2,
    title: "Certified Welder (TIG/MIG)",
    department: "Production",
    location: "Doha, Qatar",
    type: "Full-time",
    experience: "3+ years",
    salary: "QAR 4,000 - 6,000",
    description: "Perform high-quality welding operations for steel fabrication and structural engineering projects.",
    requirements: [
      "Certified welder with TIG/MIG qualifications",
      "3+ years welding experience",
      "Ability to read technical drawings",
      "Knowledge of safety protocols",
      "Physical fitness for manual work"
    ]
  },
  {
    id: 3,
    title: "CNC Machine Operator",
    department: "Manufacturing",
    location: "Doha, Qatar",
    type: "Full-time",
    experience: "2+ years",
    salary: "QAR 3,500 - 5,500",
    description: "Operate CNC machines for precision machining and gear manufacturing operations.",
    requirements: [
      "Technical diploma or equivalent",
      "2+ years CNC operation experience",
      "Knowledge of G-code programming",
      "Precision measurement skills",
      "Attention to detail"
    ]
  },
  {
    id: 4,
    title: "Quality Control Inspector",
    department: "Quality Assurance",
    location: "Doha, Qatar",
    type: "Full-time",
    experience: "3+ years",
    salary: "QAR 5,000 - 7,000",
    description: "Ensure quality standards and compliance with ISO 9001:2015 requirements across all operations.",
    requirements: [
      "Bachelor's degree in Engineering or related field",
      "3+ years quality control experience",
      "Knowledge of ISO standards",
      "Inspection and testing experience",
      "Strong analytical skills"
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Market-competitive compensation packages with performance bonuses"
  },
  {
    icon: Award,
    title: "Professional Development",
    description: "Training programs and certification opportunities for career growth"
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Collaborative work culture with experienced professionals"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible working hours and annual leave benefits"
  }
];

const stats = [
  { value: "80+", label: "Team Members", icon: Users },
  { value: "32+", label: "Years Experience", icon: Clock },
  { value: "98%", label: "Employee Satisfaction", icon: CheckCircle },
  { value: "ISO 9001:2015", label: "Quality Standards", icon: Award },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null
  });

  const handleInputChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('coverLetter', `Position: ${formData.position}\nExperience: ${formData.experience}\n\n${formData.coverLetter}`);
      
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      console.log('Submitting to API...');
      const response = await fetch('http://localhost:3300/job-application/create', {
        method: 'POST',
        body: formDataToSend,
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('API Response:', result);

      if (result.success) {
        alert('Application submitted successfully! We will contact you soon.');
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          position: "",
          experience: "",
          coverLetter: "",
          resume: null
        });
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
      } else {
        alert(`Error: ${result.message || 'Unknown error occurred'}`);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert(`Network Error: ${error.message}. Please check if the API server is running on localhost:3300`);
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
              Be part of a dynamic team that has been delivering engineering excellence for over 32 years. 
              We offer exciting career opportunities in a collaborative environment with competitive benefits 
              and professional growth opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <a
                href="#jobs"
                className="group inline-flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105 hover:-translate-y-1"
              >
                <Briefcase size={20} className="group-hover:animate-pulse" />
                <span>View Open Positions</span>
              </a>

              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
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
              We value our employees and provide comprehensive benefits for professional and personal growth
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* JOB OPENINGS SECTION */}
        <section id="jobs" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
              CURRENT OPENINGS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Available{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Positions
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore exciting career opportunities in engineering, manufacturing, and technical services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <GraduationCap size={16} />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign size={16} />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.slice(0, 3).map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Apply for this Position
                </button>
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
              Ready to start your career with us? Fill out the form below and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-white via-orange-50/30 to-red-50/30 rounded-3xl p-10 shadow-2xl border border-orange-200/50 backdrop-blur-sm"
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
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" size={20} />
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
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" size={20} />
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
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" size={20} />
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
                        Position Applied For *
                      </label>
                      <div className="relative group">
                        <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" size={20} />
                        <select
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-lg bg-white/80 backdrop-blur-sm appearance-none cursor-pointer"
                        >
                          <option value="">Select a position</option>
                          {jobOpenings.map((job) => (
                            <option key={job.id} value={job.title}>
                              {job.title}
                            </option>
                          ))}
                          <option value="other">Other Position</option>
                        </select>
                        <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400" size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-800 font-bold text-lg mb-3">
                      Years of Experience *
                    </label>
                    <div className="relative group">
                      <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" size={20} />
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-lg bg-white/80 backdrop-blur-sm appearance-none cursor-pointer"
                      >
                        <option value="">Select experience level</option>
                        <option value="0-1">0-1 years (Entry Level)</option>
                        <option value="2-3">2-3 years (Junior Level)</option>
                        <option value="4-5">4-5 years (Mid Level)</option>
                        <option value="6-10">6-10 years (Senior Level)</option>
                        <option value="10+">10+ years (Expert Level)</option>
                      </select>
                      <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400" size={16} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-800 font-bold text-lg mb-3">
                      Upload CV/Resume *
                    </label>
                    <div className="relative group">
                      <Upload className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" size={20} />
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
                      Please upload your CV in PDF, DOC, or DOCX format (Max 5MB)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-800 font-bold text-lg mb-3">
                      Cover Letter / Additional Information
                    </label>
                    <div className="relative group">
                      <FileText className="absolute left-4 top-4 text-gray-400 group-focus-within:text-orange-500 transition-colors z-10" size={20} />
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
                      className="group inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Send size={24} className="group-hover:animate-bounce relative z-10" />
                      <span className="relative z-10">Submit Application</span>
                      <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform relative z-10" />
                    </button>
                    <p className="text-gray-500 mt-4 text-sm">
                      By submitting this form, you agree to our privacy policy and terms of service.
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
              Have questions about career opportunities? Our HR team is here to help you find the right position
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
              <p className="text-gray-600 mb-4">Speak directly with our HR team</p>
              <div className="space-y-2">
                <a href="tel:+97444601087" className="block text-orange-600 font-bold hover:text-orange-700 transition-colors">
                  +974 4460 1087
                </a>
                <a href="tel:+97451711104" className="block text-orange-600 font-bold hover:text-orange-700 transition-colors">
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
              <p className="text-gray-600 mb-4">Send your resume and inquiries</p>
              <div className="space-y-2">
                <a href="mailto:careers@alsuwaiditechnical.com" className="block text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm break-all">
                  careers@alsuwaiditechnical.com
                </a>
                <a href="mailto:info@alsuwaiditechnical.com" className="block text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm break-all">
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
              <p className="text-gray-600 mb-4">Come for an in-person interview</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours</h3>
              <p className="text-gray-600 mb-4">Available for interviews</p>
              <div className="text-gray-700 font-medium">
                <p>Sunday - Thursday</p>
                <p>7:00 AM - 5:00 PM</p>
                <p className="text-sm text-gray-500 mt-2">Friday - Saturday: Closed</p>
              </div>
            </motion.div>
          </div>

          {/* Office Hours - Removed as it's now integrated into the 4th card above */}
        </section>
      </main>

      {/* <GetDemoSection /> */}
    </div>
  );
}