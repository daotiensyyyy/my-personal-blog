import React from 'react';
import PropTypes from 'prop-types';

Post.propTypes = {
    post: PropTypes.object,
    onHandleDetailClick: PropTypes.func,
};

Post.defaultProps = {
    post: {},
    onHandleDetailClick: null
}

function Post(props) {
    const { post, onHandleDetailClick } = props;
    const handleDetailClick = () => {
        if (onHandleDetailClick) {
            onHandleDetailClick(post);
        }
    }
    return (
        <div onClick={handleDetailClick}>
            <div className="blog-container__info-title">{post.title}</div>
            <div className="blog-container__info-date">{post.date}</div>
            <div className="blog-container__info-field">{post.field}</div>
            <div className="blog-container__info-text">{post.content}</div>
        </div>
    );
}

export default Post;