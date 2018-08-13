import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    marks: any =
    {
        colorRemaining: '#333',
        colorProgress: '#17a25d',
        offset: '75%',
        thickness: 2,
        size: '1%',
        majorSize: '1%',
        majorInterval: 10,
        minorInterval: 5
    };

    labels: any =
    {
        offset: '88%',
        step: 20,
        visible: true,
        formatFunction: (label: number): string | number => {
            if (label == 0)
                return 'Off';
            if (label == -100)
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
        type: 'arrow', thickness: 25,
        style: { fill: '#ff6126', stroke: '#333' },
        size: '60%', offset: '50%'
    };

    spinner: any = {
        style: { fill: '#17a25d', stroke: '#17a25d' },
        innerRadius: '65%', // specifies the inner Radius of the dial
        outerRadius: '70%', // specifies the outer Radius of the dial
        marks: {
            colorRemaining: '#fff',
            colorProgress: '#fff',
            offset: '68%',
            thickness: 4,
            type: 'circle',
            size: '5%',
            majorSize: '5%',
            majorInterval: 20,
            minorInterval: 20
        }
    };


    dial: any = {
        style: { fill: '#17a25d', stroke: '#17a25d' },
        innerRadius: '0%', // specifies the inner Radius of the dial
        outerRadius: '50%' // specifies the outer Radius of the dial
    };
}