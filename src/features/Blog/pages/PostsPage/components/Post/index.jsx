import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../../blogSlice';

Post.propTypes = {
    post: PropTypes.object,
    onHandleDetailClick: PropTypes.func,

};

Post.defaultProps = {
    post: {},
    onHandleDetailClick: null,

};

const deletePost__confirm = {
    display: 'none',
    position: 'absolute',
    fontSize: '1.25rem',
    float: 'right',
    bottom: '0',
    right: '60px',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
    // &:hover{
    //     color: white,
    //     backgroundColor:rgb(73, 73, 73),
    // }
}

const deletePost__checked = {
    display: 'block',
    position: 'absolute',
    fontSize: '1.25rem',
    float: 'right',
    bottom: '0',
    right: '60px',
    padding: '5px 10px',
    cursor: 'pointer',
}


function Post(props) {
    const dispatch = useDispatch();
    const { post, onHandleDetailClick } = props;
    const [isClicked, setIsClicked] = useState(false);
    const handleDetailClick = () => {
        if (onHandleDetailClick) {
            onHandleDetailClick(post);
        }
    }
    const handleDelete = () => {
        setIsClicked(!isClicked);
    }
    const handleYesClicked = () => {
        dispatch(deletePost(post._id));
    }
    return (
        <>
            <div onClick={handleDetailClick}>
                <div className="blog-container__info-title">{post.title}</div>
                <div className="blog-container__info-date">{post.date}</div>
                <div className="blog-container__info-field">{post.field}</div>
                <div className="blog-container__info-text">{post.content}</div>
            </div>

            <label htmlFor={`delete-post-input-${post._id}`} className="delete-post__btn" onClick={handleDelete}>
                <i className="far fa-trash-alt"></i>
            </label>
            <input id={`delete-post-input-${post._id}`}
                type="checkbox"
                name={post.title}
                value={post.title}
                hidden
            />
            <div style={isClicked ? deletePost__checked : deletePost__confirm} onClick={handleDelete}>
                <span className="delete-post__confirm-yes" onClick={handleYesClicked}>Yes</span>
                <label htmlFor={`delete-post-input-${post._id}`} className="delete-post__confirm-no">No</label>
            </div>
        </>

    );
}

export default Post;