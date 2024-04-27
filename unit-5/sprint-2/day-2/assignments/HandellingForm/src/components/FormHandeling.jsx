import React, { useState, useRef } from 'react';
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleFocus = (ref) => {
    ref.current.focus();
};

export const DynamicForm = () => {
const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
});

const usernameRef = useRef(null);
const emailRef = useRef(null);
const passwordRef = useRef(null);


const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
};


const isUsernameValid = formData.username.length >= 3;
const isEmailValid = /\S+@\S+\.\S+/.test(formData.email);
const isPasswordValid = formData.password.length >= 6;

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                ref={usernameRef}
                onFocus={() => handleFocus(usernameRef)}
                style={{ borderColor: isUsernameValid ? 'green' : 'red' }}
            />
            {!isUsernameValid && <span>Username must be at least 3 characters long.</span>}
        </div>
        <div>
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                ref={emailRef}
                onFocus={() => handleFocus(emailRef)}
                style={{ borderColor: isEmailValid ? 'green' : 'red' }}
            />
            {!isEmailValid && <span>Invalid email address.</span>}
        </div>
        <div>
            <label>Password:</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                ref={passwordRef}
                onFocus={() => handleFocus(passwordRef)}
                style={{ borderColor: isPasswordValid ? 'green' : 'red' }}
            />
            {!isPasswordValid && <span>Password must be at least 6 characters long.</span>}
        </div>
        <button type="submit">Submit</button>
    </form>
);
};


