import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('scheduler', { static: false }) myScheduler: jqxSchedulerComponent;

    ngAfterViewInit() {
        this.myScheduler.ensureAppointmentVisible('id1');
    }

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    generateAppointments() {
        let appointments = new Array();
        let appointment1 = {
            id: 'id1',
            description: '',
            location: '',
            subject: 'Projektsitzung',
            calendar: 'Zimmer 1',
            start: new Date(2020, 10, 23, 9, 0, 0),
            end: new Date(2020, 10, 23, 16, 0, 0)
        }
        let appointment2 = {
            id: 'id2',
            description: '',
            location: '',
            subject: 'IT Gruppentreffen',
            calendar: 'Zimmer 2',
            start: new Date(2020, 10, 24, 10, 0, 0),
            end: new Date(2020, 10, 24, 15, 0, 0)
        }
        let appointment3 = {
            id: 'id3',
            description: '',
            location: '',
            subject: 'Soziale Treffen',
            calendar: 'Zimmer 3',
            start: new Date(2020, 10, 27, 11, 0, 0),
            end: new Date(2020, 10, 27, 13, 0, 0)
        }
        let appointment4 = {
            id: 'id4',
            description: '',
            location: '',
            subject: 'Projekte Planung',
            calendar: 'Zimmer 2',
            start: new Date(2020, 10, 23, 16, 0, 0),
            end: new Date(2020, 10, 23, 18, 0, 0)
        }
        let appointment5 = {
            id: 'id5',
            description: '',
            location: '',
            subject: 'Interveiw mit Jan',
            calendar: 'Zimmer 1',
            start: new Date(2020, 10, 25, 15, 0, 0),
            end: new Date(2020, 10, 25, 17, 0, 0)
        }
        let appointment6 = {
            id: 'id6',
            description: '',
            location: '',
            subject: 'Interveiw mit Alberta',
            calendar: 'Zimmer 4',
            start: new Date(2020, 10, 26, 14, 0, 0),
            end: new Date(2020, 10, 26, 16, 0, 0)
        }
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);

        return appointments;
    };

    date: any = new jqx.date(2020, 11, 23);

    source: any =
    {
        dataType: 'array',
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
        localData: this.generateAppointments()
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    printButton: any = null;

    resources: any =
    {
        colorScheme: 'scheme05',
        dataField: 'calendar',
        source: new jqx.dataAdapter(this.source)
    };

    appointmentDataFields: any =
    {
        from: 'start',
        to: 'end',
        id: 'id',
        description: 'description',
        location: 'place',
        subject: 'subject',
        resourceId: 'calendar'
    };

    views: any[] =
    [
        { type: 'dayView', timeRuler: { formatString: 'HH:mm' } },
        { type: 'weekView', timeRuler: { formatString: 'HH:mm' } },
        { type: 'monthView' }
    ];

    // called when the dialog is craeted.
    editDialogCreate = (dialog, fields, editAppointment) => {
        fields.timeZoneContainer.hide();
    };
    localization = {
        // separator of parts of a date (e.g. '/' in 11/05/1955)
        '/': '/',
        // separator of parts of a time (e.g. ':' in 05:44 PM)
        ':': ':',
        // the first day of the week (0 = Sunday, 1 = Monday, etc)
        firstDay: 1,
        days: {
            // full day names
            names: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            // abbreviated day names
            namesAbbr: ['Sonn', 'Mon', 'Dien', 'Mitt', 'Donn', 'Fre', 'Sams'],
            // shortest day names
            namesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
        },
        months: {
            // full month names (13 months for lunar calendards -- 13th month should be '' if not lunar)
            names: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember', ''],
            // abbreviated month names
            namesAbbr: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez', '']
        },
        // AM and PM designators in one of these forms:
        // The usual view, and the upper and lower case versions
        //      [standard,lowercase,uppercase]
        // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
        //      null
        AM: ['AM', 'am', 'AM'],
        PM: ['PM', 'pm', 'PM'],
        eras: [
            // eras in reverse chronological order.
            // name: the name of the era in this culture (e.g. A.D., C.E.)
            // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
            // offset: offset in years from gregorian calendar
            { 'name': 'A.D.', 'start': null, 'offset': 0 }
        ],
        twoDigitYearMax: 2029,
        patterns: {
            // short date pattern
            d: 'M/d/yyyy',
            // long date pattern
            D: 'dddd, MMMM dd, yyyy',
            // short time pattern
            t: 'h:mm tt',
            // long time pattern
            T: 'h:mm:ss tt',
            // long date, short time pattern
            f: 'dddd, MMMM dd, yyyy h:mm tt',
            // long date, long time pattern
            F: 'dddd, MMMM dd, yyyy h:mm:ss tt',
            // month/day pattern
            M: 'MMMM dd',
            // month/year pattern
            Y: 'yyyy MMMM',
            // S is a sortable format that does not lety by culture
            S: 'yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss',
            // formatting of dates in MySQL DataBases
            ISO: 'yyyy-MM-dd hh:mm:ss',
            ISO2: 'yyyy-MM-dd HH:mm:ss',
            d1: 'dd.MM.yyyy',
            d2: 'dd-MM-yyyy',
            d3: 'dd-MMMM-yyyy',
            d4: 'dd-MM-yy',
            d5: 'H:mm',
            d6: 'HH:mm',
            d7: 'HH:mm tt',
            d8: 'dd/MMMM/yyyy',
            d9: 'MMMM-dd',
            d10: 'MM-dd',
            d11: 'MM-dd-yyyy'
        },
        backString: 'Vorhergehende',
        forwardString: 'Nächster',
        toolBarPreviousButtonString: 'Vorhergehende',
        toolBarNextButtonString: 'Nächster',
        emptyDataString: 'Nokeine Daten angezeigt',
        loadString: 'Loading...',
        clearString: 'Löschen',
        todayString: 'Heute',
        dayViewString: 'Tag',
        weekViewString: 'Woche',
        monthViewString: 'Monat',
        timelineDayViewString: 'Zeitleiste Day',
        timelineWeekViewString: 'Zeitleiste Woche',
        timelineMonthViewString: 'Zeitleiste Monat',
        loadingErrorMessage: 'Die Daten werden noch geladen und Sie können eine Eigenschaft nicht festgelegt oder eine Methode aufrufen . Sie können tun, dass, sobald die Datenbindung abgeschlossen ist. jqxScheduler wirft die \' bindingComplete \' Ereignis, wenn die Bindung abgeschlossen ist.',
        editRecurringAppointmentDialogTitleString: 'Bearbeiten Sie wiederkehrenden Termin',
        editRecurringAppointmentDialogContentString: 'Wollen Sie nur dieses eine Vorkommen oder die Serie zu bearbeiten ?',
        editRecurringAppointmentDialogOccurrenceString: 'Vorkommen bearbeiten',
        editRecurringAppointmentDialogSeriesString: 'Bearbeiten Die Serie',
        editDialogTitleString: 'Termin bearbeiten',
        editDialogCreateTitleString: 'Erstellen Sie Neuer Termin',
        contextMenuEditAppointmentString: 'Termin bearbeiten',
        contextMenuCreateAppointmentString: 'Erstellen Sie Neuer Termin',
        editDialogSubjectString: 'Subjekt',
        editDialogLocationString: 'Ort',
        editDialogFromString: 'Von',
        editDialogToString: 'Bis',
        editDialogAllDayString: 'Den ganzen Tag',
        editDialogExceptionsString: 'Ausnahmen',
        editDialogResetExceptionsString: 'Zurücksetzen auf Speichern',
        editDialogDescriptionString: 'Bezeichnung',
        editDialogResourceIdString: 'Kalender',
        editDialogStatusString: 'Status',
        editDialogColorString: 'Farbe',
        editDialogColorPlaceHolderString: 'Farbe wählen',
        editDialogTimeZoneString: 'Zeitzone',
        editDialogSelectTimeZoneString: 'Wählen Sie Zeitzone',
        editDialogSaveString: 'Sparen',
        editDialogDeleteString: 'Löschen',
        editDialogCancelString: 'Abbrechen',
        editDialogRepeatString: 'Wiederholen',
        editDialogRepeatEveryString: 'Wiederholen alle',
        editDialogRepeatEveryWeekString: 'woche(n)',
        editDialogRepeatEveryYearString: 'Jahr (en)',
        editDialogRepeatEveryDayString: 'Tag (e)',
        editDialogRepeatNeverString: 'Nie',
        editDialogRepeatDailyString: 'Täglich',
        editDialogRepeatWeeklyString: 'Wöchentlich',
        editDialogRepeatMonthlyString: 'Monatlich',
        editDialogRepeatYearlyString: 'Jährlich',
        editDialogRepeatEveryMonthString: 'Monate (n)',
        editDialogRepeatEveryMonthDayString: 'Day',
        editDialogRepeatFirstString: 'erste',
        editDialogRepeatSecondString: 'zweite',
        editDialogRepeatThirdString: 'dritte',
        editDialogRepeatFourthString: 'vierte',
        editDialogRepeatLastString: 'letzte',
        editDialogRepeatEndString: 'Ende',
        editDialogRepeatAfterString: 'Nach',
        editDialogRepeatOnString: 'Am',
        editDialogRepeatOfString: 'von',
        editDialogRepeatOccurrencesString: 'Eintritt (e)',
        editDialogRepeatSaveString: 'Vorkommen Speichern',
        editDialogRepeatSaveSeriesString: 'Save Series',
        editDialogRepeatDeleteString: 'Vorkommen löschen',
        editDialogRepeatDeleteSeriesString: 'Series löschen',
        editDialogStatuses:
        {
            free: 'Frei',
            tentative: 'Versuchsweise',
            busy: 'Beschäftigt',
            outOfOffice: 'Ausserhaus'
        }
    };
}