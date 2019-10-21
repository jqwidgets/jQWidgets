import { Component, ViewChild } from '@angular/core';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDateTimeInput', { static: false }) myDateTimeInput; jqxDateTimeInputComponent;

    availableCultures: string[] =
    [
        'Czech (Czech Republic)', 'German (Germany)', 'English (Canada)', 'English (United States)', 'French (France)',
        'Italian (Italy)', 'Japanese (Japan)', 'Hebrew (Israel)', 'Russian (Russia)', 'Croatian (Croatia)', 'Sanskrit (India)'
    ];

    listOnSelect(event: any): void {
        let index: number = event.args.index;
        switch (index) {
            case 0:
                this.myDateTimeInput.culture('cs-CZ');
                break;
            case 1:
                this.myDateTimeInput.culture('de-DE');
                break;
            case 2:
                this.myDateTimeInput.culture('en-CA');
                break;
            case 3:
                this.myDateTimeInput.culture('en-US');
                break;
            case 4:
                this.myDateTimeInput.culture('fr-FR');
                break;
            case 5:
                this.myDateTimeInput.culture('it-IT');
                break;
            case 6:
                this.myDateTimeInput.culture('ja-JP');
                break;
            case 7:
                this.myDateTimeInput.culture('he-IL');
                break;
            case 8:
                this.myDateTimeInput.culture('ru-RU');
            case 9:
                this.myDateTimeInput.culture('hr');
                break;
            case 10:
                this.myDateTimeInput.culture('sa-IN');
                break;
        }
    }
}