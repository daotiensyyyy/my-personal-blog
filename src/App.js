import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './configs/PrivateRoute';
import AdminLayout from './layouts/AdminLayout';
import Common from './layouts/Common';
import Login from './layouts/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/admin" component={AdminLayout} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Common} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
