import React from 'react';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div><a href="/#" className="footer-icon__link"><i className="fab fa-facebook-square"></i></a></div>
                <div><a href="/#" className="footer-icon__link"><i className="fab fa-instagram-square"></i></a></div>
                <div><a href="/#" className="footer-icon__link"><i className="fab fa-twitter-square"></i></a></div>
                <div><a href="/#" className="footer-icon__link"><i className="fab fa-linkedin"></i></a></div>
            </div>
        </footer>
    );
}

export default Footer;