import React from "react";
import Slider from "../Component/Slider";
import TestimonialCarousel from "../Component/Home_testimonialCarousel";
import Services from "../Component/HomeServices";
import GetDemoSection from "../Component/GetDemoSection";
import QualityProcess from "../Component/HomeQualityProcess";
import HomeProjectsSlider from "../Component/HomeProject";

import Introduction from "../Component/Introduction";
import CooperativePartners from "../Component/OurClientPartnerships";

function Home() {
  return (
    <>
      <Slider />
      <Services />

      <QualityProcess />
      <Introduction />
      <HomeProjectsSlider />

      <GetDemoSection />
      
      <CooperativePartners/>
      <TestimonialCarousel />
    </>
  );
}

export default Home;
