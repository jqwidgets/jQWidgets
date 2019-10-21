import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxProgressBarComponent } from 'jqwidgets-ng/jqxprogressbar';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('horizontal', { static: false }) myHorizontalProgressBar: jqxProgressBarComponent;
    @ViewChild('vertical', { static: false }) myVerticalProgressBar: jqxProgressBarComponent;
    @ViewChild('ValueInput', { static: false }) ValueInputElement: jqxInputComponent;

    valueInput: number;
    isUpdated = false;

    renderText(text?: string, value?: number): string {
        return "<span class='jqx-rc-all' style='background: #ffe8a6; color: #e53d37; font-style: italic;'>" + text + "</span>";
    }

    getValueInput(): number {
        return parseInt(this.ValueInputElement.val());
    }

    onClick(): void {
        let value = this.getValueInput();
        if (!isNaN(value)) {
            this.valueInput = value;
            this.myHorizontalProgressBar.val(value);
            this.myVerticalProgressBar.val(value);
            this.isUpdated = true;
        }
    }

    onCheckBox(event: any): void {
        let value = this.getValueInput();
        if (value != null && this.isUpdated) {
            this.myHorizontalProgressBar.value(this.valueInput);
            this.myVerticalProgressBar.value(this.valueInput);
        }

        let isChecked = event.args.checked;
        this.myHorizontalProgressBar.showText(isChecked);
        this.myVerticalProgressBar.showText(isChecked);
    }

    onCustomTextCheckBox(event: any): void {
        const value = this.getValueInput();
        if (value != null && this.isUpdated) {
            this.myHorizontalProgressBar.value(this.valueInput);
            this.myVerticalProgressBar.value(this.valueInput);
        }

        if (event.args.checked) {
            this.myHorizontalProgressBar.renderText(this.renderText);
            this.myVerticalProgressBar.renderText(this.renderText);
        } else {
            this.myHorizontalProgressBar.renderText(null);
            this.myVerticalProgressBar.renderText(null);
        }
    }
}