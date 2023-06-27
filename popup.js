function generateKey() {
    let key = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    navigator.clipboard.writeText(key).then(function() {
      document.getElementById('generate').innerText = key;
    }, function(err) {
      alert('Error: ' + err);
    });
}

document.getElementById('generate').addEventListener('click', generateKey);

// chrome.action.onClicked.addListener(async (tab) => {
//   generateKey();
// });