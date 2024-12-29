import React from "react";
import "../styles/cartItemList.css";
import { CartItem } from "./CartItem";

export const CartItemList = ({cartItems}) => {

    return (
        <div className="shopping-bag-items">
            {
                cartItems.map((item, key) => (
                    <CartItem key={key} item={item}/>
                ))
            
            }
        </div>
    );
};
