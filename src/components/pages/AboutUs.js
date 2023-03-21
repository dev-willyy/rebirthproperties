import React from "react";
import "../../styles/AboutUs.scss";
import { ourOffers } from "../aboutData";
// import trophyImg from "../../assets/images/star-trophy.png";
// import { ourOffers, ourValues, ourAwards, ourPartners } from "../aboutData";
// import YoutubeEmbed from "../YoutubeEmbed";

const AboutUs = () => {
    return (
        <main className="about-page-wrapper">
            <section className="about-section-one">
                {ourOffers.map((offer, index) => (
                    <div key={offer.id}>
                        <h2>{offer.title} </h2>
                        <p>{offer.textContent} </p>
                    </div>
                ))}
            </section>
            {/* <section className="about-section-two">
                {ourValues.map((value, index) => (
                    <div key={value.id}>
                        <figure>
                            <img
                                height="60"
                                src={require(`../../assets/images/${value.iconSrc}.png`)}
                                alt={value.altText}
                            />
                        </figure>
                        <h4>{value.title} </h4>
                        <p>{value.textContent} </p>
                    </div>
                ))}
            </section>
            <section className="about-section-three">
                {ourAwards.map((award, index) => (
                    <div key={award.id}>
                        <picture>
                            <img src={trophyImg} alt="star-trophy-img" />
                        </picture>
                        <div>
                            <h4>{award.title}</h4>
                            <p>{award.awardYear}</p>
                            <p>{award.textContent}</p>
                        </div>
                    </div>
                ))}
            </section>
            <section className="about-section-four">
                <div>
                    <div>
                        <h3>Success Stories</h3>
                        <p>Our clients are at the heart of everything we do; their feedback is gold to us.</p>
                    </div>
                </div>
                <YoutubeEmbed embedId="pVE92TNDwUk" />
            </section> */}
            {/* <section className="about-section-five">
                <div>
                    <h3>We're in good company</h3>
                    <p>Strategic partnerships for better results</p>
                </div>
                <div>
                    {ourPartners.map((partner, index) => (
                        <picture id={partner.id}>
                            <img src={require(`../../assets/images/${partner.imgSrc}.png`)} alt={partner.altText} />
                        </picture>
                    ))}
                </div>
            </section> */}
        </main>
    );
};

export default AboutUs;
