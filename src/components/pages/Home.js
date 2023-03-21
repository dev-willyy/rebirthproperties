import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.scss";
// import Certifications from "../Certifications";

function Home() {
    return (
        <Fragment>
            <main data-aos="fade-left" data-aos-duration="1000" className="main-wrapper-home">
                <section className="main-container-home">
                    <div data-aos="fade-left" data-aos-duration="1100" data-aos-easing="linear">
                        <div className="first-section-home">
                            <h1>Find The Ideal Home That Inspires You!</h1>
                            <p>Find the ideal property that matches your unique personality and lifestyle.</p>
                            <div>
                                <button>
                                    <Link to="/contact-us">Get Started</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        data-aos-easing="linear"
                        className="second-section-home"
                    >
                        <div className="property-one-home">
                            <Link to="/lands">
                                <span>Land</span>
                            </Link>
                        </div>
                        <div className="property-two-home">
                            <Link to="/houses">
                                <span>House</span>
                            </Link>
                        </div>
                        <div className="property-three-home">
                            <Link to="/rents">
                                <span>Rent</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            {/* <Certifications /> */}
        </Fragment>
    );
}

export default Home;
