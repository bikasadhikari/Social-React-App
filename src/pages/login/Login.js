import React, { useRef, useContext } from 'react'
import './login.css'
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {

    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
    }

    console.log(user, error);

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">F.R.I.E.N.D.S</h3>
                    <span className="loginDesc">Connect with friends and the world around you on F.R.I.E.N.D.S</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox">
                        <input type="email" placeholder="Email" required className="loginInput" ref={email} />
                        <input type="password" placeholder="Password" required minLength="6" className="loginInput" ref={password} />
                        <button className="loginButton" disabled={isFetching} onClick={handleClick}>{isFetching ? <CircularProgress color="inherit" size="25px" />: "Login"}</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">{isFetching ? <CircularProgress color="inherit" size="25px" />: "Create a new account"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;