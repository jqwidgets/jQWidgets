import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('Events', { static: false }) Events: jqxPanelComponent;

    change(event: any): void {
        let value = event.args.value;
        this.Events.clearcontent();
        this.Events.prepend('<div style="margin-top: 5px;">Value: ' + value + '</div>');
    };
}