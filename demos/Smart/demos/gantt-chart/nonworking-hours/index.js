window.onload = function () {
    document.querySelector('smart-gantt-chart').dataSource = [
        {
            label: 'Project 1',
            dateStart: '2017-02-18T12:30:00',
            dateEnd: '2017-02-20T3:59:00',
            type: 'project',
            expanded: true,
            connections: [
                {
                    target: 1,
                    type: 0
                }
            ],
            tasks: [
                {
                    label: 'Task 1.1',
                    dateStart: '2017-02-24',
                    dateEnd: '2017-02-28',
                    type: 'task',
                    connections: [
                        {
                            target: 2,
                            type: 1
                        },
                        {
                            target: 4,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Task 1.2',
                    dateStart: '2017-2-19',
                    dateEnd: '2017-2-29',
                    type: 'task',
                    connections: [
                        {
                            target: 3,
                            type: 1
                        }
                    ]
                }
            ]
        },
        {
            label: 'Task 2',
            dateStart: '2017-02-21T15:30:00',
            dateEnd: '2017-03-2T15:30:00',
            type: 'task'
        },
        {
            label: 'Milestone 1',
            dateEnd: '2017-02-24',
            type: 'milestone',
            connections: [
                {
                    target: 5,
                    type: 1
                }
            ]
        },
        {
            label: 'Task 3',
            dateStart: '2017-02-18T1:00:00',
            dateEnd: '2017-02-18T18:30:00',
            progress: 50,
            type: 'task'
        }
    ];
}