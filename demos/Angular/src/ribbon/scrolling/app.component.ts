import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxRibbonComponent } from 'jqwidgets-ng/jqxribbon';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('jqxRibbon', { static: false }) jqxRibbon: jqxRibbonComponent;

    checkedNear(event: any): void {
        if (this.jqxRibbon) {
            this.jqxRibbon.scrollPosition('near');
        }
    }

    checkedFar(event: any): void {
        if (this.jqxRibbon) {
            this.jqxRibbon.scrollPosition('far');
        }
    }

    checkedBoth(event: any): void {
        if (this.jqxRibbon) {
            this.jqxRibbon.scrollPosition('both');
        }
    }
}