import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('scheduler', { static: false }) myScheduler: jqxSchedulerComponent;

    ngAfterViewInit() {
        this.myScheduler.ensureAppointmentVisible('id7');
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
            id: 'id4',
            description: '',
            style: '#AA4643',
            location: '',
            subject: 'New Projects Planning',
            calendar: 'Room 2',
            from: new Date(2020, 10, 22, 8, 0, 0),
            to: new Date(2020, 10, 22, 13, 0, 0)
        }
        let appointment2 = {
            id: 'id5',
            description: '',
            style: '#89A54E',
            location: '',
            subject: 'Interview with James',
            calendar: 'Room 1',
            from: new Date(2020, 10, 25, 13, 0, 0),
            to: new Date(2020, 10, 25, 15, 0, 0)
        }
        let appointment3 = {
            id: 'id6',
            description: '',
            style: '#71588F',
            location: '',
            subject: 'Interview with Nancy',
            calendar: 'Room 2',
            from: new Date(2020, 10, 26, 14, 0, 0),
            to: new Date(2020, 10, 26, 16, 0, 0)
        }
        let appointment4 = {
            id: 'id7',
            description: '',
            style: '#307DD7',
            location: '',
            subject: 'Daily Meeting',
            calendar: 'Room 1',
            recurrenceRule: 'FREQ=DAILY;',
            recurrenceException: '2020-11-24 09:00:00,2020-11-26 12:00:00',
            from: new Date(2020, 10, 23, 10, 0, 0),
            to: new Date(2020, 10, 23, 11, 0, 0)
        }
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);

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
            { name: 'recurrenceRule', type: 'string' },
            { name: 'recurrenceException', type: 'string' },
            { name: 'style', type: 'string' },
            { name: 'from', type: 'date' },
            { name: 'to', type: 'date' }
        ],
        id: 'id',
        localData: this.generateAppointments()
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);
    
    appointmentDataFields: any =
    {
        from: 'from',
        to: 'to',
        id: 'id',
        description: 'description',
        location: 'place',
        style: 'style',
        subject: 'subject',
        resourceId: 'calendar',
        recurrencePattern: 'recurrenceRule',
        recurrenceException: 'recurrenceException'
    };

    views: any[] =
    [
        'dayView',
        'weekView',
        'monthView'
    ];
}