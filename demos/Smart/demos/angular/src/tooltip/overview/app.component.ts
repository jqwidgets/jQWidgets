import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        document.getElementsByTagName('smart-radio-button')[0].addEventListener('change', function () {
            (<any>document.querySelector('smart-tooltip')).position = 'top';
        });

        document.getElementsByTagName('smart-radio-button')[1].addEventListener('change', function () {
            (<any>document.querySelector('smart-tooltip')).position = 'bottom';
        });

        document.getElementsByTagName('smart-radio-button')[2].addEventListener('change', function () {
            (<any>document.querySelector('smart-tooltip')).position = 'left';
        });
        document.getElementsByTagName('smart-radio-button')[3].addEventListener('change', function () {
            (<any>document.querySelector('smart-tooltip')).position = 'right';
        });
    }
}
