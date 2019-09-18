window.onload = function () {
    document.querySelector('smart-gantt-chart').dataSource = [
        {
            //Note: min/max of syncronized projects are automatically calculated based on the tasks
            label: 'Project 1',
            synchronized: true,
            expanded: true,
            type: 'project',
            tasks: [
                {
                    label: 'Task 1.1',
                    minDateStart: '2017-02-10',
                    maxDateEnd: '2018-08-10',
                    dateStart: '2017-2-10',
                    dateEnd: '2018-4-10',
                    type: 'task'
                },
                {
                    label: 'Task 1.2',
                    minDateStart: '2017-3-10',
                    maxDateEnd: '2018-11-10',
                    dateStart: '2017-3-10',
                    dateEnd: '2018-6-10',
                    type: 'task'
                },
                {
                    label: 'Milestone 1',
                    dateEnd: '2018-3-15',
                    type: 'milestone'
                },
                {
                    label: 'Project 2',
                    dateStart: '2017-4-10',
                    dateEnd: '2018-01-15',
                    expanded: true,
                    type: 'project',
                    tasks: [
                        {
                            label: 'Task 2.1',
                            minDateStart: '2017-2-10',
                            maxDateEnd: '2018-08-10',
                            dateStart: '2017-4-10',
                            dateEnd: '2018-5-10',
                            type: 'task'
                        },
                        {
                            label: 'Task 2.2',
                            minDateStart: '2017-03-10',
                            maxDateEnd: '2018-11-10',
                            dateStart: '207-05-10',
                            dateEnd: '2018-6-10',
                            type: 'task'
                        },
                        {
                            label: 'Milestone 2',
                            dateEnd: '2018-7-20',
                            type: 'milestone'
                        }]
                }
            ]
        },
        {
            type: 'task',
            label: 'Task 3',
            dateStart: '2018-6-21',
            minDateStart: '2018-06-05',
            maxDateStart: '2018-07-05',
            dateEnd: '2018-12-10',
            minDateEnd: '2018-12-01',
            maxDateEnd: '2018-12-25'
        },
        {
            type: 'task',
            label: 'Task 4',
            dateStart: '2018-10-05',
            dateEnd: '2018-12-10',
            progress: 50,
            maxDuration: 60 * 24 * 60 * 60 * 1000 //60 days in miliseconds
        }
    ];
}