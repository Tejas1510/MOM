import axios from 'axios'

export function getAllMeetList(callback){
    const apiUrl = 'http://127.0.0.1:8000/api/apiOverview';
    axios.get(apiUrl).then(response => {
        callback(response.data);
    });
}