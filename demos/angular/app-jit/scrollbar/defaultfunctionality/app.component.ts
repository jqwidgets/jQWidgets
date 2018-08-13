import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('HorizontalDiv') HorizontalDiv: ElementRef;
    @ViewChild('VerticalDiv') VerticalDiv: ElementRef;

    onValueChangedVertical(event: any): void {
        this.VerticalDiv.nativeElement.innerHTML = 'Vertical (' + parseInt(event.currentValue) + ')';
    };

    onValueChangedHorizontal(event: any): void {
        this.HorizontalDiv.nativeElement.innerHTML = 'Horizontal (' + parseInt(event.currentValue) + ')';
    };
}