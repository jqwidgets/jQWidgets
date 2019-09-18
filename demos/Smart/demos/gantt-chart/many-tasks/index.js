window.onload = function () {
    const gantt = document.querySelector('smart-gantt-chart');

    gantt.dataSource = [
        {
            label: 'Task 1',
            dateStart: '2017-01-10',
            dateEnd: '2020-01-10',
            type: 'task'
        },
        {
            label: 'Task 2',
            dateStart: '2017-02-27',
            dateEnd: '2020-02-10',
            type: 'task'
        },
        {
            label: 'Milestone 1',
            dateStart: '2017-03-21',
            type: 'milestone'
        },

        {
            label: 'Task 3',
            dateStart: '2017-04-12',
            dateEnd: '2020-04-1',
            type: 'task'
        },
        {
            label: 'Task 4',
            dateStart: '2017-05-02',
            dateEnd: '2020-05-01',
            type: 'task'
        },
        {
            label: 'Milestone 2',
            dateStart: '2017-06-30',
            type: 'milestone'
        },
        {
            label: 'Task 5',
            dateStart: '2017-07-01',
            dateEnd: '2020-7-31',
            type: 'task'
        },
        {
            label: 'Task 6',
            dateStart: '2017-08-10',
            dateEnd: '2020-04-10',
            type: 'task'
        },
        {
            label: 'Task 7',
            dateStart: '2017-08-27',
            dateEnd: '2020-08-10',
            type: 'task'
        },
        {
            label: 'Milestone 3',
            dateStart: '2017-09-21',
            type: 'milestone'
        },

        {
            label: 'Task 8',
            dateStart: '2017-10-12',
            dateEnd: '2020-10-1',
            type: 'task'
        },
        {
            label: 'Task 9',
            dateStart: '2017-11-02',
            dateEnd: '2020-11-01',
            type: 'task'
        },
        {
            label: 'Milestone 4',
            dateStart: '2017-12-30',
            type: 'milestone'
        },
        {
            label: 'Task 10',
            dateStart: '2018-01-01',
            dateEnd: '2020-01-31',
            type: 'task'
        },
        {
            label: 'Task 11',
            dateStart: '2018-02-10',
            dateEnd: '2020-02-10',
            type: 'task'
        },
        {
            label: 'Task 12',
            dateStart: '2018-03-27',
            dateEnd: '2020-03-10',
            type: 'task'
        },
        {
            label: 'Milestone 5',
            dateStart: '2018-04-21',
            type: 'milestone'
        },

        {
            label: 'Task 13',
            dateStart: '2018-05-12',
            dateEnd: '2020-05-1',
            type: 'task'
        },
        {
            label: 'Task 14',
            dateStart: '2018-06-27',
            dateEnd: '2020-06-01',
            type: 'task'
        },
        {
            label: 'Milestone 6',
            dateStart: '2018-07-27',
            type: 'milestone'
        },
        {
            label: 'Task 15',
            dateStart: '2018-08-27',
            dateEnd: '2020-08-31',
            type: 'task'
        },
        {
            label: 'Task 16',
            dateStart: '2018-09-27',
            dateEnd: '2020-09-10',
            type: 'task'
        },
        {
            label: 'Task 17',
            dateStart: '2018-10-27',
            dateEnd: '2020-10-10',
            type: 'task'
        },
        {
            label: 'Milestone 7',
            dateStart: '2018-11-27',
            type: 'milestone'
        },

        {
            label: 'Task 18',
            dateStart: '2018-12-27',
            dateEnd: '2020-12-1',
            type: 'task'
        },
        {
            label: 'Task 19',
            dateStart: '2019-01-02',
            dateEnd: '2020-01-01',
            type: 'task'
        },
        {
            label: 'Milestone 8',
            dateStart: '2019-02-02',
            type: 'milestone'
        },
        {
            label: 'Task 20',
            dateStart: '2019-03-01',
            dateEnd: '2020-03-31',
            type: 'task'
        },
        {
            label: 'Task 21',
            dateStart: '2019-04-01',
            dateEnd: '2020-04-10',
            type: 'task'
        },
        {
            label: 'Task 22',
            dateStart: '2019-04-01',
            dateEnd: '2020-04-10',
            type: 'task'
        },
        {
            label: 'Milestone 9',
            dateStart: '2019-05-01',
            type: 'milestone'
        },

        {
            label: 'Task 23',
            dateStart: '2019-06-01',
            dateEnd: '2020-06-1',
            type: 'task'
        },
        {
            label: 'Task 24',
            dateStart: '2019-07-01',
            dateEnd: '2020-07-01',
            type: 'task'
        },
        {
            label: 'Milestone 10',
            dateStart: '2019-08-01',
            type: 'milestone'
        },
        {
            label: 'Task 25',
            dateStart: '2019-09-01',
            dateEnd: '2020-09-31',
            type: 'task'
        }
    ];
}