import React, { useId, useState } from 'react'
import './Signup.css'
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


    function handleChange(event) {
        const { name, value, type, checked } = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        });



    }



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
        <div className='signup-body'>

            <div className="signup--container">
                <div className="left--page">
                    <Link to='/'>
                        <div className='logo'>
                            <img src='images/logo.jpg' alt='logo' />
                            <h1 className='logo--text'>BookWorm</h1>
                        </div>
                    </Link>

                    <div className='account'>

                        <h2 className='header'>Create an account</h2>
                        <p>Choose a preferred Signup method</p>



                        <button className='social--btn'> <FcGoogle className='google--icon' />Sign up with Google</button>



                        <div className='line'>
                            <hr /><p>or</p><hr />
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className='input--container'>


                                <PiUserSquareLight className='input--icon' /><input type='text'
                                    name='fullName'
                                    placeholder='Full name'
                                    onChange={handleChange}
                                    value={formData.fullName}
                                    className='input--box'
                                />

                            </div>

                            <p className='error'>
                                {errors.fullName}</p>



                            <div className='input--container'>
                                <MdOutlineEmail className='input--icon' /><input type='email'
                                    name='email'
                                    placeholder='Email'
                                    onChange={handleChange}
                                    value={formData.email}
                                    className='input--box'
                                />
                            </div>


                            <p className='error'>{errors.email}</p>

                            <div className='input--container'>
                                <MdOutlineLock className='input--icon' /><input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    placeholder='Password'
                                    onChange={handleChange}
                                    value={formData.password}
                                    maxLength={8}
                                    className='input--box'
                                />
                                {showPassword ?
                                    <LuEye
                                        className='eye--icon'
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                    :
                                    <FaRegEyeSlash className='eye--icon' onClick={() => setShowPassword(!showPassword)} />
                                }
                            </div>

                            <p className='error'>{errors.password}</p>


                            <div className='input--container'>
                                <MdOutlineLock className='input--icon' /><input
                                    name='confirmPassword'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Confirm Password'
                                    onChange={handleChange}
                                    value={formData.confirmPassword}
                                    maxLength={8}
                                    className='input--box'
                                />

                                {showPassword ?
                                    <LuEye
                                        className='eye--icon'
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                    :
                                    <FaRegEyeSlash className='eye--icon' onClick={() => setShowPassword(!showPassword)} />
                                }
                            </div>

                            <p className='error'>{errors.confirmPassword}</p>



                            <div className='remember'>

                                <input type='checkbox'
                                    id={id}
                                    name='remember'
                                    checked={formData.remember}
                                    onChange={handleChange}
                                    className='checkbox' />

                                <label
                                    htmlFor={id}>Remember me</label>
                            </div>



                            <button type='submit' className='signup'>Sign up</button>

                            <p className='bottom--text'>Already have an account?   <Link to='../login' className="login">Login</Link></p>
                        </form>
                    </div>
                </div>

                <div className="right--page">

                    <img src="images/login-pic.png" alt="woman-reading-a-book" />

                    <p>Let's Get You Started</p>
                    <p className='open'>Open the pages to a world of free reads!</p>
                </div>
            </div>

        </div>
    )
}