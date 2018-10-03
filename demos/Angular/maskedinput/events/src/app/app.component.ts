import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('Events') Events: jqxPanelComponent;

    change(event: any): void {
        const eventType = event.type;
        const eventValue = event.args.value;
        this.Events.prepend('<div style="margin-top: 5px;">type: ' + eventType + '; value: ' + eventValue + '</div>');
    };
}
