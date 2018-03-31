/**
 * Content scripts execute in the context of a page that's been loaded into the 
 * browser. 
 * - Think of a content script as part of a loaded page, not the extension
 * - Content scripts can read & modify details of  web pages the browser visits
 * - Cannot modify the DOM of its parent extension's background page.
*/

//alert('x');
console.log('CHREX2: ContentScript.js');
console.log(document);
var port = chrome.runtime.connect();

function navigateToLoginPage() {
    var el = document.querySelectorAll("a[href*='/login/index.php']")[0];
    el.click();
}

function enterUsername(){
    var el = document.getElementById('username');
    // el.value = chrome.storage.sync.get({"username": ""});
}

function enterPassword(){
    var el = document.getElementById('password');
    // el.value = chrome.storage.sync.get({"password": ""});
}

function submit() {
    console.log("In submit");
    var el = document.querySelector(".visible-xs input#submit");
    console.log(el);
    el.click();
}

function init() {
    if (document.querySelectorAll("a[href*='/login/index.php']").length > 0) {
        navigateToLoginPage();
    } else {
        console.log("In else loop");
        enterUsername();
        enterPassword();
        submit();
    }
}

document.addEventListener('DOMContentLoaded', init);
console.log(document.readyState);
if (document.readyState == 'interactive') {
    init();
}