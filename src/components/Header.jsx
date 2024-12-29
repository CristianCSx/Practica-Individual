import React from "react";
import "../styles/header.css";

import logo from "../images/RelatosDePapelLogo.png";
import { Link } from "react-router-dom";
export const Header = () => {
    return(
        <>
            <div className="header">
                <div className="navbar-inner-container-1">
                    <Link to={"/home"}>
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                    <p className="app-name">Relatos de Papel</p>
                </div>
            </div>
        </>
    );
};
