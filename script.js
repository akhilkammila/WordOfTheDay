//Send Message to Background
chrome.runtime.sendMessage({name: "fetchWords"}, (response) => {

    //Logging the response from 'background

    document.querySelector('h1').innerHTML = response.word;
    document.querySelector('p').innerHTML = response.desc;
})