import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';
import ReactPaginate from 'react-paginate';

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
    const [pageNumber, setPageNumber] = useState(0);
    const postsPerPage = 6;
    const pageVisited = pageNumber * postsPerPage;
    const displayPosts = postList.slice(0).reverse()
        .slice(pageVisited, pageVisited + postsPerPage)
        .map(post => {
            return (
                <div className="col l-12 m-12 c-12 blog-container__info" key={post._id}>
                    <Post post={post}
                        onHandleDetailClick={onHandleClick}
                    />
                </div>

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

    // return (
    //     <>
    //         {postList.slice(0).reverse().map(post =>
    //             <div className="col l-12 m-12 c-12 blog-container__info" key={post._id}>
    //                 <Post post={post}
    //                     onHandleDetailClick={onHandleClick}
    //                 />
    //             </div>
    //         )}
    //     </>
    // );
}

export default PostList;