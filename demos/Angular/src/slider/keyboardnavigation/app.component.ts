import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSliderComponent } from 'jqwidgets-ng/jqxslider';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxSlider', { static: false }) jqxSlider: jqxSliderComponent

    ngAfterViewInit() {
        this.jqxSlider.focus();
    }
}