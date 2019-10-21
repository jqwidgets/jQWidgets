import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxProgressBarComponent } from 'jqwidgets-ng/jqxprogressbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myProgressBar', { static: false }) myProgressBar: jqxProgressBarComponent;
    @ViewChild('myVerticalProgressBar', { static: false }) myVerticalProgressBar: jqxProgressBarComponent;

    ngAfterViewInit(): void {
        let value = 0;
        let interval = setInterval(_ => {
            value++;

            if (value == 100) {
                clearInterval(interval);
            }

            this.myProgressBar.val(value);
            this.myVerticalProgressBar.val(value);
        }, 20);
    }

    horizontalColorRanges = [{ stop: 20, color: '#33b5e5' }, { stop: 50, color: '#98ca00' }, { stop: 80, color: '#ff4444' }, { stop: 100, color: '#aa66cc' }];

    verticalColorRanges = [{ stop: 40, color: '#f0ad4e' }, { stop: 59, color: '#5bc0de' }, { stop: 70, color: '#5cb85c' }, { stop: 100, color: '#d9534f' }];

    renderText = (text: string, value: number): string => {
        if (value < 60) {
            return '<span class="jqx-rc-all" style="color: #333;">' + text + '</span>';
        }
        return '<span class="jqx-rc-all" style="color: #fff;">' + text + '</span>';
    };


}