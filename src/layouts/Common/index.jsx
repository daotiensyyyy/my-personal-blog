import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactPage from '../../features/Blog/pages/ContactPage';
import HomePage from '../../features/Blog/pages/HomePage';
import PostsPage from '../../features/Blog/pages/PostsPage';

function Common(props) {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/posts" component={PostsPage} />
            <Route path="/contact" component={ContactPage} />
        </Switch>
    );
}

export default Common;