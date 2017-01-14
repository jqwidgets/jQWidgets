 
import { Component, ViewChild } from '@angular/core';

import { jqxScrollViewComponent } from '../../../../../jqwidgets-ts/angular_jqxscrollview';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    templateUrl: '../app/scrollview/defaultfunctionality/app.component.htm',
    styleUrls: ['../app/scrollview/defaultfunctionality/app.component.css']
})

export class AppComponent
{
    @ViewChild('scrollViewReference') scrollView: jqxScrollViewComponent;

    onStartClicked(): void 
    {
        this.scrollView.slideShow(true);
    }

    onStopClicked(): void 
    {
        this.scrollView.slideShow(false);
    }
}
