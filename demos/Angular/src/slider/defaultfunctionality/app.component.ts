import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxSliderComponent } from 'jqwidgets-ng/jqxslider';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('redSlider', { static: false }) redSlider: jqxSliderComponent;
    @ViewChild('greenSlider', { static: false }) greenSlider: jqxSliderComponent;
    @ViewChild('blueSlider', { static: false }) blueSlider: jqxSliderComponent;

    ngAfterViewInit(): void {
        this.setColor();
    }

    redSliderOnChange(): void {
        this.setColor();
    };

    greenSliderOnChange(): void {
        this.setColor();
    };

    blueSliderOnChange(): void {
        this.setColor();
    };

    checkBoxOnChange(event: any): void {
        let checked = event.args.checked;
        let value = 'default';
        if (!checked) {
            value = 'fixed';
        }

        this.redSlider.mode(value);
        this.greenSlider.mode(value);
        this.blueSlider.mode(value);
    };

    setColor(): void {
        let red = this.fixHex(Math.round(this.redSlider.value()).toString(16)),
            green = this.fixHex(Math.round(this.greenSlider.value()).toString(16)),
            blue = this.fixHex(Math.round(this.blueSlider.value()).toString(16));
        document.getElementById('colorBlock').style.backgroundColor = '#' + red + green + blue;
        document.getElementById('colorLabel').innerHTML = ('#' + red + green + blue).toUpperCase();
        let color = this.getTextElement({ r: parseInt(red, 16), g: parseInt(green, 16), b: parseInt(blue, 16) });
        document.getElementById('colorLabel').style.color = color;
    };

    fixHex(hex: any): any {
        return (hex.length < 2) ? '0' + hex : hex;
    };

    getTextElement(color: any): any {
        let nThreshold = 105;
        let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
        return foreColor;
    };

    tickLabelFormatFunction: any = (value) => {
        if (value == 0) return value;
        if (value == 255) return value;
        return "";
    };

    tooltipFormatFunction: any = (value) => {
        if (this.redSlider.mode() === 'default') {
            if (value < 10) return new Number(value.toPrecision(3));
            if (value > 10 && value < 100) return new Number(value.toPrecision(4));
            else return new Number(value.toPrecision(5));
        }
        else {
            if (value < 10) return new Number(value.toPrecision(3));
            if (value > 10 && value < 256) return new Number(value.toPrecision(4));
        }
    };
}