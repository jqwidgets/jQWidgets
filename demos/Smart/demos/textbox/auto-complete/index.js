window.onload = function () {
    document.getElementsByTagName('smart-radio-button')[0].addEventListener('change', function (event) {
        document.querySelector('smart-text-box').autoComplete = 'none';
    });

    document.getElementsByTagName('smart-radio-button')[1].addEventListener('change', function (event) {
        document.querySelector('smart-text-box').autoComplete = 'auto';
    });

    document.getElementsByTagName('smart-radio-button')[2].addEventListener('change', function (event) {
        document.querySelector('smart-text-box').autoComplete = 'inline';
    });

    document.getElementsByTagName('smart-radio-button')[3].addEventListener('change', function (event) {
        document.querySelector('smart-text-box').autoComplete = 'manual';
    });
}