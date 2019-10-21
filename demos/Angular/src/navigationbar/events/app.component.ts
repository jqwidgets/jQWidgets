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

    getName = (index) => {
        switch (index) {
            case 0:
                return 'Early History of the Internet';
            case 1:
                return 'Merging the networks and creating the Internet';
            case 2:
                return 'Popular Internet services';
        }
    };

    collapsedItem(event: any): void {
        let text = this.getName(event.item);
        this.Events.prepend('<div style="margin-top: 5px;">Collapsed: ' + text + '</div>');
    };

    expandedItem(event: any): void {
        let text = this.getName(event.item);
        this.Events.prepend('<div style="margin-top: 5px;">Expanded: ' + text + '</div>');
    };
}