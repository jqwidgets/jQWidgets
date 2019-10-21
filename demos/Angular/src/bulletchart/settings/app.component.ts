
import { Component, ViewChild } from '@angular/core';

import { jqxBulletChartComponent } from 'jqwidgets-ng/jqxbulletchart';
import { jqxCheckBoxComponent } from 'jqwidgets-ng/jqxcheckbox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxExpanderComponent } from 'jqwidgets-ng/jqxexpander';
import { jqxRadioButtonComponent } from 'jqwidgets-ng/jqxradiobutton';
import { jqxSliderComponent } from 'jqwidgets-ng/jqxslider';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myBulletChart', { static: false }) myBulletChart: jqxBulletChartComponent;
    @ViewChild('showLabelsCheckbox', { static: false }) showLabelsCheckbox: jqxCheckBoxComponent;
    @ViewChild('disabledCheckbox', { static: false }) disabledCheckbox: jqxCheckBoxComponent;
    @ViewChild('rtlCheckbox', { static: false }) rtlCheckbox: jqxCheckBoxComponent;
    @ViewChild('enableAnimationCheckbox', { static: false }) enableAnimationCheckbox: jqxCheckBoxComponent;
    @ViewChild('nearRadio', { static: false }) nearRadio: jqxRadioButtonComponent;
    @ViewChild('farRadio', { static: false }) farRadio: jqxRadioButtonComponent;
    @ViewChild('bothRadio', { static: false }) bothRadio: jqxRadioButtonComponent;
    @ViewChild('currencyRadio', { static: false }) currencyRadio: jqxRadioButtonComponent;
    @ViewChild('percentRadio', { static: false }) percentRadio: jqxRadioButtonComponent;
    @ViewChild('noneRadio', { static: false }) noneRadio: jqxRadioButtonComponent;
    @ViewChild('valueSlider', { static: false }) valueSlider: jqxSliderComponent;
    @ViewChild('pointerDropDownList', { static: false }) pointerDropDownList: jqxDropDownListComponent;
    @ViewChild('targetDropDownList', { static: false }) targetDropDownList: jqxDropDownListComponent;

    ranges: any[] =
    [
        { startValue: 0, endValue: 200, color: '#000000', opacity: 0.5 },
        { startValue: 200, endValue: 250, color: '#000000', opacity: 0.3 },
        { startValue: 250, endValue: 300, color: '#000000', opacity: 0.1 }
    ];

    pointer: any = { value: 270, label: 'Revenue 2019 YTD', size: '25%', color: '' };

    target: any = { value: 260, label: 'Revenue 2018 YTD', size: 4, color: '' };

    ticks: any = { position: 'both', interval: 50, size: 10 };

    colorChoices: string[] = ['Black', 'Red', 'Green', 'Blue', 'From theme'];

    showLabelsCheckboxChange(event: any): void {
        if (this.myBulletChart && this.nearRadio && this.farRadio && this.bothRadio) {
            if (event.args.checked) {
                this.nearRadio.enable();
                this.farRadio.enable();
                this.bothRadio.enable();

                if (this.nearRadio.checked() === true) {
                    this.myBulletChart.ticks({ position: 'near' });
                } else if (this.farRadio.checked() === true) {
                    this.myBulletChart.ticks({ position: 'far' });
                } else {
                    this.myBulletChart.ticks({ position: 'both' });
                }
            } else {
                this.myBulletChart.ticks({ position: 'none' });
                this.nearRadio.disable();
                this.farRadio.disable();
                this.bothRadio.disable();
            }
        }
    }

    nearRadioChecked(): void {
        if (this.myBulletChart) {
            this.myBulletChart.ticks({ position: 'near' });
        }
    }

    farRadioChecked(): void {
        if (this.myBulletChart) {
            this.myBulletChart.ticks({ position: 'far' });
        }
    }

    bothRadioChecked(): void {
        if (this.myBulletChart) {
            this.myBulletChart.ticks({ position: 'both' });
        }
    }

    currencyRadioChecked(): void {
        if (this.myBulletChart) {
            this.myBulletChart.labelsFormat('c');
        }
    }

    percentRadioChecked(): void {
        if (this.myBulletChart) {
            this.myBulletChart.labelsFormat('p');
        }
    }

    noneRadioChecked(): void {
        if (this.myBulletChart) {
            this.myBulletChart.labelsFormat(null);
        }
    }

    enableAnimationCheckboxChange(event: any): void {
        if (this.myBulletChart) {
            if (event.args.checked) {
                this.myBulletChart.animationDuration(400);
            } else {
                this.myBulletChart.animationDuration(0);
            }
        }
    }

    valueSliderChange(event: any): void {
        if (this.myBulletChart) {
            this.myBulletChart.val(event.args.value);
        }
    }

    pointerDropDownListChange(event: any): void {
        if (this.myBulletChart) {
            const choice = event.args.item.label;
            let newColor = '';

            if (choice !== 'From theme') {
                newColor = choice;
            }

            this.myBulletChart.pointer({ color: newColor });
        }
    }

    targetDropDownListChange(event: any): void {
        if (this.myBulletChart) {
            const choice = event.args.item.label;
            let newColor = '';

            if (choice !== 'From theme') {
                newColor = choice;
            }

            this.myBulletChart.target({ color: newColor });
        }
    }

    disabledCheckboxChange(event: any): void {
        if (this.myBulletChart) {
            if (event.args.checked) {
                this.myBulletChart.disabled(true);
            } else {
                this.myBulletChart.disabled(false);
            }
        }
    }

    rtlCheckboxChange(event: any): void {
        if (this.myBulletChart) {
            if (event.args.checked) {
                this.myBulletChart.rtl(true);
            } else {
                this.myBulletChart.rtl(false);
            }
        }
    }

}
