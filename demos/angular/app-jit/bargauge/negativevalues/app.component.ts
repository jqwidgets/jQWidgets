import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    values: number[] = [12, -35, -14.78, 29.5, 23.124, 41];

    labels: any = {
        formatFunction: (value: string) => {
            return value + ' m';
        },
        precision: 1,
        indent: 15
    }
}