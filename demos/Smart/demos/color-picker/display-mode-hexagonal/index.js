window.onload = function () {
    const colorPicker = document.querySelector('smart-color-picker');

    document.addEventListener('change', function (event) {
        //Set new Grid Item size
        if (event.target.groupName === 'columnSettings') {
            colorPicker.columnCount = parseInt(event.target.innerHTML);
            return;
        }

        if (event.target.id === 'inverted') {
            colorPicker.inverted = event.target.checked;
            return;
        }

        //Set ApplyValueMode and Palette
        if (event.target.groupName === 'applyValueMode' || event.target.groupName === 'palette') {
            colorPicker[event.target.groupName] = event.target.innerHTML;
            return;
        }
    });
}