import React, { useContext } from "react";
import "../styles/bookList.css";
import { BookCard } from "../components/BookCard";
import { AppContext } from "../context/AppContext";

export const BookList = () => {

    const {books, searchQuery} = useContext(AppContext);

    const filteredBooks = books.filter((book) =>
        book.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="book-list-container">
                <div className="book-list">
                    {filteredBooks.map((book, index) => (
                        <BookCard
                            key={index}
                            id={book.id}
                            img={book.img}
                            name={book.name}
                            author={book.author}
                            price={book.price}
                            rating={book.rating}
                            book={book}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
