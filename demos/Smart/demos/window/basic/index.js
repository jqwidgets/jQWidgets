window.onload = function () {
    const smartWindow = document.querySelector('smart-window');

    document.getElementById('openButton').addEventListener('click', function () {
        smartWindow.opened ? smartWindow.close() : smartWindow.open();
    })
}