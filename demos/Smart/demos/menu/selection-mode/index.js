window.onload = function () {
    const menu = document.getElementById('menu'),
        radioButtons = document.getElementsByTagName('smart-radio-button');

    radioButtons[0].addEventListener('change', function (event) {
        menu.selectionMode = 'click';
    });

    radioButtons[1].addEventListener('change', function (event) {
        menu.selectionMode = 'mouseenter';
    });
}