import React from 'react';
import { Link } from 'react-router-dom';


function PostsPage(props) {
    return (
        <div className="grid wide container">
            <div className="row">
                <div className="blog-container">
                    <div className="blog-container__wrap">
                        <div className="blog-container__heading">Blog</div>
                        <Link to="/admin">Create a new post</Link>
                        <div className="col l-12 m-12 c-12 blog-container__info">
                            <div className="blog-container__info-title">UI interactions of the week</div>
                            <div className="blog-container__info-date">12 Feb 2019</div>
                            <div className="blog-container__info-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Alias
                                explicabo beatae error commodi omnis porro deleniti ipsum asperiores enim blanditiis
                                dicta,
                                reprehenderit, nemo nihil dolorum voluptatem iure similique rem nobis?</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostsPage;