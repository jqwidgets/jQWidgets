window.onload = function () {
    const smartWindow = document.querySelector('smart-window');

    document.querySelector('smart-button').addEventListener('click', function () {
        if (smartWindow.disableSnap) {
            smartWindow.disableSnap = false;
            this.innerHTML = 'Disable Snapping';
        }
        else {
            smartWindow.disableSnap = true;
            this.innerHTML = 'Enable Snapping';
        }
    })
}