window.onload = function (event) {
    const radioButtons = document.getElementsByTagName('smart-radio-button');

    radioButtons[0].addEventListener('change', function () {
        document.querySelector('smart-drop-down-list').resizeMode = 'none';
    });

    radioButtons[1].addEventListener('change', function () {
        document.querySelector('smart-drop-down-list').resizeMode = 'vertical';
    });

    radioButtons[2].addEventListener('change', function () {
        document.querySelector('smart-drop-down-list').resizeMode = 'horizontal';
    });

    radioButtons[3].addEventListener('change', function () {
        document.querySelector('smart-drop-down-list').resizeMode = 'both';
    });

    radioButtons[4].addEventListener('change', function () {
        document.querySelector('smart-drop-down-list').dropDownPosition = 'bottom';
    });

    radioButtons[5].addEventListener('change', function () {
        document.querySelector('smart-drop-down-list').dropDownPosition = 'top';
    });
}