import React from "react";
import "../styles/shoppingCart.css";
import { CartItemList } from "./CartItemList";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";

export const ShoppingCart = () => {

    const { cartItems, clearCart, totalPrice } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate("/checkout");
    }

    return (
        
        <div>
        <p className="cart-title">Carrito</p>
        {cartItems.length === 0 ? 
            (
                <div className="empty-cart-container">
                    <div className="empty-cart-text">
                        <p>Tu carrito está vacío</p>
                    </div>
                </div>
            ) : (
                <div className="full-cart-container">
                    <CartItemList cartItems= {cartItems}/>
                    <p className="totalprice">Total: {Number(totalPrice).toFixed(2)}€</p>
                    <div className="full-cart-options">
                        <button onClick={clearCart}>Vaciar carrito</button>
                        <button onClick={handleCheckout}>Comprar</button>
                    </div>
                </div>
            )
        }
      </div>
    );
};
