import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { jqxCalendarComponent } from 'jqwidgets-ng/jqxcalendar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myCalendar', { static: false }) myCalendar: jqxCalendarComponent;
	@ViewChild('log', { static: false }) log: ElementRef;

    value: Date = new Date(2016, 7, 7);

    ngAfterViewInit(): void {
        let date1 = new Date();
        date1.setFullYear(2016, 7, 7);
        let date2 = new Date();
        date2.setFullYear(2016, 7, 15);
        this.myCalendar.setRange(date1, date2);
    }

    myCalendarOnChange(event: any): void {
        let selection = event.args.range;   
        this.log.nativeElement.innerHTML = '<div>From: ' + selection.from.toLocaleDateString() + ' <br/>To: ' + selection.to.toLocaleDateString() + '</div>';
    }
}
