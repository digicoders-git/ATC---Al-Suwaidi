import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const clientLogos = [
  "/HomeLogo/gulfcore-logo.png",
  "/HomeLogo/CONTRACO.png",
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
  "/HomeLogo/AL ATHAR FOR TRADING AND CONTRACTING.png",
  "/HomeLogo/AL BUSTAN WORKSHOP.jpg",
  "/HomeLogo/AL CAT.jpg",
  "/HomeLogo/AL GHORAIRI & PARTNERS LTD.png",
  "/HomeLogo/AL KUWAITI STORES.png",
  "/HomeLogo/AL NAKHEEL AGRECULTURE.png",
  "/HomeLogo/AL QAMAR ELECTRICALS.jpg",
  "/HomeLogo/AL SAFA PLASTIC CO.png",
  "/HomeLogo/AL SHARQ ELECTRICALS.png",
  "/HomeLogo/AL SULAITHEEN AGRICULTURAL COMPLEX.png",
  "/HomeLogo/AAYAN.KW_BIG-f0de68f3.png",
  "/HomeLogo/ag middle.png",
  "/HomeLogo/agme_logo.jpeg",
  "/HomeLogo/arabian-mep-contracting-s-3293572.png",
  "/HomeLogo/ARBIAN AIRCON.jpeg",
  "/HomeLogo/blog-pc-83120230325114655179.jpg",
  "/HomeLogo/c-a-t-group-logo-png_seeklogo-366284.png",
  "/HomeLogo/cropped-cropped-cropped-INDOARAB-FILE-IMAGES-1-scaled-1024x237.png",
  "/HomeLogo/CYSTAL STUDIO.png",
  "/HomeLogo/DART ENGINEERING.webp",
  "/HomeLogo/DEBAJ INSDUSTRIAL SERVICES.jpg",
  "/HomeLogo/dopet_logo.jpg",
  "/HomeLogo/EthosLogo.png",
  "/HomeLogo/Falkland-Logo.webp",
  "/HomeLogo/gec.png",
  "/HomeLogo/GULF LIGHT'S.png",
  "/HomeLogo/hi power.png",
  "/HomeLogo/hydroserv-logo.webp",
  "/HomeLogo/IBA-Logo.png",
  "/HomeLogo/JMTC_LOGO_1.png",
  "/HomeLogo/LEMAX ELECTRICAL & MECHANICAL TRADING W.L.L..jpg",
  "/HomeLogo/Logo.png",
  "/HomeLogo/LogoDCI_Site.jpg",
  "/HomeLogo/LUMATRON.webp",
  "/HomeLogo/MAFJAR MARINE.png",
  "/HomeLogo/MAHA AL KHALEEJ.jpg",
  "/HomeLogo/manni-png.png",
  "/HomeLogo/MavenTradingAndInstallationWLLInQatar.webp",
  "/HomeLogo/MCEE-Horizontal-NICE.png",
  "/HomeLogo/ministry of interior (moi) qatar.png",
  "/HomeLogo/nbk-services.png",
  "/HomeLogo/nec-logo-new.png",
  "/HomeLogo/New-Project-1-e1646645532912.png",
  "/HomeLogo/OMRAN AL KHALEEJ TRAD.png",
  "/HomeLogo/power experts.png",
  "/HomeLogo/QIP-1.webp",
  "/HomeLogo/RABBAN MOTO.png",
  "/HomeLogo/rfqdocurhg8v7thcfea5.png",
  "/HomeLogo/SPARTAN READY MIX.jpg",
  "/HomeLogo/STRIKING TECHNOLOGIES.jpg",
  "/HomeLogo/Striking-01.png",
  "/HomeLogo/TECHNO TRUST ( RAJEN BAI).webp",
  "/HomeLogo/Veolia_logo.svg.png",
  "/HomeLogo/winmax-engineering-wll-logo.png"
];

export default function LogoSlider() {
  // Split logos into 3 rows with more logos each
  const logosPerRow = Math.ceil(clientLogos.length / 3);
  const row1Logos = clientLogos.slice(0, logosPerRow);
  const row2Logos = clientLogos.slice(logosPerRow, logosPerRow * 2);
  const row3Logos = clientLogos.slice(logosPerRow * 2);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-100 via-white to-orange-50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-7xl mx-auto"
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

        {/* 3-ROW LOGO SLIDER */}
        <div className="space-y-8">
          {/* Row 1 - Moving Left */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex items-center gap-5"
              animate={{
                x: ["0%", "-100%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear"
                }
              }}
              style={{ width: "200%" }}
            >
              {[...row1Logos, ...row1Logos].map((logo, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="max-h-16 max-w-40 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Moving Right */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex items-center gap-8"
              animate={{
                x: ["-100%", "0%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear"
                }
              }}
              style={{ width: "200%" }}
            >
              {[...row2Logos, ...row2Logos].map((logo, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="max-h-16 max-w-40 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 3 - Moving Left */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex items-center gap-8"
              animate={{
                x: ["0%", "-100%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear"
                }
              }}
              style={{ width: "200%" }}
            >
              {[...row3Logos, ...row3Logos].map((logo, index) => (
                <div
                  key={`row3-${index}`}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="max-h-16 max-w-40 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
