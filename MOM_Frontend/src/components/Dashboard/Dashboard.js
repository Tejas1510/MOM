import React, { Component } from 'react'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetList: ''
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
                                let dashboardContent = "";
                                req2.forEach(element => {
                                    dashboardContent += JSON.stringify(element);
                                });
                                console.log("dashboardContent", dashboardContent);
                                this.setState({ meetList: dashboardContent });
                                return (dashboardContent);
                            });
                    }
                });
        }





    }

    componentDidMount() {
        this.getMeet();
    }

    render() {
        const logged_in_dashboard = (
            <div style={{margin: "30px"}}>
                Welcome {this.props.userState.email}<br /><br/>
                List of Meets: <br/><br/>
                {this.state.meetList}
            </div>)

        const logged_out_dashboard = (
            <div>
                Login To View Dashboard
            </div>)

        return (

            <div>
                <br /><br /><br /><br />
                {
                    this.props.userState.logged_in ? logged_in_dashboard : logged_out_dashboard
                }

            </div>
        )
    }
}

export default Dashboard;