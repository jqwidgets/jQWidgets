window.onload = function () {
    document.querySelector('smart-gantt-chart').dataSource = [
        {
            //Non synchronized projects require dateStart/dateEnd like every other task
            label: 'Project 1',
            dateStart: '2017-06-25',
            dateEnd: '2018-04-28',
            dragProject: true,
            expanded: true,
            type: 'project',
            tasks: [
                {
                    label: 'Task 1.1',
                    dateStart: '2017-09-10',
                    dateEnd: '2018-08-10',
                    type: 'task',
                    connections: [
                        {
                            target: 2,
                            type: 0
                        }
                    ]
                },
                {
                    label: 'Task 1.2',
                    dateStart: '2017-03-27',
                    dateEnd: '2018-06-10',
                    type: 'task'
                },
                {
                    label: 'Milestone 1',
                    dateEnd: '2018-07-15',
                    type: 'milestone'
                },
                {
                    label: 'Task 1.3',
                    dateStart: '2018-04-21',
                    dateEnd: '2018-10-15',
                    type: 'task',
                    connections: [
                        {
                            target: 6,
                            type: 3
                        }
                    ]
                }
            ]
        },
        {
            label: 'Task 2',
            dateStart: '2018-02-2',
            dateEnd: '2018-3-20',
            type: 'task',
            connections: [
                {
                    target: 3,
                    type: 1
                },
                {
                    target: 2,
                    type: 0
                }
            ]
        },
        {
            label: 'Task 3',
            dateStart: '2017-04-5',
            dateEnd: '2018-1-25',
            type: 'task'
        }
    ];
}