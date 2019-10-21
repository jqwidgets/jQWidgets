import { Component, ViewChild} from '@angular/core';

import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myScheduler', { static: false }) myScheduler: jqxSchedulerComponent;

    source: any =
    {
        dataType: 'ics',
        url: './../../../sampledata/icalendar.txt'
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

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

    date: any = new jqx.date(2020, 11, 23);

    ready = (): void => {
        this.myScheduler.scrollTop(200);
    }
}