import React from 'react';


function HomePage(props) {
    return (
        <>
            <div className="main">
                <div className="nav-container">
                    <ul className="nav-container__list">
                        <li className="nav-container__item">
                            <a href="/#" className="nav-container__item-link">Home</a>
                        </li>
                        <li className="nav-container__item">
                            <a href="/#" className="nav-container__item-link">Posts</a>
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
                                <a href="/#" className="nav__mobile-item-link">Home</a>
                            </li>
                            <li className="nav__mobile-item">
                                <a href="/#" className="nav__mobile-item-link">Posts</a>
                            </li>
                            <li className="nav__mobile-item">
                                <a href="/#" className="nav__mobile-item-link">Contact</a>
                            </li>
                        </ul>
                        <label htmlFor="nav-mobile-input" className="nav__btn-close"><i className="fas fa-times"></i></label>
                    </nav>
                </div>
                <div className="banner">
                    <div className="banner__container">
                        <div className="banner__introduce">
                            <div className="banner__introduce-heading">Hi, I am Sy, Front-end Developer</div>
                            <div className="banner__introduce-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                                molestias explicabo ipsam facere neque quae minus beatae omnis, iusto quas odit incidunt ducimus
                                deleniti molestiae facilis ex tempora nihil! Blanditiis explicabo veritatis ea, excepturi velit
                                non
                                nam quo voluptate! Voluptates vitae nisi ab eaque iste placeat sunt magnam suscipit accusantium!
                            </div>
                            <button className="banner__btn">
                                Download Resume
                            </button>
                        </div>
                        <div className="banner__image">
                            <img src="./img/img.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="activity__container">
                        <div className="activity__container-action">
                            <div className="activity__container-label">Recent posts</div>
                            <div className="activity__container-view-all">View all</div>
                        </div>
                        <div className="post">
                            <div className="post__container">
                                <div className="post__container-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Laudantium, vel!
                                </div>
                                <div className="date-container">
                                    <ul className="date-container__list">
                                        <li className="date-container__item date-container__item-separate">12 Feb, 2020</li>
                                        <li className="date-container__item">Design pattern</li>
                                    </ul>
                                </div>
                                <div className="post__container-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Distinctio neque iure dolore culpa quasi totam illum quas suscipit nihil! Quod nobis dolorem
                                    at tempora mollitia autem, explicabo deserunt dolor culpa?</div>
                            </div>
                            <div className="post__container">
                                <div className="post__container-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Magnam, temporibus!</div>
                                <div className="date-container">
                                    <ul className="date-container__list">
                                        <li className="date-container__item date-container__item-separate">12 Feb, 2020</li>
                                        <li className="date-container__item">Design pattern</li>
                                    </ul>
                                </div>
                                <div className="post__container-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Distinctio neque iure dolore culpa quasi totam illum quas suscipit nihil! Quod nobis dolorem
                                    at tempora mollitia autem, explicabo deserunt dolor culpa?</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <footer className="footer">
                <div className="footer-container">
                    <div><a href="/#" className="footer-icon__link"><i className="fab fa-facebook-square"></i></a></div>
                    <div><a href="/#" className="footer-icon__link"><i className="fab fa-instagram-square"></i></a></div>
                    <div><a href="/#" className="footer-icon__link"><i className="fab fa-twitter-square"></i></a></div>
                    <div><a href="/#" className="footer-icon__link"><i className="fab fa-linkedin"></i></a></div>
                </div>
            </footer>
        </>
    );
}

export default HomePage;