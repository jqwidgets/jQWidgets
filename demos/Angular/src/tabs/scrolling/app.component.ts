import { Component, ViewChild } from '@angular/core';

import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxTabs', { static: false }) jqxTabs: jqxTabsComponent;

    height: number = 25;
    width: number = 100;

    checkedRight(event: any): void {
        if (this.jqxTabs) {
            this.jqxTabs.scrollPosition('right');
        }
    };

    checkedBoth(event: any): void {
        if (this.jqxTabs) {
            this.jqxTabs.scrollPosition('both');  
        }
    };

    checkedLeft(event: any): void {
        if (this.jqxTabs) {
            this.jqxTabs.scrollPosition('left');
        }
    };
}