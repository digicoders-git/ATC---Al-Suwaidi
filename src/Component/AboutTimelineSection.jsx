import React from "react";
import {
  FaBuilding,
  FaExpandArrowsAlt,
  FaChartLine,
  FaLaptopHouse,
  FaCertificate,
  FaUserTie,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function TimelineSection() {
  const companyHistory = [
    {
      year: "1992",
      title: "Foundation",
      description:
        "Established in Industrial Area, Doha, Qatar with commercial registration No. 14258",
      icon: FaBuilding,
    },
    {
      year: "2000",
      title: "Expansion",
      description:
        "Expanded operations to include structural steel works and industrial fabrication",
      icon: FaExpandArrowsAlt,
    },
    {
      year: "2010",
      title: "Growth Phase",
      description:
        "Achieved significant growth with major industrial and construction projects",
      icon: FaChartLine,
    },
    {
      year: "2015",
      title: "System Implementation",
      description:
        "Implemented comprehensive Quality Management System and safety protocols",
      icon: FaLaptopHouse,
    },
    {
      year: "2022",
      title: "ISO Certification",
      description:
        "Achieved ISO 9001:2015 certification for quality management excellence",
      icon: FaCertificate,
    },
    {
      year: "2024",
      title: "Current Leadership",
      description:
        "Managing Director: Rashid Abdullah Al Suwaidi | 245+ professionals | 10,000 SQM facility",
      icon: FaUserTie,
    },
  ];

  // group into pairs so each row can render left and right cards side-by-side
  const pairs = [];
  for (let i = 0; i < companyHistory.length; i += 2) {
    pairs.push([companyHistory[i], companyHistory[i + 1]]);
  }

  const pairVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const cardLeft = {
    hidden: { opacity: 0, x: -40, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6 } },
  };

  const cardRight = {
    hidden: { opacity: 0, x: 40, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6 } },
  };

  const centerDot = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            32 Years of Excellence
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            From a small workshop to Qatar's leading industrial engineering
            centre
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* vertical connecting line behind the center icons (visible on lg and above) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-1 bg-gradient-to-b from-orange-200 via-amber-200 to-red-200 rounded-full opacity-70" />

          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={pairVariant}
          >
            {pairs.map((pair, idx) => {
              const left = pair[0];
              const right = pair[1];
              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start relative"
                >
                  {/* LEFT CARD */}
                  <div className="col-span-1 lg:col-span-1">
                    {left && (
                      <motion.div
                        variants={cardLeft}
                        whileHover={{ scale: 1.02 }}
                        tabIndex={0}
                        className="bg-white bg-opacity-80 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow"
                            style={{
                              background:
                                "linear-gradient(135deg,#f97316,#dc2626)",
                            }}
                          >
                            <left.icon size={22} />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">
                              {left.title}
                            </div>
                            <div className="text-xl font-bold text-orange-700">
                              {left.year}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 mt-3">{left.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* CENTER DOT / ICON */}
                  <div className="col-span-1 flex justify-center lg:items-center z-20">
                    <motion.div
                      variants={centerDot}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-2xl ring-4 ring-white -mt-6 lg:mt-0"
                      style={{ zIndex: 30 }}
                    >
                      {/* show right icon if exists else left icon */}
                      {right ? (
                        <right.icon size={28} />
                      ) : (
                        left && <left.icon size={28} />
                      )}
                    </motion.div>
                  </div>

                  {/* RIGHT CARD */}
                  <div className="col-span-1 lg:col-span-1">
                    {right && (
                      <motion.div
                        variants={cardRight}
                        whileHover={{ scale: 1.02 }}
                        tabIndex={0}
                        className="bg-white bg-opacity-80 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow"
                            style={{
                              background:
                                "linear-gradient(135deg,#f97316,#dc2626)",
                            }}
                          >
                            <right.icon size={22} />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">
                              {right.title}
                            </div>
                            <div className="text-xl font-bold text-orange-700">
                              {right.year}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 mt-3">
                          {right.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
