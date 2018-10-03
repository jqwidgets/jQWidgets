import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { jqxProgressBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxprogressbar';

@Component({
    selector: 'app-progress-bar-ended',
    templateUrl: './progress-bar-ended.component.html',
    styleUrls: ['./progress-bar-ended.component.css']
})
export class ProgressBarEndedComponent implements OnInit {

    @Input() width: number;
    @ViewChild('progressBar') progressBar: jqxProgressBarComponent;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes) {
        if (!changes.width.firstChange) {
            this.progressBar.width(this.width);
        }
    }

    colorRanges: jqwidgets.ProgressBarColorRanges[] =
        [
            {
                stop: 60,
                color: '#667B82'
            },
            {
                stop: 100,
                color: '#f1f2f3'
            }
        ]
}
