import React from "react";
import Slider from "../Component/Slider";
import TestimonialCarousel from "../Component/Home_testimonialCarousel";
import Services from "../Component/HomeServices";
import GetDemoSection from "../Component/GetDemoSection";
import QualityProcess from "../Component/HomeQualityProcess";
import HomeProjectsSlider from "../Component/HomeProject";
import CompanyScope from "../Component/CompanyScope";
import Introduction from "../Component/Introduction";

function Home() {
  return (
    <>
      <Slider />
      <Services />

      <QualityProcess />
      <Introduction />
      <HomeProjectsSlider />

      <GetDemoSection />
      <CompanyScope />
      <TestimonialCarousel />
    </>
  );
}

export default Home;
