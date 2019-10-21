import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myScheduler', { static: false }) myScheduler: jqxSchedulerComponent;
    @ViewChild('myLog', { static: false }) myLog: ElementRef;

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    source: any =
        {
            dataType: 'json',
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'status', type: 'string' },
                { name: 'about', type: 'string' },
                { name: 'address', type: 'string' },
                { name: 'company', type: 'string' },
                { name: 'name', type: 'string' },
                { name: 'style', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date', format: 'yyyy-MM-dd HH:mm' },
                { name: 'end', type: 'date', format: 'yyyy-MM-dd HH:mm' }
            ],
            id: 'id',
            url: './../../../sampledata/appointments.txt'
        };

    adapter: any = new jqx.dataAdapter(this.source);

    appointmentDataFields: any =
        {
            from: 'start',
            to: 'end',
            id: 'id',
            description: 'about',
            location: 'address',
            subject: 'name',
            style: 'style',
            status: 'status'
        };

    views: string[] =
        [
            'dayView',
            'weekView'
        ];

    date: any = new jqx.date(2020, 11, 23);

    ready = (): void => {
        this.myScheduler.scrollTop(700);
    }

    mySchedulerOnAppointmentDelete(event: any): void {
        let appointment = event.args.appointment;
        this.myLog.nativeElement.innerHTML = 'appointmentDelete is raised';
    };

    mySchedulerOnAppointmentAdd(event: any): void {
        let appointment = event.args.appointment;
        this.myLog.nativeElement.innerHTML = 'appointmentAdd is raised';
    };

    mySchedulerOnAppointmentDoubleClick(event: any): void {
        let appointment = event.args.appointment;
        this.myLog.nativeElement.innerHTML = 'appointmentDoubleClick is raised';
    };

    mySchedulerOnAppointmentChange(event: any): void {
        let appointment = event.args.appointment;
        this.myLog.nativeElement.innerHTML = 'appointmentChange is raised';
    };


    mySchedulerOnCellClick(event: any): void {
        let cell = event.args.cell;
        this.myLog.nativeElement.innerHTML = 'cellClick is raised';
    };
}