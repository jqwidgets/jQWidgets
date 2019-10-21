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
            subject: 'Appointment with the dentist',
            status: 'tentative',
            calendar: 'Paula',
            start: new Date(2020, 10, 23, 9, 0, 0),
            end: new Date(2020, 10, 23, 11, 0, 0)
        };
        let appointment2 = {
            id: 'id2',
            description: '',
            location: '',
            subject: 'Business Plans Review',
            calendar: 'Tom',
            status: 'tentative',
            start: new Date(2020, 10, 24, 10, 0, 0),
            end: new Date(2020, 10, 24, 15, 0, 0)
        };
        let appointment3 = {
            id: 'id3',
            description: '',
            location: '',
            subject: 'Lunch with Monica',
            status: 'tentative',
            calendar: 'Chris',
            start: new Date(2020, 10, 27, 11, 0, 0),
            end: new Date(2020, 10, 27, 13, 0, 0)
        };
        let appointment4 = {
            id: 'id4',
            description: '',
            location: '',
            subject: 'Meeting John',
            status: 'free',
            calendar: 'Paula',
            start: new Date(2020, 10, 23, 16, 0, 0),
            end: new Date(2020, 10, 23, 18, 0, 0)
        };
        let appointment5 = {
            id: 'id5',
            description: '',
            location: '',
            subject: 'Parent-Teacher Conference',
            status: 'outOfOffice',
            calendar: 'Chris',
            start: new Date(2020, 10, 25, 15, 0, 0),
            end: new Date(2020, 10, 25, 17, 0, 0)
        };
        let appointment6 = {
            id: 'id6',
            description: '',
            location: '',
            subject: 'Interview with Nancy',
            status: 'busy',
            calendar: 'Tom',
            start: new Date(2020, 10, 26, 14, 0, 0),
            end: new Date(2020, 10, 26, 16, 0, 0)
        };
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
            { name: 'status', type: 'string' },
            { name: 'calendar', type: 'string' },
            { name: 'start', type: 'date' },
            { name: 'end', type: 'date' }
        ],
        id: 'id',
        localData: this.generateAppointments()
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);

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
        status: 'status',
        description: 'description',
        location: 'place',
        subject: 'subject',
        resourceId: 'calendar'
    };

    views: any[] =
    [
        'dayView',
        'weekView',
        'monthView'
    ];
}