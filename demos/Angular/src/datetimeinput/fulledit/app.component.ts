import { Component, ViewChild } from '@angular/core';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDateTimeInput', { static: false }) myDateTimeInput: jqxDateTimeInputComponent;
}