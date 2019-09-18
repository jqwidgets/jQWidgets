window.onload = function () {
    document.querySelector('smart-gantt-chart').dataSource = [
        {
            label: 'Project 1',
            dateStart: '2017-3-10',
            dateEnd: '2021-6-10',
            type: 'project',
            expanded: true,
            tasks: [
                {
                    label: 'Task 1.1',
                    dateStart: '2017-5-10',
                    dateEnd: '2018-4-10',
                    type: 'task'
                },
                {
                    label: 'Task 1.2',
                    dateStart: '2017-3-27',
                    dateEnd: '2018-6-10',
                    type: 'task'
                },
                {
                    label: 'Milestone 1',
                    dateEnd: '2018-3-15',
                    type: 'milestone'
                }
            ]
        },
        {
            label: 'Task 2',
            dateStart: '2018-6-21',
            dateEnd: '2018-12-10',
            type: 'task'
        }
    ];
}