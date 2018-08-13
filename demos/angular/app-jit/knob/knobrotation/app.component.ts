import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    marks: any =
    {
        colorRemaining: '#fff',
        colorProgress: '#fff',
        type: 'line',
        offset: '75%',
        thickness: 2,
        size: '15%',
        majorSize: '15%',
        drawAboveProgressBar: true,
        majorInterval: 10,
        minorInterval: 2
    };

    labels: any =
    {
        offset: '50%',
        rotate: true,
        step: 10
    };

    progressBar: any =
    {
        size: '15%',
        offset: '75%',
        style: {
            stroke: '#a2da39', strokeWidth: 1, fill: '#a2da39'
        },
        background: {
            stroke: '#d1d2d4', strokeWidth: 1, fill: '#d1d2d4'
        }
    };

    pointer: any =
    {
        type: 'arrow', style: { fill: '#a2da39' },
        size: '55%', thickness: 5, offset: '0%'
    };

    dial: any = {
        innerRadius: '0%', // specifies the inner Radius of the dial
        outerRadius: '65%', // specifies the outer Radius of the dial
        style: {
            stroke: '#ff0000', strokeWidth: 1, fill: { color: '#66707e', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.4], [100, 1]] }
        }
    };

    spinner: any = {
        size: '70%',
        innerRadius: '60%', // specifies the inner Radius of the dial
        outerRadius: '65%', // specifies the outer Radius of the dial
        marks: {
            colorRemaining: '#d5d3d4',
            colorProgress: '#d5d3d4',
            type: 'line',
            offset: '60%',
            thickness: 1,
            size: '5%',
            majorSize: '5%',
            majorInterval: 10,
            minorInterval: 2
        },
        style: {
            stroke: '#d5d3d4', strokeWidth: 1, fill: { color: '#dfe3e9', gradientType: 'linear', gradientStops: [[0, 0.5], [50, 0.5], [100, 0.5]] }
        }
    };
}