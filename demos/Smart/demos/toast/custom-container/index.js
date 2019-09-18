window.onload = function () {
    const toast = document.querySelectorAll('smart-toast')[0],
        openButton = document.getElementById('openButton');

    toast.appendContainer = 'toastContainer';

    openButton.addEventListener('click', function () {
        toast.open();
    });
}