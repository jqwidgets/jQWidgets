import { Component, ViewChild } from '@angular/core';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDateTimeInput', { static: false }) myDateTimeInput; jqxDateTimeInputComponent;

    availableFormats: string[] =
    [
        'short date pattern', 'long date pattern', 'short time pattern', 'long time pattern', 'long date, short time pattern',
        'long date, long time pattern', 'month/day pattern', 'month/year pattern', 'custom'
    ];

    listOnSelect(event: any): void {
        let index: number = event.args.index;
        switch (index) {
            case 0:
                this.myDateTimeInput.formatString('d');
                break;
            case 1:
                this.myDateTimeInput.formatString('D');
                break;
            case 2:
                this.myDateTimeInput.formatString('t');
                break;
            case 3:
                this.myDateTimeInput.formatString('T');
                break;
            case 4:
                this.myDateTimeInput.formatString('f');
                break;
            case 5:
                this.myDateTimeInput.formatString('F');
                break;
            case 6:
                this.myDateTimeInput.formatString('M');
                break;
            case 7:
                this.myDateTimeInput.formatString('Y');
                break;
            case 8:
                this.myDateTimeInput.formatString('dddd-MMMM-yyyy');
                break;
        }
    }
}