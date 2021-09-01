import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from '../../features/Admin/pages/Posts';
function AdminLayout(props) {
    return (
        <Switch>
            <Route path="/" component={Posts} />
        </Switch>
    );
}

export default AdminLayout;