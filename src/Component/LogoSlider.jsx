import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Users } from "lucide-react";

const clientLogos = [
  "/HomeLogo/gulfcore-logo.png",
  "/HomeLogo/TAMIMI.png",
  "/HomeLogo/KHALIFA STEEL.png",
  "/HomeLogo/GULF FLAG CO.png",
  "/HomeLogo/QATAR ROCK WOOL.png",
  "/HomeLogo/INDO ARAB.png",
  "/HomeLogo/AL MANA ENTERPRISES.png",
  "/HomeLogo/CORNER STONE.png",
  "/HomeLogo/ROYAL TECH.png",
  "/HomeLogo/OCEAN POWER.png",
  "/HomeLogo/SILVER LINE.png",
  "/HomeLogo/AUTO XPERT.png",
  "/HomeLogo/RENTAL STATION.png",
  "/HomeLogo/NATIONAL CRUISE.png",
  "/HomeLogo/MAWAQIF QATAR.png",
  "/HomeLogo/SUSIN QATAR.png",
  "/HomeLogo/TERRATAST QATAR.png",
  "/HomeLogo/ULTIMATE TRADING.png",
  "/HomeLogo/WINMAX ENGINEERING W.L.L..png",
  "/HomeLogo/AL BADER CONSTRUCTION & STEEL WORKS W.L.L..png",
  "/HomeLogo/AL OMAR TRADING AND CONTRACTING.png",
  "/HomeLogo/ALAA INDUSTRIAL EQUIPMENTS ( AFI).png",
  "/HomeLogo/ANABEEB SERVICES.png",
  "/HomeLogo/INTERNATIONAL HEAVE EQUIPMENT.png",
  "/HomeLogo/JAYPEE ELECTRICALS TRADING.png",
  "/HomeLogo/POWER CLOUD TRADING.png",
  "/HomeLogo/UNITED GULF CEMENT COMPANY.png",
];

export default function LogoSlider() {
  const controls = useAnimation();

  // start animation
  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 35,
        ease: "linear",
      },
    });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-100 via-white to-orange-50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-orange-100 text-orange-700 font-semibold">
            <Users size={18} />
            Trusted Partners
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-black">
            Our Valued{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Client Partners
            </span>
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg">
            Trusted by leading companies across Qatar for over 32 years of
            excellence in industrial services
          </p>
        </motion.div>

        {/* LOGO SLIDER */}
        <div
          className="relative bg-white rounded-3xl shadow-xl border-2 border-orange-300 overflow-hidden"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={startAnimation}
        >
          <motion.div
            className="flex items-center gap-20 py-12"
            animate={controls}
            style={{ width: "200%" }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-32 flex items-center justify-center bg-white rounded-2xl border-2 border-gray-300 hover:border-orange-500 hover:shadow-2xl transition-all"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="max-h-24 max-w-48 object-contain opacity-80 hover:opacity-100 transition"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
