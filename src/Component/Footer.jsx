// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
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
    { label: "Steel Fabrication Basics", to: "/services/steel-fabrication" },
    { label: "Commercial Vehicle Bodies", to: "/services/vehicle-bodies" },
    { label: "Vehicle Engine Repair", to: "/services/engine-repair" },
    { label: "Gear Manufacturing & Milling", to: "/services/gears-milling" },
    { label: "Bearing Services", to: "/services/bearings" },
    { label: "Vehicle Wheel Repair", to: "/services/wheels-repair" },
    {
      label: "Cabinet Manufacturing (KAHRAMAA Approved)",
      to: "/services/cabinets",
    },
  ];

  // use href for link targets; we'll render them with <Link to=...>
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/project" },
    { label: "Gallery", href: "/gallery" },
    { label: "Our Story", href: "/our-story" },
    { label: "Contact", href: "/contact" },
    { label: "Get Quote", href: "/get-quote" },
  ];

  return (
    <footer className="bg-gradient-to-r from-orange-600 to-red-500 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company info */}
          <div>
            <div className="flex justify-center items-center">
              <Link to="/" aria-label="Home">
                <img
                  src="/Screenshot_2025-12-22_121623-removebg-preview (1).png"
                  alt="Al Suwaidi Technical Centre Logo"
                  className="w-20 h-20 object-contain"
                  loading="lazy"
                />
              </Link>
            </div>

            <p className="text-orange-100 mb-6 text-base leading-relaxed">
              Leading provider of industrial engineering and technical works
              solutions in Qatar with 32+ years of excellence.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/alsuwaiditechnicalcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/alsuwaiditechnicalcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://wa.me/97451711104"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://twitter.com/alsuwaiditechnical"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-black mb-6 uppercase tracking-wide">
              Contact Information
            </h4>

            <div className="space-y-4 text-base text-orange-100">
              <div className="flex items-start justify-center md:justify-start gap-3">
                <MapPin size={18} className="text-orange-200 flex-shrink-0" />
                <p>
                  Street No. 18, Gate No. 35 <br />
                  P.O. Box – 40600 <br />
                  Industrial Area, Doha, Qatar
                </p>
              </div>

              <div className="flex items-start justify-center md:justify-start gap-3">
                <Phone size={18} className="text-orange-200 flex-shrink-0" />
                <p>
                  Tel:{" "}
                  <a href="tel:+97444601087" className="hover:text-white">
                    +974 44601087
                  </a>
                  <br />
                  Cell:{" "}
                  <a href="tel:+97451711104" className="hover:text-white">
                    +974 51711104
                  </a>
                </p>
              </div>

              <div className="flex items-start justify-center md:justify-start gap-3">
                <PhoneForwarded
                  size={18}
                  className="text-orange-200 flex-shrink-0"
                />
                <p>Fax: +974 44601334</p>
              </div>

              <div className="flex items-start justify-center md:justify-start gap-3">
                <Mail size={18} className="text-orange-200 flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="mailto:info@alsuwaiditechnical.com"
                    className="hover:text-white"
                  >
                    info@alsuwaiditechnical.com
                  </a>
                  <a
                    href="mailto:suwaidigroup@yahoo.com"
                    className="hover:text-white"
                  >
                    suwaidigroup@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-black mb-6 uppercase tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li
                  key={i}
                  className="flex items-center justify-center md:justify-start gap-3 text-orange-100"
                >
                  <ArrowRight className="text-orange-200" size={16} />
                  <Link
                    to={service.to}
                    className="hover:text-white transition-colors duration-300 text-base font-medium"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Hours */}
          <div>
            <h4 className="text-xl font-black mb-6 uppercase tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  {/* internal navigation uses React Router Link */}
                  <Link
                    to={link.href}
                    className="flex items-center justify-center md:justify-start gap-3 text-orange-100 hover:text-white transition-colors duration-300 text-base font-medium"
                  >
                    <ArrowRight size={16} className="text-orange-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-orange-400/30 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-sm font-medium text-center">
              © {new Date().getFullYear()} Al Suwaidi Technical Center. All rights
              reserved.
            </p>
            <p className="text-orange-200 text-xs text-center">
              Designed by{" "}
              <a
                href="https://www.worknestconnect.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-300 transition-colors duration-300 font-semibold underline"
              >
                Worknestconnect
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
