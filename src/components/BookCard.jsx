import React from "react";
import '../styles/bookCard.css';
import { AddToCartButton } from "./AddToCartButton";
import { Link } from 'react-router-dom';
import { BookRating } from "./BookRating";


export const BookCard = ({id, img, name, author, price, rating, book}) => {

    return (
        <div className='bookcard-container'>
            
            <div className='bookcard-inner-container'>

                <AddToCartButton book={book} />

                <div className='bookimg-container'>
                    <img className='bookimg' src={img} alt= {name}/>
                    <div className='bookcard-button-container'>
                            <Link to={`/books/${id}`}>
                                <button className='bookcard-button'>Ver detalles</button>
                            </Link>
                </div>
                </div>

                <div className='bookcard-info'>
                    <p className='bookname' >{name}</p>
                    <p className='authorname' >{author}</p>
                    <p className='bookprice' >{price.toFixed(2)}€</p>

                    <div className='bookcard-inner-info'>
                        <BookRating rating={rating} />
                    </div>
                </div>
            </div>
        </div>
    );
};
