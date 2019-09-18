window.onload = function () {
    const tooltip = document.querySelector('smart-tooltip');

    tooltip.addEventListener('open', function () {
        document.getElementById('log').innerHTML = 'Open event fired';
    });

    tooltip.addEventListener('close', function () {
        document.getElementById('log').innerHTML = 'Close event fired';
    });

    document.getElementById('led').addEventListener('change', function (event) {
        document.getElementById('tooltip').innerHTML = 'LED is: ' + (event.detail.value ? "ON" : "OFF");
    })
}