import React ,{ useId, useState} from 'react'
import styles from './Login.module.css';
import { Link } from 'react-router-dom'
import axios from 'axios'

const baseURL = 'https://bookworm-backend-1.onrender.com';


export default function Login() {
    const [successmessage, setSuccessmessage]= useState('')
    const [errormessage, setErrormessage]= useState('')
    const [formData, setFormData] = useState(

        {
            email: "",
            password: "",

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
    async function handleSubmit(event) {
        event.preventDefault()

        const formValidation = {}

        const regExp = /^[^\s@]+@[^\s@]+ [a-zA-Z0-9._]\.[^\s@]+$/;

        // if (!formData.fullName.trim()) {
        //     formValidation.fullName = "! Field should not be empty"
        // }

        if (!formData.email.trim()) {
            formValidation.email = "! Field should not be empty"
        }
         else if (!regExp.test(formData.email)) {
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

        // if (Object.keys(formValidation).length === 0) {
        //     alert("Signed up successfully!")
        // }
        // console.log("Form submitted:", formData);
        
    }

    const handleOnClick=async()=>{
        try {
            const response = await axios.post(`${baseURL}/user/login`, {
               email:formData.email,
               passWord:formData.password,
            });

            console.log('Sign Up Response:', response.data);
            setSuccessmessage(response.data.message)
            setErrormessage(response.data.message); 
        } catch (error) {
            console.error('Sign Up Error:', error.response.data);
        }
    }
  return (
    <div className={styles.login_page}>
        <div className={styles.login_left}>
            <Link to='/'>
                <div className={styles.login_brand}>
                    <img src="images/logo.jpg" alt="" />
                    BookWorm
                </div>
            </Link>
            <form action="POST" onSubmit={handleSubmit}>
                <div className={styles.login_form_title}>
                    Login to Your Account
                </div>
                <p>
                    welcome back! Chose your prefarred login method
                </p>
                <div className={styles.social_btn}>
                    <button className={styles.google_btn}>
                        <img src="images/g.png" alt="" />
                        Google
                    </button>
                    <button className={styles.twitter_btn}>
                        <img src="images/twit.png" alt="" />
                        Twitter
                    </button>
                </div> 
                <div className={styles.or}>
                    <hr />or<hr />    
                </div>
                <div className={styles.user_detail_field}>
                    <div className={styles.email_box}>                        
                        <input   
                            type='email'
                            name='email'
                            placeholder='Email'
                            onChange={handleChange}
                            value={formData.email}                                    
                        />
                    </div>  
                    <div className={styles.email_box}>
                        <input 
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            placeholder='Password'
                            onChange={handleChange}
                            value={formData.password}
                            maxLength={8}
                        />                                    
                    </div>       
                </div> 
                <div className={styles.pwd_details}>
                    <div className={styles.left_detail}>Remember me</div>
                    <div className={styles.right_detail}>Forgot password</div>    
                </div>  
                <button className={styles.login_button} onClick={handleOnClick}>Login</button>
                {/* <div className={styles.login_button}>Login</div>   */}
                <div className={styles.dont_have_account}>
                    <span>Don't have an account? </span>
                    <span>
                        <Link to = '../signup'>Signup</Link>
                    </span>    
                </div>      
            </form>
        </div>
        <div className={styles.login_right}>
            <img src="images/login-pic.png" alt="" />
            <div>
                <div className={styles.title}>Let's Begin</div>
                <p>Open the pages to a world of free reads!</p>
                <div className={styles.page_circ}>
                    <span className={styles.circ}></span>
                    <span className={`${styles.circ} ${styles.active}`}></span>
                </div>
            </div>
        </div>
    </div>
  )
}