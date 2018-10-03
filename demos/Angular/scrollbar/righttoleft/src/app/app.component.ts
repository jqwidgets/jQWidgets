import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('HorizontalDiv') HorizontalDiv: ElementRef;

    valueChanged(event: any): void {
        this.HorizontalDiv.nativeElement.innerText = 'Horizontal (' + parseInt(event.currentValue) + ')';
    };
}