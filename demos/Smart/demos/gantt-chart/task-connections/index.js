window.onload = function () {
    const gantt = document.querySelector('smart-gantt-chart'),
        connectionSelector = document.getElementById('connectionSelector');

    gantt.dataSource = [
        {
            //Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
            label: 'Project 1',
            synchronized: true,
            expanded: true,
            type: 'project',
            connections: [
                {
                    target: 1,
                    type: 0
                }
            ],
            tasks: [
                {
                    label: 'Task 1.1',
                    dateStart: '2017-05-10',
                    dateEnd: '2018-04-10',
                    type: 'task',
                    connections: [
                        {
                            target: 2,
                            type: 2
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
                    dateEnd: '2018-03-15',
                    type: 'milestone',
                    connections: [
                        {
                            target: 4,
                            type: 1
                        }
                    ]
                }
            ]
        },
        {
            label: 'Task 2',
            dateStart: '2018-06-21',
            dateEnd: '2018-12-10',
            type: 'task'
        }
    ];

    document.getElementById('createConButton').addEventListener('click', function () {
        const task = gantt.tasks[2];

        if (task.connections.length) {
            return;
        }

        gantt.createConnection('2-3-0');
        connectionSelector.insert(4, { value: '2-3-0', label: 'Task 1.2 - Milestone 1' });
    });

    document.getElementById('deleteConButton').addEventListener('click', function () {
        const con = connectionSelector.selectedValues[0];

        if (con) {
            gantt.removeConnection(con);
            connectionSelector.remove(connectionSelector.selectedIndexes[0]);
        }
    });

    document.getElementById('deleteAllConButton').addEventListener('click', function () {
        gantt.removeAllConnections();
        connectionSelector.clearItems();
    });
}