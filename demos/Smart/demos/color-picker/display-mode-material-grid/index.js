window.onload = function () {
    const colorPicker = document.querySelector('smart-color-picker');

    document.addEventListener('change', function (event) {
        const target = event.target;

        //Set new Grid Item size
        if (target.groupName === 'columnSize' || target.groupName === 'columnGap') {
            let size,
                className = target.groupName === 'columnSize' ? 'item-size' : 'column-gap';

            switch (target.innerHTML) {
                case '1':
                case '20':
                    size = 'small';
                    break;
                case '5':
                case '40':
                    size = 'medium';
                    break;
                case '10':
                case '60':
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

        //Set ApplyValueMode and Palette
        if (target.groupName === 'applyValueMode') {
            colorPicker[target.groupName] = target.innerHTML;
            return;
        }
    });
}