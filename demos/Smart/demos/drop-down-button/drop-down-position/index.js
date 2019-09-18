window.onload = function () {
    document.getElementsByTagName('smart-radio-button')[0].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').dropDownPosition = 'auto';
    });

    document.getElementsByTagName('smart-radio-button')[1].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').dropDownPosition = 'bottom';
    });

    document.getElementsByTagName('smart-radio-button')[2].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').dropDownPosition = 'overlay-bottom';
    });

    document.getElementsByTagName('smart-radio-button')[3].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').dropDownPosition = 'overlay-center';
    });

    document.getElementsByTagName('smart-radio-button')[4].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').dropDownPosition = 'overlay-top';
    });

    document.getElementsByTagName('smart-radio-button')[5].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').dropDownPosition = 'top';
    });

    document.getElementsByTagName('smart-radio-button')[6].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').dropDownPosition = 'center-bottom';
    });

    document.getElementsByTagName('smart-radio-button')[7].addEventListener('change', function () {
        document.querySelector('smart-drop-down-button').dropDownPosition = 'center-top';
    });
}