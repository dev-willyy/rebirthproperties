import React from "react";
import { Link } from "react-router-dom";
import "../../styles/App.scss";
import "../../styles/Lands.scss";
import ourLandDetails from "../ourLandDetails";

const Lands = () => {
    return (
        <main className="lands-wrapper">
            <section className="lands-parent-container">
                {ourLandDetails.map((landDetail, index) => (
                    <>
                        <div className="lands-child-container first" key={landDetail.id}>
                            <figure> </figure>
                            <h3>{landDetail.headerOneTextOne}</h3>
                            <h4>{landDetail.headerOneTextTwo}</h4>
                            <p>{landDetail.pTextOne}</p>
                            <div>
                                <Link to="/contact-us">
                                    <button>{landDetail.btnText}</button>
                                </Link>
                            </div>
                        </div>

                        <div className="lands-child-container second">
                            <figure></figure>
                            <h3>{landDetail.headerTwoTextOne}</h3>
                            <h4>{landDetail.headetTwoTextTwo}</h4>
                            <p>{landDetail.pTextTwo}</p>
                            <div>
                                <Link to="/contact-us">
                                    <button>{landDetail.btnText}</button>
                                </Link>
                            </div>
                        </div>
                    </>
                ))}
            </section>
        </main>
    );
};

export default Lands;
