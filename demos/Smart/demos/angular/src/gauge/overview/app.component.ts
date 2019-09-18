import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    analogDisplayType: string = "needle";
    digitalDisplay: boolean = true;
    startAngle: number = -30;
    endAngle: number = 210;
    min: number = 0;
    max: number = 100;
    value: number = 0;
}
