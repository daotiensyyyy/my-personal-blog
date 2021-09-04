import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

PostList.propTypes = {
    postList: PropTypes.array,
}

PostList.defaultProps = {
    postList: [],
}

function PostList(props) {
    const { postList } = props;
    // console.log('postList', postList);
    return (
        <>
            {postList.map(post =>
                <Post
                    key={post._id}
                    post={post}
                />
            )}
        </>
    );
}

export default PostList;