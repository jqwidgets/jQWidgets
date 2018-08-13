import { Component, ViewChild } from '@angular/core';

import { jqxWindowComponent } from '../../../jqwidgets-ts/angular_jqxwindow';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myWindow') myWindow: jqxWindowComponent;

    btnOnClick(): void {
        this.myWindow.open();
    }
}