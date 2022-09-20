import { useState, useContext } from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from 'axios';
import Messages from '../../components/message/Messages';
import { Spinner } from "react-bootstrap";
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function Login() {
    const [messages, setMessage] = useState("");
    const navigate = useNavigate();
    const { dispatch } = useContext(Context)

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "Password must be 8 characters or more")
            .required("Password is required!"),
    })

    const handleSignIn = async (values) => {
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", values);
            setMessage(res.data.message);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            if (res.status == 200) {
                navigate('/')
            }
        } catch (error) {
            if (error.response) {
                dispatch({ type: "LOGIN_FAILURE" })
                setMessage(error.response.data.message);
            }
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: handleSignIn
    })
    return (
        <div className='container login'>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h1 className="greet">Welcome Back</h1>
                    {messages && <Messages messages={messages} />}
                    <form className='login-form' onSubmit={formik.handleSubmit}>
                        <div className="login-form-group">
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
                        <button type="submit" className="btn btn-success login-btn" disabled={formik.isSubmitting}>
                            {
                                formik.isSubmitting ? (
                                    <Spinner animation="border" variant="light" />
                                ) : (
                                    "Login"
                                )
                            }
                        </button>
                        <h5>Don't have an account? <Link to="/register" className='action'>Sign up now</Link></h5>
                    </form>
                </div>
                <div className="col-md-6">
                    <img src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-fluid' />
                </div>
            </div>

        </div>
    )
}
