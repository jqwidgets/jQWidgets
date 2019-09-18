   window.onload = function () {
            const gantt = document.querySelector('smart-gantt-chart'),
                dropDown = document.querySelector('smart-drop-down-list');

            gantt.dataSource = [
                {
                    //Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
                    label: 'Project 1',
                    dateStart: '2017-05-10',
                    dateEnd: '2018-06-10',
                    type: 'project',
                    expanded: true,
                    tasks: [
                        {
                            label: 'Task 1.1',
                            dateStart: '2017-02-10',
                            dateEnd: '2020-04-10',
                            type: 'task'
                        },
                        {
                            label: 'Task 1.2',
                            dateStart: '2017-03-27',
                            dateEnd: '2017-06-10',
                            type: 'task'
                        },
                        {
                            label: 'Milestone 1',
                            dateStart: '2017-04-21',
                            type: 'milestone'
                        },
                        {
                            label: 'Project 2',
                            dateStart: '2017-06-11',
                            dateEnd: '2024-12-31T23:59:59',
                            type: 'project',
                            expanded: true,
                            tasks: [
                                {
                                    label: 'Task 2.1',
                                    dateStart: '2017-06-12',
                                    dateEnd: '2019-01-1',
                                    type: 'task'
                                },
                                {
                                    label: 'Task 2.2',
                                    dateStart: '2019-01-02',
                                    dateEnd: '2020-06-01',
                                    type: 'task'
                                },
                                {
                                    label: 'Milestone 2.1',
                                    dateStart: '2020-06-30',
                                    type: 'milestone'
                                },
                                {
                                    label: 'Task 2.3',
                                    dateStart: '2020-09-01',
                                    dateEnd: '2024-12-31T23:59:59',
                                    type: 'task'
                                }
                            ]
                        } 
                    ]
                }
            ];

            dropDown.addEventListener('change', function (event) {
                gantt.view = event.detail.label;
            });
        }