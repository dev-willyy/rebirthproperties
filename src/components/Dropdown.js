import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown(props) {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        props.onCloseMobileMenu();
    };

    return (
        <>
            <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} onClick={handleClick}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Dropdown;
