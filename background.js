var ruleNotLoggedIn = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { 
                hostPrefix: 'moodle.',
                schemes: ['https']
            },
            css: [".login a"]
        })
    ]
};