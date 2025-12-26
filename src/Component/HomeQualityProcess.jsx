import React from "react";
import {
  FaClipboardCheck,
  FaCogs,
  FaShippingFast,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function QualityProcess() {
  const navigate = useNavigate();
  const qualityStages = [
    {
      title: "IQC – Incoming Quality Control",
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
      title: "IPQC – In-Process Quality Control",
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
      title: "OQC – Outgoing Quality Control",
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
    <section className="pb-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Quality{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            ISO 9001:2015 Certified Quality Management System
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualityStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <article
                key={idx}
                className="relative flex flex-col bg-white rounded-3xl border border-orange-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Top gradient strip */}
                <div
                  className={`h-2 w-full bg-gradient-to-r ${stage.gradient}`}
                />

                <div className="flex flex-col flex-1 p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${stage.gradient} mb-6`}
                  >
                    <Icon className="text-2xl" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-5">
                    {stage.title}
                  </h3>

                  {/* Steps */}
                  <ul className="space-y-3 flex-1">
                    {stage.steps.map((step, sidx) => (
                      <li
                        key={sidx}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <FaCheckCircle className="text-orange-500 mt-1 shrink-0" />
                        <span className="text-sm md:text-base">{step}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button (UNCHANGED LINK) */}
                  <div className="mt-8">
                    <button
                      onClick={() =>
                        navigate("/about", {
                          state: { scrollTo: "certificate" },
                        })
                      }
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold shadow-lg hover:scale-[1.03] transition-transform"
                    >
                      VIEW CERTIFICATE AND LICENSES
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
