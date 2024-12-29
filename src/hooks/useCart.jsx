import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export const useCart = () => {

    const { cartItems, setCartItems } = useContext(AppContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isBagOpen, setIsBagOpen] = useState(false);

    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.count;
        });

        total = total.toFixed(2); 
        setTotalPrice(total);
    }, [cartItems]);

    const addToCart = (book) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === book.id);

            if (existingItem) {
                return prev.map((item) => item.id === book.id ? { ...item, count: item.count + 1 } : item);
            } else {
                return [...prev, { ...book, count: 1 }];
            }
        });
    };


    const toggleBag = () => {
        setIsBagOpen(!isBagOpen);
    };


    const removeFromCart = (id) => {
        setCartItems((prev) =>
            prev
                .map((item) => 
                    item.id === id ? { ...item, count: item.count - 1 } : item
                )
                .filter((item) => item.count > 0)
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };


    return { cartItems, addToCart, clearCart, removeFromCart, totalPrice, toggleBag, isBagOpen };
};
