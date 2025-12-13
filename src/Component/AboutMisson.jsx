import { FaBullseye, FaFlagCheckered } from "react-icons/fa";

export default function VisionMission() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              {" "}Vision & Mission
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            Building Excellence Through Quality, Innovation & Reliability
          </p>
        </div>

        {/* Vision & Mission GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Vision */}
          <div className="group relative bg-white p-10 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-md mb-6">
                <FaBullseye className="text-3xl text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>

              <p className="text-gray-700 text-lg leading-relaxed">
                To be Qatar’s most trusted and innovative industrial engineering
                and fabrication partner — delivering world-class solutions with a
                commitment to quality, reliability, and safety. We strive to lead
                technological advancement and support Qatar’s national industrial
                development.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative bg-white p-10 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">

            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-md mb-6">
                <FaFlagCheckered className="text-3xl text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>

              <p className="text-gray-700 text-lg leading-relaxed">
                To provide exceptional engineering, fabrication, and technical
                services using advanced technology, skilled teams, and strict
                quality assurance. We aim to deliver durable, efficient, and
                cost-effective solutions while ensuring customer satisfaction,
                safety excellence, and sustainable growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
