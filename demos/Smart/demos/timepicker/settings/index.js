window.onload = function () {
    const timePicker = document.getElementById('timePicker'),
        valueLog = document.getElementById('valueLog'),
        selection = document.querySelectorAll('[group-name="selection"]'),
        minuteInterval = document.querySelectorAll('[group-name="minuteInterval"]');

    valueLog.innerHTML = timePicker.value.getHours() + ':' + timePicker.value.getMinutes();

    timePicker.addEventListener('change', function (event) {
        const value = event.detail.value;

        valueLog.innerHTML = value.getHours() + ':' + value.getMinutes();
    });

    selection[0].addEventListener('change', function () {
        timePicker.selection = 'hour';
    });
    selection[1].addEventListener('change', function () {
        timePicker.selection = 'minute';
    });

    minuteInterval[0].addEventListener('change', function () {
        timePicker.minuteInterval = 1;
    });
    minuteInterval[1].addEventListener('change', function () {
        timePicker.minuteInterval = 5;
    });
    minuteInterval[2].addEventListener('change', function () {
        timePicker.minuteInterval = 15;
    });

    document.getElementById('setHours').addEventListener('click', function () {
        timePicker.setHours(20);
    });

    document.getElementById('setMinutes').addEventListener('click', function () {
        timePicker.setMinutes(12);
    });

    document.getElementById('setNow').addEventListener('click', function () {
        timePicker.value = new Date();
    });
}