import React, { useState } from 'react'
import './style.css'
import { useHistory } from "react-router-dom";

function Login(props) {
    const [state, setState] = useState({
        activeTab: 'signIn',
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpName: '',
        signUpPassword1: '',
        signUpPassword2: '',
        signInClass: 'signInContainer activeContainer',
        signUpClass: 'signUpContainer',
        signInHeadClass: 'signInHeader activeHeader',
        signUpHeadClass: 'signUpHeader',
        infoContent: ''
    });

    let history = useHistory();

    const signInTabClickHandler = () => {
        setState({
            ...state, activeTab: 'signIn', signInClass: 'signInContainer activeContainer',
            signUpClass: 'signUpContainer', signInHeadClass: 'signInHeader activeHeader',
            signUpHeadClass: 'signUpHeader'
        });
    }

    const signUpTabClickHandler = () => {
        setState({
            ...state, activeTab: 'signUp', signInClass: 'signInContainer',
            signUpClass: 'signUpContainer activeContainer', signInHeadClass: 'signInHeader',
            signUpHeadClass: 'signUpHeader activeHeader'
        });
    };

    const inputHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const clickSignIn = (e) => {
        const formData = {
            'email': state.signInEmail,
            'password': state.signInPassword
        };
        console.log("Sign In, formData", formData);
        fetch('http://localhost:8000/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(json => {
                console.log("Login form json", json);
                console.log("Login form json.user", json.user);
                localStorage.setItem('token', json.token);
                props.manageState({ logged_in: true, email: json.user.email, name: json.user.name});
                history.push("/dashboard");
            });
    }

    const clickSignUp = () => {
        const formData = {
            'email': state.signUpEmail,
            'name': state.signUpName,
            'password': state.signUpPassword1,
            //'password2': state.signUpPassword2
        };
        console.log("Sign Up, formData", formData);

        fetch('http://localhost:8000/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(json => {
                console.log("Signup form json", json);
                console.log("Signup form json.user", json.user);
                localStorage.setItem('token', json.token);
                props.manageState({ logged_in: true, email: json.email, name: json.name});
                history.push("/dashboard");
            });
    }

    return (
        <div>
            <br /><br /><br /><br />
            <div className="formContainer">
                <div className="formHeader">
                    <div className={state.signInHeadClass} onClick={signInTabClickHandler}>
                        Sign In
                    </div>
                    <div className={state.signUpHeadClass} onClick={signUpTabClickHandler}>
                        Sign Up
                    </div>
                </div>

                <div className={state.signInClass}>
                    <div className="inputGroup">
                        <label>Email</label><br />
                        <input type="email" name="signInEmail" value={state.signInEmail} onChange={inputHandler} />
                    </div>

                    <div className="inputGroup">
                        <label>Password</label><br />
                        <input type="password" name="signInPassword" value={state.signInPassword} onChange={inputHandler} />
                    </div>

                    <div className="actionButton">
                        <br />
                        <a className="buttonLink" onClick={clickSignIn}>Sign In</a>
                    </div>
                </div>

                <div className={state.signUpClass}>
                    <div className="inputGroup">
                        <label>Name</label><br />
                        <input type="text" name="signUpName" value={state.signUpName} onChange={inputHandler} />
                    </div>

                    <div className="inputGroup">
                        <label>Email</label><br />
                        <input type="email" name="signUpEmail" value={state.signUpEmail} onChange={inputHandler} />
                    </div>

                    <div className="inputGroup">
                        <label>Password</label><br />
                        <input type="password" name="signUpPassword1" value={state.signUpPassword1} onChange={inputHandler} />
                    </div>

                    <div className="inputGroup">
                        <label>Confirm Password</label><br />
                        <input type="password" name="signUpPassword2" value={state.signUpPassword2} onChange={inputHandler} />
                    </div>

                    <div className="actionButton">
                        <a className="buttonLink" onClick={clickSignUp}>Sign Up</a>
                    </div>
                </div>

                <div className="infoBox">
                    {state.infoContent}
                </div>
            </div>
        </div>
    )
}

export default Login;
