import { Component, OnInit, ViewChild } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler';

@Component({
    selector: 'app-instructors-schedules',
    templateUrl: './instructors-schedules.component.html',
    styleUrls: ['./instructors-schedules.component.css']
})
export class InstructorsSchedulesComponent implements OnInit {

    @ViewChild('scheduler') scheduler: jqxSchedulerComponent;

    constructor() { }

    ngOnInit() {
    }

    private source: any = {
        dataType: 'json',
        dataFields: [
            { name: 'id', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'subject', type: 'string' },
            { name: 'calendar', type: 'string' },
            { name: 'start', type: 'date', format: 'yyyy-MM-dd HH:mm' },
            { name: 'end', type: 'date', format: 'yyyy-MM-dd HH:mm' }
        ],
        id: 'id',
        url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/fitnessmanager/data.php?usedwidget=instructorsscheduler'
    };

    private adapter = new jqx.dataAdapter(this.source);

    private date = new jqx.date(2015, 11, 23);
    private height: number = window.innerHeight - 150;

    private ready = (): void => {
        this.scheduler.ensureAppointmentVisible('id2');
    };

    private resources: jqwidgets.SchedulerResources = {
        colorScheme: 'scheme05',
        dataField: 'calendar',
        source: this.adapter
    };

    private appointmentDataFields: jqwidgets.SchedulerAppointmentDataFields = {
        from: 'start',
        to: 'end',
        id: 'id',
        description: 'description',
        location: 'place',
        subject: 'subject',
        resourceId: 'calendar'
    };

    private views: string[] = ['weekView'];
}
