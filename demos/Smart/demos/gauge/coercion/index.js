window.onload = function () {
    document.getElementById('toggleCoerce').addEventListener('change', function (event) {
        gauge.coerce = event.detail.value;
    });

    document.getElementById('setInterval').addEventListener('click', function () {
        gauge.interval = 2;
    });
}