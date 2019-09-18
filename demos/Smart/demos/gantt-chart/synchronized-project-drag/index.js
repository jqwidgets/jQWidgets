window.onload = function () {
    document.querySelector('smart-gantt-chart').dataSource = [
        {
            //Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
            label: 'Project 1',
            synchronized: true,
            dragProject: true,
            expanded: true,
            type: 'project',
            tasks: [
                {
                    label: 'Task 1.1',
                    minDateStart: '2017-02-10',
                    maxDateEnd: '2018-08-10',
                    dateStart: '2017-05-10',
                    dateEnd: '2018-04-10',
                    type: 'task'
                },
                {
                    label: 'Task 1.2',
                    minDateStart: '2017-03-10',
                    maxDateEnd: '2018-11-10',
                    dateStart: '2017-03-27',
                    dateEnd: '2018-06-10',
                    type: 'task'
                },
                {
                    label: 'Milestone 1',
                    dateEnd: '2018-03-15',
                    type: 'milestone'
                }
            ]
        },
        {
            label: 'Task 3',
            dateStart: '2018-06-21',
            dateEnd: '2018-12-10',
            type: 'task'
        }
    ];
}