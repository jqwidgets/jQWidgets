import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    calendarButton: boolean = true;
    enableMouseWheelAction: boolean = true;
    dropDownPosition: string = 'center-bottom';
    spinButtons: boolean = true;
    spinButtonsPosition: string = 'left';
}
