import contactData from "../contactData";
import React from "react";
import "../../styles/ContactUs.scss";
import getInTouchImg from "../../assets/images/get-in-touch.png";

function ContactUs() {
    return (
        <main className="contact-page-wrapper">
            <section className="contact-container-one">
                <div className="container-one-first-div">
                    <h2>Say Hello</h2>
                    <p>
                        Do you want to make an enquiry, a complaint or you just want to know more about us? Then you're
                        on the right page. Send us a message right here or contact us on any of the channels listed
                        below.
                    </p>
                </div>
                <div className="container-one-second-div">
                    <img src={getInTouchImg} alt="get-in-touch-img" />
                </div>
            </section>

            <section className="contact-container-ommited">
                <div>
                    <h3>Drop a Message</h3>
                    <p>
                        Feel free to reach out by leaving us a message below. We promise to get back to you as soon as
                        possible.
                    </p>
                </div>
            </section>

            <section className="contact-container-two">
                <div className="contact-two-first-div">
                    <div className="form_container">
                        <form action="">
                            <label htmlFor="name">Name</label>
                            <input type="text" />

                            <label htmlFor="email">E-Mail</label>
                            <input type="text" />

                            <label htmlFor="message">Type Your Message</label>
                            <textarea cols="30" rows="10"></textarea>

                            <input type="submit" value="Send Message" onClick={(e) => e.preventDefault()} />
                        </form>
                    </div>
                </div>

                <div className="contact-two-second-div">
                    {contactData.map((contact, index) => (
                        <div key={contact.id}>
                            <span>
                                <img src={require(`../../assets/images/${contact.imgSrc}.png`)} alt={contact.altText} />
                            </span>
                            <span>
                                <a href={contact.link}>{contact.textContent}</a>
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="contact-container-three">
                <iframe
                    title="google-map-for-rebirthproperties"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Block%20D2,%20276%20HFP%20Eastline%20Complex,%20Abraham%20Adesanya,%20Ajah%20Lekki-Lekki&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                ></iframe>
            </section>
        </main>
    );
}

export default ContactUs;
