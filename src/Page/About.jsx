import React from "react";

import TimelineSection from "../Component/AboutTimelineSection";

import AboutHero from "../Component/AboutHero";
import OrgChart from "../Component/OrgChart";
import GetDemoSection from "../Component/GetDemoSection";
import VisionMission from "../Component/AboutMisson";
import CertificateSlider from "../Component/CertificateSlider";

function About() {
  return (
    <>
      <AboutHero />
      <VisionMission />

      <TimelineSection />
      <GetDemoSection />
      <OrgChart />
      <CertificateSlider/>
    </>
  );
}

export default About;
