import React from "react";
import { useCart } from "../hooks/useCart";
import "../styles/checkout.css";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";


export const Checkout = () => {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    
    const handleConfirmation = () => {
        alert("Pedido realizado con éxito!");
        clearCart();
        navigate("/home");


    }
    return (
        <div className="checkout-container">
            {cartItems.length === 0 ? (
                <>
                    <div className="empty-main-container">
                        <Header />
                        <button className="backButton" onClick={() => {navigate("/home")}}><span className="material-symbols-rounded">
                                arrow_back
                                </span>Volver</button>
                        <h1 className="checkout-title">Checkout</h1>
                        <p>Tu carrito está vacío. <br />Agrega algunos libros antes de continuar.</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="full-div">
                        <Header />
                        
                        <div className="main-container">
                            <div className="data-container">
                                <button className="backButton" onClick={() => {navigate("/home")}}><span className="material-symbols-rounded">
                                arrow_back
                                </span>Volver</button>
                                <h1 className="checkout-title">Checkout</h1>
                                <div className="section email-section">
                                    <h2>Información de contacto</h2>
                                    <input className="email-input" type="email" placeholder="Email"/>

                                    <div className="checkbox-container">
                                        <input type="checkbox" id="save-email" name="save-email" value="save-email" />
                                        <label className="checkbox-text" htmlFor="save-email">Enviarme novedades y ofertas por correo electrónico</label>
                                    </div>
                                </div>
                                <div className="section address-section">
                                    <h2>Entrega</h2>

                                    <div className="input-container country">
                                        <label>País / Región</label>
                                        <select className="country-selector">
                                            <option value="España">España</option>
                                            <option value="México">México</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Chile">Chile</option>
                                            <option value="Perú">Perú</option>
                                            <option value="Estados Unidos">Estados Unidos</option>
                                            <option value="Canadá">Canadá</option>
                                        </select>
                                    </div>

                                    <div className="address-wrapper">
                                        <div className="input-container address1">
                                            <input className="street-one-input" type="text" placeholder="Dirección"/>
                                        </div>

                                        <div className="input-container address2">
                                            <input className="street-two-input" type="text" placeholder="Casa, apartamento, etc. (opcional)"/>
                                        </div>

                                        <div className="inner-wrapper">
                                            <div className="input-container">
                                                <input className="postal-code-input" type="text" placeholder="Código postal"/>
                                            </div>
                                            <div className="input-container">
                                                <input className="city-input" type="text" placeholder="Ciudad"/>
                                            </div>

                                            <div className="input-container">
                                                <select className="state-selector">
                                                    <option value="Andalucía">Andalucía</option>
                                                    <option value="Aragón">Aragón</option>
                                                    <option value="Asturias">Asturias</option>
                                                    <option value="Baleares">Baleares</option>
                                                    <option value="Canarias">Canarias</option>
                                                    <option value="Cantabria">Cantabria</option>
                                                    <option value="Castilla-La Mancha">Castilla-La Mancha</option>
                                                    <option value="Castilla y León">Castilla y León</option>
                                                    <option value="Cataluña">Cataluña</option>
                                                    <option value="Extremadura">Extremadura</option>
                                                    <option value="Galicia">Galicia</option>
                                                    <option value="Madrid">Madrid</option>
                                                    <option value="Murcia">Murcia</option>
                                                    <option value="Navarra">Navarra</option>
                                                    <option value="País Vasco">País Vasco</option>
                                                    <option value="La Rioja">La Rioja</option>
                                                    <option value="Valencia">Valencia</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div className="input-container phone">
                                        <input className="phone-input" type="text" placeholder="Teléfono"/>
                                    </div>
                                </div>

                                <div className="section payment-section">
                                    <h2>Método de pago</h2>
                                    <div className="payment-methods">
                                        <div className="payment-method">
                                            <input type="radio" id="credit-card" name="payment-method" value="credit-card"/>
                                            <label htmlFor="credit-card">Tarjeta de crédito</label>
                                        </div>
                                        <div className="payment-method">
                                            <input type="radio" id="paypal" name="payment-method" value="paypal"/>
                                            <label htmlFor="paypal">PayPal</label>
                                        </div>
                                        <div className="payment-method">
                                            <input type="radio" id="cash" name="payment-method" value="cash"/>
                                            <label htmlFor="cash">Contra reembolso</label>
                                        </div>
                                    </div>


                                    <button className="checkout-button" onClick={handleConfirmation}>Confirmar Compra</button>
                                </div>
                            </div>
                            <div className="summary-container">
                                <div>
                                    <ul className="checkout-list">
                                        {cartItems.map((item) => (
                                            <li key={item.id} className="checkout-item">
                                                <div className="img-checkout-container">
                                                    <img className="checkout-item-img" src={item.img} alt={item.title} />
                                                </div>
                                                <div className="checkout-item-details">
                                                    <p className="title">{item.name}</p>
                                                    <p className="author">{item.author}</p>
                                                    <p className="count">Cantidad: {item.count}</p>
                                                </div>
                                                <p className="price">{Number(item.price).toFixed(2)}€</p>
                                                
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="discount-section">
                                        <input className="discount-input" type="text" placeholder="Código de descuento"/>
                                        <button className="discount-button">Aplicar</button>
                                    </div>

                                    <div className="checkout-summary">
                                        <h3>Total: {Number(totalPrice).toFixed(2)}€</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
