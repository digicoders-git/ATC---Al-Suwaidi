import React from "react";
import {
  CheckCircle,
  Award,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Introduction() {
  const coreOperations = [
    "Manufacturing of Kahramaa cabinets",
    "Logistic vehicle bodybuilding",
    "Steel fabrication works",
    "Design and engineering services",
    "Maintenance and repair services",
    "Lathe manufacturing works",
    "Vehicle engine repairing and re-boring",
    "Wheel, rim, bearing, and bush pressing",
    "Shearing, bending, rolling, and punching",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg mb-6">
            <Sparkles size={20} className="animate-spin" />
            <span className="font-bold text-sm uppercase tracking-wider">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Introduction
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Introduction Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Award className="text-white" size={32} />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We are proud to introduce{" "}
                  <span className="font-bold text-orange-600">
                    Al Suwaidi Technical Center
                  </span>{" "}
                  as one of the most diverse and reliable suppliers of steel
                  engineering solutions in Qatar. With a long-standing history
                  in lathe works, logistic vehicle body manufacturing, and
                  Kahramaa box fabrications, we have established ourselves as
                  leaders in the engineering sector.
                </p>

                {/* Decorative Line */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
                  <div className="h-1 w-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-60"></div>
                  <div className="h-1 w-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-30"></div>
                </div>

                <p className="text-gray-600 text-base leading-relaxed">
                  We are confident in our ability to deliver customized
                  solutions that meet the highest standards of international
                  quality and excellence.
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                ></div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp size={32} className="animate-pulse" />
                  <h3 className="text-2xl font-bold">Our Commitment</h3>
                </div>

                <p className="text-white/95 text-lg leading-relaxed mb-6">
                  We look forward to the opportunity to demonstrate how Al
                  Suwaidi Technical Center can help optimize your profits
                  through capital engineering asset acquisition and equipment
                  procurement in the near future.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  {/* Get Started */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    Get Started
                    <ArrowRight size={20} />
                  </Link>

                  {/* Download Company Profile */}
                  <a
                    href="/company-profile.pdf"
                    download
                    className="inline-flex items-center gap-2 border-2 border-white/80 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
                  >
                    Download Profile
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Core Operations */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-100 hover:shadow-2xl transition-all duration-500 sticky top-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Core Operations
              </h3>
            </div>

            <p className="text-gray-600 mb-6 text-base">
              For your quick reference, our core operations include:
            </p>

            <ul className="space-y-4">
              {coreOperations.map((operation, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700 text-base leading-relaxed pt-1">
                    {operation}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
