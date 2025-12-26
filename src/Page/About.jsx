import React, { useEffect } from "react";

import TimelineSection from "../Component/AboutTimelineSection";
import AboutHero from "../Component/AboutHero";
import OrgChart from "../Component/OrgChart";
import GetDemoSection from "../Component/GetDemoSection";
import VisionMission from "../Component/AboutMisson";
import CertificateSlider from "../Component/CertificateSlider";
import AboutContent from "../Component/AboutContent";
import CompanyScope from "../Component/CompanyScope";
import CustomerCommitment from "../Component/CustomerCommitment";
import TeamChart from "../Component/TeamChart";
import LeadershipMessages from "../Component/LeadershipMessages";
import { useLocation } from "react-router-dom";
import WhoWeAre from "../Component/AboutourValue";

function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "certificate") {
      const el = document.getElementById("certificate");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 300);
      }
    }
  }, [location]);
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <VisionMission />
      <CustomerCommitment />
      <TeamChart />
      <LeadershipMessages />
      {/* <AboutContent /> */}

      {/* <TimelineSection /> */}
      {/* <GetDemoSection /> */}
      {/* <CompanyScope /> */}
      {/* <CompanyScope /> */}
      <CertificateSlider />
      <OrgChart />
      
    </>
  );
}

export default About;
