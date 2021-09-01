import React from 'react';

function Banner(props) {
    return (
        <div className="banner">
            <div className="grid wide container">
                <div className="row banner__container">
                    <div className="col l-6 m-12 c-12 banner__introduce">
                        <div className="banner__introduce-heading">Hi, I am John, Creative Technologist</div>
                        <div className="banner__introduce-text">Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Sint
                            molestias explicabo ipsam facere neque quae minus beatae omnis, iusto quas odit incidunt
                            ducimus
                            deleniti molestiae facilis ex tempora nihil! Blanditiis explicabo veritatis ea,
                            excepturi
                            velit
                            non
                            nam quo voluptate! Voluptates vitae nisi ab eaque iste placeat sunt magnam suscipit
                            accusantium!
                        </div>
                        <button className="banner__btn">
                            Download Resume
                        </button>
                    </div>
                    <div className="col l-6 m-12 c-12 banner__image">
                        <img src="./img/img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;