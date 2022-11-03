import React, { useState } from "react";
import Layout from "../shared/layout";
import { Form, Formik } from "formik";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import '../sign-up/sign-up.styles.scss';

const SignIn = () => {
    const [ error, setError] = useState(null);
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: ''
       }
    const handleSignIn = async ( values, { setSubmitting}) => {
        const { email, password} = values;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setSubmitting(false);
            navigate('shop');
        } catch (error) {
            console.log(error);
            setSubmitting(false);
        }
    }
    return (
        <Layout>
            <h1>Đăng Nhập</h1>
            <div className="form-container">
                <Formik
                initialValues={initialValues}
                onSubmit={handleSignIn}
                >
                    {
                        (values, handleChange, handleSubmit, isSubmitting) => {
                            return (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input 
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            placeholder='Email'
                                            value={values.email}
                                            className='nomad-input' 
                                        />
                                    </div>
                                    <div>
                                        <input 
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            placeholder='password'
                                            value={values.password}
                                            className='nomad-input' 
                                        />
                                    </div>
                                    <div className="submit-btn">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={ 'button is-black nomad-btn submit'} >
                                                Đăng Nhập
                                            </button>
                                    </div>
                                    <div>
                                        {
                                            error && <p>{error.message}</p>
                                        }
                                    </div>
                                </form>
                            );
                        }
                    }
                </Formik>
            </div>
        </Layout>
    )
}

export default SignIn;
