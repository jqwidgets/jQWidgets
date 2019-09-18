window.onload = function () {
    const radioButtons = document.getElementById('controlPanel').getElementsByTagName('smart-radio-button'),
        dropDownButton = document.querySelector('smart-drop-down-button');

    radioButtons[0].addEventListener('change', function () {
        dropDownButton.dropDownButtonPosition = 'left';
    });

    radioButtons[1].addEventListener('change', function () {
        dropDownButton.dropDownButtonPosition = 'right';
    });

    radioButtons[2].addEventListener('change', function () {
        dropDownButton.dropDownButtonPosition = 'top';
    });

    radioButtons[3].addEventListener('change', function () {
        dropDownButton.dropDownButtonPosition = 'bottom';
    });

    radioButtons[4].addEventListener('change', function () {
        dropDownButton.dropDownOpenMode = 'default';
    });

    radioButtons[5].addEventListener('change', function () {
        dropDownButton.dropDownOpenMode = 'dropDownButton';
    });

    dropDownButton.addEventListener('change', function (event) {
        this.placeholder = event.detail.value;
    });

    dropDownButton.placeholder = dropDownButton.querySelector('smart-tank').value;
}