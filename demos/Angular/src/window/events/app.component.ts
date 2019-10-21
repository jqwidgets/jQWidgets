import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('eventWindow', { static: false }) eventWindow: jqxWindowComponent;
    @ViewChild('events', { static: false }) events: jqxPanelComponent;

    ngAfterViewInit(): void {
        // Clear border of the jqxPanel
        this.events.elementRef.nativeElement.firstChild.style.border = 'none';
    }

    showWindowButtonClick(): void {
        this.eventWindow.open();
    }

    eventWindowClose(event: any): void {
        this.displayEvent(event);
    }

    eventWindowMoved(event: any): void {
        this.displayEvent(event);
    }

    eventWindowOpen(event: any): void {
        this.displayEvent(event);
    }

    capitaliseFirstLetter(string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    displayEvent(event: any): void {
        let eventData = 'Event: ' + this.capitaliseFirstLetter(event.type);
        if (event.type === 'moved') {
            eventData += ', X: ' + event.args.x + ', Y: ' + event.args.y;
        }

        if (event.type === 'close') {
            eventData += ', Dialog result: ';
            if (event.args.dialogResult.OK) {
                eventData += 'OK';
            } else if (event.args.dialogResult.Cancel) {
                eventData += 'Cancel';
            } else {
                eventData += 'None';
            }
        }

        this.events.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    }
}