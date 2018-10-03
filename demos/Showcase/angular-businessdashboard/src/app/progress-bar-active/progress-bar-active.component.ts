import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { jqxProgressBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxprogressbar';

@Component({
    selector: 'app-progress-bar-active',
    templateUrl: './progress-bar-active.component.html',
    styleUrls: ['./progress-bar-active.component.css']
})
export class ProgressBarActiveComponent implements OnInit {

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
                stop: 20,
                color: '#6BBD49'
            },
            {
                stop: 100,
                color: '#f1f2f3'
            }
        ]
}
