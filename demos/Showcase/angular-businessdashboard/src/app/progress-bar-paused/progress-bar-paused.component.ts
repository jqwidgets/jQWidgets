import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { jqxProgressBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxprogressbar';

@Component({
    selector: 'app-progress-bar-paused',
    templateUrl: './progress-bar-paused.component.html',
    styleUrls: ['./progress-bar-paused.component.css']
})
export class ProgressBarPausedComponent implements OnInit {

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
                stop: 40,
                color: '#C8C8C8'
            },
            {
                stop: 100,
                color: '#f1f2f3'
            }
        ]
}
