window.onload = function () {
    const tank = document.getElementById('tank'),
        numericTextBox = document.getElementById('numericTextBox');

    numericTextBox.addEventListener('change', function (event) {
        tank.interval = event.detail.value;
    });
}