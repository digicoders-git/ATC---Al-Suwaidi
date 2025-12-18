import React from "react";
import {
  FaClipboardCheck,
  FaCogs,
  FaShippingFast,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function QualityProcess() {
  const qualityStages = [
    {
      title: "IQC - Incoming Quality Control",
      icon: FaClipboardCheck,
      steps: [
        "Material received from suppliers",
        "Quality inspection & quantity check",
        "Sample testing & validation",
        "Pass label application",
        "Stock in yard storage",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "IPQC - In-Process Quality Control",
      icon: FaCogs,
      steps: [
        "Production notification & arrangement",
        "First sample production",
        "Initial quality check",
        "Mass production with IPQC testing",
        "Full inspection before OQC",
      ],
      gradient: "from-red-500 to-amber-500",
    },
    {
      title: "OQC - Outgoing Quality Control",
      icon: FaShippingFast,
      steps: [
        "Shipping notification received",
        "Final quality inspection",
        "Cross-checking by store keeper",
        "Security final verification",
        "Delivery to client site",
      ],
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="pb-5 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Quality{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            ISO 9001:2015 Certified Quality Management System
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-14">
          {qualityStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <article
                key={idx}
                className="relative bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 group"
              >
                {/* Gradient hover overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stage.gradient} opacity-0 group-hover:opacity-5 transition`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg mb-5 bg-gradient-to-br ${stage.gradient}`}
                  >
                    <Icon className="text-2xl" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {stage.title}
                  </h3>

                  <ul className="space-y-3">
                    {stage.steps.map((step, sidx) => (
                      <li key={sidx} className="flex gap-3">
                        <FaCheckCircle className="text-orange-500 mt-1" />
                        <span className="text-gray-600 text-sm md:text-base">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={"/contact"}
                    className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold shadow hover:scale-[1.03] transition"
                  >
                    <FaCheckCircle />
                    View Details
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
