import React from "react";

import TimelineSection from "../Component/AboutTimelineSection";
import AboutHero from "../Component/AboutHero";
import OrgChart from "../Component/OrgChart";
import GetDemoSection from "../Component/GetDemoSection";
import VisionMission from "../Component/AboutMisson";
import CertificateSlider from "../Component/CertificateSlider";
import AboutContent from "../Component/AboutContent";
import CompanyScope from "../Component/CompanyScope";


function About() {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <AboutContent />
     

      {/* <TimelineSection /> */}
      <GetDemoSection />
      {/* <CompanyScope /> */}
      <CompanyScope/>
      <OrgChart />
      <CertificateSlider />
    </>
  );
}

export default About;
