import React from 'react';
import '../styles/landing.css';
import { useNavigate } from 'react-router-dom';
import {useRedirection} from '../hooks/useRedirection';
import 'ldrs/dotPulse';

export const Landing = () => {

    useRedirection('/home', 5000);

    return (
        <div className="main-landing-container">
            <div className="left-landing-container">
                <h1>Relatos de Papel</h1>
                <p>Relatos de Papel es la plataforma que transforma tu experiencia literaria. Compra, explora y disfruta de libros desde cualquier lugar, con un sistema intuitivo, múltiples métodos de pago seguros y un inventario siempre actualizado. Participa en la comunidad de lectores, sigue tus pedidos y accede desde cualquier dispositivo. Con seguridad, escalabilidad y soporte multilingüe, Relatos de Papel está diseñado para adaptarse a ti y a tus necesidades. ¡Tu próxima lectura te espera!</p>

                <l-dot-pulse id='loader' size="60" speed="1.3" color="rgba(13, 31, 45, 1)"></l-dot-pulse>
            </div>
            <div className="right-landing-container">
            </div>
        </div>
    );
};
