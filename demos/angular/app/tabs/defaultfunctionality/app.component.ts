import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxTabsComponent } from '../../../jqwidgets-ts/angular_jqxtabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('tabsReference') myTabs: jqxTabsComponent;

    onChangeAnimation(event: any): void {
        let checked = event.args.checked;
        this.myTabs.selectionTracker(checked);
    }
    onChangeContentAnimation(event: any): void {
        let checked = event.args.checked;
        if (checked) {
            this.myTabs.animationType('fade');
        }
        else {
            this.myTabs.animationType('none');
        }
    }
}