import { unwrapResult } from '@reduxjs/toolkit';
import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import { login } from '../../features/Admin/authSlice';
import './Login.scss';

function Login(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const initialValues = {
        "username": '',
        "password": '',
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('This field is required'),
        password: Yup.string().required('This field is required').min(8, 'Minimum 8 digits'),
    });

    const handleSubmit = async (values) => {
        const signInResult = await dispatch(login(values));
        unwrapResult(signInResult);
        history.push('/admin');
    }

    return (
        <>
            <div className="main__login-form">
                <div className="grid wide container">
                    <h2 className="heading">Login</h2>
                    <div className="wrapper">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {formikProps => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    isSubmitting,
                                    // setFieldValue,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit
                                } = formikProps;

                                // console.log({ values, errors, touched, isSubmitting });

                                return (
                                    <div className="row">
                                        <Form
                                            className="form-data col l-12 m-12 c-12"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="form-data__username">
                                                <input
                                                    name="username"
                                                    placeholder="Username"
                                                    value={values.username}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                {errors.username && touched.username && (
                                                    <p>{errors.username}</p>
                                                )}
                                            </div>
                                            <div className="form-data__password">
                                                <input
                                                    name="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                {errors.password && touched.password && (
                                                    <p>{errors.password}</p>
                                                )}
                                            </div>
                                            <div className="btn-submit">
                                                <button
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </Form>
                                    </div>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;