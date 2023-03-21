import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

export function Button() {
    return (
        <Link to="/sign-in">
            <button className="btn hidden-btn">
                Sign In <i className="profile-icon fas fa-user"></i>
            </button>
        </Link>
    );
}
