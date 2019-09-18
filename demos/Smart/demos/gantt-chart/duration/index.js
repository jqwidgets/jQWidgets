window.onload = function () {
    const ganttChart = document.querySelector('smart-gantt-chart');

    ganttChart.dataSource = [
        {
            type: 'project',
            label: 'Project 1',
            dateStart: '2018-5-10',
            dateEnd: '2018-7-10',
            minDuration: 60
        },
        {
            type: 'task',
            label: 'Task 2',
            dateStart: '2018-6-5',
            dateEnd: '2018-8-10',
            minDuration: 10,
            maxDuration: 60
        }
    ];

    document.getElementById('dayUnit').addEventListener('change', function (event) {
        if (event.detail.value) {
            ganttChart.durationUnit = event.target.innerHTML;
        }
    });

    document.getElementById('hourUnit').addEventListener('change', function (event) {
        if (event.detail.value) {
            ganttChart.durationUnit = event.target.innerHTML;
        }
    });
}