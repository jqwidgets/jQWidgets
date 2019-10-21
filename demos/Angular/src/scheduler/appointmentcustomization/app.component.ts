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
		if (document.body.offsetWidth < 800) {
			return '90%';
		}
		
		return 800;
	}
	
    generateAppointments() {
        let appointments = new Array();
        let appointment1 = {
            id: 'id1',
            description: 'Quarterly Project Review Meeting',
            location: '',
            subject: 'Nancy',
            calendar: 'Room 1',
            start: new Date(2020, 10, 23, 9, 0, 0),
            end: new Date(2020, 10, 23, 16, 0, 0)
        }
        let appointment2 = {
            id: 'id2',
            description: 'IT Group Mtg.',
            location: '',
            subject: 'John',
            calendar: 'Room 2',
            start: new Date(2020, 10, 24, 10, 0, 0),
            end: new Date(2020, 10, 24, 15, 0, 0)
        }
        let appointment3 = {
            id: 'id3',
            description: 'Course Social Media',
            location: '',
            subject: 'Antony',
            calendar: 'Room 3',
            start: new Date(2020, 10, 27, 11, 0, 0),
            end: new Date(2020, 10, 27, 13, 0, 0)
        }
        let appointment4 = {
            id: 'id4',
            description: 'New Projects Planning',
            location: '',
            subject: 'Michael',
            calendar: 'Room 2',
            start: new Date(2020, 10, 23, 16, 0, 0),
            end: new Date(2020, 10, 23, 18, 0, 0)
        }
        let appointment5 = {
            id: 'id5',
            description: 'Interview with James',
            location: '',
            subject: 'Peter',
            calendar: 'Room 1',
            start: new Date(2020, 10, 25, 15, 0, 0),
            end: new Date(2020, 10, 25, 17, 0, 0)
        }
        let appointment6 = {
            id: 'id6',
            description: 'Interview with Nancy',
            location: '',
            subject: 'George',
            calendar: 'Room 4',
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
            { name: 'style', type: 'string' },
            { name: 'color', type: 'string' },
            { name: 'background', type: 'string' },
            { name: 'borderColor', type: 'string' },
            { name: 'start', type: 'date' },
            { name: 'end', type: 'date' }
        ],
        id: 'id',
        localData: this.generateAppointments()
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);

    appointmentDataFields: any =
    {
        from: 'start',
        to: 'end',
        id: 'id',
        description: 'description',
        location: 'location',
        subject: 'subject',
        style: 'style',
        color: 'color',
        background: 'background',
        borderColor: 'borderColor'
    };

    views: string[] =
    [
        'dayView',
        'weekView',
        'monthView'
    ];

    renderAppointment = (data) => {
        // data Object properties
        // appointment - Object with the properties from the Scheduler.s source object.
        // width - int
        // height- int
        // textColor - hex
        // background - hex
        // borderColor - hex
        // style - string
        // cssClass - string
        // html - html string
        // view - string
        let img = '<img style="top: 2px; position: relative;" src="../images/person.png"/>';
        if (data.appointment.subject == 'Nancy') {
            img = '<img style="top: 2px; position: relative;" src="../images/woman.png"/>';
        }
        else if (data.appointment.subject == 'Peter') {
            img = '<img style="top: 2px; position: relative;" src="../images/boss.png"/>';
        }
        else if (data.appointment.subject == 'Antony') {
            img = '<img style="top: 2px; position: relative;" src="../images/oldboss.png"/>';
        }
        else if (data.appointment.subject == 'John') {
            img = '<img style="top: 2px; position: relative;" src="../images/asian.png"/>';
        }

        if (data.view == 'weekView' || data.view == 'dayView' || data.view == 'monthView') {
            data.html = img + '<i>' + data.appointment.subject + '</i>';
            if (data.appointment.id == 'id1') {
                data.style = '#AA4643';
            }
            else if (data.appointment.id == 'id2' || data.appointment.id == 'id6') {
                data.style = '#309B46';
            }
            else if (data.appointment.id == 'id3') {
                data.style = '#447F6E';
            }
        }

        return data;
    };
}