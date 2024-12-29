import React from "react";
import star from "../images/fullStar.svg";
import "../styles/bookRating.css";


export const BookRating = ({ rating }) => {
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="book-rating">
            {Array(fullStars)
                .fill(null)
                .map((_, index) => (
                    <img
                        key={`full-${index}`}
                        src={star}
                        alt="Estrella completa"
                        className="full-star"
                    />
                ))
                }

                {hasHalfStar && (
                    <span className="material-symbols-rounded half-star">star_half</span>
                )}
                {Array(emptyStars)
                .fill(null)
                .map((_, index) => (
                    <span key={`empty-${index}`} className="material-symbols-rounded empty-star">
                        star
                    </span>
                ))
            }
        </div>
    );
};
