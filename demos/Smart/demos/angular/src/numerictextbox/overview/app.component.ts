import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    inputFormat: string = 'floatingPoint';
    value: any = 100;
    spinButtons: boolean = true;
    spinButtonsPosition: string = 'right';
    spinButtonsStep: any = 1;
    enableMouseWheelAction: boolean = true;
}
