import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        const smartWindow = <any>document.querySelector('smart-window');

        document.getElementById('openButton').addEventListener('click', function () {
            smartWindow.opened ? smartWindow.close() : smartWindow.open();
        })
    }
}
