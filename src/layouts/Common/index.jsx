import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../features/Blog/pages/HomePage';

function Common(props) {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
    );
}

export default Common;