import React from 'react';
import PropTypes from 'prop-types';

Post.propTypes = {
    post: PropTypes.object,
};

Post.defaultProps = {
    post: {}
}

function Post(props) {
    const { post } = props;
    return (
        <>
            <div className="blog-container__info-title">{post.title}</div>
            <div className="blog-container__info-date">{post.date}</div>
            <div className="blog-container__info-field">{post.field}</div>
            <div className="blog-container__info-text">{post.content}</div>
        </>
    );
}

export default Post;