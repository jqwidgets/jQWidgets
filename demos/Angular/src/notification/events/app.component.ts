import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxNotificationComponent } from 'jqwidgets-ng/jqxnotification';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxNotification', { static: false }) jqxNotification: jqxNotificationComponent;
    @ViewChild('eventsPanel', { static: false }) eventsPanel: jqxPanelComponent;
    @ViewChild('messagePanel', { static: false }) messagePanel: ElementRef;

    writeEventType(event: any): void {
        this.eventsPanel.append(event.type + "<br />");
    };

    open(event: any): void {
        this.writeEventType(event);
    };

    close(event: any): void {
        this.writeEventType(event);
    };

    click(event: any): void {
        this.writeEventType(event);
        this.messagePanel.nativeElement.style.display = 'inline-block';
    };

    clickCheckMail(): void {
        this.jqxNotification.open();        
    };
}