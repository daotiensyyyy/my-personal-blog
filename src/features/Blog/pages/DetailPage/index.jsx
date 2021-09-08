import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPostBySlug } from '../../blogSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Detail.scss';

function DetailPage(props) {
    const dispatch = useDispatch();
    const { slug } = useParams();
    // console.log(slug);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    useEffect(() => {
        dispatch(fetchPostBySlug(slug));
    }, [dispatch, slug]);
    const blogState = useSelector(state => state.blog);
    const { detail } = blogState;
    // console.log(detail);
    return (
        <div className="grid wide container">
            <div className="row">
                <div className="col c-12 m-12 l-12">
                    <div className="post-detail">
                        <div className="post-detail__title">
                            {detail.title}
                        </div>
                        <div className="post-detail__field">
                            Topic: {detail.field}
                        </div>
                        <div className="post-detail__date">
                            Date: {detail.date}
                        </div>
                        <div className="post-detail__content">
                            {detail.content}
                        </div>
                    </div>
                </div>
            </div>


            <div className="back-btn">
                <Link to="/posts"><i className="fas fa-long-arrow-alt-left"></i></Link>
            </div>
        </div>
    );
}

export default DetailPage;