import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {    
    panels: any[] = [
        { size: '50%', min: '10%', collapsible: false },
        { size: '50%', min: '5%' }
    ];
}