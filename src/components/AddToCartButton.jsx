import React from "react";
import "../styles/addToCartButton.css";
import { useCart } from "../hooks/useCart";

export const AddToCartButton = ({book}) => {
    
    const { addToCart } = useCart();

    return (
        <button className="material-symbols-rounded addToCartButton" onClick={() => {addToCart(book)}}>
            add_shopping_cart
        </button>
    );
}
