// background.js holds the main logic of the extension
// Persistent pages are always open (not recommended)
// Event pages opened & closed as needed

// If login link is present then the user is not logged in
var ruleNotLoggedIn = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { 
                hostPrefix: 'moodle.',
                schemes: ['https']
            },
            css: ["a[href*='/login/index.php']"]
        })
    ]
};

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([ruleNotLoggedIn]);
    });
});