import { useState } from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import './register.css';
import axios from 'axios';
import Messages from '../../components/message/Messages';
import { Spinner } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const [messages, setMessage] = useState("");
    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Username is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "Password must be 8 characters or more")
            .required("Password is required!"),
    })

    const handleSignIn = async (values) => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", values);
            setMessage(res.data.message);
            if (res.status == 200) {
                navigate('/login')
            }
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            }
        }
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: handleSignIn
    })
    return (
        <div className='container register'>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h1 className="greet">Welcome To My Blog</h1>
                    {messages && <Messages messages={messages} />}
                    <form className='register-form' onSubmit={formik.handleSubmit}>
                        <div className="register-form-group">
                            <div className="mb-3">
                                <label htmlFor="name" className='form-label'>Username</label>
                                <input type="text"
                                    className=" form-control"
                                    placeholder='Enter username'
                                    name="username"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username} />
                                <p className="text-danger">
                                    {" "}
                                    {formik.errors.username &&
                                        formik.touched.username &&
                                        formik.errors.username}{" "}
                                </p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className='form-label'>Email</label>
                                <input type="email"
                                    className=" form-control email"
                                    placeholder='Enter email address'
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email} />
                                <p className="text-danger">
                                    {" "}
                                    {formik.errors.email &&
                                        formik.touched.email &&
                                        formik.errors.email}{" "}
                                </p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className='form-label'>Password</label>
                                <input type="password"
                                    className=" form-control password"
                                    placeholder='Enter password'
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password} />
                                <p className="text-danger">
                                    {" "}
                                    {formik.errors.password &&
                                        formik.touched.password &&
                                        formik.errors.password}{" "}
                                </p>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success register-btn" disabled={formik.isSubmitting}>
                            {
                                formik.isSubmitting ? (
                                    <Spinner animation="border" variant="light" />
                                ) : (
                                    "Register"
                                )
                            }
                        </button>
                        <h5>Have an account? <Link to="/login" className='action'>Login</Link></h5>
                    </form>
                </div>
                <div className="col-md-6">
                    <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80" alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    )
}
