import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    min: any = new Date(2010, 0, 1);

    max: any = new Date(2020, 0, 1);
}