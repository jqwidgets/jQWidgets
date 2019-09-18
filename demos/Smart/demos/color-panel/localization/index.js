window.onload = function () {
    const colorPanel = document.getElementById('colorPanel');


    colorPanel.messages = {
        'en': {
            'redPrefix': 'R:',
            'greenPrefix': 'G:',
            'bluePrefix': 'B:',
            'hexPrefix': '#:',
            'alphaPrefix': 'Alpha:',
            'ok': 'OK',
            'cancel': 'CANCEL',
            'customColor': 'CUSTOM COLOR ...',
            'standardColors': 'Standard colors',
            'themeColors': 'Theme colors'
        },
        'de': {
            'redPrefix': 'R',
            'greenPrefix': 'G',
            'bluePrefix': 'B',
            'hexPrefix': '#',
            'alphaPrefix': 'Alpha',
            'ok': 'OK',
            'cancel': 'STORNIEREN',
            'customColor': 'FREIWAEHLBARE FARBE ...',
            'standardColors': 'Standardfarben',
            'themeColors': 'Themenfarben'
        },
        'fr': {
            'redPrefix': 'R:',
            'greenPrefix': 'G:',
            'bluePrefix': 'B:',
            'hexPrefix': '#',
            'alphaPrefix': 'Alpha =',
            'ok': ' APPROUVER',
            'cancel': 'ANNULER',
            'customColor': 'COULEUR PERSONNALISEE ...',
            'standardColors': 'Couleurs standard',
            'themeColors': 'Couleurs du thème'
        }
    }

    document.addEventListener('change', function (event) {
        if (event.target.groupName === 'displayMode') {
            colorPanel.displayMode = event.target.innerHTML;
            return;
        }

        if (event.target.groupName === 'locale') {
            colorPanel.locale = event.target.innerHTML;
        }
    });
}