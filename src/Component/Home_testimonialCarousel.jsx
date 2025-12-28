import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "DEBAJ",
      company: "Doha, Qatar",
      rating: 5,
      img: "/client-debaj.jpg",
      comment:
        "Partnered with us for fabrication and heavy engineering works as listed in the company brochure — scope included structural steel and machining support. ",
    },
    {
      name: "Black Cat Engineering",
      company: "Doha, Qatar",
      rating: 5,
      img: "/client-blackcat.jpg",
      comment:
        "Worked on engineering and fabrication tasks, leveraging our welding, die-making and machining capabilities. ",
    },
    {
      name: "Eversendai",
      company: "Doha, Qatar",
      rating: 5,
      img: "/client-eversendai.jpg",
      comment:
        "Engaged on industrial fabrication projects — the brochure highlights heavy fabrication and structural works performed for similar clients.",
    },
    {
      name: "Gulf Lights",
      company: "Doha, Qatar",
      rating: 5,
      img: "/client-gulflights.jpg",
      comment:
        "Provided fabrication and assembly support for lighting/infrastructure components as part of our fabrication services. ",
    },
    {
      name: "Sino Hydro",
      company: "Doha, Qatar",
      rating: 5,
      img: "/client-sinohydro.jpg",
      comment:
        "Participated in large-scale industrial projects requiring strict QA and coordination — aligned with services listed (fabrication, machining). ",
    },
    {
      name: "Qalex",
      company: "Doha, Qatar",
      rating: 5,
      img: "/client-qalex.jpg",
      comment:
        "Client engagement covered steel fabrication and related machining works as described in the brochure's services section.",
    },
    {
      name: "Wood Group",
      company: "Doha, Qatar",
      rating: 5,
      img: "/client-woodgroup.jpg",
      comment:
        "Supplied fabricated components and machining services per technical drawings and specifications. ",
    },
    {
      name: "Keppel Seghers",
      company: "Doha, Qatar",
      rating: 5,
      img: "/client-keppel.jpg",
      comment:
        "Worked on projects demanding strict safety and quality adherence; services used included welding, sandblasting & painting. ",
    },
         { name: "AUTO XPERT",
      company: "Doha, Qatar",
      rating: 5,
      img: "/client-eversendai.jpg",
      comment:
        "Engaged on industrial fabrication projects — the brochure highlights heavy fabrication and structural works performed for similar clients",
    },
    
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Clientele &{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Brochure Highlights
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by leading engineering and industrial organizations across Qatar.
          </p>
        </div>

        {/* Grid layout (NO SCROLL) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <article
              key={index}
              className="
                bg-white
                border border-gray-200
                rounded-3xl
                p-8
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all duration-300
                flex flex-col
              "
            >
              {/* Client info */}
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={item.img}
                  alt={item.name}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className="w-14 h-14 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex text-yellow-400 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-sm leading-relaxed italic flex-1">
                “{item.comment}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
