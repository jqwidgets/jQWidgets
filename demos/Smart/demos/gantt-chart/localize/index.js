window.onload = function () {
    const gantt = document.querySelector('smart-gantt-chart'),
        dropDown = document.querySelector('smart-drop-down-list');

    gantt.durationUnit = 'hour';
    gantt.taskColumns = [
        {
            label: 'tasks',
            value: 'label',
            size: '60%'
        },
        {
            label: 'duration',
            value: 'duration',
            formatFunction: (date) => parseInt(date)
        }];

    //Simple Customization
    gantt.yearFormat = 'numeric';
    gantt.monthFormat = 'short';
    gantt.dayFormat = 'numeric';

    //Custom Format Function
    gantt.timelineHeaderFormatFunction = function (date, type) {
        if (type === 'month') {
            return date.toLocaleDateString(gantt.locale, { month: 'long', year: 'numeric' });
        }

        if (type === 'year') {
            return date.toLocaleDateString(gantt.locale, { year: 'numeric' });
        }

        if (type === 'week') {
            const startDayOfWeek = new Date(date),
                endDateOfWeek = new Date(date);

            endDateOfWeek.setDate(date.getDate() + 6);

            return startDayOfWeek.toLocaleDateString(gantt.locale, { day: gantt.dayFormat, month: gantt.monthFormat, year: gantt.yearFormat }) + ' - ' +
                endDateOfWeek.toLocaleDateString(gantt.locale, { day: gantt.dayFormat, month: gantt.monthFormat, year: gantt.yearFormat });
        }

        if (type === 'day') {
            return date.toLocaleDateString(gantt.locale, { day: gantt.dayFormat });
        }

        if (type === 'hour') {
            return date.toLocaleDateString(gantt.locale, { hour: 'numeric' });
        }
    };



    gantt.dataSource = [
        {
            label: 'PRD & User-Stories',
            dateStart: '2019-01-10',
            dateEnd: '2019-02-10',
            class: 'product-team',
            type: 'task'
        },
        {
            label: 'Persona & Journey',
            dateStart: '2019-02-11',
            dateEnd: '2019-03-10',
            class: 'marketing-team',
            type: 'task'
        },
        {
            label: 'Architecture',
            dateStart: '2019-03-11',
            dateEnd: '2019-04-1',
            class: 'product-team',
            type: 'task'
        },
        {
            label: 'Prototyping',
            dateStart: '2019-04-02',
            dateEnd: '2019-05-01',
            class: 'dev-team',
            type: 'task'
        },
        {
            label: 'Design',
            dateStart: '2019-05-02',
            dateEnd: '2019-06-31',
            class: 'design-team',
            type: 'task'
        },
        {
            label: 'Development',
            dateStart: '2019-07-01',
            dateEnd: '2019-08-10',
            class: 'dev-team',
            type: 'task'
        },
        {
            label: 'Testing & QA',
            dateStart: '2019-08-11',
            dateEnd: '2019-09-10',
            class: 'qa-team',
            type: 'task'
        },
        {
            label: 'UAT Test',
            dateStart: '2019-09-12',
            dateEnd: '2019-10-01',
            class: 'product-team',
            type: 'task'
        },
        {
            label: 'Handover & Documentation',
            dateStart: '2019-10-02',
            dateEnd: '2019-11-01',
            class: 'marketing-team',
            type: 'task'
        },
        {
            label: 'Release',
            dateStart: '2019-11-01',
            dateEnd: '2019-12-31',
            class: 'release-team',
            type: 'task'
        }
    ];

    gantt.messages = {
        'en': {
            'incorrectArgument': '{{elementType}}: Incorrect argument {{argumentName}} in method {{methodName}}.',
            'outOfBounds': '{{elementType}}: Out of bounds argument {{argumentName}} in method {{methodName}}.',
            'noId': 'smartGanttChart requires an id in order to save/load/clear a state.',
            'ok': 'Ok',
            'cancel': 'Cancel',
            'delete': 'Delete',
            'confirm': '{{componentName}} will be deleted permanently, <b>are you sure? </b>',
            'tasks': 'Tasks',
            'duration': 'Duration (hours)'
        },
        'de': {
            'incorrectArgument': '{{elementType}}: Falsches Argument {{argumentName}} in Methode {{methodName}}.',
            'outOfBounds': '{{elementType}}: Unbegrenztes Argument {{argumentName}} in Methode {{methodName}}.',
            'noId': 'smartGanttChart erfordert eine ID, um einen Zustand speichern / laden / löschen.',
            'ok': 'Ok',
            'cancel': 'Stornieren',
            'delete': 'Löschen',
            'confirm': '{{componentName}} wird dauerhaft gelöscht, <b>bist du sicher? </b>',
            'tasks': 'Aufgaben',
            'duration': 'Dauer (Std)'
        },
        'bg': {
            'incorrectArgument': '{{elementType}}: Невалиден аргумент {{argumentName}} в метод {{methodName}}.',
            'outOfBounds': '{{elementType}}: Аргументът {{argumentName}} в метод {{methodName}} е извън обхват.',
            'noId': 'smartGanttChart трябва да има id за да може да записва/зарежда/изчиства запазени състояния.',
            'ok': 'Ok',
            'cancel': 'Отказ',
            'delete': 'Изтрий',
            'confirm': '{{componentName}} ще бъде изтрит завинаги, <b>сигурни ли сте? </b>',
            'tasks': 'Задачи',
            'duration': 'Продължителност (часове)'
        },
        'fr': {
            'incorrectArgument': '{{elementType}}: Argument incorrect {{argumentName}} en méthode {{methodName}}.',
            'outOfBounds': '{{elementType}}: Argument hors limites {{argumentName}} en méthode {{methodName}}.',
            'noId': 'smartGanttChart nécessite un identifiant pour sauvegarder / charger / effacer un état.',
            'ok': 'D\'accord',
            'cancel': 'Annuler',
            'delete': 'Effacer',
            'confirm': '{{componentName}} sera supprimé définitivement, <b>êtes-vous sûr? </b>',
            'tasks': 'Les tâches',
            'duration': 'Durée (heures)'
        }
    };

    dropDown.addEventListener('change', function (event) {
        gantt.locale = event.detail.label;
    });
}