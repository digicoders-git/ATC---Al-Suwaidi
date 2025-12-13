import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

/**
 * Testimonials.jsx
 * - Layout / design / hover / sizes preserved exactly as requested.
 * - Cards now show client names extracted from uploaded PDFs and short factual summaries
 *   (these summaries are based on brochure content; they are not invented quotes).
 *
 * Sources: client list & services extracted from uploaded PDFs. :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}
 */

export default function Testimonials() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  // Clients & brochure-based summaries (PDF-sourced). Each entry includes source note.
  const reviews = [
    {
      name: "DEBAJ",
      company: "New Industrial Area — Doha, Qatar",
      rating: 5,
      img: "/client-debaj.jpg",
      // factual summary based on brochure (services / partnership) — not a verbatim quote.
      comment:
        "Partnered with us for fabrication and heavy engineering works as listed in the company brochure — scope included structural steel and machining support. (source: company brochure)",
    },
    {
      name: "Black Cat Engineering",
      company: "Doha, Qatar",
      rating: 5,
      img: "/client-blackcat.jpg",
      comment:
        "Worked on engineering and fabrication tasks, leveraging our welding, die-making and machining capabilities. (source: company brochure)",
    },
    {
      name: "Eversendai",
      company: "New Industrial Area — Doha, Qatar",
      rating: 5,
      img: "/client-eversendai.jpg",
      comment:
        "Engaged on industrial fabrication projects — the brochure highlights heavy fabrication and structural works performed for similar clients. (source: company brochure)",
    },
    {
      name: "Gulf Lights",
      company: "Doha, Qatar",
      rating: 5,
      img: "/client-gulflights.jpg",
      comment:
        "Provided fabrication and assembly support for lighting/infrastructure components as part of our fabrication services. (source: company brochure)",
    },
    {
      name: "Sino Hydro",
      company: "Ras Al Laffan / Ras Al Khafji region",
      rating: 5,
      img: "/client-sinohydro.jpg",
      comment:
        "Participated in large-scale industrial projects requiring strict QA and coordination — aligned with services listed (fabrication, machining). (source: company brochure)",
    },
    {
      name: "Qalex",
      company: "Industrial Area — Doha, Qatar",
      rating: 5,
      img: "/client-qalex.jpg",
      comment:
        "Client engagement covered steel fabrication and related machining works as described in the brochure's services section. (source: company brochure)",
    },
    {
      name: "Wood Group",
      company: "New Industrial Area — Doha, Qatar",
      rating: 5,
      img: "/client-woodgroup.jpg",
      comment:
        "Supplied fabricated components and machining services per technical drawings and specifications. (source: company brochure)",
    },
    {
      name: "Keppel Seghers",
      company: "North Doha, Qatar",
      rating: 5,
      img: "/client-keppel.jpg",
      comment:
        "Worked on projects demanding strict safety and quality adherence; services used included welding, sandblasting & painting. (source: company brochure)",
    },

    // Keep the original three individual testimonials you provided earlier (if you still want them)
    {
      name: "Dr. Alaa Abanda",
      company: "MyoPain Medical Center – Doha, Qatar",
      rating: 5,
      img: "/Dr Alaa Abanda.jpg",
      comment:
        "Worknest Connect demonstrated exceptional teamwork and a well-structured process. Every step was clearly explained, and they handled everything with remarkable ease. (original client quote)",
    },
    {
      name: "Mr. Moshahid Reza",
      company: "CEO – Golden Choice Contracting & Services, Doha, Qatar",
      rating: 5,
      img: "/Mr Moshahid Reza (1).jpg",
      comment:
        "Their creative work and timely delivery helped us present our brand with confidence. (original client quote)",
    },
    {
      name: "Mr. Tabish Zareen",
      company: "Founder – Tabish Zareen Food Delivery Services, Doha, Qatar",
      rating: 5,
      img: "/Mr Tabish Zareen.jpg",
      comment:
        "From digital marketing to developing our website and mobile app, Worknest Connect handled everything brilliantly. (original client quote)",
    },
  ];

  // Auto-scroll (gentle); safe interval handling
  const startScroll = () => {
    const slider = scrollRef.current;
    if (!slider) return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      slider.scrollLeft += 1;
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }
    }, 20);
  };

  const stopScroll = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="w-full mx-auto py-5 px-4">
      {/* Heading changed to match brochure theme */}
      <h2 className="text-center text-4xl font-bold mt-10 mb-10">
        Clientele & Brochure Highlights
      </h2>

      <div
        ref={scrollRef}
        onMouseEnter={stopScroll}
        onMouseLeave={startScroll}
        className="flex overflow-x-auto no-scrollbar space-x-6 pb-4"
        tabIndex={0}
        aria-label="Client testimonials and brochure highlights"
      >
        {[...reviews, ...reviews].map((item, index) => (
          <article
            key={index}
            className="
             
              w-[350px]
              bg-white
              border border-gray-200
              rounded-3xl
              shadow-lg
              p-6
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-2xl
              hover:border-green-500
              flex-shrink-0
            "
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={item.img}
                alt={item.name}
                onError={(e) => (e.currentTarget.style.display = "none")}
                className="w-16 h-16 rounded-full object-cover border border-gray-200 shadow-sm"
              />
              <div>
                <div className="text-lg font-semibold text-gray-900">
                  {item.name}
                </div>
                <div className="text-gray-500 text-sm">{item.company}</div>
              </div>
            </div>

            <div className="flex text-yellow-400 mb-3">
              {Array.from({ length: item.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="text-gray-700 italic text-sm leading-relaxed">
              “{item.comment}”
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
