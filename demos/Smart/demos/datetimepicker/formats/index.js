window.onload = function () {
    const dateTimePicker = document.getElementsByTagName('smart-date-time-picker')[0];

    document.getElementById('chooseFormat').addEventListener('change', function (event) {
        dateTimePicker.formatString = event.detail.value;
    });
}