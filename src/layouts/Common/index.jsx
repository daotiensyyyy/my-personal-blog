import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailPage from '../../features/Blog/pages/DetailPage';
import PostsPage from '../../features/Blog/pages/PostsPage';
const HomePage = React.lazy(() => import('../../features/Blog/pages/HomePage'));
function Common(props) {
    return (
        <>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/posts" component={PostsPage} />
                <Route path="/post/:slug" component={DetailPage} />
            </Switch>
        </>
    );
}

export default Common;