window.onload = function () {
    document.getElementById('openButton').addEventListener('click', function () {
        document.querySelectorAll('smart-toast')[0].open();
    });
}