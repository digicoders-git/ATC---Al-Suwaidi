import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  TrendingUp,
  Cog,
  Shield,
  Users,
  Award,
  Factory,
  Wrench,
  CheckCircle,
  Target,
  Star
} from "lucide-react";

const storyData = [
  {
    title: "Our Humble Beginnings",
    icon: Building,
    content: "In the early years, the company operated as a small but dedicated workshop, delivering fabrication works, mechanical repairs, and essential technical services. Every assignment—regardless of size—was treated with equal responsibility, attention to detail, and commitment to safety. Through consistent performance and dependable delivery, the company gradually earned the trust of its clients. These early relationships played a critical role in shaping Al Suwaidi Technical Center's reputation for integrity, workmanship, and technical competence."
  },
  {
    title: "Growing Alongside Industry",
    icon: TrendingUp,
    content: "As Qatar's industrial, construction, and transportation sectors expanded, the complexity and scale of projects increased. Al Suwaidi Technical Center responded by progressively enhancing its technical capabilities, expanding workshop facilities, and investing in skilled manpower and modern equipment. This period of growth was guided by a clear strategy — to develop in line with industry needs rather than rapid expansion. Over time, the company established a diversified and integrated service portfolio, enabling it to support a wide range of technical and engineering requirements under one roof.",
    services: [
      "Steel fabrication and engineering works",
      "Commercial vehicle body fabrication",
      "Precision machining and gear works",
      "Cabinet manufacturing for utility services",
      "Engine reconditioning and mechanical repairs",
      "Vehicle wheels repairing works",
      "Maintenance, Repair & Overhaul (MRO) services"
    ],
    note: "This integrated capability allows clients to reduce coordination efforts, minimize downtime, and maintain consistent quality across multiple services."
  },
  {
    title: "Engineering Excellence at the Core",
    icon: Cog,
    content: "Engineering discipline and technical accuracy form the backbone of every operation at Al Suwaidi Technical Center. The company follows a structured and methodical approach to ensure quality, safety, and long-term performance. Each project is executed through clearly defined stages:",
    stages: [
      "Detailed planning and technical assessment",
      "Engineering evaluation and design support",
      "Precision fabrication, machining, and repair",
      "Controlled assembly, finishing, and installation",
      "Inspection, testing, and quality verification"
    ],
    note: "This approach ensures that every solution delivered is suitable for demanding operational environments, where reliability and durability are critical."
  },
  {
    title: "Building Systems, Standards, and Trust",
    icon: Shield,
    content: "As operations expanded, Al Suwaidi Technical Center recognized the importance of formal systems and standardized procedures. In 2015, the company implemented structured quality management systems, safety protocols, and documented operating procedures to improve consistency, traceability, and compliance. These systems strengthened internal processes, improved service delivery, and enhanced client confidence. The company's commitment to quality was further reinforced in 2022 with the achievement of ISO 9001:2015 certification, confirming compliance with international quality management standards."
  },

  {
    title: "Our People and Expertise",
    icon: Users,
    content: "The strength of Al Suwaidi Technical Center lies in its skilled workforce and experienced leadership. Engineers, technicians, and workshop professionals work together with a shared commitment to quality, safety, and performance. Continuous skill development, practical training, and knowledge sharing ensure that the team remains capable of handling evolving technical challenges."
  },
  {
    title: "Commitment to Quality, Safety, and Reliability",
    icon: Award,
    content: "Quality and safety are integral to all operations. The company maintains strong quality control practices, safe working methods, and continuous monitoring to ensure compliance with client requirements and industry standards.",
    commitments: [
      "Delivering consistent quality across all services",
      "Maintaining safe and controlled work environments",
      "Providing practical and cost-effective engineering solutions",
      "Building long-term client partnerships based on trust"
    ]
  },
  {
    title: "Looking Forward",
    icon: Target,
    content: "With a strong foundation built since 1991, Al Suwaidi Technical Center continues to strengthen its technical capabilities, adopt improved processes, and expand services in line with future industry requirements. The company moves forward with the same values that defined its beginning — integrity, reliability, and engineering excellence—while remaining focused on delivering long-term value to its clients."
  }
];

export default function StoryComponent() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-orange-700 font-bold tracking-wide">
            OUR JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Building Excellence{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Since 1991
            </span>
          </h2>
        </motion.div>

        {/* Story Sections */}
        <div className="space-y-16">
          {storyData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white via-orange-50/20 to-red-50/10 rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg">
                  <section.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {section.title}
                  </h3>
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {section.content}
              </p>

              {/* Services List */}
              {section.services && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">Today, the company's services include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.services.map((service, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stages List */}
              {section.stages && (
                <div className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.stages.map((stage, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{stage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Industries List */}
              {section.industries && (
                <div className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.industries.map((industry, i) => (
                      <div key={i} className="bg-white/50 rounded-2xl p-6 border border-orange-100">
                        <h5 className="font-bold text-slate-900 mb-2">{industry.name}</h5>
                        <p className="text-slate-600 text-sm">{industry.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Commitments List */}
              {section.commitments && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">Key commitments include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.commitments.map((commitment, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{commitment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Note */}
              {section.note && (
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <p className="text-slate-700 italic">{section.note}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Star size={32} className="text-orange-200" />
            <h3 className="text-3xl font-bold">AL SUWAIDI TECHNICAL CENTER</h3>
            <Star size={32} className="text-orange-200" />
          </div>
          <p className="text-xl mb-4">Industrial Engineering & Technical Works</p>
          <p className="text-lg text-orange-100">Experience. Precision. Reliability.</p>
        </motion.div>
      </div>
    </section>
  );
}