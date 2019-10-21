import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxCalendarComponent } from 'jqwidgets-ng/jqxcalendar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myCalendar', { static: false }) myCalendar: jqxCalendarComponent;

    ngAfterViewInit(): void {
        let date1 = new Date();
        let date2 = new Date();
        let date3 = new Date();
        date1.setDate(5);
        date2.setDate(15);
        date3.setDate(16);
        // Add special dates by invoking the addSpecialDate method.
        this.myCalendar.addSpecialDate(date1, '', 'Special Date1');
        this.myCalendar.addSpecialDate(date2, '', 'Special Date2');
        this.myCalendar.addSpecialDate(date3, '', 'Special Date3');
    }
}
