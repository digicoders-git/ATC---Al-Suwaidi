import { Link } from "react-router-dom";
import React from "react";
import {
  FaIndustry,
  FaWrench,
  FaTruck,
  FaBoxes,
  FaToolbox,
  FaCogs,
  FaTrailer,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaIndustry,
      title: "Steel Fabrication Basics",
      desc: "Heavy & medium structural steel works, warehouse sheds, industrial platforms and custom fabrication solutions",
      link: "/services/steel-fabrication",
    },
    {
      icon: FaTruck,
      title: "Commercial Vehicle Bodies",
      desc: "Custom vehicle body fabrication, tankers, trailers, flatbeds and specialized transport solutions",
      link: "/services/vehicle-bodies",
    },
    {
      icon: FaCogs,
      title: "Vehicle Engine Repair",
      desc: "Complete engine overhaul, rebuilding, maintenance, block boring and performance optimization services",
      link: "/services/engine-repair",
    },
    {
      icon: FaWrench,
      title: "Gear Manufacturing & Milling",
      desc: "Precision gear manufacturing, hobbing, milling operations and custom machining works for industrial applications",
      link: "/services/gears-milling",
    },
    {
      icon: FaToolbox,
      title: "Bearing Services",
      desc: "Bearing maintenance, replacement, alignment, fitting and precision installation services for all vehicle types",
      link: "/services/bearings",
    },
    {
      icon: FaTrailer,
      title: "Vehicle Wheel Repair",
      desc: "Wheel alignment, balancing, rim welding, straightening and tire mounting services for commercial vehicles",
      link: "/services/wheels-repair",
    },
    {
      icon: FaBoxes,
      title: "Cabinet Manufacturing (KAHRAMAA Approved)",
      desc: "KAHRAMAA-approved water & electric service cabinets, panel boards and electrical enclosure manufacturing",
      link: "/services/cabinets",
    },
  ];

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
      id="services"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#fff7ed" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
          <path
            fill="url(#g1)"
            d="M0,192L60,186.7C120,181,240,171,360,160C480,149,600,139,720,144C840,149,960,171,1080,181.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-3 max-w-3xl mx-auto">
            Comprehensive industrial engineering solutions since 1992 —
            precision fabrication, quality assurance and on-time delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLast = index === services.length - 1;

            return (
              <Link
                key={service.title}
                to={service.link}
                className={`group relative bg-white/80 backdrop-blur-sm border border-gray-100 
                  rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl 
                  transform transition-all duration-400 hover:-translate-y-2 
                  focus-within:scale-[1.01] focus-within:shadow-2xl block
                  ${isLast ? "lg:col-start-2" : ""}`}
                style={{
                  animation: `fadeUp 0.5s ease forwards`,
                  animationDelay: `${index * 0.06}s`,
                  opacity: 0,
                }}
                aria-labelledby={`service-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center 
                                    bg-gradient-to-br from-orange-500 to-red-500 
                                    text-white shadow-lg transition-transform duration-300 
                                    group-hover:scale-105"
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3
                      id={`service-${index}`}
                      className="text-lg md:text-xl font-semibold text-gray-900"
                    >
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm md:text-base text-gray-600">
                      {service.desc}
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <span className="inline-block text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                        Trusted
                      </span>
                      <span className="inline-block text-xs font-medium text-gray-500">
                        ISO Certified Processes
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                       bg-gradient-to-br from-orange-600 to-red-500 
                       text-white font-semibold shadow-xl 
                       hover:scale-105 transition-transform duration-300"
          >
            Get a Custom Quote
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from { transform: translateY(12px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .gradient-text {
          background-image: linear-gradient(90deg, #f97316, #ef4444);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Services;
