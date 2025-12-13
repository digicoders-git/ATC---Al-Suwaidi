import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import GetQouto from "./GetQouto";
import Services from "./Services";
import Projects from "./Project";
import StielsBase from "./StielsBase";
import ComercialVecal from "./ComercialVecal";
import VecalRepining from "./VecalRepining";
import Greasmarking from "./Greasmarking";
import BAringServices from "./BAringServices";
import CabinateManiFcreing from "./CabinateManiFcreing";
import VecalEngingRepainrg from "./VecalEngingRepainrg";
import ServicesPage from "./StielsBase";
import CommercialVehicleBodiesPage from "./ComercialVecal";
import VehicleEngineRepairPage from "./VecalEngingRepainrg";
import GearsMakingMillingPage from "./Greasmarking";
import BearingsRemovalFittingPage from "./BAringServices";
import VehicleWheelsRepairPage from "./VecalRepining";
import CabinetsManufacturingPage from "./CabinateManiFcreing";
import GetQuotePage from "./GetQouto";
import ScrollToTop from "../Component/ScrollToTop";

function Router() {
  return (
    <>
    <ScrollToTop />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/get-quote" element={<GetQuotePage />} />
        <Route path="/services/steel-fabrication" element={<ServicesPage />} />
        <Route
          path="/services/vehicle-bodies"
          element={<CommercialVehicleBodiesPage />}
        />
        <Route
          path="/services/engine-repair"
          element={<VehicleEngineRepairPage />}
        />
        <Route
          path="/services/gears-milling"
          element={<GearsMakingMillingPage />}
        />

        <Route
          path="/services/bearings"
          element={<BearingsRemovalFittingPage />}
        />

        <Route
          path="/services/wheels-repair"
          element={<VehicleWheelsRepairPage />}
        />
        <Route
          path="/services/cabinets"
          element={<CabinetsManufacturingPage />}
        />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default Router;
