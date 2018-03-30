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

// When extension is installed / upgraded
chrome.runtime.onInstalled.addListener(function() {
    // Replace all rules
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        //With new rule
        chrome.declarativeContent.onPageChanged.addRules(
            [ruleNotLoggedIn],
            actions: [chrome.declarativeContent.showPageAction()]
    });
});