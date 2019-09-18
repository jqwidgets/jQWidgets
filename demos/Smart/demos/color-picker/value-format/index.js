window.onload = function () {
    const colorPicker = document.querySelector('smart-color-picker');

    document.addEventListener('change', function (event) {
        const target = event.target;

        //Set ApplyValueMode and Palette
        if (target.groupName === 'valueFormat') {
            colorPicker[target.groupName] = target.innerHTML;
            return;
        }

        if (target.id === 'editAlphaChannel') {
            colorPicker.editAlphaChannel = event.detail.value;
        }
    });
}