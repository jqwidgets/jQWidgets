window.onload = function () {
    const calendar = document.querySelector('smart-calendar');

    document.getElementsByTagName('smart-radio-button')[0].addEventListener('change', function () {
        calendar.view = 'landscape';
    });

    document.getElementsByTagName('smart-radio-button')[1].addEventListener('change', function () {
        calendar.view = 'portrait';
    });
}