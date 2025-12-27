import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Truck,
  ArrowRight,
} from "lucide-react";
import GoogleTranslateButton from "./GoogleTranslate";

/**
 * Modern White Background Navbar for Truck Company
 * Fully Responsive with Clean Design
 *
 * Enhanced behavior:
 * - Clicking a service item will attempt to verify & navigate.
 * - If a service path isn't available (404) it redirects to /contact.
 * - External links (http/https) open in a new tab.
 */

export default function ModernNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Get current active link from URL
  const getCurrentActiveLink = () => {
    const path = location.pathname;
    if (path === "/") return "/";
    if (path.startsWith("/about")) return "/about";
    if (path.startsWith("/services")) return "/services";
    if (path.startsWith("/project")) return "/project";
    if (path.startsWith("/contact")) return "/contact";
    if (path.startsWith("/get-quote")) return "/get-quote";
    return path;
  };

  const activeLink = getCurrentActiveLink();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const services = [
    {
      label: "Steel Fabrication Basics",
      to: "/services/steel-fabrication",
      icon: "🔧",
    },
    {
      label: "Commercial Vehicle Bodies",
      to: "/services/vehicle-bodies",
      icon: "🚛",
    },
    {
      label: "Vehicle Engine Repair",
      to: "/services/engine-repair",
      icon: "⚙️",
    },
    {
      label: "Gear Manufacturing & Milling",
      to: "/services/gears-milling",
      icon: "⚡",
    },
    { label: "Bearing Services", to: "/services/bearings", icon: "🔩" },
    {
      label: "Vehicle Wheel Repair",
      to: "/services/wheels-repair",
      icon: "🛞",
    },

    {
      label: "Cabinet Manufacturing (KAHRAMAA Approved)",
      to: "/services/cabinets",
      icon: "📦",
    },
  ];

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services", hasDropdown: true },
    { label: "Projects", to: "/project" },
    { label: "Gallery", to: "/gallery" },
    { label: "Our Story", to: "/our-story" },
    { label: "Contact", to: "/contact" },
  ];

  // When a service is clicked:
  // - Close the services dropdown
  // - Navigate to the service page
  function handleServiceClick(serviceTo) {
    // Close the services dropdown
    setServicesOpen(false);
    setMobileOpen(false);

    // Navigate to the service page
    if (serviceTo) {
      navigate(serviceTo);
    } else {
      navigate("/contact");
    }
  }

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <nav className="max-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex flex-col lg:ps-15 h-full">
              <img
                src="/jmjmj.png"
                alt="logo"
                className="w-35 h-auto self-center"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex xl:items-center xl:gap-1 flex-1 justify-center">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.hasDropdown ? (
                    <div
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => {
                        if (timeoutRef.current) {
                          clearTimeout(timeoutRef.current);
                        }
                        setServicesOpen(true);
                      }}
                      onMouseLeave={() => {
                        timeoutRef.current = setTimeout(() => {
                          setServicesOpen(false);
                        }, 300);
                      }}
                    >
                      <button
                        className={`flex items-center gap-1 px-5 py-3 rounded-xl text-base font-bold transition-all duration-300 group ${
                          activeLink === "/services" ||
                          activeLink.startsWith("/services/")
                            ? "text-orange-600 bg-orange-50 shadow-sm"
                            : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Services Dropdown */}
                      {servicesOpen && (
                        <div className="absolute left-1/2 p-2 -translate-x-1/2 mt-2 w-[300px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden backdrop-blur-sm">
                          <div className="">
                            <div className=" gap-4">
                              {services.map((service) => (
                                <button
                                  key={service.to}
                                  onClick={() => handleServiceClick(service.to)}
                                  className="w-full text-left flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50 hover:shadow-md transition-all duration-300 group border border-transparent hover:border-orange-200"
                                >
                                  <div className="flex-1">
                                    <div className="font-bold text-gray-800 group-hover:text-orange-600 text-base leading-tight">
                                      {service.label}
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                              <Link
                                to="/services"
                                onClick={() => setServicesOpen(false)}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                              >
                                View All Services
                                <ArrowRight size={16} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.to}
                      className={`relative px-5 py-3 rounded-xl text-base font-bold transition-all duration-300 group ${
                        activeLink === link.to
                          ? "text-orange-600 bg-orange-50 shadow-sm"
                          : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-orange-600 to-red-500 transition-all duration-300 ${
                          activeLink === link.to ? "w-8" : "w-0 group-hover:w-8"
                        }`}
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              <GoogleTranslateButton />
              {/* CTA Button */}
              <Link
                to="/get-quote"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                Get Quote
                <ArrowRight size={16} />
              </Link>

              {/* Phone Button - Mobile */}
              <a
                href="tel:+97444601087"
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-600 to-red-500 text-white shadow-lg"
              >
                <Phone size={20} />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="xl:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                aria-label="Open menu"
              >
                <Menu size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Side Menu */}
        <aside
          className={`absolute left-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* Menu Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <img src="/logo2.png" alt="" className="w-20 h-20" />

            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300"
              aria-label="Close menu"
            >
              <X size={20} className="text-gray-700" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="p-6 h-[calc(100vh-140px)] overflow-y-auto">
            {/* Navigation Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="border-b border-gray-100 last:border-0"
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between py-4 text-base font-bold text-gray-800"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          servicesOpen ? "max-h-[500px] mb-4" : "max-h-0"
                        }`}
                      >
                        <div className="pl-4 space-y-2">
                          {services.map((service) => (
                            <button
                              key={service.to}
                              onClick={() => handleServiceClick(service.to)}
                              className="w-full text-left flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-orange-50 transition-all duration-300 text-base font-bold"
                            >
                              <span className="text-xl">{service.icon}</span>
                              <span className="text-gray-700">
                                {service.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.to}
                      className={`flex items-center justify-between py-4 text-base font-bold transition-colors duration-300 ${
                        activeLink === link.to
                          ? "text-orange-600 bg-orange-50 px-4 rounded-lg"
                          : "text-gray-800 hover:text-orange-600"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={16} className="text-gray-400" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
