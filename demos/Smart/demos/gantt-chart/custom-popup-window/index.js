window.onload = function () {
    const gantt = document.querySelector('smart-gantt-chart');

    gantt.durationUnit = 'day';
    gantt.view = 'week';
    gantt.treeSize = '25%';
    gantt.dateStart = '2019-04-01';
    gantt.timelineHeaderFormatFunction = function (date, type, isHeaderDetailsContainer) {
        if (isHeaderDetailsContainer) {
            let startDate = new Date(date),
                endDate = new Date(date),
                formatDate = (date) => date.toLocaleDateString(gantt.locale, { day: '2-digit', month: 'short' }).toUpperCase()

            //the view is set to 'week' so add 6 days to the first to get the last
            endDate.setDate(endDate.getDate() + 6);

            //Validate the endDate according to timeline end
            endDate = new Date(Math.min(gantt.dateEnd.getTime(), endDate.getTime()));

            return formatDate(startDate) + ' - ' + formatDate(endDate);
        }
        else {
            return new Date(date).toLocaleDateString(gantt.locale, { weekday: 'short' }).toUpperCase();
        }
    };
    gantt.taskColumns = [
        {
            label: 'TASK NAME',
            value: 'label',
            size: '50%'
        },
        {
            label: 'START TIME',
            value: 'dateStart',
            size: '30%',
            formatFunction: function (dateString) {
                const date = new Date(dateString),
                    formatNumber = (number) => ('0' + number).slice(-2);

                return date.getFullYear() + '-' + formatNumber(date.getMonth() + 1) + '-' + formatNumber(date.getDate());
            }
        },
        {
            label: 'DURATION',
            value: 'duration',
            formatFunction: (duration) => parseInt(duration)
        }];

    gantt.dataSource = [
        {
            type: 'project',
            label: 'Office Preparation',
            synchronized: true,
            expanded: true,
            progress: 35,
            tasks: [
                {
                    label: 'Office Inspection',
                    synchronized: true,
                    expanded: true,
                    progress: 55,
                    type: 'project',
                    connections: [
                        {
                            target: 'furnitureInArrangement',
                            type: 1
                        }
                    ],
                    tasks: [
                        {
                            label: 'Interior Arrangement',
                            dateStart: '2019-04-02',
                            duration: 3,
                            type: 'task'
                        },
                        {
                            label: 'Climate Control Installation',
                            dateStart: '2019-04-05',
                            duration: 2,
                            type: 'task'
                        }
                    ]
                },
                {
                    id: 'furnitureInArrangement',
                    label: 'Furniture Arrangement',
                    synchronized: true,
                    progress: 55,
                    type: 'project',
                    connections: [
                        {
                            target: 'employeePositioning',
                            type: 1
                        }
                    ],
                    tasks: [
                        {
                            label: 'Workstations Positioning',
                            dateStart: '2019-04-08',
                            duration: 2,
                            type: 'task'
                        }
                    ]
                },
                {
                    id: 'employeePositioning',
                    label: 'Employee Positioning',
                    synchronized: true,
                    expanded: true,
                    progress: 50,
                    type: 'project',
                    tasks: [
                        {
                            label: 'Workplaces Allocation',
                            dateStart: '2019-04-10',
                            duration: 3,
                            progress: 50,
                            connections: [
                                {
                                    target: 'workstationsAssembly',
                                    type: 1
                                }
                            ],
                            type: 'task'
                        },
                        {
                            id: 'workstationsAssembly',
                            label: 'Workstations Assembly',
                            dateStart: '2019-04-13',
                            duration: 3,
                            progress: 50,
                            connections: [
                                {
                                    target: 'workstationsInspection',
                                    type: 1
                                }
                            ],
                            type: 'task'
                        },
                        {
                            id: 'workstationsInspection',
                            label: 'Workstations Inspection',
                            dateStart: '2019-04-16',
                            duration: 3,
                            progress: 50,
                            type: 'task'
                        }
                    ]
                }
            ]
        },
        {
            type: 'project',
            label: 'Product Release',
            synchronized: true,
            expanded: true,
            progress: 65,
            tasks: [
                {
                    label: 'Planning',
                    dateStart: '2019-04-02',
                    duration: 5,
                    progress: 100,
                    type: 'task'
                },
                {
                    label: 'Development',
                    synchronized: true,
                    expanded: true,
                    progress: 50,
                    type: 'project',
                    connections: [
                        {
                            target: 'releasev1',
                            type: 1
                        }
                    ],
                    tasks: [
                        {
                            label: 'Developing/Coding',
                            dateStart: '2019-04-03',
                            duration: 5,
                            type: 'task',
                            progress: 100,
                            connections: [
                                {
                                    target: 'betaRelease',
                                    type: 1
                                }
                            ]
                        },
                        {
                            id: 'betaRelease',
                            label: 'Beta Release',
                            dateStart: '2019-04-08',
                            type: 'milestone',
                            connections: [
                                {
                                    target: 'integrateSystem',
                                    type: 1
                                }
                            ]
                        },
                        {
                            id: 'integrateSystem',
                            label: 'Integration',
                            dateStart: '2019-04-08',
                            duration: 4,
                            type: 'task',
                            progress: 100,
                            connections: [
                                {
                                    target: 'test',
                                    type: 1
                                }
                            ]
                        },
                        {
                            id: 'test',
                            label: 'Testing',
                            dateStart: '2019-04-12',
                            duration: 3,
                            type: 'task',
                            progress: 15,
                            connections: [
                                {
                                    target: 'marketing',
                                    type: 1
                                }
                            ]
                        },
                        {
                            id: 'marketing',
                            label: 'Marketing and Sales',
                            dateStart: '2019-04-15',
                            duration: 4,
                            type: 'task'
                        }
                    ]
                },
                {
                    label: 'Feedback Analysis and QA',
                    dateStart: '2019-04-02',
                    duration: 4,
                    type: 'task',
                    progress: 75,
                    connections: [
                        {
                            target: 'design',
                            type: 1
                        }
                    ]
                },
                {
                    id: 'design',
                    label: 'Design',
                    synchronized: true,
                    expanded: true,
                    progress: 25,
                    type: 'project',
                    tasks: [
                        {
                            label: 'Database',
                            dateStart: '2019-04-06',
                            duration: 4,
                            progress: 50,
                            type: 'task'
                        },
                        {
                            label: 'User Interface',
                            dateStart: '2019-04-08',
                            duration: 4,
                            progress: 10,
                            type: 'task'
                        }
                    ]
                },
                {
                    label: 'Documentation',
                    dateStart: '2019-04-11',
                    duration: 5,
                    type: 'task',
                    connections: [
                        {
                            target: 'releasev1',
                            type: 1
                        }
                    ]
                },
                {
                    id: 'releasev1',
                    label: 'Release v1',
                    dateStart: '2019-04-19',
                    type: 'milestone'
                }
            ]
        }
    ];

    let editedTaskIndex,
        taskLabel,
        description,
        dayPicker,
        monthPicker,
        yearPicker,
        dayIncrementBtn,
        dayDecrementBtn,
        dayInput,
        totalDate,
        deleteBtn,
        cancelBtn,
        saveBtn;

    gantt.popupWindowCustomizationFunction = function (target, type, taskIndex) {
        const targetTask = gantt.tasks[taskIndex];

        if (type === 'task' && targetTask) {
            let addListeners;

            editedTaskIndex = taskIndex;

            //Hide the header
            target.headerPosition = 'none';
            target.footerPosition = 'none';

            //Create the content
            if (!document.getElementById('taskLabel')) {
                addListeners = true;

                target.clear();
                target.appendChild(document.getElementById('myTemplate').content);
            }

            taskLabel = document.getElementById('taskLabel');
            description = document.getElementById('description');
            dayPicker = document.getElementById('dayPicker');
            monthPicker = document.getElementById('monthPicker');
            yearPicker = document.getElementById('yearPicker');
            dayIncrementBtn = document.getElementById('dayIncrementBtn');
            dayDecrementBtn = document.getElementById('dayDecrementBtn');
            dayInput = document.getElementById('dayInput');
            totalDate = document.getElementById('totalDate');
            deleteBtn = document.getElementById('deleteBtn');
            cancelBtn = document.getElementById('cancelBtn');
            saveBtn = document.getElementById('saveBtn');

            let newDateEnd;

            //Configure the content
            const dateStart = targetTask.dateStart,
                dateEnd = targetTask.dateEnd;

            if (!dateStart || !dateEnd) {
                taskLabel.innerHTML = '';
            }
            else {
                const dayFormat = ['2-digit', 'numeric'][gantt.dayFormat] || 'numeric';

                taskLabel.innerHTML = dateStart.toLocaleDateString(gantt.locale, { day: dayFormat, month: gantt.monthFormat, year: gantt.yearFormat }) + ' - ' +
                    dateEnd.toLocaleDateString(gantt.locale, { day: dayFormat, month: gantt.monthFormat, year: gantt.yearFormat });
            }

            description.value = targetTask.label;
            dayPicker.value = dateStart.getDate();
            monthPicker.value = dateStart.getMonth();
            yearPicker.value = dateStart.getFullYear();
            dayInput.value = targetTask.duration.toString();
            totalDate.innerHTML = targetTask.dateEnd.toDateString();

            if (addListeners) {
                dayIncrementBtn.addEventListener('click', function () {
                    dayInput.value = (Math.min(31, (parseInt(dayInput.value) || 0) + 1)).toString();
                    updateTotalDate();
                });

                dayDecrementBtn.addEventListener('click', function () {
                    dayInput.value = Math.max(1, (parseInt(dayInput.value) || 0) - 1).toString();
                    updateTotalDate();
                });

                deleteBtn.addEventListener('click', deleteTask);
                cancelBtn.addEventListener('click', cancelTask);
                saveBtn.addEventListener('click', saveTask);
            }
        }
    };

    function updateTotalDate() {
        let newDateEnd = new Date(parseInt(yearPicker.value), parseInt(monthPicker.value), parseInt(dayPicker.value));

        newDateEnd.setDate(newDateEnd.getDate() + parseInt(dayInput.value));

        if (isNaN(newDateEnd.getTime())) {
            totalDate.innerHTML = '';
            return;
        }

        totalDate.innerHTML = newDateEnd.toDateString();
    }

    function deleteTask() {
        gantt.removeTask(editedTaskIndex);
        gantt.closeWindow();
        editedTaskIndex = undefined;
    };

    function cancelTask() {
        gantt.closeWindow();
    };

    function saveTask() {
        let dateStart = new Date(parseInt(yearPicker.value), parseInt(monthPicker.value), parseInt(dayPicker.value)),
            duration = parseInt(dayInput.value);

        gantt.updateTask(editedTaskIndex, { label: description.value, dateStart: dateStart, duration: duration });
        gantt.closeWindow();
        editedTaskIndex = undefined;
    };
}