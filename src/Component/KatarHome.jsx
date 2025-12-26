import React from "react";

function KatarHome() {
  return (
    <div className="relative w-screen h-228">
      {/* Background Image */}
      <img
        src="/katar old image.jpg"
        alt="Qatar Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center pt-50 text-white bg-black/30">
        {/* Logo */}
        <img
          src="/Logo1.png" // apna logo path yahan daalein
          alt="Logo"
          className="w-50 h-auto mb-20"
        />

        {/* Text */}
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Built on Qatar’s Ground, Trusted from 1991
        </h1>

        <p className="text-lg md:text-2xl mt-2 text-center">
          متجذرون في أرض قطر، محل ثقة منذ عام 1991
        </p>
      </div>
    </div>
  );
}

export default KatarHome;
