import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaRuler,
  FaBuilding,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    title: " Electrical Service Cabinet",
    type: "Utility-Approved Electrical Enclosure",
    image: "/Electrical Service Cabinet.png",
    description:
      "The Electrical Service Cabinet is designed to safely house electrical service connections and associated components. It provides protection against environmental exposure while allowing easy access for inspection, servicing, and meter reading. The cabinet is suitable for outdoor installation and engineered for long-term reliability in utility and infrastructure environments.",
    features: [
      "Durable aluminium construction",
      "Secure lockable access door",
      "Proper ventilation for heat dissipation",
      "Suitable for outdoor electrical installations",
    ],
    dimensions: "830 × 600 × 230 mm",
    applications:
      "Residential buildings, commercial facilities, utility and infrastructure projects",
    color: "from-orange-500 to-red-500",
  },
  {
    title: " Water Service Cabinet – 1\" Dia",
    type: "Single Water Meter Cabinet",
    image: "/Water Service Cabinet 1 Dia copy.png",
    description:
      "The Water Service Cabinet – 1\" Dia is designed to house a single domestic water meter and service pipe. It provides protection from damage while allowing clear visibility and easy access for inspection and maintenance.",
    features: [
      "Designed for single water meter installation",
      "Safe and secure enclosure",
      "Easy inspection and access",
      "Weather-resistant finish",
    ],
    dimensions: "830 × 300 × 230 mm for 15-42mm Dia.Pipe",
    applications: "Individual residential water connections",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: " Water Service Cabinet – 2\" Dia",
    type: "High-Capacity Water Meter Cabinet",
    image: "/Water service cabinet 2 Dia copy.png",
    description:
      "The Water Service Cabinet – 2\" Dia is suitable for larger water service connections requiring higher flow capacity. The cabinet provides sufficient internal space for larger service pipes while ensuring protection and accessibility.",
    features: [
      "Suitable for larger diameter service pipes",
      "Strong and durable construction",
      "Utility-compliant design",
      "Designed for outdoor use",
    ],
    dimensions: "750 × 650 × 300 mm 54mm Dia.Pipe",
    applications: "Commercial buildings and high-capacity water connections",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: " Multi Water Meter Cabinet – 2 Nos",
    type: "Dual Water Meter Cabinet",
    image: "/Multi water Meter cabinet 3 Nos.png",
    description:
      "The Water Meter Cabinet – 2 Nos is designed to accommodate two water meters in one enclosure. It ensures organized meter placement, safe operation, and easy access for utility management.",
    features: [
      "Houses two water meters securely",
      "Organized internal layout",
      "Clear meter visibility",
      "Durable outdoor construction",
    ],
    dimensions: "662 × 850 × 230 mm",
    applications: "Duplex residences and shared connections",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: " Multi Water Meter Cabinet – 3 Nos",
    type: "Triple Water Meter Cabinet",
    image: "/Multi water Meter cabinet 3 Nos.png",
    description:
      "The Water Meter Cabinet – 3 Nos offers a compact and organized solution for housing three water meters within a single cabinet. It is designed for safe operation and efficient meter management.",
    features: [
      "Accommodates three water meters",
      "Secure and ventilated enclosure",
      "Durable aluminium body",
      "Easy access for maintenance",
    ],
    dimensions: "884 × 850 × 230 mm",
    applications: "Residential compounds and small multi-unit buildings",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: " Multi Water Meter Cabinet – 4 Nos",
    type: "Multi-Unit Water Meter Cabinet",
    image: "/Multi Water Meter cabinet 4 Nos.png",
    description:
      "The Water Meter Cabinet – 4 Nos is designed for multi-dwelling water service installations. It provides an organized and space-efficient solution while maintaining safety and durability.",
    features: [
      "Suitable for multiple water connections",
      "Compact and organized design",
      "Secure locking system",
      "Long service life",
    ],
    dimensions: "1100 × 850 × 200 mm",
    applications: "Apartment buildings and residential complexes",
    color: "from-red-500 to-pink-500",
  },
];

export default function ServiceCabinetCards() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Hero Section */}

      {/* Cabinet Cards */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative"
          >
            {/* Animated Background Glow */}
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
            />

            <div
              className={`relative grid lg:grid-cols-2 rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500 ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image Section */}
              <div
                className={`relative p-4 bg-gray-50 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="bg-white rounded-xl shadow-md p-3 h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain rounded-lg transition-transform duration-700 group-hover:scale-105 bg-white p-2"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' alignment-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%239ca3af'%3ECabinet Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`p-8 lg:p-12 space-y-6 flex flex-col justify-center ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-4"
                  >
                    <FaShieldAlt size={12} />
                    {item.type}
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                  >
                    {item.title}
                  </motion.h2>
                </div>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 leading-relaxed text-lg"
                >
                  {item.description}
                </motion.p>

                {/* Features Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid sm:grid-cols-2 gap-3"
                >
                  {item.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <FaCheckCircle
                        className={`text-orange-500 mt-1 flex-shrink-0`}
                        size={16}
                      />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Specifications */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200"
                >
                  <div className="flex items-start gap-3">
                    <FaRuler className="text-orange-500 mt-1" size={16} />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Dimensions
                      </p>
                      <p className="text-sm text-gray-600">{item.dimensions}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaBuilding className="text-orange-500 mt-1" size={16} />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Applications
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.applications}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}