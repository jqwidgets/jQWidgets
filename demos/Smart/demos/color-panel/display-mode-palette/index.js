window.onload = function () {
    const colorPanel = document.getElementById('colorPanel');

    document.addEventListener('change', function (event) {
        const target = event.target;

        //Set new Grid Item size
        if (target.groupName === 'applyValueMode') {
            colorPanel.applyValueMode = event.target.innerHTML;
            return;
        }

        if (target.id.indexOf('hide') === 0) {
            colorPanel[target.id] = event.detail.value;
            return;
        }

        //Set a new value
        if (target.id === 'rgbValue') {
            colorPanel.value = event.target.value;
        }
    });

    colorPanel.addEventListener('change', function (event) {
        document.getElementById('rgbValue').value = event.detail.value;
    });

    document.getElementById('rgbValue').value = colorPanel.value;
}