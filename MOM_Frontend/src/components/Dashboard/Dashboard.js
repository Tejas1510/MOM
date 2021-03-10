import React, { Component } from 'react'
<<<<<<< HEAD
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './style.css'
=======
import Sidebar from './Sidebar.js'
import Card from './OutlinedCard.js'

>>>>>>> 461c6c1f2a88374dd54bb6b061057e60bd8dca23
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetList: []
        }
    }

    getMeet = () => {
        let token = localStorage.getItem('token');
        console.log("token", token);
        if (token) {
            fetch('http://localhost:8000/api/current_user/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(json => {
                    if (json === undefined || json.email === '' || json.email === undefined) {
                        // If the token is invalid or expired
                        //console.log('navbar componentDidMount TOken Expired', json)
                        return;
                    }
                    else {
                        // If token is correct
                        fetch('http://localhost:8000/api/getMeet', {
                            method: 'POST',
                            headers: {
                                'Content-Type': "application/json",
                                Authorization: `JWT ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({ email: json.email })
                        })
                            .then(res => res.json())
                            .then(req2 => {
                                console.log("getMeet", req2);
                                let dashboardContent = [];
                                req2.forEach(element => {
<<<<<<< HEAD
                                    console.log(element)
                                    dashboardContent.push((element));
=======
                                    dashboardContent.push(element);
>>>>>>> 461c6c1f2a88374dd54bb6b061057e60bd8dca23
                                });
                                console.log("dashboardContent", dashboardContent);
                                this.setState({ meetList: dashboardContent });
                                return (dashboardContent);
                            });
                    }
                });
        }
    }

    logoutHandler = () => {
        localStorage.removeItem('token');
        console.log('Handle Logout Called');
        this.props.manageState({ logged_in: false, email: '' , name: ''});
    }

    componentDidMount() {
        let token = localStorage.getItem('token');
        if (token) {
            fetch('http://localhost:8000/api/current_user/', {
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
                        this.getMeet();
                    }
                });
        }        
    }

    render() {
       
        const logged_in_dashboard = (
<<<<<<< HEAD
            <div style={{margin: "30px"}}>
                Welcome {this.props.userState.email}<br /><br/>
                List of Meets: <br/><br/>
                {this.state.meetList.map((m)=>(
                    <div className="container mt-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{m.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{m.date}</h6>
                                <p className="card-text">{m.transcript}</p>
                                <p className="card-text">{m.summary}</p>
                                <a href="#" className="card-link">{m.hostname}</a>
                            </div>
                        </div>
                    </div>
                ))}



=======
            <div>
                <Sidebar logoutHandler={this.logoutHandler} user={this.props.userState.email} meetL= {this.state.meetList}></Sidebar>
>>>>>>> 461c6c1f2a88374dd54bb6b061057e60bd8dca23
            </div>)

        const logged_out_dashboard = (
            <div>           
            </div>)
        return (
            <div>
                {this.props.userState.logged_in ? logged_in_dashboard : logged_out_dashboard}
            </div>
        )
    }
}

export default Dashboard;