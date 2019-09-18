window.onload = function () {
    const batteryUsage = document.getElementById('batteryUsage'),
        tasks = batteryUsage.items,
        progressBar = document.querySelector('smart-circular-progress-bar'),
        icons = [
            'brightness_7',
            'public',
            'people',
            'bluetooth',
            'music_note',
            'android',
            'shop',
            'cast',
            'sync',
            'drafts',
            'access_time',
            'system_update',
            'lock',
            'call',
            'cloud',
            'gps_fixed',
            'sd_card',
            'security'
        ];

    for (let i = 0; i < tasks.length; i++) {
        tasks[i].getElementsByClassName('material-icons')[0].innerHTML = icons[i];
    }

    batteryUsage.addEventListener('change', function (event) {
        if (event.detail.label.toLowerCase() === 'screen') {
            progressBar.value = 44;
        }
        else if (event.detail.label.toLowerCase() === 'chrome') {
            progressBar.value = 20;
        }
        else if (event.detail.label.toLowerCase() === 'facebook') {
            progressBar.value = 8;
        }
        else if (event.detail.label.toLowerCase() === 'bluetooth') {
            progressBar.value = 5;
        }
        else if (event.detail.label.toLowerCase() === 'youtube') {
            progressBar.value = 5;
        }
        else if (event.detail.label.toLowerCase() === 'google play store') {
            progressBar.value = 3;
        }
        else if (event.detail.label.toLowerCase() === 'call services') {
            progressBar.value = 2;
        }
        else if (event.detail.label.toLowerCase() === 'location services') {
            progressBar.value = 2;
        }
        else if (event.detail.label.toLowerCase() === 'android os') {
            progressBar.value = 2;
        }
        else if (event.detail.label.toLowerCase() === 'android system') {
            progressBar.value = 2;
        }
        else if (event.detail.label.toLowerCase() === 'sync') {
            progressBar.value = 1;
        }
        else if (event.detail.label.toLowerCase() === 'mail service') {
            progressBar.value = 1;
        }
        else if (event.detail.label.toLowerCase() === 'clock') {
            progressBar.value = 1;
        }
        else if (event.detail.label.toLowerCase() === 'idle state') {
            progressBar.value = 1;
        }
        else if (event.detail.label.toLowerCase() === 'cloud services') {
            progressBar.value = 1;
        }
        else if (event.detail.label.toLowerCase() === 'external storage') {
            progressBar.value = 1;
        }
        else if (event.detail.label.toLowerCase() === 'security services') {
            progressBar.value = 1;
        }
    });
}