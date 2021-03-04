console.log("background.js");

chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.type === "token_update"){
        console.log("token_update received: ", request.data.token);

        if(localStorage.getItem('token') !== request.data.token){
            // If any change has happened to token value, update localStorage
            localStorage.setItem('token', request.data.token);
            console.log('token from localStorage.getItem : ', localStorage.getItem('token'));   
        }
    }
      
});