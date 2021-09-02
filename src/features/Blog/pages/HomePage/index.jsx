import React from 'react';
import { useSelector } from 'react-redux';
import Action from '../../../../components/Action';
import Banner from '../../../../components/Banner';
import PostList from '../../components/PostList';


function HomePage(props) {
    const blogState = useSelector(state => state.blog);
    const { posts } = blogState;
    // console.log('posts', posts);
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