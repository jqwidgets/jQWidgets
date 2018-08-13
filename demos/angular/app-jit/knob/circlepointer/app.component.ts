import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    marks: any =
    {
        colorRemaining: { color: '#373636', border: '#373636' },
        colorProgress: { color: '#373636', border: '#373636' },
        type: 'line',
        offset: '71%',
        thickness: 1,
        size: '6%',
        majorSize: '9%',
        majorInterval: 10,
        minorInterval: 2
    };

    labels: any =
    {
        offset: '88%',
        step: 10,
        visible: true
    };

    progressBar: any =
    {
        size: '70%',
        offset: '0%',
        background: {
            stroke: '#373636', strokeWidth: 1, fill: { color: '#a7a7a7', gradientType: "linear", gradientStops: [[0, 1], [50, 0.5], [100, 1]] }
        }
    };

    pointer: any =
    {
        type: 'circle', style: { fill: { color: '#a4a3a3', gradientType: "linear", gradientStops: [[0, 0.5], [50, 0.6], [100, 1]] }, stroke: '#333' },
        size: '10%', offset: '50%'
    };
}