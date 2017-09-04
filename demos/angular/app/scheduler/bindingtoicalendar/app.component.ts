import { Component, ViewChild} from '@angular/core';

import { jqxSchedulerComponent } from '../../../jqwidgets-ts/angular_jqxscheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myScheduler') myScheduler: jqxSchedulerComponent;

    source: any =
    {
        dataType: 'ics',
        url: '../sampledata/icalendar.txt'
    };

    adapter: any = new jqx.dataAdapter(this.source);

    appointmentDataFields: any =
    {
        from: 'DTSTART',
        to: 'DTEND',
        id: 'UID',
        description: 'DESCRIPTION',
        location: 'LOCATION',
        subject: 'SUMMARY',
        recurrencePattern: 'RRULE',
        recurrenceException: 'EXDATE',
        status: 'STATUS'
    };

    views: string[] =
    [
        'dayView',
        'weekView',
        'monthView'
    ];

    date: any = new jqx.date(2016, 11, 23);

    ready = (): void => {
        this.myScheduler.scrollTop(200);
    }
}