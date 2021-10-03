import React, { useRef } from 'react'
import './register.css'
import axios from 'axios'
import { useHistory } from 'react-router'

const Register = () => {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const cPassword = useRef();

    const history = useHistory();

    const registerHandler = async (e) => {
        e.preventDefault();
        if (password.current.value !== cPassword.current.value) {
            cPassword.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            };
            try {
                await axios.post("/auth/register", user);
                history.push('/login');
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">F.R.I.E.N.D.S</h3>
                    <span className="loginDesc">Connect with friends and the world around you on F.R.I.E.N.D.S</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={registerHandler}>
                        <input placeholder="Username" className="loginInput" ref={username} />
                        <input type="email" placeholder="Email" className="loginInput" ref={email} />
                        <input type="password" placeholder="Password" className="loginInput" ref={password} />
                        <input type="password" placeholder="Confirm Password" className="loginInput" ref={cPassword} />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton">Log into your account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;