import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

PostList.propTypes = {
    postList: PropTypes.array,
};

PostList.defaultProps = {
    postList: [],
}

function PostList(props) {
    const { postList } = props;
    return (
        <>
            {postList.map(post =>
                <div className="col l-12 m-12 c-12 blog-container__info" key={post._id}>
                    <Post post={post} />
                </div>
            )}
        </>
    );
}

export default PostList;