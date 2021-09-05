import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { logout } from '../../features/Admin/authSlice';


function Navbar(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = () => {
        dispatch(logout());
        history.push('/login');
    }
    return (
        <div className="nav-container">
            <ul className="nav-container__list">
                <li className="nav-container__item">
                    <Link to="/" className="nav__mobile-item-link">Home</Link>
                </li>
                <li className="nav-container__item">
                    <Link to="/posts" className="nav__mobile-item-link">Posts</Link>
                </li>
                <li className="nav-container__item">
                    <Link to="/contact" className="nav__mobile-item-link">Contact</Link>
                </li>
                {localStorage.getItem('accessToken') ?
                    <li className="nav-container__item admin">
                        <Link to="/#" className="nav__mobile-item-link"><i className="far fa-user"></i>, Sy</Link>

                        <ul className="menu-dropdown__list">
                            <li className="menu-dropdown__item">
                                <Link to="/admin" className="menu-dropdown__link">Go to admin page</Link>
                            </li>
                            <li className="menu-dropdown__item">
                                <Link to="/#" onClick={handleLogout} className="menu-dropdown__link">Log out</Link>
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
                    <li className="nav__mobile-item">
                        <Link to="/contact" className="nav__mobile-item-link">Contact</Link>
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