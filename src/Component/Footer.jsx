import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  PhoneForwarded,
  ArrowRight,
  Globe,
  Clock,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const services = [
    {
      label: "Fabrication & Structural Engineering Solutions",
      to: "/services/steel-fabrication",
    },
    {
      label: "Commercial Vehicle Body Building & Special Purpose Vehicles",
      to: "/services/vehicle-bodies",
    },
    {
      label: "Engine Reconditioning & Drivetrain Services",
      to: "/services/engine-repair",
    },
    {
      label:
        "Precision Machining, Gear Manufacturing & Power Transmission Services",
      to: "/services/gears-milling",
    },
    {
      label: "Bearing, Shaft & Precision Fitment Services",
      to: "/services/bearings",
    },
    {
      label: "Wheel & Rotating Component Repair Services",
      to: "/services/wheels-repair",
    },
    {
      label: "Cabinet Manufacturing (KAHRAMAA Approved)",
      to: "/services/cabinets",
    },
    {
      label: "Marine, Shipyard & Heavy Equipment Engineering Services",
      to: "/services/marine-services",
    },
    { label: "Hydraulic & Pump Systems", to: "/services/hydraulic-services" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/project" },
    { label: "Gallery", href: "/gallery" },
    { label: "Our Story", href: "/our-story" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Get Quote", href: "/get-quote" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Link to="/" aria-label="Home">
                <img
                  src="/Screenshot_2025-12-22_121623-removebg-preview (1).png"
                  alt="Al Suwaidi Technical Centre Logo"
                  className="w-16 h-16 object-contain"
                  loading="lazy"
                />
              </Link>
              <div className="ml-3">
                <h3 className="text-xl font-bold text-white">Al Suwaidi</h3>
                <p className="text-orange-100 text-sm font-medium">
                  Technical Center
                </p>
              </div>
            </div>

            <p className="text-orange-100 mb-6 text-sm leading-relaxed">
              Leading provider of industrial engineering and technical works
              solutions in Qatar with 32+ years of excellence in fabrication,
              manufacturing, and precision engineering.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/alsuwaiditechnicalcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/alsuwaiditechnicalcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://wa.me/97451711104"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <div className="w-1 h-6 bg-white/40 rounded-full mr-3"></div>
              Contact Information
            </h4>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <MapPin size={14} className="text-white" />
                </div>
                <div className="text-orange-100">
                  <p className="font-medium">Street No. 18, Gate No. 35</p>
                  <p>P.O. Box – 40600</p>
                  <p>Industrial Area, Doha, Qatar</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <Phone size={14} className="text-white" />
                </div>
                <div className="text-orange-100">
                  <p>
                    Tel:{" "}
                    <a
                      href="tel:+97444601087"
                      className="hover:text-white transition-colors"
                    >
                      +974 44601087
                    </a>
                  </p>
                  <p>
                    Cell:{" "}
                    <a
                      href="tel:+97451711104"
                      className="hover:text-white transition-colors"
                    >
                      +974 51711104
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <Mail size={14} className="text-white" />
                </div>
                <div className="text-orange-100">
                  <p>
                    <a
                      href="mailto:info@alsuwaiditechnical.com"
                      className="hover:text-white transition-colors"
                    >
                      info@alsuwaiditechnical.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:suwaidigroup@yahoo.com"
                      className="hover:text-white transition-colors"
                    >
                      suwaidigroup@yahoo.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <div className="w-1 h-6 bg-white/40 rounded-full mr-3"></div>
              Our Services
            </h4>
            <div className="space-y-2">
              {services.map((service, i) => (
                <Link
                  key={i}
                  to={service.to}
                  className="flex items-center gap-2 text-orange-100 hover:text-white transition-colors duration-300 text-sm group underline hover:no-underline"
                >
                  <ArrowRight
                    className="text-white flex-shrink-0 group-hover:translate-x-1 transition-transform"
                    size={12}
                  />
                  <span className="leading-tight">{service.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <div className="w-1 h-6 bg-white/40 rounded-full mr-3"></div>
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.href}
                  className="flex items-center gap-2 text-orange-100 hover:text-white transition-colors duration-300 text-sm group underline hover:no-underline"
                >
                  <ArrowRight
                    className="text-white flex-shrink-0 group-hover:translate-x-1 transition-transform"
                    size={12}
                  />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-orange-100 text-sm">
                © {new Date().getFullYear()} Al Suwaidi Technical Center. All
                rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-orange-200 text-xs">
                Designed by{" "}
                <a
                  href="https://www.worknestconnect.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-100 transition-colors font-medium"
                >
                  Worknestconnect
                </a>
              </p>
              {/* <div className="flex items-center gap-2 text-xs text-orange-200">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
