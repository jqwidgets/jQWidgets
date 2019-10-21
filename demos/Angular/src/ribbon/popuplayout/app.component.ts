import { Component, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';

import { jqxRibbonComponent } from 'jqwidgets-ng/jqxribbon';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxRibbon', { static: false }) jqxRibbon: jqxRibbonComponent;

    ngAfterViewInit() {
        this.jqxRibbon.setPopupLayout(0, "near", 130, 205);
        this.jqxRibbon.setPopupLayout(1, "center", 130, 200);
        this.jqxRibbon.setPopupLayout(2, "center", 130, 260);
        this.jqxRibbon.setPopupLayout(3, "far", 130, 350);
    }
}