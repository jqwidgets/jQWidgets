window.onload = function () {
    const calendar = document.querySelector('smart-calendar');

    document.getElementsByTagName('smart-radio-button')[0].addEventListener('change', function (event) {
        if (event.detail.value) {
            calendar.scrollButtonsPosition = 'near';
        }
    });

    document.getElementsByTagName('smart-radio-button')[1].addEventListener('change', function (event) {
        if (event.detail.value) {
            calendar.scrollButtonsPosition = 'far';
        }
    });

    document.getElementsByTagName('smart-radio-button')[2].addEventListener('change', function (event) {
        if (event.detail.value) {
            calendar.scrollButtonsPosition = 'both';
        }
    });

    document.getElementsByTagName('smart-radio-button')[3].addEventListener('change', function (event) {
        if (event.detail.value) {
            calendar.scrollButtonsNavigationMode = 'landscape';
        }
    });

    document.getElementsByTagName('smart-radio-button')[4].addEventListener('change', function (event) {
        if (event.detail.value) {
            calendar.scrollButtonsNavigationMode = 'portrait';
        }
    });
}