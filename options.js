// Saves options to chrome.storage
function saveOptions() {
    var url = document.getElementById('jira-url').value;
    var comment = document.getElementById('log-comment').value;
    chrome.storage.sync.set({
        url: url,
        comment: comment
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
    // Use default values
    chrome.storage.sync.get({
        url: 'https://jira.atlassian.net',
        comment: 'Updated via toggl-to-jira https://chrome.google.com/webstore/detail/toggl-to-jira/anbbcnldaagfjlhbfddpjlndmjcgkdpf'
    }, function(items) {
        document.getElementById('jira-url').value = items.url;
        document.getElementById('log-comment').value = items.comment;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
