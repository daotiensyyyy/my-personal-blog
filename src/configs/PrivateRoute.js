import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute(props) {
    const isLoggedIn = Boolean(localStorage.getItem('accessToken'));
    if (!isLoggedIn) {
        return <Redirect to="/login" />
    }
    return <Route {...props} />;

};