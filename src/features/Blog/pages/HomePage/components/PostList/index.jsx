import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

PostList.propTypes = {
    postList: PropTypes.array,
    onDetailClick: PropTypes.func,
}

PostList.defaultProps = {
    postList: [],
    onDetailClick: null
}

function PostList(props) {
    const { postList, onDetailClick } = props;
    // console.log('postList', postList);
    return (
        <>
            {postList.slice(0).reverse().map(post =>
                <Post
                    key={post._id}
                    post={post}
                    onHandleDetailClick={onDetailClick}
                />
            )}
        </>
    );
}

export default PostList;