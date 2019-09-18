window.onload = function () {
    const comboBox = document.getElementById('localePicker'),
        calendar = document.querySelector('smart-calendar');

    comboBox.dataSource = ['en', 'tr', 'ar', 'ru', 'de', 'es', 'pt', 'fr', 'zh', 'ja', 'it', 'bg', 'nl'];

    comboBox.addEventListener('change', function (event) {
        calendar.locale = event.detail.label;
        document.getElementById('log').innerHTML = 'Current locale is  ' + event.detail.label.toUpperCase();
    });
}