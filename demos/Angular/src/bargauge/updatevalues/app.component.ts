import { Component, ViewChild } from '@angular/core';

import { jqxBarGaugeComponent } from 'jqwidgets-ng/jqxbargauge';
import { jqxSliderComponent } from 'jqwidgets-ng/jqxslider';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myBarGauge', { static: false })  myBarGauge: jqxBarGaugeComponent;
    @ViewChild('redSlider', { static: false })   redSlider: jqxSliderComponent;
    @ViewChild('greenSlider', { static: false }) greenSlider: jqxSliderComponent;
    @ViewChild('blueSlider', { static: false })  blueSlider: jqxSliderComponent;

    public customColorScheme: jqwidgets.BarGaugeCustomColorScheme = {
        name: 'rgb',
        colors: ['#307DD7', '#89A54E', '#AA4643']
    };

    public title: jqwidgets.BarGaugeTitle = {
        text: 'jqxBarGauge',
        font: {
            size: 40
        },
        verticalAlignment: 'top',
        margin: {
            bottom: 0,
            top: 0,
            left: 0,
            right: 0
        },
        subtitle: {
            text: '( visualization of "RGB" color proportions )',
            font: {
                size: 20
            }
        }
    };

    public setColor(): void {
        const red = this.redSlider.val();
        const green = this.greenSlider.val();
        const blue = this.blueSlider.val();
        this.myBarGauge.values(new Array(blue, green, red));
    }

}
