import React, { Component } from 'react'
import axios from 'axios';

class MeetBlock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: "",
             content: ""
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({title: res.data[0].title, content: res.data[0].content});
            console.log(res.data);
        }
        )
    }
    
    render() {
        return (
            <div>
                Title: {this.state.title}<br/>
                Content: {this.state.content}
            </div>
        )
    }
}

export default MeetBlock
