import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxMenuComponent } from '../../../jqwidgets-ts/angular_jqxmenu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myMenu') myMenu: jqxMenuComponent

    ngAfterViewInit(): void {
        this.myMenu.setItemOpenDirection('Services', 'left', 'up');
        this.myMenu.setItemOpenDirection('ContactUs', 'left', 'down');
    }
}