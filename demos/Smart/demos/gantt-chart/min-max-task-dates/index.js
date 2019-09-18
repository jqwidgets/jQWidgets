window.onload = function () {
    document.querySelector('smart-gantt-chart').dataSource = [
        {
            type: 'project',
            label: 'Project 1',
            minDateStart: '2018-05-05',
            maxDateStart: '2018-07-05',
            dateStart: '2018-05-10',
            dateEnd: '2018-12-10',
            minDateEnd: '2018-12-1',
            maxDateEnd: '2018-12-25',
            minDuration: 60 * 24 * 60 * 60 * 1000, //60 days in miliseconds
        },
        {
            type: 'task',
            label: 'Task 2',
            minDateStart: '2018-09-02',
            dateStart: '2018-11-05',
            dateEnd: '2018-12-10',
            maxDateEnd: '2018-11-15',
            minDuration: 10 * 24 * 60 * 60 * 1000, //10 days in miliseconds
            maxDuration: 60 * 24 * 60 * 60 * 1000 //60 days in miliseconds
        }
    ];
}