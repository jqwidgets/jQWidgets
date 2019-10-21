import { Component, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myWindow', { static: false }) myWindow: jqxWindowComponent;

    btnOnClick(): void {
        this.myWindow.open();
    }
}