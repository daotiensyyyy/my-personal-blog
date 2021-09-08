import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Nav';
import PrivateRoute from './configs/PrivateRoute';
import AdminLayout from './layouts/AdminLayout';
import Common from './layouts/Common';
import Login from './layouts/Login';

function App() {
  return (
    <>
      <Suspense fallback={<div className="loader_bg">
        <div className="loader"><h2>....Please wait!</h2></div>
      </div>}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <PrivateRoute path="/admin" component={AdminLayout} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Common} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
