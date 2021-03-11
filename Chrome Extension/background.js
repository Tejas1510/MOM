console.log("background.js");

chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.type === "token_update") {
        console.log("token_update received: ", request.data.token);

        if (localStorage.getItem('token') !== request.data.token) {
            // If any change has happened to token value, update localStorage
            localStorage.setItem('token', request.data.token);
            console.log('token from localStorage.getItem : ', localStorage.getItem('token'));
        }
    }
    else if (request.type === "post_meet") {
        console.log('post_meet', request);

        token = localStorage.getItem('token');
        console.log('token from background.js', token);

        let postData = {
            owner: '',
            hostname: '',
            title: request.data.id,
            duration: '',
            transcript: request.data.content,
            summary: ''
        };

        fetch('http://localhost:8000/api/current_user/', {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(json => {
                if (json === undefined || json.email === '' || json.email === undefined) {
                    // If the token is invalid or expired
                    return;
                }
                else {
                    // If token is correct
                    postData.owner = json.email;
                    postData.hostname = json.name;

                    postData = JSON.stringify(postData); // Stringify postData

                    console.log("final postData obj background.js", postData);

                    // Send Post Request to REST API
                    fetch('http://localhost:8000/api/createMeet', {
                        method: 'POST',
                        headers: {
                            'Content-Type': "application/json",
                            Authorization: `JWT ${localStorage.getItem('token')}`
                        },
                        body: postData
                    })
                        .then(res => { return (res.json()); })
                        .then(req2 => {
                            console.log("background.js req2 ",req2);
                        });
                }
            });
    }
});