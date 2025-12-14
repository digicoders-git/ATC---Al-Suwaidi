import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaIndustry,
  FaPaintRoller,
  FaCogs,
  FaTruck,
  FaWrench,
  FaBoxes,
  FaHardHat,
  FaTools,
  FaArrowLeft,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const SERVICES = [
  {
    id: "steel-fab",
    title: "Steel Fabrication Works",
    icon: FaIndustry,
    short: "Heavy & medium structural steel works — sheds, warehouses & assemblies.",
    details: "Fabrication of heavy and medium structural steel works, warehouse sheds, structural assemblies and onsite installation.",
    category: "Fabrication",
    fullDescription: "Our steel fabrication services encompass the complete spectrum of heavy and medium structural steel works. We specialize in designing and manufacturing warehouse sheds, industrial buildings, and complex structural assemblies. Our experienced team ensures precision in every cut, weld, and assembly, delivering structures that meet the highest standards of safety and durability.",
    features: [
      "Heavy structural steel fabrication",
      "Warehouse and industrial sheds",
      "Structural assemblies and frameworks",
      "On-site installation services",
      "Quality assurance and testing",
      "Custom design solutions"
    ]
  },
  {
    id: "sandblast-paint",
    title: "Sandblasting & Painting",
    icon: FaPaintRoller,
    short: "Surface preparation, sandblasting, epoxy coating & protective finishes.",
    details: "Surface treatment including sandblasting, epoxy coating and finishing works to industry standards.",
    category: "Finishing",
    fullDescription: "Our surface treatment services provide comprehensive protection for your metal structures. We use advanced sandblasting techniques to prepare surfaces, followed by high-quality epoxy coatings and protective finishes that ensure long-lasting durability against corrosion and environmental factors.",
    features: [
      "Professional sandblasting services",
      "Epoxy coating applications",
      "Protective finish systems",
      "Surface preparation expertise",
      "Corrosion protection solutions",
      "Industry standard compliance"
    ]
  },
  {
    id: "machining",
    title: "Machining Works",
    icon: FaCogs,
    short: "Lathe, milling, shearing, bending, rolling & precision machining.",
    details: "Complete machining services: lathe, milling, shearing, bending, rolling, punching and press operations.",
    category: "Machining",
    fullDescription: "Our state-of-the-art machining facility offers comprehensive precision manufacturing services. From traditional lathe and milling operations to advanced CNC machining, we deliver components with exceptional accuracy and finish quality for various industrial applications.",
    features: [
      "Precision lathe operations",
      "CNC milling services",
      "Metal shearing and cutting",
      "Bending and forming",
      "Rolling operations",
      "Punching and press work"
    ]
  },
  {
    id: "vehicle-body",
    title: "Vehicle Body Works",
    icon: FaTruck,
    short: "Road tankers, trailers, flatbeds & dry cargo transport bodies.",
    details: "Design & fabrication of road tankers, flatbed trailers and container carriers.",
    category: "Transportation",
    fullDescription: "We specialize in designing and manufacturing robust vehicle bodies for the transportation industry. Our expertise includes road tankers for liquid transport, heavy-duty flatbed trailers, and specialized container carriers built to withstand the demands of commercial transportation.",
    features: [
      "Road tanker fabrication",
      "Flatbed trailer construction",
      "Container carrier bodies",
      "Custom transport solutions",
      "DOT compliance standards",
      "Heavy-duty construction"
    ]
  },
  {
    id: "welding",
    title: "Welding & Brazing",
    icon: FaWrench,
    short: "Certified welding & brazing for structural and pressure equipment.",
    details: "Welding and brazing works with QA/QC procedures for critical fabrications.",
    category: "Fabrication",
    fullDescription: "Our certified welding professionals provide expert welding and brazing services for critical applications. We maintain strict QA/QC procedures and work with various materials and welding processes to ensure structural integrity and safety in all our fabrications.",
    features: [
      "Certified welding professionals",
      "Multiple welding processes",
      "Pressure vessel welding",
      "Structural welding services",
      "Quality control procedures",
      "Material compatibility expertise"
    ]
  },
  {
    id: "cabinet-trays",
    title: "Cabinet & Tray Manufacturing",
    icon: FaBoxes,
    short: "SS cable trays, meter cabinets & customized enclosures.",
    details: "Design & manufacture of cabinets, cable trays and utility housings.",
    category: "Cabinets",
    fullDescription: "We manufacture high-quality stainless steel cable trays, electrical meter cabinets, and custom enclosures for various industrial and commercial applications. Our products are designed for durability, functionality, and compliance with electrical safety standards.",
    features: [
      "Stainless steel cable trays",
      "Electrical meter cabinets",
      "Custom enclosure design",
      "Utility housing solutions",
      "Electrical safety compliance",
      "Corrosion-resistant materials"
    ]
  },
  {
    id: "structural-sheds",
    title: "Structural Steel Sheds",
    icon: FaHardHat,
    short: "Industrial sheds & steel buildings with erection services.",
    details: "Structural steel shed fabrication, site erection and finishing works.",
    category: "Construction",
    fullDescription: "Our structural steel shed services provide complete solutions from design to erection. We fabricate industrial-grade steel buildings and provide professional site erection services, ensuring your facility is built to last with proper engineering and construction practices.",
    features: [
      "Industrial shed design",
      "Steel building fabrication",
      "Professional site erection",
      "Foundation consultation",
      "Weather-resistant construction",
      "Turnkey project delivery"
    ]
  },
  {
    id: "custom-fab",
    title: "Custom Fabrication",
    icon: FaTools,
    short: "Tanks, piping, platforms & bespoke industrial solutions.",
    details: "Custom-built storage tanks, piping assemblies and special fabrications.",
    category: "Custom",
    fullDescription: "Our custom fabrication services cater to unique industrial requirements. We design and build storage tanks, complex piping assemblies, work platforms, and specialized equipment tailored to your specific needs and operational requirements.",
    features: [
      "Custom storage tank design",
      "Complex piping assemblies",
      "Work platform construction",
      "Specialized equipment fabrication",
      "Engineering consultation",
      "Project-specific solutions"
    ]
  },
];

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-orange-600 hover:text-orange-700">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden mt-20 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-400/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-red-500/30 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition"
          >
            <FaArrowLeft /> Back to Services
          </Link>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center">
              <Icon className="text-white text-2xl" />
            </div>
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm font-semibold text-white mb-2">
                {service.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white">
                {service.title}
              </h1>
            </div>
          </div>
          
          <p className="text-xl text-orange-100 max-w-3xl">
            {service.short}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Service Overview
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {service.fullDescription}
                </p>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Key Features & Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Get a Quote
                </h3>
                <p className="text-slate-600 mb-6">
                  Interested in this service? Contact us for a detailed quote and consultation.
                </p>
                <div className="space-y-4">
                  <Link 
                    to="/contact"
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-500 text-white font-bold hover:scale-105 transition"
                  >
                    <FaEnvelope /> Request Quote
                  </Link>
                  <a 
                    href="tel:+1234567890"
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition"
                  >
                    <FaPhone /> Call Now
                  </a>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Related Services
                </h3>
                <div className="space-y-4">
                  {SERVICES.filter(s => s.id !== serviceId && s.category === service.category)
                    .slice(0, 3)
                    .map(relatedService => {
                      const RelatedIcon = relatedService.icon;
                      return (
                        <Link 
                          key={relatedService.id}
                          to={`/services/${relatedService.id}`}
                          className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                            <RelatedIcon className="text-white text-sm" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-sm">
                              {relatedService.title}
                            </h4>
                            <p className="text-xs text-slate-500">
                              {relatedService.category}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}