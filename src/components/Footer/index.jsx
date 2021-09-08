import React from 'react';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="">
                <div className="row footer-container">
                    <div className="col c-6 m-6 l-6 ">
                        <div className="footer__address">
                            <div>Phone: 0904268461</div>
                            <div>Email: sydao1579@gmail.com</div>
                            <div>Address: Dong Nai, Viet Nam</div>
                            <div></div>
                        </div>
                    </div>
                    <div className="col c-6 m-6 l-6">
                        <div className="footer__social">
                            <div><a href="https://www.facebook.com/dao.tiensy" className="footer-icon__link"><i className="fab fa-facebook-square"></i></a></div>
                            <div><a href="/#" className="footer-icon__link"><i className="fab fa-instagram-square"></i></a></div>
                            <div><a href="/#" className="footer-icon__link"><i className="fab fa-twitter-square"></i></a></div>
                            <div><a href="/#" className="footer-icon__link"><i className="fab fa-linkedin"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;