import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Truck,
  ArrowRight,
  ShoppingCart,
  User,
  Globe,
} from "lucide-react";

/**
 * Modern White Background Navbar for Truck Company
 * Fully Responsive with Clean Design
 */

export default function ModernNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const dropdownRef = useRef(null);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setProductsOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const products = [
    { label: "Hydraulic Tail Lifts", href: "/products/tail-lifts", icon: "🚛" },
    { label: "Telescopic Loading Ramps", href: "/products/ramps", icon: "🔄" },
    {
      label: "Powered Roller Decks",
      href: "/products/roller-decks",
      icon: "⚡",
    },
    {
      label: "Load Restraints & E-track",
      href: "/products/restraints",
      icon: "🔒",
    },
    {
      label: "Refrigerated Bodies",
      href: "/products/reefer-bodies",
      icon: "❄️",
    },
    { label: "Hydraulic Pumps", href: "/products/hydraulics", icon: "⚙️" },
    { label: "Custom Bodies", href: "/products/custom-bodies", icon: "🛠️" },
    { label: "Spare Parts", href: "/products/spares", icon: "🔧" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },

    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className={`fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-orange-600 to-red-500 text-white py-2 px-4 transition-transform duration-300 ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between text-base font-bold">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              24/7 Support Available
            </span>
            <span className="inline-flex items-center gap-2">
              🚚 Free Shipping on Orders Above ₹50,000
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-1">
              <Globe size={14} />
              <span>EN</span>
            </button>
            <span>|</span>
            <a href="/track-order" className="hover:underline">
              Track Order
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "top-[40px] bg-white border-b border-gray-100"
        }`}
      >
        <nav className="max-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <a
                href="/"
                className="flex items-center gap-3 no-underline"
                aria-label="Home"
              >
                {/* Modern Logo */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-500 flex items-center justify-center shadow-lg">
                    <Truck className="text-white" size={24} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>

                <div className="hidden md:block">
                  <span className="block font-black text-2xl leading-none bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                    PrimeLoad
                  </span>
                  <span className="block text-xs text-gray-500 font-medium">
                    INDUSTRIAL SOLUTIONS
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex xl:items-center xl:gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.hasDropdown ? (
                    <div ref={dropdownRef} className="relative">
                      <button
                        onClick={() => setProductsOpen(!productsOpen)}
                        className={`flex items-center gap-1 px-5 py-3 rounded-xl text-base font-bold transition-all duration-300 group ${
                          activeLink.includes("/products")
                            ? "text-orange-600 bg-orange-50"
                            : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            productsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mega Dropdown */}
                      {productsOpen && (
                        <div className="absolute left-0 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-top-5">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-8">
                              {/* Products Column */}
                              <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                                  Our Products
                                </h3>
                                <div className="space-y-3">
                                  {products.map((product) => (
                                    <a
                                      key={product.href}
                                      href={product.href}
                                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition-all duration-300 group"
                                    >
                                      <span className="text-xl">
                                        {product.icon}
                                      </span>
                                      <div>
                                        <div className="font-semibold text-gray-800 group-hover:text-orange-600">
                                          {product.label}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                          Learn more →
                                        </div>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>

                              {/* Features Column */}
                              <div className="border-l border-gray-200 pl-8">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                                  Why Choose Us
                                </h3>
                                <div className="space-y-4">
                                  {[
                                    {
                                      title: "5-Year Warranty",
                                      desc: "Industry leading warranty",
                                    },
                                    {
                                      title: "24/7 Support",
                                      desc: "Round the clock assistance",
                                    },
                                    {
                                      title: "Free Installation",
                                      desc: "Professional setup included",
                                    },
                                    {
                                      title: "Fast Delivery",
                                      desc: "Across India in 7 days",
                                    },
                                  ].map((item, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-start gap-3"
                                    >
                                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                                        <span className="text-blue-600 text-lg">
                                          ✓
                                        </span>
                                      </div>
                                      <div>
                                        <div className="font-semibold text-gray-800">
                                          {item.title}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                          {item.desc}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                                  <div className="text-sm font-semibold text-gray-800 mb-2">
                                    Need Custom Solution?
                                  </div>
                                  <button className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                                    Get Custom Quote
                                    <ArrowRight size={16} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setActiveLink(link.href)}
                      className={`relative px-5 py-3 rounded-xl text-base font-bold transition-all duration-300 group ${
                        activeLink === link.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 ${
                          activeLink === link.href
                            ? "w-8"
                            : "w-0 group-hover:w-8"
                        }`}
                      />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Search Button */}
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                <Search size={20} className="text-gray-600" />
              </button>

              {/* CTA Button */}
              <a
                href="/get-quote"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                Get Quote
                <ArrowRight size={16} />
              </a>

              {/* Phone Button - Mobile */}
              <a
                href="tel:+911234567890"
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg"
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
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* Menu Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Truck className="text-white" size={20} />
              </div>
              <div>
                <div className="font-black text-lg text-gray-900">
                  PrimeLoad
                </div>
                <div className="text-xs text-gray-500">
                  Industrial Solutions
                </div>
              </div>
            </a>

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
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>

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
                        onClick={() => setProductsOpen(!productsOpen)}
                        className="w-full flex items-center justify-between py-4 text-base font-bold text-gray-800"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            productsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          productsOpen ? "max-h-[500px] mb-4" : "max-h-0"
                        }`}
                      >
                        <div className="pl-4 space-y-2">
                          {products.map((product) => (
                            <a
                              key={product.href}
                              href={product.href}
                              className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300 text-base font-bold"
                              onClick={() => setMobileOpen(false)}
                            >
                              <span className="text-xl">{product.icon}</span>
                              <span className="text-gray-700">
                                {product.label}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center justify-between py-4 text-base font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={16} className="text-gray-400" />
                    </a>
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
