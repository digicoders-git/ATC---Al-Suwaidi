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
  // Cabinet Manufacturing Images
  {
    id: 1,
    src: "/CabnateMAnifecting/WATERSERVICECABINET1” DIA.jpg",

    title: "Water Service Cabinet - 1 DIA",
    category: "Cabinets",
    description:
      "KAHRAMAA-approved water service cabinet with professional finish",
  },
  {
    id: 2,
    src: "/CabnateMAnifecting/WATERSERVICECABINET1” DIA.jpg",
    title: "Water Service Cabinet - 2 DIA",
    category: "Cabinets",
    description: "Durable aluminum construction water service cabinet",
  },
  {
    id: 3,
    src: "/CabnateMAnifecting/WATER (3) METER CABINET.jpg",
    title: "Water Meter Cabinet - 2 Nos",
    category: "Cabinets",
    description: "Dual meter water cabinet for multi-unit installations",
  },
  {
    id: 4,
    src: "/CabnateMAnifecting/WATER (4) METER CABINET.jpg",
    title: "Water Meter Cabinet - 3 Nos",
    category: "Cabinets",
    description: "Three meter water cabinet for apartment complexes",
  },
  {
    id: 5,
    src: "/CabnateMAnifecting/1765969455965.jpg",
    title: "Water Meter Cabinet - 4 Nos",
    category: "Cabinets",
    description: "Large capacity water cabinet for commercial projects",
  },
  {
    id: 6,
    src: "/CabnateMAnifecting/1765970113122.jpg",
    title: "Water Meter Cabinet - 5 Nos",
    category: "Cabinets",
    description:
      "Extra large capacity water cabinet for extensive installations",
  },
  {
    id: 7,
    src: "/CabnateMAnifecting/ELECTRIC SERVICECABINET.jpg",
    title: "Electric Service Cabinet",
    category: "Cabinets",
    description: "KAHRAMAA-approved electrical service cabinet",
  },
  // Vehicle Wheel Services Images
  {
    id: 8,
    src: "/VecalWhell/Wheel Alignment Services.png",
    title: "Wheel Alignment Services",
    category: "Wheel Services",
    description: "Professional wheel alignment and balancing services",
  },
  {
    id: 9,
    src: "/VecalWhell/Wheel Straightening & Balancing.png",
    title: "Wheel Straightening & Balancing",
    category: "Wheel Services",
    description: "Precision wheel straightening and balancing equipment",
  },
  {
    id: 10,
    src: "/VecalWhell/Disc Facing & Resurfacing.png",
    title: "Disc Facing & Resurfacing",
    category: "Wheel Services",
    description: "Brake disc facing and resurfacing services",
  },
  {
    id: 11,
    src: "/VecalWhell/Drum Facing & Resurfacing.png",
    title: "Drum Facing & Resurfacing",
    category: "Wheel Services",
    description: "Brake drum facing and resurfacing operations",
  },
  {
    id: 12,
    src: "/VecalWhell/Flywheel Facing & Resurfacing.png",
    title: "Flywheel Facing & Resurfacing",
    category: "Wheel Services",
    description: "Flywheel facing and resurfacing services",
  },
  {
    id: 13,
    src: "/VecalWhell/Rim Welding & Machining.png",
    title: "Rim Welding & Machining",
    category: "Wheel Services",
    description: "Professional rim welding and machining services",
  },
  {
    id: 14,
    src: "/VecalWhell/Tire Mounting & Demounting.png",
    title: "Tire Mounting & Demounting",
    category: "Wheel Services",
    description: "Tire mounting and demounting equipment",
  },
  {
    id: 15,
    src: "/VecalWhell/Custom Wheel Modifications.png",
    title: "Custom Wheel Modifications",
    category: "Wheel Services",
    description: "Custom wheel modification and enhancement services",
  },
  // Engine Repair Images
  {
    id: 16,
    src: "/VicalEnging/Block Boring.png",
    title: "Block Boring Services",
    category: "Engine Repair",
    description: "Precision engine block boring and machining",
  },
  {
    id: 17,
    src: "/VicalEnging/Crankshaft Grinding.png",
    title: "Crankshaft Grinding",
    category: "Engine Repair",
    description: "Professional crankshaft grinding and reconditioning",
  },
  {
    id: 18,
    src: "/VicalEnging/Cylinder Liner Fitting.png",
    title: "Cylinder Liner Fitting",
    category: "Engine Repair",
    description: "Cylinder liner fitting and replacement services",
  },
  {
    id: 19,
    src: "/VicalEnging/Engine Assembly & Reassembly.png",
    title: "Engine Assembly & Reassembly",
    category: "Engine Repair",
    description: "Complete engine assembly and reassembly services",
  },
  {
    id: 20,
    src: "/VicalEnging/Final Testing & Performance Verification.png",
    title: "Final Testing & Performance Verification",
    category: "Engine Repair",
    description: "Engine testing and performance verification",
  },
  {
    id: 21,
    src: "/VicalEnging/Head Pressure Checking.png",
    title: "Head Pressure Checking",
    category: "Engine Repair",
    description: "Cylinder head pressure testing services",
  },
  {
    id: 22,
    src: "/VicalEnging/Head Tappet Setting.png",
    title: "Head Tappet Setting",
    category: "Engine Repair",
    description: "Precision head tappet setting and adjustment",
  },
  {
    id: 23,
    src: "/Piston Ring Fitting.png",
    title: "Piston Ring Fitting",
    category: "Engine Repair",
    description: "Piston ring fitting and replacement services",
  },
  // Commercial Vehicle Bodies Images
  {
    id: 24,
    src: "/Cormercila/Anteo Tail Lifts.png",
    title: "Anteo Tail Lifts",
    category: "Commercial Vehicles",
    description: "Anteo tail lift installation and maintenance",
  },
  {
    id: 25,
    src: "/Cormercila/Boom Truck.png",
    title: "Boom Truck",
    category: "Commercial Vehicles",
    description: "Boom truck fabrication and assembly",
  },
  {
    id: 26,
    src: "/Cormercila/Car Recovery Truck.png",
    title: "Car Recovery Truck",
    category: "Commercial Vehicles",
    description: "Car recovery truck body fabrication",
  },
  {
    id: 27,
    src: "/Cormercila/Cargo Transporter Truck (Drop Side).png",
    title: "Cargo Transporter Truck",
    category: "Commercial Vehicles",
    description: "Drop side cargo transporter truck body",
  },
  {
    id: 28,
    src: "/Cormercila/Flatbed Trailer  product card.png",
    title: "Flatbed Trailer",
    category: "Commercial Vehicles",
    description: "Custom flatbed trailer fabrication",
  },
  {
    id: 29,
    src: "/Cormercila/Tank Trailer.png",
    title: "Tank Trailer",
    category: "Commercial Vehicles",
    description: "Tank trailer construction and fabrication",
  },
  {
    id: 30,
    src: "/Cormercila/Tipper Dump Trailer.png",
    title: "Tipper Dump Trailer",
    category: "Commercial Vehicles",
    description: "Tipper dump trailer fabrication",
  },
  // Steel Fabrication Images
  {
    id: 31,
    src: "/StellFebictaion/Assembly, Welding & Finishing.png",
    title: "Assembly, Welding & Finishing",
    category: "Steel Fabrication",
    description: "Professional assembly, welding and finishing services",
  },
  {
    id: 32,
    src: "/StellFebictaion/Custom-fabricated steel parts.png",
    title: "Custom Fabricated Steel Parts",
    category: "Steel Fabrication",
    description: "Custom steel parts fabrication and manufacturing",
  },
  {
    id: 33,
    src: "/StellFebictaion/Industrial steel frames and structures.png",
    title: "Industrial Steel Frames",
    category: "Steel Fabrication",
    description: "Industrial steel frames and structures",
  },
  {
    id: 34,
    src: "/StellFebictaion/Structural Steel Fabrication.png",
    title: "Structural Steel Fabrication",
    category: "Steel Fabrication",
    description: "Structural steel fabrication services",
  },
  // Gear Making Images
  {
    id: 35,
    src: "/GressMaking/Boring Services.png",
    title: "Boring Services",
    category: "Gear Making",
    description: "Precision boring services and operations",
  },
  {
    id: 36,
    src: "/GressMaking/Drilling Services.png",
    title: "Drilling Services",
    category: "Gear Making",
    description: "Professional drilling services and machining",
  },
  {
    id: 37,
    src: "/GressMaking/Gear Hobbing Services.png",
    title: "Gear Hobbing Services",
    category: "Gear Making",
    description: "Gear hobbing and manufacturing services",
  },
  {
    id: 38,
    src: "/GressMaking/Turning Services.png",
    title: "Turning Services",
    category: "Gear Making",
    description: "Precision turning and machining services",
  },
  // Bearing Services Images
  {
    id: 39,
    src: "/Baring/Axle Bearing Removing & Fixing.png",
    title: "Axle Bearing Services",
    category: "Bearing Services",
    description: "Axle bearing removing and fixing services",
  },
  {
    id: 40,
    src: "/Baring/Hub Bearing Fitting.png",
    title: "Hub Bearing Fitting",
    category: "Bearing Services",
    description: "Hub bearing fitting and installation",
  },
  {
    id: 41,
    src: "/Baring/King Pin Removing & Fitting.png",
    title: "King Pin Services",
    category: "Bearing Services",
    description: "King pin removing and fitting services",
  },
  // MRO Services Images
  {
    id: 42,
    src: "/MRO/Body Panel Repair & Replacement (2).png",
    title: "Body Panel Repair",
    category: "MRO Services",
    description: "Body panel repair and replacement services",
  },
  {
    id: 43,
    src: "/MRO/Chassis & Frame Alignment.png",
    title: "Chassis & Frame Alignment",
    category: "MRO Services",
    description: "Chassis and frame alignment services",
  },
  {
    id: 44,
    src: "/MRO/Structural Reinforcement & Strengthening.png",
    title: "Structural Reinforcement",
    category: "MRO Services",
    description: "Structural reinforcement and strengthening",
  },
];

const categories = [
  "All",
  "Cabinets",
  "Wheel Services",
  "Engine Repair",
  "Commercial Vehicles",
  "Steel Fabrication",
  "Gear Making",
  "Bearing Services",
  "MRO Services",
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
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? filteredImages.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
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

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
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

        {/* ===== COMMERCIAL VEHICLE BODIES SECTION ===== */}
     
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

      

      {/* Contact Section */}
   
    </div>
  );
}
