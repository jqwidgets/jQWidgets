import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxRibbonComponent } from '../../../jqwidgets-ts/angular_jqxribbon';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('jqxRibbon') jqxRibbon: jqxRibbonComponent;
    
    checkedNear(event: any): void {
        this.jqxRibbon.scrollPosition('near');
    }

    checkedFar(event: any): void {
        this.jqxRibbon.scrollPosition('far');
    }

    checkedBoth(event: any): void {
        this.jqxRibbon.scrollPosition('both');
    }
}