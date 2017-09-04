
import { Component, ViewChild } from '@angular/core';

import { jqxBulletChartComponent } from '../../../jqwidgets-ts/angular_jqxbulletchart';
import { jqxCheckBoxComponent } from '../../../jqwidgets-ts/angular_jqxcheckbox';
import { jqxDropDownListComponent } from '../../../jqwidgets-ts/angular_jqxdropdownlist';
import { jqxExpanderComponent } from '../../../jqwidgets-ts/angular_jqxexpander';
import { jqxRadioButtonComponent } from '../../../jqwidgets-ts/angular_jqxradiobutton';
import { jqxSliderComponent } from '../../../jqwidgets-ts/angular_jqxslider';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myBulletChart') myBulletChart: jqxBulletChartComponent;
    @ViewChild('showLabelsCheckbox') showLabelsCheckbox: jqxCheckBoxComponent;
    @ViewChild('disabledCheckbox') disabledCheckbox: jqxCheckBoxComponent;
    @ViewChild('rtlCheckbox') rtlCheckbox: jqxCheckBoxComponent;
    @ViewChild('enableAnimationCheckbox') enableAnimationCheckbox: jqxCheckBoxComponent;
    @ViewChild('nearRadio') nearRadio: jqxRadioButtonComponent;
    @ViewChild('farRadio') farRadio: jqxRadioButtonComponent;
    @ViewChild('bothRadio') bothRadio: jqxRadioButtonComponent;
    @ViewChild('currencyRadio') currencyRadio: jqxRadioButtonComponent;
    @ViewChild('percentRadio') percentRadio: jqxRadioButtonComponent;
    @ViewChild('noneRadio') noneRadio: jqxRadioButtonComponent;
    @ViewChild('valueSlider') valueSlider: jqxSliderComponent;
    @ViewChild('pointerDropDownList') pointerDropDownList: jqxDropDownListComponent;
    @ViewChild('targetDropDownList') targetDropDownList: jqxDropDownListComponent;

    ranges: any[] =
    [
        { startValue: 0, endValue: 200, color: '#000000', opacity: 0.5 },
        { startValue: 200, endValue: 250, color: '#000000', opacity: 0.3 },
        { startValue: 250, endValue: 300, color: '#000000', opacity: 0.1 }
    ];

    pointer: any = { value: 270, label: 'Revenue 2014 YTD', size: '25%', color: '' };

    target: any = { value: 260, label: 'Revenue 2013 YTD', size: 4, color: '' };

    ticks: any = { position: 'both', interval: 50, size: 10 };

    colorChoices: string[] = ['Black', 'Red', 'Green', 'Blue', 'From theme'];

    showLabelsCheckboxChange(event: any): void {
        let checked = event.args.checked;
        if (checked) {
            this.nearRadio.enable();
            this.farRadio.enable();
            this.bothRadio.enable();

            if (this.nearRadio.checked() === true) {
                this.myBulletChart.ticks({ position: 'near' });
            }
            else if (this.farRadio.checked() === true) {
                this.myBulletChart.ticks({ position: 'far' });
            }
            else {
                this.myBulletChart.ticks({ position: 'both' });
            }
        }
        else {
            this.myBulletChart.ticks({ position: 'none' });
            this.nearRadio.disable();
            this.farRadio.disable();
            this.bothRadio.disable();
        }
    };

    nearRadioChecked(): void {
        this.myBulletChart.ticks({ position: 'near' });
    };

    farRadioChecked(): void {
        this.myBulletChart.ticks({ position: 'far' });
    };

    bothRadioChecked(): void {
        this.myBulletChart.ticks({ position: 'both' });
    };

    currencyRadioChecked(): void {
        this.myBulletChart.labelsFormat('c');
    };

    percentRadioChecked(): void {
        this.myBulletChart.labelsFormat('p');
    };

    noneRadioChecked(): void {
        this.myBulletChart.labelsFormat(null);
    };

    enableAnimationCheckboxChange(event: any): void {
        let checked = event.args.checked;
        if (checked) {
            this.myBulletChart.animationDuration(400);
        }
        else {
            this.myBulletChart.animationDuration(0);
        }
    };

    valueSliderChange(event: any): void {
        let value = event.args.value;
        this.myBulletChart.val(value);
    };

    pointerDropDownListChange(event: any): void {
        let choice = event.args.item.label;
        let newColor;
        if (choice != 'From theme') {
            newColor = choice;
        }
        else {
            newColor = '';
        }
        this.myBulletChart.pointer({ color: newColor });
    };

    targetDropDownListChange(event: any): void {
        let choice = event.args.item.label;
        let newColor;
        if (choice != 'From theme') {
            newColor = choice;
        }
        else {
            newColor = '';
        }
        this.myBulletChart.target({ color: newColor });
    };

    disabledCheckboxChange(event: any): void {
        let checked = event.args.checked;
        if (checked) {
            this.myBulletChart.disabled(true);
        }
        else {
            this.myBulletChart.disabled(false);
        }
    };

    rtlCheckboxChange(event: any): void {
        let checked = event.args.checked;
        if (checked) {
            this.myBulletChart.rtl(true);
        }
        else {
            this.myBulletChart.rtl(false);
        }
    };

}
