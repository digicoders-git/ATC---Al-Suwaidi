import React from "react";

const partners = [
  { name: "Partner 1", logo: "/logo/1_20251218_195508_0000.png" },
  { name: "Partner 2", logo: "/logo/2_20251218_195508_0001.png" },
  { name: "Partner 3", logo: "/logo/3_20251218_195508_0002.png" },
  { name: "Partner 4", logo: "/logo/4_20251218_195508_0003.png" },
  { name: "Partner 5", logo: "/logo/5_20251218_195508_0004.png" },
  { name: "Partner 6", logo: "/logo/6_20251218_195508_0005.png" },
  { name: "Partner 7", logo: "/logo/7_20251218_195508_0006.png" },
  { name: "Partner 8", logo: "/logo/8_20251218_195508_0007.png" },
  { name: "Partner 9", logo: "/logo/9_20251218_195508_0008.png" },
  { name: "Partner 10", logo: "/logo/10_20251218_195508_0009.png" },
];

export default function CooperativePartners() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8b1d41] font-semibold">
            Qatar Technical
          </p>
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mt-3">
            Cooperative Partners
          </h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-[#8b1d41] mx-auto mt-4 sm:mt-5 rounded-full" />
        </div>

        {/* Partners Grid */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-4
            sm:gap-6
            md:gap-8
            lg:gap-10
          "
        >
          {partners.map((item, index) => (
            <div
              key={index}
              className="
                group relative
                h-[90px]
                sm:h-[110px]
                md:h-[130px]
                lg:h-[150px]
                rounded-xl sm:rounded-2xl
                overflow-hidden
                bg-white/80 backdrop-blur
                border border-gray-200
                shadow-sm
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-transparent via-white/40 to-transparent" />

              <img
                src={item.logo}
                alt={item.name}
                className="
                  absolute inset-0 w-full h-full
                  object-contain
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
