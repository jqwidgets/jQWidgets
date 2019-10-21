import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxProgressBarComponent } from 'jqwidgets-ng/jqxprogressbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxProgressBar2', { static: false }) jqxProgressBar2: jqxProgressBarComponent;
    @ViewChild('jqxProgressBar3', { static: false }) jqxProgressBar3: jqxProgressBarComponent;
    @ViewChild('jqxProgressBar4', { static: false }) jqxProgressBar4: jqxProgressBarComponent;
    @ViewChild('jqxProgressBar5', { static: false }) jqxProgressBar5: jqxProgressBarComponent;
    @ViewChild('jqxProgressBar6', { static: false }) jqxProgressBar6: jqxProgressBarComponent;

    ngAfterViewInit() {
        let values = {};
        let addInterval = (id, intervalStep) => {
            values[id] = { value: 0 };
            values[id].interval = setInterval(() => {
                values[id].value++;
                if (values[id].value == 100) {
                    clearInterval(values[id].interval);
                }

                this[id].val(values[id].value);
            }, intervalStep);
        };

        addInterval('jqxProgressBar2', 20);
        addInterval('jqxProgressBar3', 30);
        addInterval('jqxProgressBar4', 40);
        addInterval('jqxProgressBar5', 50);
        addInterval('jqxProgressBar6', 60);
    }

    renderText = (text, value) => {
        if (value < 55) {
            return '<span class="jqx-rc-all" style="color: #333;">' + text + '</span>';
        }
        return '<span class="jqx-rc-all" style="color: #fff;">' + text + '</span>';
    };
}