window.onload = function () {
    document.getElementsByTagName('smart-radio-button')[0].addEventListener('change', function () {
        document.getElementById('tooltip').position = 'top';
        document.getElementById('tooltip2').position = 'top';
    });

    document.getElementsByTagName('smart-radio-button')[1].addEventListener('change', function () {
        document.getElementById('tooltip').position = 'bottom';
        document.getElementById('tooltip2').position = 'bottom';
    });

    document.getElementsByTagName('smart-radio-button')[2].addEventListener('change', function () {
        document.getElementById('tooltip').position = 'left';
        document.getElementById('tooltip2').position = 'left';
    });
    document.getElementsByTagName('smart-radio-button')[3].addEventListener('change', function () {
        document.getElementById('tooltip').position = 'right';
        document.getElementById('tooltip2').position = 'right';
    });

    document.getElementById('tooltip').innerHTML = 'Progress: ' + document.querySelector('smart-progress-bar').value + '%';
    document.getElementById('tooltip2').innerHTML = 'Progress: ' + document.querySelector('smart-circular-progress-bar').value + '%';
}