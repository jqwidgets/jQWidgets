import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxPanelComponent } from '../../../jqwidgets-ts/angular_jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('events') events: jqxPanelComponent;

    displayEvent = (event) => {
        let eventData = event.type;
        eventData += ': ' + event.args.value;
        this.events.clearcontent();
        this.events.prepend('<div class="item" style="margin-top: 5px;">' + eventData + '</div>');
    };

    change(event: any): void {
        this.displayEvent(event);
    }; 
}