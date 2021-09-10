import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';
import ReactPaginate from 'react-paginate';

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
    const [pageNumber, setPageNumber] = useState(0);
    const postsPerPage = 6;
    const pageVisited = pageNumber * postsPerPage;
    const displayPosts = postList.slice(0).reverse()
        .slice(pageVisited, pageVisited + postsPerPage)
        .map(post => {
            return (

                <Post
                    key={post._id}
                    post={post}
                    onHandleDetailClick={onDetailClick}
                />

            );
        });
    const pageCount = Math.ceil(postList.length / postsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <>
            {displayPosts}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </>
    );
}

export default PostList;