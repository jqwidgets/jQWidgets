window.onload = function () {
    const menu = document.getElementById('menu'),
        radioButtons = document.getElementsByTagName('smart-radio-button');

    radioButtons[0].addEventListener('change', function (event) {
        menu.dropDownPosition = 'auto';
    });

    radioButtons[1].addEventListener('change', function (event) {
        menu.dropDownPosition = 'bottom-left';
    });

    radioButtons[2].addEventListener('change', function (event) {
        menu.dropDownPosition = 'bottom-right';
    });

    radioButtons[3].addEventListener('change', function (event) {
        menu.dropDownPosition = 'top-left';
    });

    radioButtons[4].addEventListener('change', function (event) {
        menu.dropDownPosition = 'top-right';
    });

    radioButtons[5].addEventListener('change', function (event) {
        menu.dropDownPosition = 'overlay-left';
    });

    radioButtons[6].addEventListener('change', function (event) {
        menu.dropDownPosition = 'overlay-right';
    });
}