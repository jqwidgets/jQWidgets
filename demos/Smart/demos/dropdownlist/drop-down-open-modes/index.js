window.onload = function () {
    const dropDownList = document.querySelector('smart-drop-down-list');

    dropDownList.dataSource =
        [{
            label: "Andrew",
            value: 1,
            group: "A"
        },
        {
            label: "Natalia",
            value: 5,
            group: "B"
        },
        {
            label: "Michael",
            value: 4,
            group: "B"
        },
        {
            label: "Angel",
            value: 2,
            group: "A"
        },
        {
            label: "Hristo",
            value: 6,
            group: "C"
        },
       {
           label: "Peter",
           value: 3,
           group: "A"
       },
       {
           label: "Albert",
           value: 3,
           group: "A"
       },
       {
           label: "Boyko",
           value: 7,
           group: "A"
       },
       {
           label: "Dimitar",
           value: 3,
           group: "B"
       },
       {
           label: "George",
           value: 25,
           group: "C"
       }];

    document.getElementsByTagName('smart-button')[0].addEventListener('click', function () {
        dropDownList.dropDownOpenMode = 'default';

        const buttons = document.getElementsByTagName('smart-button');

        for (let b = 0; b < buttons.length ; b++) {
            buttons[b].disabled = buttons[b] === this ? true : false;
        }
    });

    document.getElementsByTagName('smart-button')[1].addEventListener('click', function () {
        dropDownList.dropDownOpenMode = 'auto';

        const buttons = document.getElementsByTagName('smart-button');

        for (let b = 0; b < buttons.length ; b++) {
            buttons[b].disabled = buttons[b] === this ? true : false;
        }
    });

    document.getElementsByTagName('smart-button')[2].addEventListener('click', function () {
        dropDownList.dropDownOpenMode = 'dropDownButton';

        const buttons = document.getElementsByTagName('smart-button');

        for (let b = 0; b < buttons.length ; b++) {
            buttons[b].disabled = buttons[b] === this ? true : false;
        }
    });
    document.getElementsByTagName('smart-button')[3].addEventListener('click', function () {
        dropDownList.dropDownOpenMode = 'none';

        const buttons = document.getElementsByTagName('smart-button');

        for (let b = 0; b < buttons.length ; b++) {
            buttons[b].disabled = buttons[b] === this ? true : false;
        }
    });

    dropDownList.addEventListener('click', function (event) {
        const log = document.getElementById('log');

        if (dropDownList.dropDownOpenMode !== 'dropDownButton') {
            log.innerHTML = 'DropDownButton clicked';
            return;
        }

        if (event.target.classList.contains('smart-action-button')) {
            log.textContent = 'ActionButton clicked';
        }
        else if (event.target.classList.contains('smart-drop-down-button')) {
            log.textContent = 'DropDownButton clicked';
        }
    });
}