import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GetDemoSection() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/demo/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Demo request submitted successfully! We will contact you soon.');
        setFormData({ name: "", email: "", mobile: "", message: "" });
        setOpen(false);
      } else {
        toast.error('Failed to submit demo request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast.error('Error submitting request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Disable body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
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

      {/* ---- MODAL ---- */}
      {open && (
        <div
          className="modal-wrapper fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={() => setOpen(false)}
        >
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <div className="modal-box bg-white relative">
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <X size={24} />
              </button>

              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Request a Demo
              </h3>
              <p className="text-gray-600 mb-4 font-medium">
                Fill the details below and our team will contact you shortly.
              </p>

              <form
                className="space-y-5"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="label">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="input"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 font-extrabold rounded-xl shadow-lg transition-all ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-600 to-red-500 text-white hover:from-orange-700 hover:to-red-600'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* ---- STYLES ---- */}
      <style>{`
        .modal-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 8%;
          padding-100px
        }

        .modal-inner {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .modal-box {
          width: 100%;
          max-width: 480px;
          padding: 20px;
          border-radius: 16px;
          animation: fadeIn 0.25s ease;
        }

        .label {
          display: block;
          margin-bottom: 6px;
          font-size: 0.9rem;
          font-weight: 700; /* BOLD LABEL */
          color: #374151;
        }

        .input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 2px solid #d1d5db; /* BOLD BORDER */
          font-weight: 600; /* BOLD TEXT */
          font-size: 0.95rem;
          outline: none;
        }

        .input::placeholder {
          font-weight: 500;
          color: #9ca3af;
        }

        .input:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 2px rgba(249,115,22,.25);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(.97); }
          to { opacity: 1; transform: scale(1); }
        }

        /* ===== MOBILE SAFE ===== */
        @media (max-width: 640px) {
          .modal-wrapper {
            align-items: flex-start;
            padding-top: 96px;
          }

          .modal-box {
            max-height: calc(100vh - 120px);
            overflow-y: auto;
            border-radius: 14px;
          }
        }
      `}</style>
    </>
  );
}
