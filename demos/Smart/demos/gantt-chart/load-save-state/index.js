window.onload = function () {
    const gantt = document.querySelector('smart-gantt-chart');

    function reset() {
        gantt.dataSource = [
            {
                label: 'Clear Site',
                dateStart: '2019-01-1',
                dateEnd: '2019-01-10',
                connections: [
                    {
                        target: 1,
                        type: 0
                    }
                ]
            },
            {
                label: 'Drainage & Foundation',
                dateStart: '2019-01-11',
                dateEnd: '2019-01-20',
                connections: [
                    {
                        target: 2,
                        type: 1
                    }
                ]
            },
            {
                label: 'Ground Floor',
                dateStart: '2019-01-21',
                dateEnd: '2019-01-31',
                connections: [
                    {
                        target: 3,
                        type: 1
                    }
                ]
            },
            {
                label: 'First Floor',
                dateStart: '2019-02-01',
                dateEnd: '2019-02-20',
                connections: [
                    {
                        target: 4,
                        type: 1
                    }
                ]
            },
            {
                label: 'Roofing',
                dateStart: '2019-02-25',
                dateEnd: '2019-03-5',
                connections: [
                    {
                        target: 5,
                        type: 1
                    }
                ]
            },
            {
                label: 'Connect Electricity',
                dateStart: '2019-03-6',
                dateEnd: '2019-03-15',
                connections: [
                    {
                        target: 6,
                        type: 1
                    }
                ]
            },
            {
                label: 'Air Conditioning',
                dateStart: '2019-03-16',
                dateEnd: '2019-03-20',
                connections: [
                    {
                        target: 7,
                        type: 1
                    }
                ]
            },
            {
                label: 'Interiors',
                dateStart: '2019-03-21',
                dateEnd: '2019-03-28',
                connections: [
                    {
                        target: 8,
                        type: 1
                    }
                ]
            },
            {
                label: 'Racking',
                dateStart: '2019-03-31',
                dateEnd: '2019-04-10',
                connections: [
                    {
                        target: 9,
                        type: 1
                    }
                ]
            },
            {
                label: 'Stock Shelving',
                dateStart: '2019-04-12',
                dateEnd: '2019-05-01'
            }
        ];
    }

    gantt.treeSize = '25%';
    gantt.taskColumns = [
        {
            label: 'Tasks',
            value: 'label'
        },
        {
            label: 'Start Date',
            value: 'dateStart',
            size: '25%'
        },
        {
            label: 'End Date',
            value: 'dateEnd',
            size: '25%'
        }];

    gantt.loadState();

    //Check if a state has been loaded
    if (!gantt.dataSource.length) {
        reset();
    }

    document.getElementById('saveState').addEventListener('click', function () {
        gantt.saveState();
    });

    document.getElementById('loadState').addEventListener('click', function () {
        gantt.loadState();
    });

    document.getElementById('clearState').addEventListener('click', function () {
        gantt.clearState();
        gantt.dataSource = [];
        reset();
    });
}