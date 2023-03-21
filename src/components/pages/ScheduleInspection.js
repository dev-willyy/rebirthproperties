import React from "react";
import "../../styles/App.scss";
import "../../styles/ScheduleInspection.scss";
import scheduleImg from "../../assets/images/schedule-illustration.png";

const ScheduleInspection = () => {
    return (
        <main className="schedule-inspection-wrapper">
            <section>
                <div className="schedule-container-one">
                    <h2>Schedule an Inspection</h2>
                    <p>
                        Take the first step towards a secure and profitable investment. We understand that seeing is
                        believing and our sales team is on hand to give you a tour. All you need to do is fill in the
                        form below and specify your preferred date and time. Our sales team will be in contact with you
                        shortly.
                    </p>
                </div>
                <div className="schedule-container-two">
                    <div className="schedule-img-container">
                        <img src={scheduleImg} alt="Schedule an Appointment Img" />
                    </div>
                    <div className="schedule-form-wrapper">
                        <div className="form_container schedule-form-container">
                            <form action="" className="schedule-form">
                                <label htmlFor="name">Name</label>
                                <input type="text" />

                                <label htmlFor="tel">Phone Number</label>
                                <input type="text" />

                                <label htmlFor="email">E-Mail Address</label>
                                <input type="text" />

                                <label htmlFor="text">Date</label>
                                <input className="schedule-date-input" type="text" placeholder="Day / Month" />

                                <label htmlFor="text">Time for Inspection</label>
                                <input type="text" />

                                <input type="submit" value="Submit" onClick={(e) => e.preventDefault()} />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ScheduleInspection;
