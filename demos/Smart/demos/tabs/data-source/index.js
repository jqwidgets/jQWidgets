window.onload = function () {
    const tabs = document.querySelector('smart-tabs');

    tabs.className = 'demoTabs';

    tabs.dataSource = [
        {
            label: 'Group 1',
            items: [
                {
                    label: 'Item 1.1',
                    content: 'Content 1.1'
                },
                {
                    label: 'Item 1.2',
                    content: 'Content 1.2'
                },
                {
                    label: 'Item 1.3',
                    content: 'Content 1.3'
                }
            ]

        },
        {
            label: 'Item 2',
            content: 'Content 2'
        },
        {
            label: 'Item 3',
            content: 'Content 3',
            selected: true
        }
    ];


    document.getElementById('loadDataSource').addEventListener('click', function () {
        tabs.dataSource = [
            {
                label: 'Item A',
                content: 'Content A',
                index: 3
            },
            {
                label: 'Item B',
                content: 'Content B',
                selected: true,
                index: 2
            },
            {
                label: 'Item C',
                content: 'Content C',
                index: 1
            },
            {
                label: 'Item D',
                labelSize: 80,
                content: 'Content D',
                index: 0
            }
        ];
    });
}