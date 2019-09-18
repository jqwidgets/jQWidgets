window.onload = function (event) {
    const radioButtons = document.getElementsByTagName('smart-radio-button');

    radioButtons[0].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').resizeMode = 'none';
    });

    radioButtons[1].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').resizeMode = 'vertical';
    });

    radioButtons[2].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').resizeMode = 'horizontal';
    });

    radioButtons[3].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').resizeMode = 'both';
    });

    radioButtons[4].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').dropDownPosition = 'bottom';
    });

    radioButtons[5].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').dropDownPosition = 'top';
    });
}