import { Component, ViewChild, AfterViewInit } from '@angular/core';  import { jqxDateTimeInputComponent } from '../../../jqwidgets-ts/angular_jqxdatetimeinput';  @Component({     selector: 'app-root',     templateUrl: './app.component.html' })  export class AppComponent implements AfterViewInit { 
    @ViewChild('dateInput') myDateInput: jqxDateTimeInputComponent;
    @ViewChild('timeInput') myTimeInput: jqxDateTimeInputComponent;
    @ViewChild('dateTimeInput') myDateTimeInput: jqxDateTimeInputComponent;

    ngAfterViewInit(): void
    {
        this.myDateInput.createComponent(this.dateInputSettings);
        this.myTimeInput.createComponent(this.timeInputSettings);
        this.myDateTimeInput.createComponent(this.dateTimeInputSettings);
    }   

    dateInputSettings: jqwidgets.DateTimeInputOptions = {
        width: '300px', height: '25px'
    }
    timeInputSettings: jqwidgets.DateTimeInputOptions = {
        formatString: "T", showTimeButton: true, showCalendarButton: false, width: '300px', height: '25px'
    }
    dateTimeInputSettings: jqwidgets.DateTimeInputOptions = {
        formatString: "F", showTimeButton: true, width: '300px', height: '25px'
    }  }