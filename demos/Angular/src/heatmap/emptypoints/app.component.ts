import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    xAxis: object = {
        labels: ['John', 'Marry', 'Alba', 'Steven', 'Josh', 'Alica', 'Robert', 'Kim', 'Ann', 'Paul', 'Regina', 'Dorothy']
    };
    yAxis: object = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    };
    data: number[][] = [
        [89, 39, 94, 55, 0],
        [null, 38, 26, 68, 33],
        [22, null, 66, 90, 78],
        [97, 68, 68, 3, 99],
        [47, 47, 88, 6, 1],
        [73, 23, 3, 79, 100],
        [21, 86, 13, 33, null],
        [53, 81, 95, 79, 66],
        [74, 68, 88, null, 43],
        [10, 12, 78, 14, 21],
        [null, 58, 12, 82, 99],
        [88, 23, 86, 59, 53],
    ];
    paletteSettings: object = {
        palette: [
            { value: 0, color: '#5dc3f0', label: '0&euro;' },
            { value: 50, color: '#4bb1de', label: '50&euro;' },
            { value: 100, color: '#3885a6', label: '100&euro;' }
        ],
        emptyPointColor: '#aaa'
    };
}
