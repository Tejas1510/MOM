import React from 'react';
import './App.css';
import { Route, Switch,Redirect } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Aboutus from './components/AboutUs/Aboutus';
import Contactus from './components/ContactUs/Contactus';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path ="/">
            <Navbar/>
            <HomePage/>
            <br/>
            <Footer/>
        </Route>
        <Route exact path ="/aboutus">
            <Navbar/>
            <Aboutus/>
            <br/>
            <Footer/>
        </Route>
        <Route exact path ="/login">
            <Navbar/>
            <Login/>
            <br/>
            <Footer/>
        </Route>
        {/* <Route exact path ="/contactus">
            <Navbar/>
            <Contactus/>
            <br/>
            <Footer/>
        </Route> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
