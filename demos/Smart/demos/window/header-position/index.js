window.onload = function () {
    const smartWindow = document.querySelector('smart-window'),
        radioButtons = document.getElementsByTagName('smart-radio-button');

    document.getElementById('openButton').addEventListener('click', function () {
        smartWindow.opened ? smartWindow.close() : smartWindow.open();
    });

    radioButtons[0].addEventListener('change', function () {
        smartWindow.headerPosition = 'top';
    });

    radioButtons[1].addEventListener('change', function () {
        smartWindow.headerPosition = 'bottom';
    });

    radioButtons[2].addEventListener('change', function () {
        smartWindow.headerPosition = 'left';
    });

    radioButtons[3].addEventListener('change', function () {
        smartWindow.headerPosition = 'right';
    });
}