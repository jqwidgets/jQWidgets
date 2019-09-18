import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    label: string = 'Phone number';
    hint: string = '';
    value: string = '';
    mask: string = '+1 (###) ### - ####';
}
