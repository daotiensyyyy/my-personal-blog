import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

PostList.propTypes = {
    postList: PropTypes.array,
    onHandleClick: PropTypes.func,
};

PostList.defaultProps = {
    postList: [],
    onHandleClick: null,
}

function PostList(props) {
    const { postList, onHandleClick } = props;
    return (
        <>
            {postList.slice(0).reverse().map(post =>
                <div className="col l-12 m-12 c-12 blog-container__info" key={post._id}>
                    <Post post={post}
                        onHandleDetailClick={onHandleClick}
                    />
                </div>
            )}
        </>
    );
}

export default PostList;