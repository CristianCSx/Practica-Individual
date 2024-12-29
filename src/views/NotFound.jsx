import React from 'react';
import { Header } from '../components/Header';
import "../styles/notFound.css";
import { useNavigate } from "react-router-dom";



export const NotFound = () => {

    const navigate = useNavigate();
    
    return (
        <div>
            <Header/>
            <button className="backButton" onClick={() => {navigate("/home")}}><span class="material-symbols-rounded">
            arrow_back
            </span>Volver</button>
            <h1>No se ha encontrado la página</h1>
        </div>
    );
};
