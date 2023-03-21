import React from "react";
import bestImg from "../assets/images/best-workplaces.png";
import oneSO from "../assets/images/1SO.png";
import "../styles/Certifications.scss";

function Certifications() {
  return (
    <section className="certifications-largest-wrapper">
      <div className="certifications-wrapper">
        <div className="certifications-container">
          <img src={bestImg} alt="best-workplace-img" />
          <img src={oneSO} alt="1SO-img" />
        </div>
      </div>
    </section>
  );
}

export default Certifications;
