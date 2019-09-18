window.onload = function () {
    const smartWindow = document.querySelector('smart-wait-window');

    document.getElementById('openButton').addEventListener('click', function () {
        if (smartWindow.opened) {
            return;
        }

        smartWindow.open();

        setTimeout(function () {
            smartWindow.close();
        }, 2500);
    });
}