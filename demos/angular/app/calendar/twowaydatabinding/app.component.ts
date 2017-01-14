 
import { Component } from '@angular/core';

import { jqxCalendarComponent } from '../../../../../jqwidgets-ts/angular_jqxcalendar';

@Component({
    selector: 'my-app',
    template:  
        `<fieldset style="width: 250px; margin-top:1em; margin-bottom: 1em; border: 1px solid lightgrey;">
            Date is {{ date | json }}
        </fieldset>
        <jqxCalendar [width]='220' [height]='220' [(ngModel)]='date'></jqxCalendar>`
}) 

export class AppComponent
{ 
    date: Date = new Date();
}
