import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import './style.css'
import { NavLink } from 'react-router-dom';
import logo from '../Dashboard/Meet Digest.png';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    logoutHandler = () => {
        localStorage.removeItem('token');
        //console.log('Handle Logout Called');
        this.props.manageState({ logged_in: false, email: '' , name: ''});
    }

    componentDidMount() {
        let token = localStorage.getItem('token');
        //console.log('Navbar.js: token from localstorage',token);
        if (token) {
            fetch('https://meetdigest.herokuapp.com/api/current_user/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(json => {
                    if (json === undefined || json.email === '' || json.email === undefined) {
                        // If the token is invalid or expired
                        //console.log('navbar componentDidMount TOken Expired', json)
                        this.props.manageState({ logged_in: false, email: '', name: ''});
                    }
                    else {
                        // If token is correct
                        this.props.manageState({ logged_in: true, email: json.email, name: json.name});
                    }
                });
        }        
    }

    render() {
        // if(!this.props.userState)
        //     return(null);
        return (
            <div>
                <nav className="navbar navbar-dark navbar-expand-sm navBackground  fixed-top">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <img src={logo} width="5%" style={{marginRight: '15px'}}/>
                        <a className="navbar-brand" >Meet Digest</a>
                        <div className="collapse navbar-collapse" id="Navbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mr-2"><NavLink className="nav-link" to="/" >Home</NavLink></li>
                                <li className="nav-item mr-2"><NavLink className="nav-link" to="/aboutus" >About Us</NavLink></li>
                                <li className="nav-item mr-2"><NavLink className="nav-link" to="/contactus" >Contact</NavLink></li>
                                {
                                    this.props.userState.logged_in
                                        ?
                                        <li className="nav-item mr-2"><NavLink className="nav-link" to="/dashboard" >{this.props.userState.name}</NavLink></li>
                                        :
                                        <li className="nav-item mr-2"><NavLink className="nav-link" to="/login" >Login</NavLink></li>
                                }

                                {
                                    this.props.userState.logged_in
                                        ?
                                        <li className="nav-item mr-2"><a className="nav-link" href="" onClick={this.logoutHandler}>Logout</a></li>
                                        :
                                        null
                                }


                            </ul>
                        </div>

                    </div>
                </nav>
            </div >
        )
    }
}

export default Navbar;
