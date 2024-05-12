import React, { useId, useState } from 'react'
import styles from './Signup.module.css'
import { Link } from 'react-router-dom'
import { MdOutlineLock, MdOutlineEmail } from "react-icons/md"
import { FcGoogle } from "react-icons/fc"
import { LuEye } from "react-icons/lu"
import { FaRegEyeSlash } from "react-icons/fa6"
import { PiUserSquareLight } from "react-icons/pi"


export default function Signup() {

    const [formData, setFormData] = useState(

        {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            remember: false,

        }
    );

    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false);

    const id = useId()

    // Handle change function
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        });
    }

    // Handle submit function
    function handleSubmit(event) {
        event.preventDefault()

        const formValidation = {}

        const regExp = /^[^\s@]+@[^\s@]+ [a-zA-Z0-9._]\.[^\s@]+$/;

        if (!formData.fullName.trim()) {
            formValidation.fullName = "! Field should not be empty"
        }

        if (!formData.email.trim()) {
            formValidation.email = "! Field should not be empty"
        } else if (!regExp.test(formData.email)) {
            formValidation.email = "! Please enter a valid email address"

        }

        if (!formData.password.trim()) {
            formValidation.password = "! Password is required"
        } else if (formData.password.length < 6) {
            formValidation.password = "! Password should be at least 6 characters"

        }

        if (formData.confirmPassword !== formData.password) {
            formValidation.confirmPassword = "! Passwords do not match"
        }

        setErrors(formValidation)

        if (Object.keys(formValidation).length === 0) {
            alert("Signed up successfully!")
        }
        console.log("Form submitted:", formData);
    }


    return (
        <div className={styles.signup_body}>
            <div className={styles.signup_container}>
                <div className={styles.left_page}>
                    <Link to='/'>
                        <div className={styles.logo}>
                            <img src='images/logo.jpg' alt='logo' />
                            <h1 className={styles.logo_text}>BookWorm</h1>
                        </div>
                    </Link>

                    <div className={styles.account}>
                        <h2 className={styles.header}>Create an account</h2>
                        <p>Choose a preferred Signup method</p>

                        <button className={styles.social_btn}> 
                            <FcGoogle className={styles.google_icon} />
                            Sign up with Google
                        </button>

                        <div className={styles.line}>
                            <hr /><p>or</p><hr />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className={styles.accountinput_container}>
                                <PiUserSquareLight className={styles.input_icon} />
                                <input type='text'
                                    name='fullName'
                                    placeholder='Full name'
                                    onChange={handleChange}
                                    value={formData.fullName}
                                    className={styles.input_box}
                                />
                            </div>

                            <p className={styles.error}>
                                {errors.fullName}
                            </p>

                            <div className={styles.input_container}>
                                <MdOutlineEmail className={styles.input_icon} />
                                <input 
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    onChange={handleChange}
                                    value={formData.email}
                                    className={styles.input_box}
                                />
                            </div>

                            <p className={styles.error}>
                                {errors.email}
                            </p>

                            <div className={styles.input_container}>
                                <MdOutlineLock className={styles.input_icon} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    placeholder='Password'
                                    onChange={handleChange}
                                    value={formData.password}
                                    maxLength={8}
                                    className={styles.input_box}
                                />
                                {
                                    showPassword ?
                                    <LuEye
                                        className={styles.eye_icon}
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                    :
                                    <FaRegEyeSlash 
                                        className={styles.eye_icon} 
                                        onClick={() => setShowPassword(!showPassword)} 
                                    />
                                }
                            </div>

                            <p className={styles.error}>{errors.password}</p>


                            <div className={styles.input_container}>
                                <MdOutlineLock className={styles.input_icon} />
                                <input
                                    name='confirmPassword'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Confirm Password'
                                    onChange={handleChange}
                                    value={formData.confirmPassword}
                                    maxLength={8}
                                    className={styles.input_box}
                                />

                                {
                                    showPassword ?
                                    <LuEye
                                        className={styles.eye_icon}
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                    :
                                    <FaRegEyeSlash 
                                        className={styles.eye_icon} 
                                        onClick={() => setShowPassword(!showPassword)} 
                                    />
                                }
                            </div>

                            <p className={styles.error}>{errors.confirmPassword}</p>

                            <div className={styles.remember}>
                                <input type='checkbox'
                                    id={id}
                                    name='remember'
                                    checked={formData.remember}
                                    onChange={handleChange}
                                    className={styles.checkbox} 
                                />
                                <label htmlFor={id}>
                                    Remember me
                                </label>
                            </div>

                            <button type='submit' className={styles.signup}>Sign up</button>

                            <p className={styles.bottom_text}>Already have an account?   <Link to='../login' className={styles.login}>Login</Link></p>
                        </form>
                    </div>
                </div>

                <div className={styles.right_page}>
                    <img src="images/login-pic.png" alt="woman-reading-a-book" />

                    <p>Let's Get You Started</p>
                    <p className={styles.open}>Open the pages to a world of free reads!</p>
                </div>
            </div>

        </div>
    )
}