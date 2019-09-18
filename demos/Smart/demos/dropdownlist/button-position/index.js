window.onload = function () {
    const radioButtons = document.querySelectorAll('smart-radio-button');

    radioButtons[0].addEventListener('change', function () {
        document.querySelector('smart-drop-down-list').dropDownButtonPosition = 'left';
    });

    radioButtons[1].addEventListener('change', function () {
        document.querySelector('smart-drop-down-list').dropDownButtonPosition = 'right';
    });
}