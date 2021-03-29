import React from 'react';
import './App.css';
import { Route, Switch,Redirect } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Aboutus from './components/AboutUs/Aboutus';
import Contactus from './components/ContactUs/Contactus';
import Login from './components/Login/Login';
import { useState } from 'react';
import { useEffect } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Footer1 from './components/Footer/Footer1';
import Nptel from './components/NPTEL/Nptel';

function App() {
  // DECLARE LOGIN STATE FOR APP
  const [state, setState] = useState({logged_in: false, email: '', name: ''});  

  return (
    <div>
      <Switch>
        <Route exact path ="/">
            <Navbar userState={state} manageState={setState}/>
            <HomePage/>
            <br/>
            <Footer/>
        </Route>
        <Route exact path ="/dashboard">
            <Dashboard userState={state} manageState={setState}/>
        </Route>
        <Route exact path ="/aboutus">
            <Navbar userState={state} manageState={setState}/>
            <Aboutus/>
            <br/>
            <Footer/>
        </Route>
        <Route exact path ="/login">
            <Navbar userState={state} manageState={setState}/>
            <Login userState={state} manageState={setState}/>
            <br/>
            <Footer1/>
        </Route>
        <Route exact path ="/contactus">
            <Navbar userState={state} manageState={setState}/>
            <Contactus/>
            <br/>
            <Footer/>
        </Route>
        <Route exact path ="/nptel">
            <Navbar userState={state} manageState={setState}/>
            <Nptel/>
            <br/>
            <Footer/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
