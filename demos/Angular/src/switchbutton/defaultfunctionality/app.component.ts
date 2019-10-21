import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('events', { static: false }) events: ElementRef;

    onChecked(buttonNumber: number): void {
        this.events.nativeElement.innerHTML = this.label[buttonNumber] + ': Unchecked';
    }

    onUnchecked(buttonNumber: number): void {
        this.events.nativeElement.innerHTML = this.label[buttonNumber] + ': Checked';
    }

    label: any =
    {
        '1': 'New Mail',
        '2': 'Sent Mail',
        '3': 'Calendar Alerts',
        '4': 'Lock Sounds',
        '5': 'Keyboard clicks'
    }
}
