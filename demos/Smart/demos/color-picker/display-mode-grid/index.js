window.onload = function () {
    const colorPicker = document.querySelector('smart-color-picker');

    //Palette Colors for pallette = 'custom'
    colorPicker.paletteColors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];

    //Pre-set Palette Custom Colors ( User selected colors )
    colorPicker.paletteCustomColors = ['#808080', '#ffd8b1', '#aaffc3'];

    document.addEventListener('change', function (event) {
        //Set new Grid Item size
        if (event.target.groupName === 'columnSettings') {
            let size,
                className = 'column-count';

            switch (event.target.innerHTML) {
                case '4':
                    size = 'small';
                    break;
                case '8':
                    size = 'medium';
                    break;
                case '14':
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

        if (event.target.groupName === 'palette') {
            colorPicker.palette = event.target.innerHTML;
            return;
        }

        //Set new Grid Item size
        if (event.target.groupName === 'applyValueMode') {
            colorPicker.applyValueMode = event.target.innerHTML;
            return;
        }

        if (event.target.id === 'enableCustomColors') {
            colorPicker.enableCustomColors = event.target.checked;
            return;
        }
    });
}