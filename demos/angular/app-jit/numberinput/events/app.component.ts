import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxPanelComponent } from '../../../jqwidgets-ts/angular_jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('Events') Events: jqxPanelComponent;

    change(event: any): void {
        let value = event.args.value;
        this.Events.clearcontent();
        this.Events.prepend('<div style="margin-top: 5px;">Value: ' + value + '</div>');
    };

    textchanged(event: any): void {
        let text = event.args.text;
        this.Events.prepend('<div style="margin-top: 5px;">Text: ' + text + '</div>');
    };
}