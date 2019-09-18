window.onload = function () {
    const colorPanel = document.getElementById('colorPanel');

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
            const classes = colorPanel.classList;

            for (let i = 0; i < classes.length; i++) {
                if (classes[i].indexOf(className) > -1) {
                    colorPanel.classList.remove(colorPanel.classList.item(i));
                }
            }

            colorPanel.$.addClass(className + '-' + size);
            return;
        }

        if (event.target.id === 'enableCustomColors') {
            colorPanel.enableCustomColors = event.target.checked;
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
}