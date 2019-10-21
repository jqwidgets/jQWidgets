import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myDateTimeInput', { static: false }) myDateTimeInput; jqxDateTimeInputComponent;
    @ViewChild('log', { static: false }) log; ElementRef;

    ngAfterViewInit(): void {
        let date1 = new Date();
        date1.setFullYear(2013, 7, 7);
        let date2 = new Date();
        date2.setFullYear(2013, 7, 15);

        setTimeout(_ => this.myDateTimeInput.setRange(date1, date2))

        this.dateOnChange();
    }

    dateOnChange(): void {
        let selection = this.myDateTimeInput.getRange();

        if (selection.from != null) {
            this.log.nativeElement.innerHTML = '<div>From: ' + selection.from.toLocaleDateString() + ' <br/>To: ' + selection.to.toLocaleDateString() + '</div>';
        }
    }
}