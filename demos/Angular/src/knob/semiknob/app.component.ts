import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    marks: any =
    {
        colorRemaining: "#333",
        colorProgress: "#17a25d",
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
        formatFunction: (label: string | number): string | number => {
            if (label == 0)
                return "Off";
            if (label == -100)
                return "Min";
            if (label == 100)
                return "Max";
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
        type: 'line', thickness: 4, style: { fill: "#ff6126", stroke: "#333" },
        size: '70%', offset: '0%'
    };

    spinner: any =
    {
        style: { fill: '#17a25d', stroke: '#17a25d' },
        innerRadius: '35%', // specifies the inner Radius of the dial
        outerRadius: '70%' // specifies the outer Radius of the dial
    };
}