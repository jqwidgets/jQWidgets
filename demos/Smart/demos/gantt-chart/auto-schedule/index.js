window.onload = function () {
    document.querySelector('smart-gantt-chart').dataSource = [
        {
            label: 'Project 1',
            dateStart: '2017-03-10T12:30:00',
            dateEnd: '2018-06-10T3:59:00',
            type: 'project',
            expanded: true,
            connections: [
                {
                    target: 1,
                    type: 0,
                    lag: 2 * 24 * 60 * 60 * 1000 //2 days lag
                }
            ],
            tasks: [
                {
                    label: 'Task 1.1',
                    dateStart: '2017-02-10',
                    dateEnd: '2018-01-10',
                    type: 'task',
                    connections: [
                        {
                            target: 2,
                            type: 1,
                            lag: -5 * 24 * 60 * 60 * 1000 // -5 days lag
                        },
                        {
                            target: 4,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Task 1.2',
                    dateStart: '2017-10-10',
                    dateEnd: '2018-2-31',
                    type: 'task',
                    connections: [
                        {
                            target: 3,
                            type: 1,
                            lag: 15 * 24 * 60 * 60 * 1000 // 15 days lag
                        }
                    ]
                }
            ]
        },
        {
            label: 'Task 2',
            dateStart: '2017-03-10T15:30:00',
            dateEnd: '2018-08-10',
            type: 'task'
        },
        {
            label: 'Milestone 1',
            dateEnd: '2018-05-24',
            type: 'milestone',
            connections: [
                {
                    target: 5,
                    type: 1,
                    lag: 5 * 24 * 60 * 60 * 1000 //5 days lag
                }
            ]
        },
        {
            label: 'Task 3',
            dateStart: '2018-02-05',
            dateEnd: '2018-07-08',
            progress: 50,
            type: 'task'
        }
    ];

    document.querySelector('smart-check-box').addEventListener('change', function (event) {
        document.querySelector('smart-gantt-chart').autoScheduleStrictMode = event.detail.value;
    });
}