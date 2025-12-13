import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function GetDemoSection() {
  const [open, setOpen] = useState(false);

  // disable body scroll when modal open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ---- GET DEMO SECTION ---- */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Experience Our Solution Live
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Book a personalized demo and see how our platform can transform your
            workflow.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="px-8 py-3 bg-white text-orange-600 font-semibold text-lg rounded-full shadow-xl hover:scale-105 transition-transform"
          >
            Get Demo
          </button>
        </div>
      </section>

      {/* ---- POPUP FORM MODAL ---- */}
      {open && (
        <div
          className="modal-wrapper fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)} // click on backdrop closes
        >
          {/* stopPropagation on inner modal so clicks inside don't close */}
          <div
            className="modal-inner mx-4 md:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative animate-desktopFadeIn">
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                aria-label="Close demo form"
              >
                <X size={24} />
              </button>

              {/* Heading */}
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Request a Demo
              </h3>
              <p className="text-gray-600 mb-6">
                Fill the details below and our team will contact you shortly.
              </p>

              {/* FORM */}
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: wire up submission (API/email)
                  setOpen(false);
                }}
              >
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                    rows="4"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-500 text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Styles: responsive wrapper + full-width mobile modal and slide down */}
      <style>{`
        /* Desktop: center modal (small fade-in) */
        .modal-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .modal-inner { width: 100%; max-width: 100%; display: flex; justify-content: center; }

        @keyframes desktopFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-desktopFadeIn {
          animation: desktopFadeIn 220ms ease;
        }

        /* Mobile: full-width, slide down from top, with top offset 100px */
        @media (max-width: 640px) {
          .modal-wrapper {
            align-items: flex-start; /* place modal at top */
            padding-top: 100px; /* 100px from top */
            padding-bottom: 0;
          }

          /* Make the modal truly full width on mobile (no side margins) */
          .modal-inner {
            margin-left: 0;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
          }

          .modal-inner > div {
            width: 100%;           /* occupy full width */
            max-width: 100%;       /* no max width constraint */
            margin: 0;             /* remove auto-centering margins */
            border-radius: 12px;   /* slightly reduced radius */
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            animation: slideDown 300ms ease;
          }

          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </>
  );
}
