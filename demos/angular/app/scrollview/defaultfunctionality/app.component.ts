import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxScrollViewComponent } from '../../../jqwidgets-ts/angular_jqxscrollview';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myScrollView') myScrollView: jqxScrollViewComponent;

    onStartClicked(): void {
        this.myScrollView.slideShow(true);
    };

    onStopClicked(): void {
        this.myScrollView.slideShow(false);
    };
}