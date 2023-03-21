import React from "react";
import "../styles/Footer.scss";

function Footer() {
    return (
        <section className="footer-section">
            <div className="floating-icons-wrapper">
                <ul className="floating-icons-container">
                    <li>
                        <a href="https://www.google.com">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.google.com">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <footer>
                {/* <h3>Rebirth Properties, a Real Estate Company based in Nigeria</h3> */}
                <h3>Rebirth Properties &copy; 2023, All Rights Reserved.</h3>
            </footer>
            <aside>
                <a
                    href="https://wa.me/2347063555285"
                    className="floating-whatsapp-container"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-whatsapp floating-whatsapp-icon"></i>
                </a>
            </aside>
        </section>
    );
}

export default Footer;
