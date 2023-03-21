import React from "react";
import "../../styles/OurServices.scss";
import ourServices from "../ourServices";

function OurServices() {
    return (
        <main className="our-services-wrapper">
            <section className="our-services-section-one">
                <h2>Our Services Include:</h2>
            </section>

            <section className="our-services-section-two">
                {ourServices.map((service, index) => (
                    <div key={service.id}>
                        <h2>{service.firstHeaderText}</h2>
                        <h3>{service.headlineText}</h3>
                        <p>{service.pText} </p>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default OurServices;
