import React from "react";
import Slider from "../Component/Slider";
import TestimonialCarousel from "../Component/Home_testimonialCarousel";
import Services from "../Component/HomeServices";
import GetDemoSection from "../Component/GetDemoSection";
import QualityProcess from "../Component/HomeQualityProcess";
import HomeProjectsSlider from "../Component/HomeProject";

function Home() {
  return (
    <>
      <Slider />
      <Services />

      <QualityProcess />
      <HomeProjectsSlider />
      <GetDemoSection />
      <TestimonialCarousel />
    </>
  );
}

export default Home;
