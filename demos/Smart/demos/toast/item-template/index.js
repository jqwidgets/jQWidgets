window.onload = function () {
    const toast = document.querySelectorAll('smart-toast')[0];

    document.getElementById('openButton').addEventListener('click', function () {
        toast.open();
    });

    toast.addEventListener('open', function () {
        document.getElementById('closeButton').addEventListener('click', function () {
            toast.closeLast();
        });
    });
}