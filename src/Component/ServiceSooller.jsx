import React from "react";
import { motion } from "framer-motion"; // Fixed: Added motion import

function ServiceSooller() {
  return (
    <>
      {/* Scrolling Brands Bar */}
      <div className="relative py-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center text-sm text-orange-200/80 mb-4 font-medium">
            Trusted by Industry Leaders
          </div>
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{
                x: { repeat: Infinity, duration: 30, ease: "linear" },
              }}
            >
              {[...Array(2)].flatMap(() =>
                [
                  "Industrial",
                  "Automotive",
                  "Construction",
                  "Manufacturing",
                  "Engineering",
                  "Infrastructure",
                ].map((brand) => (
                  <div
                    key={Math.random()}
                    className="text-white/70 text-xl font-bold"
                  >
                    {brand}
                  </div>
                ))
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceSooller;
