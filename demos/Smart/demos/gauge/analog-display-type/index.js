window.onload = function () {
    const analogDisplayTypeRadioButtons = document.querySelectorAll('[group-name="analogDisplayType"]'),
        gauge = document.getElementById('gauge');

    analogDisplayTypeRadioButtons[0].addEventListener('change', function () {
        gauge.analogDisplayType = 'needle';
    });
    analogDisplayTypeRadioButtons[1].addEventListener('change', function () {
        gauge.analogDisplayType = 'fill';
    });
    analogDisplayTypeRadioButtons[2].addEventListener('change', function () {
        gauge.analogDisplayType = 'line';
    });
}