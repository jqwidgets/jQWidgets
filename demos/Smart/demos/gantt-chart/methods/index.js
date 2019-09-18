window.onload = function () {
    const ganttChart = document.querySelector('smart-gantt-chart');

    ganttChart.dataSource = [
        {
            label: 'Project 1',
            dateStart: '2017-03-10T12:30:00',
            dateEnd: '2018-06-10T3:59:00',
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
                    dateStart: '2017-02-10',
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
                    dateStart: '2017-03-10T12:30:00',
                    dateEnd: '2018-06-10T3:59:00',
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
                            label: 'Task 1.1.1',
                            dateStart: '2017-02-10',
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
                            label: 'Task 1.1.2',
                            dateStart: '2017-10-10',
                            dateEnd: '2018-2-31',
                            type: 'task',
                            connections: [
                                {
                                    target: 3,
                                    type: 1
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
            type: 'task'
        },
        {
            label: 'Milestone 1',
            dateEnd: '2018-05-24',
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
            dateStart: '2018-02-05',
            dateEnd: '2018-07-08',
            progress: 50,
            type: 'task'
        },
        {
            label: 'Task 4',
            dateStart: '2017-03-10T15:30:00',
            dateEnd: '2018-08-10',
        }
    ];

    ganttChart.taskColumns = [
        {
            label: 'Labels',
            value: 'label'
        },
        {
            label: 'Date Start',
            value: 'dateStart',
            //Custom format function
            formatFunction: (date) => new Date(date).toLocaleDateString(ganttChart.locale, { year: 'numeric', month: 'short', day: 'numeric' })
        },
        {
            label: 'Date End',
            value: 'dateEnd',
            size: '30%'
        }
    ];

    document.getElementById('updateButton').addEventListener('click', function () {
        const taskDetails = {
            label: 'Task Updated Successfully',
            dateEnd: '2018-1-1'
        };

        const targetTask = ganttChart.tasks[0];

        if (!targetTask) {
            return;
        }

        ganttChart.updateTask(targetTask, taskDetails);
        this.disabled = true;
    });

    document.getElementById('insertButton').addEventListener('click', function () {
        const tasks = {
            label: 'Inserted Task 1',
            dateStart: '2017-08-10',
            dateEnd: '2017-12-23',
            tasks: [
                {
                    label: 'Inserted Sub-Task 1.1',
                    dateStart: '2017-09-01',
                    dateEnd: '2017-10-30',
                },
                {
                    label: 'Inserted Sub-Task 1.2',
                    dateStart: '2017-11-01',
                    dateEnd: '2017-12-23',
                }
            ]
        };

        ganttChart.insertTask(0, tasks);
        this.disabled = true;
    });

    document.getElementById('removeButton').addEventListener('click', function () {
        ganttChart.removeTask(0);
        this.disabled = true;
    });
}