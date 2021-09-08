import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Action from '../../../../components/Action';
import Banner from '../../../../components/Banner';
import { fetchAllPosts } from '../../blogSlice';
import PostList from './components/PostList';

function HomePage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    useEffect(() => {
        dispatch(fetchAllPosts());
    }, [dispatch])
    const blogState = useSelector(state => state.blog);
    const { posts } = blogState;
    // console.log('posts', posts);

    const handleClick = (post) => {
        const postUrl = `post/${post.slug}`;
        history.push(postUrl);
    }
    return (
        <>
            <div className="main">
                <Banner />
                <div className="activity">
                    <div className="grid wide container">
                        <div className="activity__container">
                            <Action />
                            <div className="row post">
                                <PostList
                                    postList={posts}
                                    onDetailClick={handleClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;