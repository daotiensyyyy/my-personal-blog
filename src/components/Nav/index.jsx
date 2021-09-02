import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(props) {
    return (
        <div className="nav-container">
            <ul className="nav-container__list">
                <li className="nav-container__item">
                    <Link to="/" className="nav__mobile-item-link">Home</Link>
                </li>
                <li className="nav-container__item">
                    <Link to="/posts" className="nav__mobile-item-link">Posts</Link>
                </li>
                <li className="nav-container__item">
                    <Link to="/contact" className="nav__mobile-item-link">Contact</Link>
                </li>
            </ul>
            <label htmlFor="nav-mobile-input" className="nav-bar__btn"><i className="fas fa-bars"></i></label>

            <input type="checkbox" hidden name="" id="nav-mobile-input" />
            <label htmlFor="nav-mobile-input" className="nav__overlay"></label>
            <nav className="nav__mobile">
                <ul className="nav__mobile-list">
                    <li className="nav__mobile-item">
                        <Link to="/" className="nav__mobile-item-link">Home</Link>
                    </li>
                    <li className="nav__mobile-item">
                        <Link to="/posts" className="nav__mobile-item-link">Posts</Link>
                    </li>
                    <li className="nav__mobile-item">
                        <Link to="/contact" className="nav__mobile-item-link">Contact</Link>
                    </li>
                </ul>
                <label htmlFor="nav-mobile-input" className="nav__btn-close"><i className="fas fa-times"></i></label>
            </nav>
        </div>
    );
}

export default Navbar;