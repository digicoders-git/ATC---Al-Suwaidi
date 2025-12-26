import React from "react";
import {
  Truck,
  Wrench,
  PenTool,
  Settings,
  Zap,
  Cog,
  Gauge,
  Sparkles,
} from "lucide-react";

export default function CompanyScope() {
  const services = [
    {
      icon: Truck,
      title: "Body Building of All Logistic Vehicles",
      description:
        "Design and fabrication of customized bodies for trucks, trailers, containers, tankers, and special-purpose logistic vehicles in accordance with client specifications and industry standards.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
    },
    {
      icon: Wrench,
      title: "All Kinds of Steel Fabrication Works",
      description:
        "Fabrication, assembly, and installation of structural steel, platforms, frames, sheds, supports, brackets, staircases, handrails, and custom steel components for industrial and commercial applications.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: PenTool,
      title: "Design & Engineering",
      description:
        "Mechanical and structural design, engineering calculations, shop drawings, and technical documentation for vehicle bodies, steel structures, and custom-fabricated products.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: Settings,
      title: "Maintenance & Repairing",
      description:
        "Preventive and corrective maintenance, repair, modification, and refurbishment of logistic vehicles and fabricated steel structures.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: Zap,
      title: "Manufacturing of KAHRAMAA Cabinets",
      description:
        "Design, fabrication, and manufacturing of KAHRAMAA-approved electrical cabinets, enclosures, and panels as per KAHRAMAA specifications and quality requirements.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
    },
    {
      icon: Cog,
      title: "Lathe Works",
      description:
        "Precision machining services including turning, facing, threading, boring, and manufacturing of customized metal components.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50",
    },
    {
      icon: Gauge,
      title: "Vehicle Engine Repairing & Re-boring Works",
      description:
        "Complete engine overhauling, cylinder re-boring, crankshaft grinding, block machining, and repair of petrol and diesel engines to restore engine efficiency and reliability.",
      color: "from-red-500 to-rose-500",
      bgColor: "from-red-50 to-rose-50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Company Scope
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            The company provides integrated engineering, fabrication, machining,
            and maintenance solutions for the logistics, infrastructure, and
            utility sectors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Animated Corner Accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}
              ></div>

              <div className="relative p-8">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <service.icon className="text-white" size={32} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-gray-800 mb-4 "

                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 flex items-center gap-2">
                  <div
                    className={`h-1 w-12 rounded-full bg-gradient-to-r ${service.color} transform origin-left group-hover:scale-x-150 transition-transform duration-500`}
                  ></div>
                  <div
                    className={`h-1 w-6 rounded-full bg-gradient-to-r ${service.color} opacity-50`}
                  ></div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div
                className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{
                  borderImage: `linear-gradient(to right, ${
                    index % 2 === 0
                      ? "rgb(249, 115, 22), rgb(239, 68, 68)"
                      : "rgb(59, 130, 246), rgb(6, 182, 212)"
                  }) 1`,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
      </div>
    </section>
  );
}
