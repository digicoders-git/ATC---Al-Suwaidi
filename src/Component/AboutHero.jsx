// src/components/AboutHero.jsx
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Factory,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceSooller from "./ServiceSooller";

export default function AboutHero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 mt-0 lg:mt-10">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden mt-20 sm:mt-5 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-md text-white px-6 py-3 text-sm font-semibold mb-8 border border-white/20 shadow-lg"
            >
              <Sparkles size={18} className="text-orange-200" />
              ESTABLISHED 1991 - LEADING INDUSTRIAL SOLUTIONS PROVIDER
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
            >
              ABOUT AL SUWAIDI
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-200 to-white mt-2">
                TECHNICAL CENTER
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl font-semibold text-orange-100 mb-4 max-w-4xl mx-auto"
            >
              Engineering Strength Built on People, Purpose, and Performance
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-5 leading-relaxed font-medium"
            >
              Since 1991, Al Suwaidi Technical Center has grown from a modest technical workshop into a trusted name in Qatar's engineering and industrial landscape. Our journey has been shaped not only by the services we deliver, but by the values we uphold, the people we invest in, and the relationships we build.
            </motion.p>

            {/* Additional Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              With over three decades of experience, we are proud to be recognized as a reliable engineering partner for clients across logistics, infrastructure, utilities, and industrial sectors. Our success is rooted in discipline, consistency, and a commitment to doing work that lasts.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col  sm:flex-row gap-4 justify-center  mt-10"
            >
              <a
                href="/ATC Company Profile.pdf"
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30  backdrop-blur-sm    bg-white text-amber-700 font-bold text-lg hover:bg-white/90 transition-all hover:border-white/50"
              >
                <span>VIEW COMPANY PROFILE</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
        <ServiceSooller />
      </header>
    </div>
  );
}
