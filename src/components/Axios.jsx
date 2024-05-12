import axios from 'axios'

const baseURL = 'https://bookworm-backend-1.onrender.com';

// Sign Up
async function signUp() {
    try {
        const response = await axios.post(`${baseURL}/user/signup`, {
            name: 'Courage Nduka',
            email: 'couragenduka4.com',
            passWord: 'someone'
        });
        console.log('Sign Up Response:', response.data);
    } catch (error) {
        console.error('Sign Up Error:', error.response.data);
    }
}

// Login
async function login() {
    try {
        const response = await axios.post(`${baseURL}/user/login`, {
            email: 'couragenduka4.com',
            passWord: 'someone'
        });
        console.log('Login Response:', response.data);
    } catch (error) {
        console.error('Login Error:', error.response.data);
    }
}

// Google Authentication
async function googleAuth() {
    try {
        const response = await axios.get(`${baseURL}/auth/google`);
        console.log('Google Auth Response:', response.data);
    } catch (error) {
        console.error('Google Auth Error:', error.response.data);
    }
}

// Find Email
async function findEmail() {
    try {
        const response = await axios.post(`${baseURL}/user/findEmail`, {
            email: 'couragenduka4.com'
        });
        console.log('Find Email Response:', response.data);
    } catch (error) {
        console.error('Find Email Error:', error.response.data);
    }
}

// Update Password
async function updatePassword() {
    try {
        const response = await axios.post(`${baseURL}/user/updatePassword`, {
            passWord: 'someone'
        });
        console.log('Update Password Response:', response.data);
    } catch (error) {
        console.error('Update Password Error:', error.response.data);
    }
}

// Save Book Category
async function saveCategory() {
    try {
        const response = await axios.post(`${baseURL}/createCategory`, {
            name: 'on wahala'
        });
        console.log('Save Category Response:', response.data);
    } catch (error) {
        console.error('Save Category Error:', error.response.data);
    }
}

// Call the functions to execute the requests
signUp();
login();
googleAuth();
findEmail();
updatePassword();
saveCategory();