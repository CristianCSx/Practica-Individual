import React from "react";
import "../styles/cartItem.css";
import { useCart } from "../hooks/useCart";


export const CartItem = ({item}) => {

    const { addToCart, removeFromCart } = useCart();
    
    return (
        <>
            <div className="cartitem-container">
                <div className="cartitem-img-container">
                    <img src={item.img} alt={item.name} style={{ width: "50px" }} />
                </div>
                <div className="cartitem-info-container">
                    <p>{item.name}</p>
                    <div className="cartitem-count">
                        <button className="count-button" onClick={() => removeFromCart(item.id)}>-</button><div className="count-number">
                            <p>{item.count}</p>
                        </div>
                        <button className="count-button" onClick={() => addToCart(item)}>+</button>
                    </div>
                    <div className="divisor"></div>
                </div>
            </div>
            <hr />
        </>

    )
};
