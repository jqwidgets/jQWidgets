/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createSchedulerResources(selector) {
    var appointments = new Array();
    var appointment1 = {
        id: "id1",
        description: "George brings projector for presentations.",
        location: "",
        subject: "Quarterly Project Review Meeting",
        calendar: "Room 1",
        start: new Date(2016, 10, 23, 9, 0, 0),
        end: new Date(2016, 10, 23, 16, 0, 0)
    };
    var appointment2 = {
        id: "id2",
        description: "",
        location: "",
        subject: "IT Group Mtg.",
        calendar: "Room 2",
        start: new Date(2016, 10, 24, 10, 0, 0),
        end: new Date(2016, 10, 24, 15, 0, 0)
    };
    var appointment3 = {
        id: "id3",
        description: "",
        location: "",
        subject: "Course Social Media",
        calendar: "Room 1",
        start: new Date(2016, 10, 27, 11, 0, 0),
        end: new Date(2016, 10, 27, 13, 0, 0)
    };
    var appointment4 = {
        id: "id4",
        description: "",
        location: "",
        subject: "New Projects Planning",
        calendar: "Room 2",
        start: new Date(2016, 10, 23, 0, 0, 0),
        end: new Date(2016, 10, 25, 23, 59, 59)
    };
    var appointment5 = {
        id: "id5",
        description: "",
        location: "",
        subject: "Interview with James",
        calendar: "Room 1",
        start: new Date(2016, 10, 25, 15, 0, 0),
        end: new Date(2016, 10, 25, 17, 0, 0)
    };
    var appointment6 = {
        id: "id6",
        description: "",
        location: "",
        subject: "Interview with Nancy",
        calendar: "Room 2",
        start: new Date(2016, 10, 26, 14, 0, 0),
        end: new Date(2016, 10, 26, 16, 0, 0)
    };
    appointments.push(appointment1);
    appointments.push(appointment2);
    appointments.push(appointment3);
    appointments.push(appointment4);
    appointments.push(appointment5);
    appointments.push(appointment6);
    // prepare the data
    var source = {
        dataType: "array",
        dataFields: [
            { name: 'id', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'subject', type: 'string' },
            { name: 'calendar', type: 'string' },
            { name: 'start', type: 'date' },
            { name: 'end', type: 'date' }
        ],
        id: 'id',
        localData: appointments
    };
    var adapter = new $.jqx.dataAdapter(source);
    // initialization options - validated in typescript
    // jqwidgets.SchedulerOptions has generated TS definition
    var options = {
        date: new $.jqx.date(2016, 11, 23),
        width: 850,
        height: 600,
        dayNameFormat: "abbr",
        source: adapter,
        showLegend: true,
        ready: function () {
            //$("#scheduler").jqxScheduler('ensureAppointmentVisible', 'id1');
        },
        resources: {
            colorScheme: "scheme05",
            dataField: "calendar",
            orientation: "horizontal",
            source: new $.jqx.dataAdapter(source)
        },
        appointmentDataFields: {
            from: "start",
            to: "end",
            id: "id",
            description: "description",
            location: "place",
            subject: "subject",
            resourceId: "calendar"
        },
        view: 'weekView',
        views: [
            { type: 'dayView', showWeekends: false },
            { type: 'weekView', showWeekends: false },
            { type: 'monthView' }
        ]
    };
    // creates an instance
    var myScheduler = jqwidgets.createInstance(selector, 'jqxScheduler', options);
    myScheduler.ensureAppointmentVisible('id1');
}
//# sourceMappingURL=typescript-scheduler-resources.js.map