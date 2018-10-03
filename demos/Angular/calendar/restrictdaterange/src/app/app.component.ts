import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    min: Date = new Date(2010, 0, 1);
    max: Date = new Date(2020, 11, 31);
}
