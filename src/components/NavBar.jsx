import React, { useContext } from "react";
import "../styles/navbar.css";
import logo from "../images/RelatosDePapelLogo.png";
import { ShoppingCart } from "../components/ShoppingCart";
import { useCart } from "../hooks/useCart";
import { AppContext } from '../context/AppContext';
import { Link } from "react-router-dom";

export const NavBar = () => {
    
    const { isBagOpen, toggleBag } = useCart();
    const { searchQuery, setSearchQuery } = useContext(AppContext);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="navbar-container">
            <div className="navbar-inner-container-1">
                <Link to={"/home"}>
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <p className="app-name">Relatos de Papel</p>
            </div>

            <div className="navbar-inner-container-2">
                <div className="search-bar-container">
                    <input type="text" placeholder="Buscar" className="search-bar" value={searchQuery} onChange={handleSearch}/>
                    <span className="material-symbols-rounded">search</span>
                </div>
            </div>

            <div className="navbar-inner-container-3">
                <button className="navbar-singin-button">Mi cuenta</button>
                <div className="shopping-bag-wrapper">
                    <button
                        className="material-symbols-rounded"
                        id="shopping-bag-button"
                        onClick={toggleBag}
                    >
                        shopping_cart
                    </button>
                    <div className={`shopping-bag ${isBagOpen ? "open" : ""}`}>
                        <ShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    );
};
