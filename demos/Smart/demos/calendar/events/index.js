window.onload = function () {
    const calendar = document.querySelector('smart-calendar');

    calendar.addEventListener('change', function (event) {
        document.getElementById('log').innerHTML = event.detail.value.toString();
    });
}