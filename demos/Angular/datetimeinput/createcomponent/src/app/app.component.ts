import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDateTimeInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatetimeinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('dateInput') myDateInput: jqxDateTimeInputComponent;
    @ViewChild('timeInput') myTimeInput: jqxDateTimeInputComponent;
    @ViewChild('dateTimeInput') myDateTimeInput: jqxDateTimeInputComponent;

    ngAfterViewInit(): void {
        this.myDateInput.createComponent(this.dateInputSettings);
        this.myTimeInput.createComponent(this.timeInputSettings);
        this.myDateTimeInput.createComponent(this.dateTimeInputSettings);
    }

    dateInputSettings: jqwidgets.DateTimeInputOptions = {
        theme: 'material', width: '300px', height: '25px'
    }
    timeInputSettings: jqwidgets.DateTimeInputOptions = {
        theme: 'material', formatString: "T", showTimeButton: true, showCalendarButton: false, width: '300px', height: '25px'
    }
    dateTimeInputSettings: jqwidgets.DateTimeInputOptions = {
        theme: 'material', formatString: "F", showTimeButton: true, width: '300px', height: '25px'
    }
}