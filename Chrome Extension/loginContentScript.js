console.log("loginContentScript.js called");

tokenFromStorage = -1; // -1 means page is loaded for first time

sendToken = () => {
    console.log("sendToken");
    tokenFromStorage = localStorage.getItem('token');
    console.log("tokenFromStorage", tokenFromStorage);
    chrome.runtime.sendMessage({type: "token_update", data: { 
        token: tokenFromStorage
    }});
}

setInterval(() => {
    if(tokenFromStorage != localStorage.getItem('token')){
        sendToken();
    }    
} ,1000);