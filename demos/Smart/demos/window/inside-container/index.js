window.onload = function () {
    const smartWindow = document.querySelector('smart-window');

    document.querySelector('smart-button').addEventListener('click', function () {
        smartWindow.opened ? smartWindow.close() : smartWindow.open();
    });
}