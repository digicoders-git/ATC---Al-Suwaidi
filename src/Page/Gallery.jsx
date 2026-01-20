import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  ZoomIn,
  Download,
  Share2,
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  Camera,
  Image as ImageIcon,
  Grid3X3,
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceSooller from "../Component/ServiceSooller";
import GetDemoSection from "../Component/GetDemoSection";

const galleryImages = [
  {
    id: 1,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.51.jpeg",
    title: "Industrial Workshop Operations",
    category: "Workshop",
    description: "Professional industrial workshop operations and machinery",
  },
  {
    id: 2,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.52 (1).jpeg",
    title: "Heavy Machinery Services",
    category: "Machinery",
    description: "Heavy machinery maintenance and repair services",
  },
  {
    id: 3,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.52 (2).jpeg",
    title: "Precision Engineering Work",
    category: "Engineering",
    description: "Precision engineering and fabrication work",
  },
  {
    id: 4,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.52.jpeg",
    title: "Steel Fabrication Process",
    category: "Steel Fabrication",
    description: "Steel fabrication and welding operations",
  },
  {
    id: 5,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.53 (1).jpeg",
    title: "Vehicle Body Manufacturing",
    category: "Commercial Vehicles",
    description: "Commercial vehicle body manufacturing process",
  },
  {
    id: 6,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.53 (2).jpeg",
    title: "Engine Reconditioning",
    category: "Engine Repair",
    description: "Engine reconditioning and repair services",
  },
  {
    id: 7,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.53.jpeg",
    title: "Gear Manufacturing",
    category: "Gear Making",
    description: "Precision gear manufacturing and machining",
  },
  {
    id: 8,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.54 (1).jpeg",
    title: "Bearing Services",
    category: "Bearing Services",
    description: "Professional bearing installation and maintenance",
  },
  {
    id: 9,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.54.jpeg",
    title: "Wheel Repair Services",
    category: "Wheel Services",
    description: "Wheel alignment and repair services",
  },
  {
    id: 10,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.55 (1).jpeg",
    title: "Cabinet Manufacturing",
    category: "Cabinets",
    description: "KAHRAMAA approved cabinet manufacturing",
  },
  {
    id: 11,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.55.jpeg",
    title: "Marine Engineering",
    category: "Marine Services",
    description: "Marine and shipyard engineering services",
  },
  {
    id: 12,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.56.jpeg",
    title: "Hydraulic Systems",
    category: "Hydraulic Services",
    description: "Hydraulic pump and system services",
  },
  {
    id: 13,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.57 (1).jpeg",
    title: "Quality Control",
    category: "Quality Assurance",
    description: "Quality control and testing procedures",
  },
  {
    id: 14,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.57 (2).jpeg",
    title: "Assembly Operations",
    category: "Assembly",
    description: "Professional assembly and finishing operations",
  },
  {
    id: 15,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.57.jpeg",
    title: "Welding Services",
    category: "Welding",
    description: "Professional welding and fabrication services",
  },
  {
    id: 16,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.58.jpeg",
    title: "Machining Operations",
    category: "Machining",
    description: "Precision machining and turning operations",
  },
  {
    id: 17,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.59 (1).jpeg",
    title: "Equipment Maintenance",
    category: "Maintenance",
    description: "Equipment maintenance and repair services",
  },
  {
    id: 18,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.32.59.jpeg",
    title: "Industrial Projects",
    category: "Projects",
    description: "Large scale industrial project execution",
  },
  {
    id: 19,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.00 (1).jpeg",
    title: "Technical Solutions",
    category: "Technical Services",
    description: "Comprehensive technical solutions and services",
  },
  {
    id: 20,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.00.jpeg",
    title: "Workshop Facilities",
    category: "Facilities",
    description: "State-of-the-art workshop facilities",
  },
  {
    id: 21,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.01 (1).jpeg",
    title: "Custom Fabrication",
    category: "Custom Work",
    description: "Custom fabrication and engineering solutions",
  },
  {
    id: 22,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.01 (2).jpeg",
    title: "Testing & Verification",
    category: "Testing",
    description: "Testing and performance verification services",
  },
  {
    id: 23,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.01.jpeg",
    title: "Installation Services",
    category: "Installation",
    description: "Professional installation and commissioning",
  },
  {
    id: 24,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.02 (1).jpeg",
    title: "Repair Operations",
    category: "Repair Services",
    description: "Comprehensive repair and restoration services",
  },
  {
    id: 25,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.02.jpeg",
    title: "Engineering Excellence",
    category: "Engineering",
    description: "Engineering excellence and innovation",
  },
  {
    id: 26,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.03 (1).jpeg",
    title: "Manufacturing Process",
    category: "Manufacturing",
    description: "Advanced manufacturing processes and techniques",
  },
  {
    id: 27,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.03 (2).jpeg",
    title: "Quality Standards",
    category: "Quality",
    description: "Maintaining highest quality standards",
  },
  {
    id: 28,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.03.jpeg",
    title: "Project Completion",
    category: "Projects",
    description: "Successful project completion and delivery",
  },
  {
    id: 29,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.04 (1).jpeg",
    title: "Technical Expertise",
    category: "Expertise",
    description: "Technical expertise and skilled craftsmanship",
  },
  {
    id: 30,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.04.jpeg",
    title: "Service Excellence",
    category: "Services",
    description: "Excellence in service delivery and customer satisfaction",
  },
  {
    id: 31,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.05 (1).jpeg",
    title: "Industrial Solutions",
    category: "Solutions",
    description: "Comprehensive industrial solutions and support",
  },
  {
    id: 32,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.05.jpeg",
    title: "Professional Work",
    category: "Professional Services",
    description: "Professional work standards and execution",
  },
  {
    id: 33,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.06.jpeg",
    title: "Advanced Technology",
    category: "Technology",
    description: "Advanced technology and modern equipment",
  },
  {
    id: 34,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.07 (1).jpeg",
    title: "Skilled Workforce",
    category: "Workforce",
    description: "Skilled and experienced workforce",
  },
  {
    id: 35,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.07.jpeg",
    title: "Precision Work",
    category: "Precision",
    description: "Precision work and attention to detail",
  },
  {
    id: 36,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.08 (1).jpeg",
    title: "Safety Standards",
    category: "Safety",
    description: "Maintaining highest safety standards",
  },
  {
    id: 37,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.08.jpeg",
    title: "Innovation",
    category: "Innovation",
    description: "Innovation in engineering and manufacturing",
  },
  {
    id: 38,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.09 (1).jpeg",
    title: "Customer Satisfaction",
    category: "Customer Service",
    description: "Commitment to customer satisfaction",
  },
  {
    id: 39,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.09 (2).jpeg",
    title: "Reliable Services",
    category: "Reliability",
    description: "Reliable and dependable services",
  },
  {
    id: 40,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.09.jpeg",
    title: "Excellence Achievement",
    category: "Excellence",
    description: "Achievement of excellence in all operations",
  },
  {
    id: 41,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.10.jpeg",
    title: "Future Ready",
    category: "Future",
    description: "Future-ready solutions and technologies",
  },
  {
    id: 42,
    src: "/gallery Image/WhatsApp Image 2026-01-20 at 17.33.11.jpeg",
    title: "Success Stories",
    category: "Success",
    description: "Success stories and achievements over 32+ years",
  },
];

