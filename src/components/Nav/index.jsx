import React from 'react';


function Navbar(props) {
    return (
        <div className="nav-container">
            <ul className="nav-container__list">
                <li className="nav-container__item">
                    <a href="/#" className="nav-container__item-link">Works</a>
                </li>
                <li className="nav-container__item">
                    <a href="blog.html" className="nav-container__item-link">Blog</a>
                </li>
                <li className="nav-container__item">
                    <a href="/#" className="nav-container__item-link">Contact</a>
                </li>
            </ul>
            <label htmlFor="nav-mobile-input" className="nav-bar__btn"><i className="fas fa-bars"></i></label>

            <input type="checkbox" hidden name="" id="nav-mobile-input" />
            <label htmlFor="nav-mobile-input" className="nav__overlay"></label>
            <nav className="nav__mobile">
                <ul className="nav__mobile-list">
                    <li className="nav__mobile-item">
                        <a href="/#" className="nav__mobile-item-link">Works</a>
                    </li>
                    <li className="nav__mobile-item">
                        <a href="/#" className="nav__mobile-item-link">Blog</a>
                    </li>
                    <li className="nav__mobile-item">
                        <a href="/#" className="nav__mobile-item-link">Contact</a>
                    </li>
                </ul>
                <label htmlFor="nav-mobile-input" className="nav__btn-close"><i className="fas fa-times"></i></label>
            </nav>
        </div>
    );
}

export default Navbar;