window.onload = function () {
    const gantt = document.querySelector('smart-gantt-chart');

    gantt.taskColumns = [
        {
            label: 'Tasks',
            value: 'label',
            size: '25%'
        },
        {
            label: 'Start Date',
            value: 'dateStart',
            size: '25%'
        },
        {
            label: 'Duration (Hours)',
            value: 'duration',
            formatFunction: (date) => parseInt(date),
            customEditor: function (label, value) {
                let fragment = document.createDocumentFragment(),
                    customEditorLabel = document.createElement('label'),
                    dropDownList = document.createElement('smart-drop-down-list');

                customEditorLabel.innerHTML = 'Duration';
                dropDownList.dropDownAppendTo = 'body';
                dropDownList.dataSource = [4, 8, 12];

                fragment.appendChild(customEditorLabel);
                fragment.appendChild(dropDownList);

                return fragment;
            },
            setCustomEditorValue: function (editor, label, value) {
                const dropDownList = editor.querySelector('smart-drop-down-list');

                dropDownList.select(value.toString());
            },
            getCustomEditorValue: function (editor) {
                const dropDownList = editor.querySelector('smart-drop-down-list');

                return dropDownList.selectedValues[0];
            }
        }];

    gantt.dataSource = [
        {
            label: 'John',
            dateStart: '2019-06-17T06:30:00',
            connections: [
                {
                    target: 1,
                    type: 1
                }
            ],
            duration: 8,
            class: 'john',
            type: 'task'
        },
        {
            label: 'Jane',
            dateStart: '2019-06-18T09:00:00',
            connections: [
                {
                    target: 2,
                    type: 1
                }
            ],
            duration: 8,
            class: 'jane',
            type: 'task'
        },
        {
            label: 'Peter',
            dateStart: '2019-06-19T07:30:00',
            connections: [
                {
                    target: 3,
                    type: 1
                }
            ],
            duration: 8,
            class: 'peter',
            type: 'task'
        },
        {
            label: 'Melania',
            dateStart: '2019-06-20T10:00:00',
            connections: [
                {
                    target: 4,
                    type: 1
                }
            ],
            duration: 8,
            class: 'melania',
            type: 'task'
        },
        {
            label: 'Donald',
            dateStart: '2019-06-21T08:30:00',
            connections: [
                {
                    target: 5,
                    type: 1
                }
            ],
            duration: 8,
            class: 'donald',
            type: 'task'
        }
    ];
}