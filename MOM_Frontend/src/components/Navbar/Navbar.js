import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import '../Navbar/style.css'
import { NavLink } from 'react-router-dom';
import { Button } from 'bootstrap';
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark navbar-expand-sm bg-primary  fixed-top">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" >MOM</a>
            <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-2"><NavLink className="nav-link active" to="/" > Home</NavLink></li>
                    <li className="nav-item mr-2"><NavLink className="nav-link" to="/aboutus" >About Us</NavLink></li>
                    <li className="nav-item mr-2"><NavLink className="nav-link" to="/contactus" > Contact </NavLink></li>
                    <li className="nav-item mr-2"><NavLink className="nav-link" to="/dashboard" > DashBoard</NavLink></li>
                </ul>
            </div>
           
        </div>
    </nav>
    </div>
  )
}

export default Navbar
