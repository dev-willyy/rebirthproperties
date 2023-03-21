import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Projects from "./components/pages/Projects";
import ContactUs from "./components/pages/ContactUs";
import SignIn from "./components/pages/SignIn";
import Rents from "./components/pages/Rents";
import Faqs from "./components/pages/Faqs";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import BuildVest from "./components/pages/BuildVest";
import Lands from "./components/pages/Lands";
import Houses from "./components/pages/Houses";
import OurServices from "./components/pages/OurServices";
import ScheduleInspection from "./components/pages/ScheduleInspection";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<AboutUs />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/lands" element={<Lands />} />
                <Route path="/build-vest" element={<BuildVest />} />
                <Route path="/houses" element={<Houses />} />
                <Route path="/rents" element={<Rents />} />
                <Route path="/our-services" element={<OurServices />} />
                <Route path="/schedule-inspection" element={<ScheduleInspection />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="*" caseSensitive={false} element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
