window.onload = function () {
    document.getElementsByTagName('smart-radio-button')[0].addEventListener('change', function () {
        document.querySelector('smart-tooltip').position = 'top';
    });

    document.getElementsByTagName('smart-radio-button')[1].addEventListener('change', function () {
        document.querySelector('smart-tooltip').position = 'bottom';
    });

    document.getElementsByTagName('smart-radio-button')[2].addEventListener('change', function () {
        document.querySelector('smart-tooltip').position = 'left';
    });
    document.getElementsByTagName('smart-radio-button')[3].addEventListener('change', function () {
        document.querySelector('smart-tooltip').position = 'right';
    });
}