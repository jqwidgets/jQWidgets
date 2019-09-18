window.onload = function () {
    const toast = document.querySelectorAll('smart-toast')[0],
        log = document.getElementById('log'),
        openButton = document.getElementById('openButton');

    openButton.addEventListener('click', function () {
        toast.open();
    });

    toast.addEventListener('close', function () {
        log.innerHTML = '"close"<br />' + log.innerHTML;
    });

    toast.addEventListener('click', function () {
        log.innerHTML = '"click"<br />' + log.innerHTML;
    });

    toast.addEventListener('open', function () {
        log.innerHTML = '"open"<br />' + log.innerHTML;
    });

    toast.addEventListener('swipebottom', function () {
        log.innerHTML = '"swipebottom"<br />' + log.innerHTML;
    });

    toast.addEventListener('swipeleft', function () {
        log.innerHTML = '"swipeleft"<br />' + log.innerHTML;
    });

    toast.addEventListener('swiperight', function () {
        log.innerHTML = '"swiperight"<br />' + log.innerHTML;
    });

    toast.addEventListener('swipetop', function () {
        log.innerHTML = '"swipetop"<br />' + log.innerHTML;
    });
}