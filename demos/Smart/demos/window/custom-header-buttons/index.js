window.onload = function () {
    const smartWindow = document.querySelector('smart-window');

    document.getElementById('openButton').addEventListener('click', function () {
        smartWindow.opened ? smartWindow.close() : smartWindow.open();
    });

    smartWindow.addEventListener('click', function (event) {
        if (event.target.closest('.smart-dock-button')) {
            console.log('Dock');
            alert('Dock button pressed');
        }
        else if (event.target.closest('.smart-block-button')) {
            console.log('Block');
            alert('Block button pressed');
        }
        else if (event.target.closest('.smart-autoclose-button')) {
            console.log('Autoclose');
            alert('Autoclose button pressed');
        }
        else if (event.target.closest('.smart-readonly-button')) {
            console.log('Readonly');
            alert('Readonly button pressed');
        }
        else if (event.target.closest('.smart-pin-button')) {
            console.log('Pin');
            alert('Pin button pressed');
        }
        else if (event.target.closest('.smart-close-button')) {
            console.log('Pin');
            alert('Close button pressed');
        }
    });
}