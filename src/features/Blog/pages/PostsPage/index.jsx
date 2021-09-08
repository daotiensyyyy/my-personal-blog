import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchAllPosts } from '../../blogSlice';
import PostList from './components/PostList';
import './PostPage.scss';

function PostsPage(props) {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllPosts());
    }, [dispatch]);
    const blogState = useSelector(state => state.blog);
    const { posts } = blogState;
    // console.log(posts);
    const handleClick = (post) => {
        const postUrl = `post/${post.slug}`;
        history.push(postUrl);
    }
    return (
        <div className="grid wide container">
            <div className="row">
                <div className="blog-container">
                    <div className="blog-container__wrap">
                        <div className="blog-container__heading">Blog</div>
                        <Link to="/admin">Create a new post</Link>
                        <PostList postList={posts} onHandleClick={handleClick} />
                    </div>
                </div>
            </div>
            <div className="back-btn">
                <Link to="/"><i className="fas fa-long-arrow-alt-left"></i></Link>
            </div>
        </div>
    );
}

export default PostsPage;