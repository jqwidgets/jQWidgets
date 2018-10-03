import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { jqxLinearGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlineargauge';
import { jqxKnobComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxknob';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    @ViewChild('gauge1') gaugeOne: jqxLinearGaugeComponent;
    @ViewChild('gauge2') gaugeTwo: jqxLinearGaugeComponent;
    @ViewChild('gauge3') gaugeThree: jqxLinearGaugeComponent;
    @ViewChild('gauge1Text') gaugeOneText: ElementRef;
    @ViewChild('gauge2Text') gaugeTwoText: ElementRef;
    @ViewChild('gauge3Text') gaugeThreeText: ElementRef;
    @ViewChild('knob') knob: jqxKnobComponent;

    selectedThermometer: number = 1;

    constructor() { }

    ngOnInit() {
    }

    private knobStyle: jqwidgets.KnobStyle = {
        stroke: '#dfe3e9',
        strokeWidth: 3,
        fill: {
            color: '#fefefe',
            gradientType: "linear",
            gradientStops: [[0, 1], [50, 0.9], [100, 1]]
        }
    };

    private knobMarks: jqwidgets.KnobMarks = {
        colorRemaining: { color: 'grey', border: 'grey' },
        colorProgress: { color: '#00a4e1', border: '#00a4e1' },
        type: 'line',
        offset: '71%',
        thickness: 3,
        size: '6%',
        majorSize: '9%',
        majorInterval: 10,
        minorInterval: 2
    };

    private knobLabels: jqwidgets.KnobLabels = {
        offset: '88%',
        step: 10,
        visible: true
    };

    private knobProgressBar: jqwidgets.KnobProgressBar = {
        style: { fill: '#00a4e1', stroke: 'grey' },
        size: '9%',
        offset: '60%',
        background: { fill: 'grey', stroke: 'grey' }
    };

    private knobPointer: jqwidgets.KnobPointer = {
        type: 'arrow',
        style: {
            fill: '#00a4e1',
            stroke: 'grey'
        },
        size: '59%',
        offset: '49%',
        thickness: 20
    };

    private gaugeMajorTicks: jqwidgets.LinearGaugeTicks = {
        size: '10%',
        interval: 5
    };

    private gaugeMinorTicks: jqwidgets.LinearGaugeTicks = {
        size: '5%',
        interval: 1,
        style: {
            'stroke-width': 1,
            stroke: '#aaaaaa'
        }
    };

    private gaugeLabels: jqwidgets.LinearGaugeLabels = {
        interval: 20
    };

    private gaugePointer: jqwidgets.LinearGaugePointer = {
        size: '6%'
    };

    private gaugeOneRanges: jqwidgets.LinearGaugeRanges[] = [
        {
            startValue: 18,
            endValue: 22,
            style: {
                fill: '#FFA200',
                stroke: '#FFA200',
                opacity: 0.5,
                'stroke-width': 8
            }
        },
        {
            startValue: 19.5,
            endValue: 20,
            style: {
                fill: '#0000FF',
                stroke: '#0000FF',
                opacity: 0.5,
                'stroke-width': 8
            }
        }
    ];

    private gaugeTwoRanges: jqwidgets.LinearGaugeRanges[] = [
        {
            startValue: 16,
            endValue: 20,
            style: {
                fill: '#FFA200',
                stroke: '#FFA200',
                opacity: 0.5,
                'stroke-width': 8
            }
        },
        {
            startValue: 17.5,
            endValue: 18,
            style: {
                fill: '#0000FF',
                stroke: '#0000FF',
                opacity: 0.5,
                'stroke-width': 8
            }
        }
    ]

    private gaugeThreeRanges: jqwidgets.LinearGaugeRanges[] = [
        {
            startValue: 80,
            endValue: 86,
            style: {
                fill: '#FFA200',
                stroke: '#FFA200',
                opacity: 0.5,
                'stroke-width': 8
            }
        },
        {
            startValue: 82.5,
            endValue: 83,
            style: {
                fill: '#0000FF',
                stroke: '#0000FF',
                opacity: 0.5,
                'stroke-width': 8
            }
        }
    ];

    private listBoxSource: any[] = [
        'Repair of broken gym equipment',
        'Staff recruitment',
        'Instructors course',
        'Buy a new bench press'
    ];

    private listBoxRenderer = (index: number): string => {
        var datarecord = this.listBoxSource[index];
        return "<div style='padding:10px 10px 10px 20px;'>" + datarecord + "</div>";
    }

    private onRadioButtonChecked = (id: number): void => {
        this.selectedThermometer = id;
        let ranges;
        switch (id) {
            case 1: ranges = this.gaugeOne.ranges();
                break;
            case 2: ranges = this.gaugeTwo.ranges();
                break;
            case 3: ranges = this.gaugeThree.ranges();
                break;
        }
        this.knob.val(ranges[1].startValue);
    }

    private onKnobChange = (): void => {
        let gaugeValue;

        switch (this.selectedThermometer) {
            case 1: gaugeValue = this.gaugeOne.val();
                break;
            case 2: gaugeValue = this.gaugeTwo.val();
                break;
            case 3: gaugeValue = this.gaugeThree.val();
                break;
        }

        let colorScheme;
        let textCondition;
        let newValue = this.knob.value();

        if ((newValue - 1.5) > gaugeValue) {
            colorScheme = 'scheme03';
            textCondition = '<div style="text-align: center; color: red; font-size: 10px;">High temp.</div>';
        } else if ((newValue + 2.5) < gaugeValue) {           
            colorScheme = 'scheme01';
            textCondition = '<div style="text-align: center; color: blue; font-size:10px;">Low temp.</div>';
        } else {
            colorScheme = 'scheme02';
            textCondition = '<div style="text-align: center; color: green; font-size: 10px;">Temp. in range</div>';
        }

        let options = {
            colorScheme: colorScheme,
            ranges: [
                { startValue: (newValue - 1.5), endValue: (newValue + 2.5), style: { fill: '#FFA200', stroke: '#FFA200', opacity: 0.5, 'stroke-width': 8 } },
                { startValue: newValue, endValue: (newValue + 0.5), style: { fill: '#0000FF', stroke: '#0000FF', opacity: 0.5, 'stroke-width': 8 } }
            ]
        }
        switch (this.selectedThermometer) {
            case 1: {
                this.gaugeOne.setOptions(options);
                this.gaugeOneText.nativeElement.innerHTML = textCondition;
            }
                break;
            case 2: {
                this.gaugeTwo.setOptions(options);
                this.gaugeTwoText.nativeElement.innerHTML = textCondition;
            }
                break;
            case 3: {
                this.gaugeThree.setOptions(options);
                this.gaugeThreeText.nativeElement.innerHTML = textCondition;
            }
                break;
        }
    }
}
