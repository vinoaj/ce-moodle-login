/**
 * Content scripts execute in the context of a page that's been loaded into the 
 * browser. 
 * - Think of a content script as part of a loaded page, not the extension
 * - Content scripts can read & modify details of  web pages the browser visits
 * - Cannot modify the DOM of its parent extension's background page.
*/

// var port = chrome.runtime.connect();

function navigateToLoginPage() {
    document.location = "https://ssologin.unsw.edu.au/cas/login?service=https://moodle.telt.unsw.edu.au/login/index.php?authCAS=CAS";
    // var el = document.querySelectorAll("a[href*='/login/index.php']")[0];
    // el.click();
}

function enterUsername(){
    chrome.storage.sync.get({"username": ""}, function(items) {
        document.getElementById('username').value = items.username;
    });
}

function enterPassword(){
    chrome.storage.sync.get({"password": ""}, function(items) {
        document.getElementById('password').value = items.password;
    });
}

function submit() {
    document.querySelector(".visible-xs input#submit").click();
}

function init() {
    if (document.querySelectorAll("a[href*='/login/index.php']").length > 0) {
        navigateToLoginPage();
    } else {
        console.log("In else loop");
        enterUsername();
        enterPassword();
        window.setTimeout(submit,1000);
    }
}

if (document.readyState == 'interactive') {
    init();
}