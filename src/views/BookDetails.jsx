import React, { useContext } from "react";
import "../styles/bookDetails.css";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Footer } from "../components/Footer";
import { BookRating } from "../components/BookRating";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";



export const BookDetails = () => {

    const {bookId} = useParams();
    const {books} = useContext(AppContext);
    
    const { clearCart, addToCart } = useCart();

    const navigate = useNavigate();
    
    const book = books.find((book) => book.id === parseInt(bookId));

    const handleAddToCart = () => {
        addToCart(book);
    }

    const handleBuyNow = () => {
        clearCart();
        addToCart(book);
        navigate("/checkout");
    }
    
    return(
        <div className="container">
            <div className="bookdetails-main-container">
                <div className="bookdetails-left-container">
                    <button className="backButton" onClick={() => {navigate("/home")}}><span className="material-symbols-rounded">
                    arrow_back
                    </span>Volver</button>
                    <div className="bookdetails-img-container">
                        <img src={book.img} alt={book.name} />
                    </div>
                    <div className="bookdetails-info-container">
                        <p className="bookdetails-name">{book.name}</p>
                        <p className="bookdetails-author">{book.author}</p>
                        <BookRating rating={book.rating}/>
                        <p className="bookdetails-description">{book.synopsis}</p>
                    </div>
                </div>
                <div className="bookdetails-right-container">
                    <div className="bookdetails-buy-info-container">
                        <p className="bookdetails-price">{Number(book.price).toFixed(2)}€</p>
                        <button className="bookdetails-addtobag-button" onClick={handleAddToCart}>Añadir a la bosa</button>
                        <button id="buynow" className="bookdetails-buynow-button" onClick={handleBuyNow}>Comprar ahora</button>
                    </div>
                </div>
            </div>
            <div className="bookdetailts-footer-container">
                <Footer />
            </div>
        </div>
    );
};
