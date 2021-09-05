import React from 'react';
import IMAGES from '../../configs/img';

function Banner(props) {
    return (
        <div className="banner">
            <div className="grid wide container">
                <div className="row banner__container">
                    <div className="col l-6 m-12 c-12 banner__introduce">
                        <div className="banner__introduce-heading">Hi, I am Sy, Front-end Developer</div>
                        <div className="banner__introduce-text">Welcome to my blog!
                        </div>
                        <button className="banner__btn">
                            Download Resume
                        </button>
                    </div>
                    <div className="col l-6 m-12 c-12 banner__image">
                        <img src={IMAGES.avt} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;