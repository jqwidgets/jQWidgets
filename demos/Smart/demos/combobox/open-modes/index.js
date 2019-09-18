window.onload = function () {
    const comboBox = document.querySelector('smart-combo-box');

    comboBox.dataSource =
        [{
            label: "Andrew",
            value: 1,
            group: "A"
        },
        {
            label: "Natalia",
            value: 2,
            group: "B"
        },
        {
            label: "Michael",
            value: 3,
            group: "B"
        },
        {
            label: "Angel",
            value: 4,
            group: "A"
        },
        {
            label: "Hristo",
            value: 5,
            group: "C"
        },
       {
           label: "Peter",
           value: 6,
           group: "A"
       },
       {
           label: "Albert",
           value: 7,
           group: "A"
       },
       {
           label: "George",
           value: 8,
           group: "C"
       }];

    document.getElementsByTagName('smart-button')[0].addEventListener('click', function () {
        comboBox.dropDownOpenMode = 'default';

        const buttons = document.getElementsByTagName('smart-button');

        for (let b = 0; b < buttons.length ; b++) {
            buttons[b].disabled = buttons[b] === this ? true : false;
        }
    });

    document.getElementsByTagName('smart-button')[1].addEventListener('click', function () {
        comboBox.dropDownOpenMode = 'auto';

        const buttons = document.getElementsByTagName('smart-button');

        for (let b = 0; b < buttons.length ; b++) {
            buttons[b].disabled = buttons[b] === this ? true : false;
        }
    });

    document.getElementsByTagName('smart-button')[2].addEventListener('click', function () {
        comboBox.dropDownOpenMode = 'dropDownButton';

        const buttons = document.getElementsByTagName('smart-button');

        for (let b = 0; b < buttons.length ; b++) {
            buttons[b].disabled = buttons[b] === this ? true : false;
        }
    });

    document.getElementsByTagName('smart-button')[3].addEventListener('click', function () {
        comboBox.dropDownOpenMode = 'none';

        const buttons = document.getElementsByTagName('smart-button');

        for (let b = 0; b < buttons.length ; b++) {
            buttons[b].disabled = buttons[b] === this ? true : false;
        }
    });
}