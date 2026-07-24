import React, { useState } from 'react';
import './Navbar.css';
import logo from './Logo.jpg';
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar({ setShow, searchTerm, setSearchTerm, products = [] }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const filteredProducts = searchTerm?.trim() === ''
        ? []
        : products.filter(product =>
            product.title?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <div className='containet-navbar'>
            <div className="item-navbar">
                <img src={logo} alt="logo" className="navbar-logo" />
                <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>
                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <div className="Serach">
                        <CiSearch className="search-icon" />
                        <input
                            type='text'
                            placeholder='جستجو ...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <ul>
                        <li><a href="#Header" onClick={closeMenu}>خانه</a></li>
                        <li><a href="#category" onClick={closeMenu}>دسته‌بندی</a></li>
                        <li><a href="#Products" onClick={closeMenu}>محصولات</a></li>
                        <li><a href="#footer" onClick={closeMenu}>درباره ما</a></li>
                        <li>
                            <a onClick={() => { setShow(true); closeMenu(); }}>
                                عضویت / ورود
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;