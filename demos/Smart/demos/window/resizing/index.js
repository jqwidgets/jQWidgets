window.onload = function () {
    const radioButtons = document.getElementsByTagName('smart-radio-button');

    radioButtons[0].addEventListener('change', function () {
        document.querySelector('smart-window').resizeMode = 'none';
    });

    radioButtons[1].addEventListener('change', function () {
        document.querySelector('smart-window').resizeMode = 'horizontal';
    });

    radioButtons[2].addEventListener('change', function () {
        document.querySelector('smart-window').resizeMode = 'vertical';
    });

    radioButtons[3].addEventListener('change', function () {
        document.querySelector('smart-window').resizeMode = 'both';
    });

    radioButtons[4].addEventListener('change', function () {
        document.querySelector('smart-window').resizeMode = 'top';
    });

    radioButtons[5].addEventListener('change', function () {
        document.querySelector('smart-window').resizeMode = 'bottom';
    });

    radioButtons[6].addEventListener('change', function () {
        document.querySelector('smart-window').resizeMode = 'left';
    });

    radioButtons[7].addEventListener('change', function () {
        document.querySelector('smart-window').resizeMode = 'right';
    });

    radioButtons[8].addEventListener('change', function () {
        document.querySelector('smart-window').resizeIndicator = false;
    });

    radioButtons[9].addEventListener('change', function () {
        document.querySelector('smart-window').resizeIndicator = true;
    });

    radioButtons[10].addEventListener('change', function () {
        document.querySelector('smart-window').liveResize = false;
    });

    radioButtons[11].addEventListener('change', function () {
        document.querySelector('smart-window').liveResize = true;
    });
}