import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../features/Admin/authSlice';


function Navbar(props) {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }
    const authState = useSelector(state => state.auth);
    const { isLogin } = authState;
    // console.log(isLogin);
    return (
        <div className="nav-container">
            <ul className="nav-container__list">
                <li className="nav-container__item">
                    <Link to="/" className="nav__mobile-item-link">Home</Link>
                </li>
                <li className="nav-container__item">
                    <Link to="/posts" className="nav__mobile-item-link">Posts</Link>
                </li>
                {isLogin === true ?
                    <li className="nav-container__item admin">
                        <Link to="/#" className="nav__mobile-item-link">Welcome, Sy</Link>

                        <ul className="menu-dropdown__list">
                            <li className="menu-dropdown__item">
                                <Link to="/admin" className="menu-dropdown__link">Go to admin page</Link>
                            </li>
                            <li className="menu-dropdown__item">
                                <Link to="/login" onClick={handleLogout} className="menu-dropdown__link">Log out</Link>
                            </li>
                        </ul>
                    </li>
                    : ''}
            </ul>
            <label htmlFor="nav-mobile-input" className="nav-bar__btn"><i className="fas fa-bars"></i></label>

            <input type="checkbox" hidden name="" id="nav-mobile-input" />
            <label htmlFor="nav-mobile-input" className="nav__overlay"></label>
            <nav className="nav__mobile">
                <ul className="nav__mobile-list">
                    <li className="nav__mobile-item">
                        <Link to="/" className="nav__mobile-item-link">Home</Link>
                    </li>
                    <li className="nav__mobile-item">
                        <Link to="/posts" className="nav__mobile-item-link">Posts</Link>
                    </li>
                    {localStorage.getItem('accessToken') ?
                        <>
                            <li className="nav__mobile-item">
                                <Link to="/admin" className="nav__mobile-item-link">Go to Admin page</Link>
                            </li>
                            <li className="nav__mobile-item">
                                <Link to="/#" onClick={handleLogout} className="nav__mobile-item-link">Logout</Link>
                            </li>
                        </>
                        : ''}
                </ul>
                <label htmlFor="nav-mobile-input" className="nav__btn-close"><i className="fas fa-times"></i></label>
            </nav>
        </div>
    );
}

export default Navbar;