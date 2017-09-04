import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTabsComponent } from '../../../jqwidgets-ts/angular_jqxtabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('tabs1') tabs1: jqxTabsComponent;
    @ViewChild('tabs2') tabs2: jqxTabsComponent;
    @ViewChild('tabs3') tabs3: jqxTabsComponent;

    ngAfterViewInit() {
        this.tabs1.elementRef.nativeElement.firstChild.style.border = 'none';
        this.tabs2.elementRef.nativeElement.firstChild.style.border = 'none';
        this.tabs3.elementRef.nativeElement.firstChild.style.border = 'none';
    }
}