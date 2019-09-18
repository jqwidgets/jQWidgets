window.onload = function () {
    const colorPicker = document.querySelector('smart-color-picker');

    document.addEventListener('change', function (event) {
        //Set new Grid Item size
        if (event.target.groupName === 'gridSettings' || event.target.groupName === 'gapSettings') {
            let size,
                className = event.target.groupName === 'gridSettings' ? 'item-size' : 'column-gap';

            switch (event.target.innerHTML) {
                case '10':
                case '1':
                    size = 'small';
                    break;
                case '20':
                case '2.5':
                    size = 'medium';
                    break;
                case '30':
                case '5':
                    size = 'large';
                    break;
            }

            //Remove the oldClass
            const classes = colorPicker.classList;

            for (let i = 0; i < classes.length; i++) {
                if (classes[i].indexOf(className) > -1) {
                    colorPicker.classList.remove(colorPicker.classList.item(i));
                }
            }

            colorPicker.$.addClass(className + '-' + size);
            return;
        }

        if (event.target.id === 'enableCustomColors') {
            colorPicker.enableCustomColors = event.target.checked;
            return;
        }
    });
}