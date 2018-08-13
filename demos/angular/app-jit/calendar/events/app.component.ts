import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxCalendarComponent } from '../../../jqwidgets-ts/angular_jqxcalendar';
import { jqxPanelComponent } from '../../../jqwidgets-ts/angular_jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myCalendar') myCalendar: jqxCalendarComponent;
    @ViewChild('myPanel') myPanel: jqxPanelComponent;

    myCalendarEvent(event: any): void {
        let date = event.args.date;
        let view = event.args.view;
        let viewFrom = view.from;
        let viewTo = view.to;
        this.myPanel.clearcontent();
        if (event.type === 'viewChange') {
            this.myPanel.prepend('<div style="margin-top: 5px;">Event Type: viewChange<br/>Date: ' + date + '<br/>View: ' + viewFrom + ' - ' + viewTo + '</div>');
        }
        else {
            this.myPanel.prepend('<div style="margin-top: 5px;">Event Type: change<br/>Date: ' + date + '</div>');
        }
    }
}
