window.onload = function () {
    const smartWindows = document.getElementsByTagName('smart-window');

    document.getElementById('openButton').addEventListener('click', function () {
        for (let w = 0; w < smartWindows.length; w++) {
            smartWindows[w].opened = !smartWindows[w].opened
        }
    })
}