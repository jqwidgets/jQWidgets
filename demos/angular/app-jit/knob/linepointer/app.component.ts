import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    style: any =
    {
        stroke: '#dfe3e9', strokeWidth: 3, fill: { color: '#fefefe', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.9], [100, 1]] }
    };

    marks: any =
    {
        colorRemaining: '#333',
        colorProgress: '#2db2e4',
        type: 'circle',
        offset: '75%',
        thickness: 2,
        size: '2%',
        majorSize: '2%',
        majorInterval: 10,
        minorInterval: 2
    };

    labels: any =
    {
        offset: '88%',
        step: 5,
        visible: true,
        formatFunction: (label) => {
            if (label == 0)
                return 'Min';
            if (label == 100)
                return 'Max';
            return label;
        }
    };

    progressBar: any =
    {
        size: '70%',
        offset: '0%'
    };

    pointer: any =
    {
        type: 'line', thickness: 4, style: { fill: '#00a4e1', stroke: '#00a4e1' },
        size: '70%', offset: '0%'
    };
}