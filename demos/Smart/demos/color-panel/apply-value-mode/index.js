window.onload = function () {
    const colorPanel = document.getElementById('colorPanel');

    document.addEventListener('change', function (event) {
        if (event.target.groupName === 'applyValueMode') {
            colorPanel.applyValueMode = event.target.innerHTML;
        }

        //Set a new value
        if (event.target.id === 'rgbValue') {
            colorPanel.value = event.target.value;
        }
    });

    colorPanel.addEventListener('change', function (event) {
        document.getElementById('rgbValue').value = event.detail.value;
    });
}