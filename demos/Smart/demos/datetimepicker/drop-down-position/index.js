window.onload = function () {
    const dateTimePicker = document.querySelector('smart-date-time-picker'),
        radioButtons = document.getElementsByTagName('smart-radio-button');

    radioButtons[0].addEventListener('change', function (event) {
        dateTimePicker.dropDownPosition = 'bottom';
    });

    radioButtons[1].addEventListener('change', function (event) {
        dateTimePicker.dropDownPosition = 'top';
    });

    radioButtons[2].addEventListener('change', function (event) {
        dateTimePicker.dropDownPosition = 'overlay-bottom';
    });

    radioButtons[3].addEventListener('change', function (event) {
        dateTimePicker.dropDownPosition = 'overlay-center';
    });

    radioButtons[4].addEventListener('change', function (event) {
        dateTimePicker.dropDownPosition = 'overlay-top';
    });

    radioButtons[5].addEventListener('change', function (event) {
        dateTimePicker.dropDownPosition = 'center-bottom';
    });

    radioButtons[6].addEventListener('change', function (event) {
        dateTimePicker.dropDownPosition = 'center-top';
    });

    radioButtons[7].addEventListener('change', function (event) {
        dateTimePicker.calendarButton = true;
        dateTimePicker.calendarButtonPosition = 'left';
    });

    radioButtons[8].addEventListener('change', function (event) {
        dateTimePicker.calendarButton = true;
        dateTimePicker.calendarButtonPosition = 'right';
    });

    radioButtons[9].addEventListener('change', function (event) {
        dateTimePicker.calendarButton = false;
    });
}