window.onload = function () {
    const ganttChart = document.querySelector('smart-gantt-chart');

    ganttChart.dataSource = [
        {
            type: 'project',
            label: 'Project 1',
            dateStart: '2018-5-2',
            duration: 60 * 24 * 60 * 60 * 1000, //60 days in miliseconds,
            expanded:true,
            connections: [
                {
                    target: 1,
                    type: 0
                }
            ],
            tasks: [
                {
                    type: 'task',
                    label: 'Task 1.1',
                    dateStart: '2018-5-5',
                    duration: 10 * 24 * 60 * 60 * 1000, //10 days in miliseconds
                    connections: [
                        {
                            target: 2,
                            type: 1
                        }
                    ]
                },
                {
                    type: 'task',
                    label: 'Task 1.2',
                    dateStart: '2018-5-16',
                    duration: 12 * 24 * 60 * 60 * 1000, //12 days in miliseconds
                    connections: [
                        {
                            target: 3,
                            type: 1
                        }
                    ]
                },
                {
                    type: 'milestone',
                    label: 'Milestone 1',
                    dateStart: '2018-6-1',
                    connections: [
                        {
                            target: 4,
                            type: 1
                        }
                    ]
                },
                {
                    type: 'task',
                    label: 'Task 1.3',
                    dateStart: '2018-6-2',
                    duration: 90 * 24 * 60 * 60 * 1000 //90 days in miliseconds
                }
            ]
        },
        {
            type: 'project',
            label: 'Project 2',
            dateStart: '2018-10-1',
            duration: 60 * 24 * 60 * 60 * 1000, //60 days in miliseconds
            expanded: true,
            connections: [
                {
                    target: 6,
                    type: 0
                }
            ],
            tasks: [
                {
                    type: 'task',
                    label: 'Task 2.1',
                    dateStart: '2018-10-2',
                    duration: 15 * 24 * 60 * 60 * 1000, //15 days in miliseconds
                    connections: [
                        {
                            target: 7,
                            type: 0
                        }
                    ]
                },
                {
                    type: 'task',
                    label: 'Task 2.2',
                    dateStart: '2018-10-2',
                    duration: 10 * 24 * 60 * 60 * 1000, //10 days in miliseconds
                    connections: [
                        {
                            target: 8,
                            type: 1
                        }
                    ]
                },
                {
                    type: 'task',
                    label: 'Task 2.3',
                    dateStart: '2018-11-1',
                    duration: 45 * 24 * 60 * 60 * 1000 //45 days in miliseconds
                }
            ]
        }
    ];


    document.querySelector('smart-check-box').addEventListener('change', function (event) {
        ganttChart.inverted = event.detail.value;
    });
}