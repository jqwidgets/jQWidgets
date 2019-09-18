window.onload = function () {
    const colorPicker = document.querySelector('smart-color-picker');

    document.addEventListener('change', function (event) {
        const target = event.target;

        //Set ApplyValueMode and Palette
        if (target.groupName === 'valueDisplayMode') {
            colorPicker[target.groupName] = target.innerHTML;
            return;
        }

        //Set a new value
        if (event.target.id === 'rgbValue') {
            colorPicker.value = event.target.value;
        }
    });

    colorPicker.addEventListener('change', function (event) {
        document.getElementById('rgbValue').value = event.detail.value;
    });

    document.getElementById('rgbValue').value = colorPicker.value;
}