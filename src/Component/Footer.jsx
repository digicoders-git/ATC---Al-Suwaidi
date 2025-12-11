import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  PhoneForwarded,
  Truck,
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
    "Industrial Engineering",
    "Technical Works",
    "Equipment Installation",
    "Maintenance Services",
    "Custom Solutions",
    "Quality Assurance",
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Get Quote", href: "/get-quote" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-orange-600 to-red-500 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Truck size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black">
                  Al Suwaidi Technical Centre
                </h3>
                <p className="text-orange-100 text-sm">
                  Industrial Engineering Excellence
                </p>
              </div>
            </div>

            <p className="text-orange-100 mb-6">
              Leading provider of industrial engineering and technical works
              solutions in Qatar.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1JqUbVkVuF/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center  hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/alsuwaiditechnicalcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/alsuwaiditechnicalcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center  hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://wa.me/97451711104"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center  hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://twitter.com/alsuwaiditechnical"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center  hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase">
              Contact Information
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-200" />
                <p className="text-sm text-orange-100">
                  Street No. 18, Gate No. 35 <br />
                  P.O. Box – 40600 <br />
                  Industrial Area, Doha, Qatar
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-orange-200" />
                <p className="text-sm text-orange-100">
                  Tel:{" "}
                  <a href="tel:+97444601087" className="hover:text-white">
                    +974 44601087
                  </a>{" "}
                  <br />
                  Cell:{" "}
                  <a href="tel:+97451711104" className="hover:text-white">
                    +974 51711104
                  </a>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <PhoneForwarded size={18} className="text-orange-200" />
                <p className="text-sm text-orange-100">Fax: +974 44601334</p>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-orange-200" />
                <p className="text-sm text-orange-100">
                  <a
                    href="mailto:pankajsuwaidigroup@gmail.com"
                    className="hover:text-white block"
                  >
                    pankajsuwaidigroup@gmail.com
                  </a>
                  <a
                    href="mailto:suwaidigroup@yahoo.com"
                    className="hover:text-white block"
                  >
                    suwaidigroup@yahoo.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i} className="flex items-center gap-3">
                  <ArrowRight className="text-orange-200" size={16} />
                  <span className="text-orange-100">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase">Quick Links</h4>

            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-orange-100 hover:text-white transition"
                  >
                    <ArrowRight size={16} className="text-orange-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-orange-100 text-sm text-center md:text-left">
            © {year} Al Suwaidi Technical Centre. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="/privacy"
              className="text-orange-100 hover:text-white transition"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-orange-100 hover:text-white transition"
            >
              Terms of Service
            </a>

            <div className="flex items-center gap-2 text-orange-100">
              <Globe size={16} />
              <span>Qatar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
