import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('HorizontalDiv', { static: false }) HorizontalDiv: ElementRef;
    @ViewChild('VerticalDiv', { static: false }) VerticalDiv: ElementRef;

    onValueChangedVertical(event: any): void {
        this.VerticalDiv.nativeElement.innerHTML = 'Vertical (' + parseInt(event.currentValue) + ')';
    };

    onValueChangedHorizontal(event: any): void {
        this.HorizontalDiv.nativeElement.innerHTML = 'Horizontal (' + parseInt(event.currentValue) + ')';
    };
}