import React from "react";
import HomeSection from "./HomeSection/HomeSection";
import { patientSections } from "../../../../config/lists.config";
import "./Sections.css";

const Sections = (props) => {
  return (
    <div className="patient-sections">
      {patientSections.map((section) => (
        <HomeSection
          key={section.header}
          link={section.link}
          img={section.img}
          header={section.header}
        />
      ))}
    </div>
  );
};

export default Sections;
