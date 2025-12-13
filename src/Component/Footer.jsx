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
    { label: "Vehicle Engine Repairing", to: "/services/engine-repair" },
    { label: "Gears Making & Milling", to: "/services/gears-milling" },
    { label: "Bearings Service", to: "/services/bearings" },
    { label: "Vehicle Wheels Repair", to: "/services/wheels-repair" },
    { label: "Cabinets Manufacturing", to: "/services/cabinets" },
  ];

  // use href for link targets; we'll render them with <Link to=...>
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/project" },
    { label: "Contact", href: "/contact" },
    { label: "Get Quote", href: "/get-quote" },
  ];

  const year = new Date().getFullYear();

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
                  src="/Logo1.png"
                  alt="Al Suwaidi Technical Centre Logo"
                  className="w-30 h-30 object-contain"
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
                href="https://www.linkedin.com/company/alsuwaiditechnicalcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
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
                    href="mailto:pankajsuwaidigroup@gmail.com"
                    className="hover:text-white"
                  >
                    pankajsuwaidigroup@gmail.com
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
      <div className="w-full border-t border-green-900/40 pt-6 flex justify-center">
        <p className="text-white text-sm font-medium text-center">
          © {new Date().getFullYear()} WorkNest Connect. All rights reserved.{" "}
          <span className="opacity-80">Designed & Developed by</span>{" "}
          <a
            href="https://www.digicoders.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 font-semibold hover:text-orange-300"
          >
            #TeamDigiCoders
          </a>
        </p>
      </div>
    </footer>
  );
}
