import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import {Home} from "../views/Home";
import { Landing } from "../views/Landing";
import { NotFound } from "../views/NotFound";
import { BookDetails } from "../views/BookDetails";
import {Footer} from "../components/Footer";
import { Checkout } from "../views/Checkout";


export const GlobalRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route caseSensitive path="/" element={<Landing />} />
                <Route caseSensitive path="/home" element={<NavBarLayout><Home /></NavBarLayout>} />
                <Route caseSensitive path="books/:bookId" element={<BookDetailsLayout><BookDetails /></BookDetailsLayout>} />
                <Route caseSensitive path="/checkout" element={<Checkout />} />
                <Route caseSensitive path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

const NavBarLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};

const BookDetailsLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
};
