function logURL(requestDetails) {
    console.log("Loading: " + requestDetails.url);
}

let gettingItem = browser.storage.local.get();

function onGot(obj) {
    // console.log("AH EH 2")
    let exists = false;
    console.log(obj);
    for(var key in obj) {
        if(obj.hasOwnProperty(key)){
            exists = true;
        }
    }
    console.log(exists);

}
console.log("ALOALOALO")
function onError(error) {
    console.log(`Error: ${error}`);
}



function getStorage(){
    if(!window.localStorage){
        console.log("NO STORAGE")
    }
    let exists = false;
    if (window.localStorage.length > 0){
        exists = true;
        console.log(window.localStorage.getItem());
    }
    console.log(exists, window.localStorage.length);
}

// browser.webRequest.onBeforeRequest.addListener(
//     logURL, {
//         urls: ["<all_urls>"]
//     }
// );

browser.webRequest.onCompleted.addListener(
    getStorage,
    {urls: ["<all_urls>"]}
);

