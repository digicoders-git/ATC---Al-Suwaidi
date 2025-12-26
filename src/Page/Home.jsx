import React from "react";
import Slider from "../Component/Slider";
import TestimonialCarousel from "../Component/Home_testimonialCarousel";
import Services from "../Component/HomeServices";
import GetDemoSection from "../Component/GetDemoSection";
import QualityProcess from "../Component/HomeQualityProcess";
import Introduction from "../Component/Introduction";

import GroupCompanies from "../Component/GroupComapny";
import LogoSlider from "../Component/LogoSlider";

function Home() {
  return (
    <>
      <Slider />
      <Services />

      <QualityProcess />
      <Introduction />
      <TestimonialCarousel />
      <GroupCompanies/>
      <GetDemoSection />
<LogoSlider/>
     
    </>
  );
}

export default Home;
