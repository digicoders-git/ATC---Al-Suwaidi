// src/components/AboutHero.jsx
import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaCertificate,
  FaWarehouse,
} from "react-icons/fa";

/**
 * AboutHero.jsx
 * - Text-first hero for About page (no slider)
 * - Uses company details extracted from PDF
 * - Subtle animated background (bubbles + radial glows)
 * - Tailwind-friendly (utility classes) + small scoped CSS
 *
 * Edit copy, contact links, or CTA handlers as needed.
 */

export default function AboutHero() {
  const company = {
    name: "Al Suwaidi Technical Centre",
    tagline: "Industrial Engineering & Technical Works",
    established: "1992",
    years: "32+ Years Experience",
    iso: "ISO 9001:2015",
    facility: "10,000 SQM Facility",
    address:
      "Street No. 18, Gate No. 35, P.O. Box – 40600, Industrial Area, Doha, Qatar",
    tel: "+974 44601087",
    cell: "+974 51711104",
    emails: ["pankajsuwaidigroup@gmail.com", "suwaidigroup@yahoo.com"],
  };

  return (
<header className="relative overflow-hidden min-h-screen flex items-center 
bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white mt-[80px] lg:mt-0">

  {/* Soft Animated Background */}
  <div aria-hidden className="absolute inset-0 -z-10">
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl animate-slowFloat" />
    <div className="absolute top-24 -right-32 w-80 h-80 bg-red-500/30 rounded-full blur-3xl animate-slowFloat-delayed" />
  </div>

  {/* Subtle Grid Texture */}
  <div className="absolute inset-0 opacity-10">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="space-y-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg">
          <span className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse" />
          <span className="text-sm font-semibold tracking-wide text-white/90">
            ESTABLISHED {company.established}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white">
            {company.name}
          </span>
          <span className="block mt-3 text-xl sm:text-2xl font-semibold text-white/95">
            {company.tagline}
          </span>
        </h1>

        {/* Description */}
        <p className="text-white/90 max-w-2xl text-base sm:text-lg leading-relaxed">
          World-class steel fabrication, storage tankers, trailers, precision
          machining and turnkey industrial solutions — delivered with ISO-certified
          quality and a modern 10,000 sqm facility in Doha.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl 
            bg-white text-orange-600 font-semibold shadow-lg 
            hover:scale-[1.03] transition-transform"
          >
            Explore Services
          </a>

          <a
            href={`mailto:${company.emails[0]}`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl 
            border border-white/30 text-white font-semibold 
            hover:bg-white/10 transition"
          >
            Request Quote
          </a>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-xl">
          <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3">
            <FaCertificate className="text-orange-300 w-5 h-5" />
            <div>
              <div className="text-sm font-semibold">QUALITY</div>
              <div className="text-xs text-white/80">{company.iso}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3">
            <FaWarehouse className="text-amber-300 w-5 h-5" />
            <div>
              <div className="text-sm font-semibold">FACILITY</div>
              <div className="text-xs text-white/80">
                {company.facility}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3">
            <FaPhone className="text-orange-300 w-5 h-5" />
            <div>
              <div className="text-sm font-semibold">CONTACT</div>
              <div className="text-xs text-white/80">{company.tel}</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT CONTACT CARD */}
      <aside className="bg-white/10 backdrop-blur-xl rounded-3xl p-7 border border-white/20 shadow-2xl max-w-md mx-auto lg:mx-0">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-2xl shadow-lg">
            <FaMapMarkerAlt />
          </div>

          <div>
            <h3 className="text-lg font-bold">Visit Our Facility</h3>
            <p className="text-sm text-white/90 mt-1">
              {company.address}
            </p>

            <div className="mt-4 text-sm space-y-2 text-white/90">
              <div>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${company.tel}`} className="underline">
                  {company.tel}
                </a>
              </div>
              <div>
                <strong>Mobile:</strong>{" "}
                <a href={`tel:${company.cell}`} className="underline">
                  {company.cell}
                </a>
              </div>
              <div>
                <strong>E-mail:</strong>
                <div className="flex flex-col">
                  {company.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="underline">
                      {e}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  company.address
                )}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-orange-600 bg-white px-4 py-2 rounded-xl font-semibold text-center shadow hover:scale-[1.03] transition"
              >
                Open Maps
              </a>
              <a
                href="#contact"
                className="text-sm text-white border border-white/20 px-4 py-2 rounded-xl text-center hover:bg-white/10 transition"
              >
                Contact Page
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-white/60">
          CR No. 14258 • Managing Director: Rashid Abdullah Al Suwaidi
        </div>
      </aside>
    </div>
  </div>

  {/* Animations */}
  <style jsx>{`
    @keyframes slowFloat {
      0% { transform: translateY(0); }
      50% { transform: translateY(-18px); }
      100% { transform: translateY(0); }
    }
    @keyframes slowFloatDelayed {
      0% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
      100% { transform: translateY(0); }
    }
    .animate-slowFloat {
      animation: slowFloat 8s ease-in-out infinite;
    }
    .animate-slowFloat-delayed {
      animation: slowFloatDelayed 9s ease-in-out infinite;
    }
  `}</style>
</header>

  );
}
