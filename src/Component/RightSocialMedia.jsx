import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function RightSocialMedia() {
  const socials = [
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/share/1JqUbVkVuF/?mibextid=wwXIfr",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/alsuwaiditechnicalcenter",
      label: "Instagram",
    },
    {
      icon: FaWhatsapp,
      link: "https://wa.me/97451711104",
      label: "WhatsApp",
    },
    {
      icon: FaTwitter,
      link: "https://twitter.com/alsuwaiditechnical",
      label: "Twitter",
    },

  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {socials.map((item, idx) => {
        const Icon = item.icon;
        return (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="group relative w-12 h-12 rounded-xl
                       bg-gradient-to-br from-orange-500 via-orange-600 to-red-600
                       flex items-center justify-center
                       shadow-lg shadow-orange-500/40
                       hover:scale-110 transition-all duration-300"
          >
            {/* Icon */}
            <Icon className="text-white text-lg" />

            {/* Hover Tooltip */}
            <span
              className="absolute right-14 opacity-0 group-hover:opacity-100
                         bg-black text-white text-xs px-3 py-1 rounded-md
                         whitespace-nowrap transition-all duration-300"
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
