extensionState = {
    loggedIn: false,
    email: '',
    name: '',
}

console.log('extensionState', extensionState);

let loginContainerContent = '';

console.log('token from popup.js : ', localStorage.getItem('token'));

updateState = () => {
    let token = localStorage.getItem('token');
    if (token !== null && token !== undefined) {
        fetch('http://localhost:8000/api/current_user/', {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
            .then(res => res.json())
            .then(json => {
                let oldContainerContent = loginContainerContent;
                let loginContainer = document.getElementById("loginContainer");

                if (json === undefined || json.email === '' || json.email === undefined) {
                    // If the token is invalid or expired
                    extensionState.loggedIn = false;
                    extensionState.email = '';
                    extensionState.name = '';
                    loginContainerContent = ' <a href="http://localhost:3000/login" target="_blank">Login</a> ';
                }
                else {
                    // If token is correct
                    extensionState.loggedIn = true;
                    extensionState.email = json.email;
                    extensionState.name = json.name;
                    loginContainerContent = `<p> Logged In as: ${extensionState.email} (${extensionState.name}) </p>`;
                    loginContainerContent += `<p> <a href="http://localhost:3000/dashboard" target="_blank">View Dashboard</a> </p>`;
                }
                console.log("updateState called ", extensionState);
                if (oldContainerContent != loginContainerContent) {
                    // If the display data in html has changed, make update
                    loginContainer
                    while (loginContainer.firstChild) {
                        // Remove any nodes inside loginContainer if already present
                        loginContainer.removeChild(loginContainer.firstChild);
                    }
                    loginContainer.innerHTML = loginContainerContent;
                }
            });
    }
    else {
        console.log("popup.js: token not found in localstorage");
        let loginContainer = document.getElementById("loginContainer");
        extensionState.loggedIn = false;
        extensionState.email = '';
        extensionState.name = '';
        loginContainerContent = ' <a href="http://localhost:3000/login" target="_blank">Login</a> ';
        loginContainer.innerHTML = loginContainerContent;
    }
}

updateState();