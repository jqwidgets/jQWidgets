window.onload = function () {
    const dateTimePicker = document.getElementById('dateTimePicker'),
        radioButtons = document.getElementsByTagName('smart-radio-button');

    radioButtons[0].addEventListener('change', function (event) {
        dateTimePicker.dropDownDisplayMode = 'default';
    });

    radioButtons[1].addEventListener('change', function (event) {
        dateTimePicker.dropDownDisplayMode = 'classic';
    });

    radioButtons[2].addEventListener('change', function (event) {
        dateTimePicker.dropDownDisplayMode = 'calendar';
    });

    radioButtons[3].addEventListener('change', function (event) {
        dateTimePicker.dropDownDisplayMode = 'timePicker';
    });

    radioButtons[4].addEventListener('change', function (event) {
        dateTimePicker.dropDownDisplayMode = 'auto';
    });
}