function saveOptions() {
    var username = document.getElementById('optUsername').value;
    var password = document.getElementById('optPassword').value;

    document.getElementById('status').innerText = "SavING";

    chrome.storage.sync.set({
        "username": username,
        "password": password
    }, function() {
        document.getElementById('status').innerText = "SavED";
    });
}

function restoreOptions() {
    // Use default values ""
    chrome.storage.sync.get({
        "username": "",
        "password": ""
    }, function(items) {
        document.getElementById('optUsername').value = items.username;
        document.getElementById('optPassword').value = items.password;
    });
}

function assessState() {
    switch (document.readyState) {
        case 'loading':
            document.onreadystatechange = assessState;
            break;
        // case 'interactive':
        case 'complete':
            document.getElementById('optSave').addEventListener('click', 
                saveOptions);
            break;
    }
}

document.addEventListener('DOMContentLoaded', restoreOptions);
assessState();