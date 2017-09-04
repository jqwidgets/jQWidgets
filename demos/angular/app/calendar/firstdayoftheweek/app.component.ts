import { Component, ViewChild } from '@angular/core';

import { jqxCalendarComponent } from '../../../jqwidgets-ts/angular_jqxcalendar';
import { jqxDropDownListComponent } from '../../../jqwidgets-ts/angular_jqxdropdownlist';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myCalendar') myCalendar: jqxCalendarComponent;
    @ViewChild('myDropDownList') myDropDownList: jqxDropDownListComponent;

    days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 
    myDropDownListOnSelect(event: any): void {
      let index = event.args.index;
      if (index === 6) {
          index = -1;
      }
      this.myCalendar.firstDayOfWeek(index + 1);
    };
}
