import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxTabsComponent }  from '../../../jqwidgets-ts/angular_jqxtabs';
import { jqxPanelComponent } from '../../../jqwidgets-ts/angular_jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myTabs') myTabs: jqxTabsComponent;
    @ViewChild('myPanel') myPanel: jqxPanelComponent;

    capitaliseFirstLetter(string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    displayEvent(event: any): void {
        let eventData = this.capitaliseFirstLetter(event.type);
        if (event.type !== 'removed') {
            if (event.args !== undefined) {
                eventData += ': ' + this.myTabs.getTitleAt(event.args.item);
                if (this.myTabs.getTitleAt(event.args.item) == null) {
                    let v = 23;
                }
            }
            if (event.type === 'dragEnd') {
                eventData += ', Drop index: ' + this.myTabs.getTitleAt(event.args.dropIndex);
            }
        } else {
            eventData += ': ' + event.args.title;
        }

        this.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    }

    // Create event
    myTabsOnCreated(event: any): void {
        setTimeout(_ => this.displayEvent(event));        
    };

    // Selected event
    myTabsOnSelected(event: any): void {
        this.displayEvent(event);
    };

    // Selected event
    myTabsOnTabClick(event: any): void {
        this.displayEvent(event);
    };

    // Unselected event
    myTabsOnUnselected(event: any): void {
        this.displayEvent(event);
    };

    // DragStart event
    myTabsOnDragStart(event: any): void {
        this.displayEvent(event);
    };

    // DragEnd event
    myTabsOnDragEnd(event: any): void {
        this.displayEvent(event);
    };
}