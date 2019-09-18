window.onload = function () {
    const ganttChart = document.querySelector('smart-gantt-chart');

    ganttChart.dataSource = [
        {
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
                    dateStart: '2017-06-10',
                    dateEnd: '2018-01-10',
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
                    dateStart: '2017-10-10',
                    dateEnd: '2018-2-31',
                    type: 'task',
                    connections: [
                        {
                            target: 3,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Project 1.1',
                    dateStart: '2018-2-31',
                    dateEnd: '2018-6-1',
                    expanded: true,
                    type: 'project',
                    connections: [
                        {
                            target: 4,
                            type: 0
                        }
                    ],
                    tasks: [
                        {
                            label: 'Task 1.1.1',
                            dateStart: '2018-3-10',
                            dateEnd: '2018-4-1',
                            type: 'task',
                            connections: [
                                {
                                    target: 6,
                                    type: 1
                                }
                            ]
                        },
                        {
                            label: 'Task 1.1.2',
                            dateStart: '2018-4-2',
                            dateEnd: '2018-6-1',
                            type: 'task',
                            connections: [

                            ]
                        },
                        {
                            label: 'Project 1.1.1',
                            dateStart: '2018-06-1T12:30:00',
                            dateEnd: '2018-9-1',
                            expanded: true,
                            type: 'project',
                            connections: [

                            ],
                            tasks: [
                                {
                                    label: 'Task 1.1.1.1',
                                    dateStart: '2018-07-10',
                                    dateEnd: '2018-08-30',
                                    type: 'task',
                                    connections: [
                                        {
                                            target: 8,
                                            type: 1
                                        }
                                    ]
                                },
                                {
                                    label: 'Task 1.1.1.2',
                                    dateStart: '2018-08-30',
                                    dateEnd: '2018-10-1',
                                    type: 'task'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Task 2',
            dateStart: '2017-03-10T15:30:00',
            dateEnd: '2018-08-10',
            type: 'task',
            connections: [
                {
                    target: 10,
                    type: 1
                }
            ]
        },
        {
            label: 'Milestone 1',
            dateEnd: '2018-05-24',
            type: 'milestone',
            connections: [
                {
                    target: 11,
                    type: 1
                }
            ]
        },
        {
            label: 'Task 3',
            dateStart: '2018-02-05',
            dateEnd: '2018-07-08',
            progress: 50
        }
    ];

    ganttChart.columnMembers = [
        {
            label: 'Task Name'
        }
    ];

    document.getElementById('collapseButton').addEventListener('click', function () {
        const index = parseInt(document.getElementById('indexSelector').selectedValues[0]);

        if (!isNaN(index)) {
            ganttChart.collapse(parseInt(document.getElementById('indexSelector').selectedValues[0]));
        }
    });

    document.getElementById('expandButton').addEventListener('click', function () {
        const index = parseInt(document.getElementById('indexSelector').selectedValues[0]);

        if (!isNaN(index)) {
            ganttChart.expand(parseInt(document.getElementById('indexSelector').selectedValues[0]));
        }
    });

    ganttChart.addEventListener('collapse', function (event) {
        document.getElementById('log').innerHTML += '<br />' + event.type + 'Task # ' + ganttChart.getTaskIndex(event.detail.item);
    });

    ganttChart.addEventListener('expand', function (event) {
        document.getElementById('log').innerHTML += '<br />' + event.type + 'Task # ' + ganttChart.getTaskIndex(event.detail.item);
    });

}