const stats = [
  { value: "5000+", label: "Projects Completed", icon: Award },
  { value: "32+", label: "Years Experience", icon: Clock },
  { value: "80+", label: "Team Members", icon: Users },
  { value: "ISO 9001:2015", label: "Certified Quality", icon: Award },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? galleryImages.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

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
              <Camera size={18} className="text-orange-200" />
              GALLERY
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              OUR WORK
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                IN PICTURES
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              Showcasing Our Engineering Excellence & Quality Craftsmanship
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Discover our journey of over 32 years, reflecting engineering
              expertise, precision-driven execution, and consistent quality
              standards that define our work across diverse operations.
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
                <span>Contact Us</span>
              </Link>

              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all hover:border-white/50"
              >
                <ImageIcon size={20} />
                <span>View Gallery</span>
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

      {/* Video Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-[400px] md:h-[600px] object-cover"
              controls
              muted
              preload="metadata"
            >
              <source src="/VID-20260116-WA0000.mp4" type="video/mp4" />
              <p className="flex items-center justify-center h-full text-gray-500">
                Your browser does not support the video tag.
              </p>
            </video>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <section id="gallery" className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Project{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our extensive portfolio of completed projects and
              services
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' alignment-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%239ca3af'%3EProject Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200 mb-2">
                      {image.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs rounded-full">
                      {image.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ZoomIn className="text-white" size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 pt-24">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
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
                alt={selectedImage.title}
                className="w-full h-130 sm:h-150 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {selectedImage.description}
                </p>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-semibold text-sm">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}