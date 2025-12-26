// components/ContactMapSimple.jsx
import React from "react";
import { FaMapMarkedAlt, FaExternalLinkAlt } from "react-icons/fa";

export default function ContactMapSimple() {
  const company = {
    name: "AL SUWAIDI TECHNICAL CENTER",
    address:
      "P.O. Box No: 40600, East Industrial Area, Zone: 57, Street No: 18, Gate No: 35, Doha, Qatar",

    // ✅ EXACT LOCATION (Doha Industrial Area – adjust if needed)
    lat: 25.258204,
    lng: 51.565618,
  };

  // ✅ EMBED WITH PIN (latitude + longitude)
  const mapEmbedSrc = `https://www.google.com/maps?q=${company.lat},${company.lng}&z=16&output=embed`;

  // ✅ OPEN GOOGLE MAPS WITH PIN
  const openMapUrl = `https://www.google.com/maps/search/?api=1&query=${company.lat},${company.lng}`;

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Location
          </h2>
          <p className="text-gray-600 mt-2">{company.address}</p>
        </div>

        {/* Map Card */}
        <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white">
          {/* MAP */}
          <div
            className="
              relative w-full
              h-[240px]
              sm:h-[300px]
              md:h-[380px]
              lg:h-[460px]
            "
          >
            <iframe
              title={`${company.name} Location`}
              src={mapEmbedSrc}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* FULL CLICK OVERLAY (Mobile Safe) */}
            <a
              href={openMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label="Open location in Google Maps"
            />
          </div>

          {/* Bottom Info Bar */}
          <div className="bg-white border-t border-gray-200 px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow">
                <FaMapMarkedAlt />
              </div>
              <div>
                <div className="font-bold text-gray-900">{company.name}</div>
                <div className="text-sm text-gray-600">
                  East Industrial Area, Zone: 57, Doha
                </div>
              </div>
            </div>

            <a
              href={openMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl 
                         bg-gradient-to-r from-orange-600 to-red-500 
                         text-white font-semibold shadow hover:opacity-90 transition"
            >
              Open in Google Maps
              <FaExternalLinkAlt size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
