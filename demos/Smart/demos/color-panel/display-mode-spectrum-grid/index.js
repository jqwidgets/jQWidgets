window.onload = function () {
    const colorPanel = document.getElementById('colorPanel');

    document.addEventListener('change', function (event) {
        const target = event.target;

        //Set new Grid Item size
        if (target.groupName === 'columnCount' || target.groupName === 'columnSize' || target.groupName === 'columnGap') {
            let size,
                className = target.groupName === 'columnCount' ? 'column-count' : (target.groupName === 'columnSize' ? 'item-size' : 'column-gap');

            switch (target.innerHTML) {
                case '3':
                case '5':
                case '20':
                    size = 'small';
                    break;
                case '6':
                case '10':
                case '40':
                    size = 'medium';
                    break;
                case '15':
                case '9':
                case '60':
                    size = 'large';
                    break;
            }

            //Remove the oldClass
            const classes = colorPanel.classList;

            for (let i = 0; i < classes.length; i++) {
                if (classes[i].indexOf(className) > -1) {
                    colorPanel.classList.remove(colorPanel.classList.item(i));
                }
            }

            colorPanel.$.addClass(className + '-' + size);
            return;
        }

        //Set ApplyValueMode and Palette
        if (target.groupName === 'applyValueMode' || target.groupName === 'palette') {
            colorPanel[target.groupName] = target.innerHTML;
            return;
        }

        //Set inverted mode
        if (event.target.id === 'inverted') {
            colorPanel.inverted = event.detail.value;
            return;
        }

        //Set a new value
        if (event.target.id === 'rgbValue') {
            colorPanel.value = event.target.value;
        }

    });

    colorPanel.addEventListener('change', function (event) {
        document.getElementById('rgbValue').value = event.detail.value;
    });

    document.getElementById('rgbValue').value = colorPanel.value;
}