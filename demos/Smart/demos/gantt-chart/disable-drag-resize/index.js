window.onload = function () {
    document.querySelector('smart-gantt-chart').dataSource = [
        {
            label: 'Task 1',
            dateStart: '2017-3-10',
            dateEnd: '2018-6-10',
            disableDrag: true,
            disableResize: true,
            expanded: true,
            type: 'project',
            tasks: [
                {
                    label: 'Task 1.1',
                    disableResize: true,
                    minDateStart: '2017-2-10',
                    maxDateEnd: '2018-8-10',
                    dateStart: '2017-2-10',
                    dateEnd: '2018-4-10',
                    type: 'task'
                },
                {
                    label: 'Task 1.2',
                    disableDrag: true,
                    minDateStart: '2017-3-10',
                    maxDateEnd: '2018-11-10',
                    dateStart: '2017-3-10',
                    dateEnd: '2018-6-10',
                    type: 'task'
                }
            ]
        },
        {
            label: 'Task 2',
            disableResize: true,
            dateStart: '2018-6-21',
            dateEnd: '2018-12-10',
            type: 'task'
        }
    ];
}