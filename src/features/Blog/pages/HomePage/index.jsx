import React from 'react';
import Banner from '../../../../components/Banner';


function HomePage(props) {
    return (
        <>
            <div className="main">
                <Banner />
                <div className="activity">
                    <div className="grid wide container">
                        <div className="activity__container">
                            <div className="activity__container-action">
                                <div className="activity__container-label">Recent posts</div>
                                <div className="activity__container-view-all">View all</div>
                            </div>
                            <div className="row post">
                                <div className="col l-4 m-6 c-12">
                                    <div className="post__container">
                                        <div className="post__container-title">Lorem ipsum dolor sit amet consectetur
                                            adipisicing
                                            elit.
                                            Laudantium, vel!
                                        </div>
                                        <div className="date-container">
                                            <ul className="date-container__list">
                                                <li className="date-container__item date-container__item-separate">12 Feb, 2020
                                                </li>
                                                <li className="date-container__item">Design pattern</li>
                                            </ul>
                                        </div>
                                        <div className="post__container-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit.
                                            Distinctio neque iure dolore culpa quasi totam illum quas suscipit nihil! Quod
                                            nobis
                                            dolorem
                                            at tempora mollitia autem, explicabo deserunt dolor culpa?</div>
                                    </div>
                                </div>

                                <div className="col l-4 m-6 c-12 ">
                                    <div className="post__container">
                                        <div className="post__container-title">Lorem ipsum dolor sit amet consectetur
                                            adipisicing
                                            elit.
                                            Laudantium, vel!
                                        </div>
                                        <div className="date-container">
                                            <ul className="date-container__list">
                                                <li className="date-container__item date-container__item-separate">12 Feb, 2020
                                                </li>
                                                <li className="date-container__item">Design pattern</li>
                                            </ul>
                                        </div>
                                        <div className="post__container-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit.
                                            Distinctio neque iure dolore culpa quasi totam illum quas suscipit nihil! Quod
                                            nobis
                                            dolorem
                                            at tempora mollitia autem, explicabo deserunt dolor culpa?</div>
                                    </div>
                                </div>

                                <div className="col l-4 m-6 c-12 ">
                                    <div className="post__container">
                                        <div className="post__container-title">Lorem ipsum dolor sit amet consectetur
                                            adipisicing
                                            elit.
                                            Laudantium, vel!
                                        </div>
                                        <div className="date-container">
                                            <ul className="date-container__list">
                                                <li className="date-container__item date-container__item-separate">12 Feb, 2020
                                                </li>
                                                <li className="date-container__item">Design pattern</li>
                                            </ul>
                                        </div>
                                        <div className="post__container-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit.
                                            Distinctio neque iure dolore culpa quasi totam illum quas suscipit nihil! Quod
                                            nobis
                                            dolorem
                                            at tempora mollitia autem, explicabo deserunt dolor culpa?</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;