window.onload = function () {
    const gantt = document.querySelector('smart-gantt-chart');

    gantt.durationUnit = 'hour';
    gantt.taskColumns = [
        {
            label: 'Employee',
            value: 'id'
        }];
    gantt.timelineHeaderFormatFunction = function (date, type, isHeaderDetailsContainer) {
        if (isHeaderDetailsContainer) {
            return 'Time';
        }
        else {
            return date.toLocaleTimeString(gantt.locale, { hour: 'numeric', minute: 'numeric', hour12: true });
        }
    }

    gantt.dataSource = [
        {
            id: 'Betty',
            label: 'Morning Shift',
            dateStart: '2019-01-10T04:00:00',
            dateEnd: '2019-01-10T012:30:00',
            class: 'morning-shift',
            type: 'task'
        },
        {
            id: 'William',
            label: 'Afternoon-shift',
            dateStart: '2019-01-10T12:30:00',
            dateEnd: '2019-01-10T20:00:00',
            class: 'afternoon-shift',
            type: 'task'
        },
        {
            id: 'Emma',
            label: 'Half-day',
            dateStart: '2019-01-10T12:30:00',
            dateEnd: '2019-01-10T16:30:00',
            class: 'half-day',
            type: 'task'
        },
        {
            id: 'Oliver',
            label: 'Morning-shift',
            dateStart: '2019-01-10T04:00:00',
            dateEnd: '2019-01-10T12:30:00',
            class: 'morning-shift',
            type: 'task'
        },
        {
            id: 'Jason',
            label: 'Afternoon-shift',
            dateStart: '2019-01-10T12:30:00',
            dateEnd: '2019-01-10T20:00:00',
            class: 'afternoon-shift',
            type: 'task'
        },
        {
            id: 'Alex',
            label: 'Early-morning-support',
            dateStart: '2019-01-10T00:00:00',
            dateEnd: '2019-01-10T08:30:00',
            class: 'early-morning-support',
            type: 'task'
        },
        {
            id: 'Lucas',
            label: 'Half-day',
            dateStart: '2019-01-10T04:00:00',
            dateEnd: '2019-01-10T08:00:00',
            class: 'half-day',
            type: 'task'
        },
        {
            id: 'Michael',
            label: 'Early-morning-support',
            dateStart: '2019-01-10T00:00:00',
            dateEnd: '2019-01-10T08:30:00',
            class: 'early-morning-support',
            type: 'task'
        }
    ];
}