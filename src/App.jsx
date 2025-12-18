import "./App.css";
import ModernFooter from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Router from "./Page/Router";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import RightSocialMedia from "./Component/RightSocialMedia";
import { TranslateProvider } from "./Component/GoogleTranslateProvider";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <TranslateProvider>
        <Router />
        <Navbar />
        <ModernFooter />

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} className="group-hover:animate-bounce" />
          </button>
        )}
        <RightSocialMedia />
      </TranslateProvider>
    </>
  );
}

export default App;
