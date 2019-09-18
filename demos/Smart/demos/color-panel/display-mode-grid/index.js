window.onload = function () {
    const colorPanel = document.getElementById('colorPanel');

    //Palette Colors for pallette = 'custom'
    colorPanel.paletteColors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];

    //Pre-set Palette Custom Colors ( User selected colors )
    colorPanel.paletteCustomColors = ['#808080', '#ffd8b1', '#aaffc3'];

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
            const classes = colorPanel.classList;

            for (let i = 0; i < classes.length; i++) {
                if (classes[i].indexOf(className) > -1) {
                    colorPanel.classList.remove(colorPanel.classList.item(i));
                }
            }

            colorPanel.$.addClass(className + '-' + size);
            return;
        }

        if (event.target.groupName === 'palette') {
            colorPanel.palette = event.target.innerHTML;
            return;
        }

        if (event.target.id === 'enableCustomColors') {
            colorPanel.enableCustomColors = event.target.checked;
            return;
        }
    });
}