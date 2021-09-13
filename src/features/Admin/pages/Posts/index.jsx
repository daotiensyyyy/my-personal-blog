import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import { createPost } from '../../../Blog/blogSlice';
import './Posts.scss';

import { Editor, EditorState } from 'draft-js';

function NewPost(props) {
    const id = Math.random().toString(36).substr(2, 9);
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    // console.log(today);
    const history = useHistory();
    const dispatch = useDispatch();
    const initialValues = {
        "id": id,
        "title": "",
        "date": today,
        "field": "",
        "content": "",
        "image": null,
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required').min(20, 'Minimum 50 digits').max(50, 'Maximum 50 digits'),
        date: Yup.string().required('This field is required'),
        field: Yup.string().required('This field is required'),
        content: Yup.string().required('This field is required'),
    });

    return (
        <>
            <div className="main__post-form">
                <div className="grid wide container">
                    <h2 className="heading">Create Post</h2>
                    <div className="wrapper">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    dispatch(createPost(values));
                                    history.push('/');
                                    setSubmitting(false);
                                }, 1000);
                            }}
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
                                            encType="multipart/form-data"
                                        >
                                            <div>
                                                <input
                                                    className="form-data__id"
                                                    name="id"
                                                    value={values.id}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    hidden
                                                />
                                                {errors.id && touched.id && (
                                                    <p>{errors.id}</p>
                                                )}
                                            </div>
                                            <div className="form-data__title">
                                                <input
                                                    name="title"
                                                    placeholder="Title"
                                                    value={values.title}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                {errors.title && touched.title && (
                                                    <p>{errors.title}</p>
                                                )}
                                            </div>
                                            <div className="form-data__date">
                                                <input
                                                    name="date"
                                                    value={values.date}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    disabled
                                                />
                                                {errors.date && touched.date && (
                                                    <p>{errors.date}</p>
                                                )}
                                            </div>
                                            <div className="form-data__field">
                                                <input
                                                    name="field"
                                                    value={values.field}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Field"
                                                />
                                                {errors.field && touched.field && (
                                                    <p>{errors.field}</p>
                                                )}
                                            </div>
                                            <div className="form-data__content">
                                                <textarea
                                                    name="content"
                                                    value={values.content}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Content"
                                                />
                                                {errors.content && touched.content && (
                                                    <p>{errors.content}</p>
                                                )}
                                            </div>
                                            {/* <div>
                                        <input id="image" type="file" name="image" className="file_input"
                                            onChange={(event) => {
                                                setFieldValue("image", event.currentTarget.files[0]);
                                            }} />
                                    </div> */}
                                            <div className="btn-submit">
                                                <button
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                >
                                                    Post
                                                </button>
                                            </div>
                                        </Form>
                                    </div>
                                )
                            }}


                        </Formik>
                    </div>
                    {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <Link className="previous-btn" to="/admin-manage-product">Back to previous</Link>
                </div> */}


                </div>
            </div>
        </>
    );
}

export default NewPost;