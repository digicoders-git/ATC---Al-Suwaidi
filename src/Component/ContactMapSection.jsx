// components/ContactMapSimple.jsx
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope, FaMobile } from "react-icons/fa";



export default function ContactMapSimple() {
  const company = {
    name: "Al Suwaidi Technical Centre",
    address:
      "Street No. 18, Gate No. 35, P.O. Box – 40600, Industrial Area, Doha, Qatar",
    emails: ["pankajsuwaidigroup@gmail.com", "suwaidigroup@yahoo.com"],
    tel: "+974 44601087",
    fax: "+974 44601334",
    cell: "+974-51711104",
    service: "Industrial Engineering and Technical Works",
  };

  // Simple search-based embed. Replace with your exact embed URL if you have one.
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    company.address
  )}&z=15&output=embed`;

  return (
    <section className="pt-12 bg-white">
      <div className="max-w-8xl mx-auto px-4">
      
          {/* Map */}
          <div className="flex-1 rounded-lg h-120 overflow-hidden border border-gray-100 shadow">
            <div className="w-full" style={{ minHeight: 220 }}>
              {/* responsive 16:9 */}
              <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  title={`${company.name} - Map`}
                  src={mapSrc}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>


        </div>
     
    </section>
  );
}
