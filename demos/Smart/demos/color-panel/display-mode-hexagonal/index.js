window.onload = function () {
    const colorPanel = document.getElementById('colorPanel');

    document.addEventListener('change', function (event) {
        if (event.target.id === 'rgbValue') {
            colorPanel.value = event.target.value;
            return;
        }

        if (event.target.id === 'inverted') {
            colorPanel.inverted = event.target.checked;
            return;
        }

        if (event.target.id === 'enableCustomColors') {
            colorPanel.enableCustomColors = event.target.checked;
            return;
        }

        //Set ApplyValueMode and Palette
        if (event.target.groupName === 'palette') {
            colorPanel[event.target.groupName] = event.target.innerHTML;
            return;
        }
    });

    colorPanel.addEventListener('change', function (event) {
        document.getElementById('rgbValue').value = event.detail.value;
    });

    document.getElementById('rgbValue').value = colorPanel.value;
}