window.onload = function () {
    const gauge = document.querySelector('smart-gauge');

    document.getElementById('power').addEventListener('click', function () {
        gauge.disabled = !this.checked;
    });

    gauge.addEventListener('change', function (event) {
        document.getElementById('value').textContent = event.detail.value;
    });
}