import React, { useState } from 'react'
import './style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { useHistory } from "react-router-dom";
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

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
            signUpHeadClass: 'signUpHeader', infoContent: ''
        });
    }

    const signUpTabClickHandler = () => {
        setState({
            ...state, activeTab: 'signUp', signInClass: 'signInContainer',
            signUpClass: 'signUpContainer activeContainer', signInHeadClass: 'signInHeader',
            signUpHeadClass: 'signUpHeader activeHeader', infoContent: ''
        });
    };

    const inputHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value, infoContent: '' });
    }

    const clickSignIn = (e) => {
        e.preventDefault();
        const formData = {
            'email': state.signInEmail,
            'password': state.signInPassword
        };
        //console.log("Sign In, formData", formData);
        trackPromise(
            fetch('https://meetdigest.herokuapp.com/token-auth/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(res => {
                    //console.log(res);
                    if (res.status !== 200) {
                        //console.log("Login Error");
                        setState({ ...state, infoContent: 'Incorrect Login Credentials' });
                        return null;
                    }
                    return (res.json());
                })
                .then(json => {
                    if (json === null)
                        return;
                    //console.log("Login form json", json);
                    //console.log("Login form json.user", json.user);
                    localStorage.setItem('token', json.token);
                    props.manageState({ logged_in: true, email: json.user.email, name: json.user.name });
                    history.push("/dashboard");
                    return (
                        <div className="alert alert-success" role="alert">
                            Sign Up Succesful
                        </div>
                    )
                })
                .catch(() => { })
        );
    }

    const clickSignUp = (e) => {
        e.preventDefault();
        const formData = {
            'email': state.signUpEmail,
            'name': state.signUpName,
            'password': state.signUpPassword1,
            //'password2': state.signUpPassword2
        };
        //console.log("Sign Up, formData", formData);

        if (state.signUpPassword1 !== state.signUpPassword2) {
            //console.log(state);
            setState({ ...state, infoContent: 'Passwords Do Not Match' });
            return;
        }

        trackPromise(
            fetch('https://meetdigest.herokuapp.com/api/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(res => {
                    //console.log("signup response", res);
                    if (res.status !== 201) {
                        //console.log("Signup Error");
                        setState({ ...state, infoContent: 'Incorrect Signup Credentials' });
                        return null;
                    }
                    return (res.json());
                })
                .then(json => {
                    if (json === null)
                        return;
                    //console.log("Signup form json", json);
                    //console.log("Signup form json.user", json.user);
                    localStorage.setItem('token', json.token);
                    props.manageState({ logged_in: true, email: json.email, name: json.name });

                    history.push("/dashboard");
                    //console.log("After history", state);
                    return (
                        <div className="alert alert-success" role="alert">
                            Sign Up Succesful
                        </div>
                    )
                })
        );
    }

    return (
        <div>
            <br /><br /><br /><br />
            <form>
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
                            <input type="email" autoComplete="on" name="signInEmail" value={state.signInEmail} onChange={inputHandler} />
                        </div>

                        <div className="inputGroup">
                            <label>Password</label><br />
                            <input type="password" name="signInPassword" value={state.signInPassword} onChange={inputHandler} />
                        </div>

                        <LoadingIndicator color="#FFFFFF"/>

                        <div className="actionButton">
                            <br />
                            {state.activeTab === 'signIn' ?
                                <button className="buttonLink" id="signInButtonLink" onClick={clickSignIn}>Sign In</button>
                                : null
                            }
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

                        <LoadingIndicator color="#FFFFFF"/>

                        <div className="actionButton">
                            {state.activeTab === 'signUp' ?
                                <button className="buttonLink" id="signUpButtonLink" onClick={clickSignUp}>Sign Up</button>
                                : null
                            }
                        </div>
                    </div>

                    <div className="infoBox">
                        {state.infoContent}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
