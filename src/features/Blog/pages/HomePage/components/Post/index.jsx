import React from 'react';
import PropTypes from 'prop-types';

Post.propTypes = {
    post: PropTypes.object,
};

Post.defaultProps = {
    post: { }
}

function Post(props) {
    const { post } = props;
    // console.log('post', post);
    return (
        <>
            <div className="col l-4 m-6 c-12 ">
                <div className="post__container">
                    <div className="post__container-title">{post.title}
                    </div>
                    <div className="date-container">
                        <ul className="date-container__list">
                            <li className="date-container__item date-container__item-separate">{post.date}
                            </li>
                            <li className="date-container__item">{post.field}</li>
                        </ul>
                    </div>
                    <div className="post__container-text">{post.content}</div>
                </div>
            </div>
        </>

    );
}

export default Post;