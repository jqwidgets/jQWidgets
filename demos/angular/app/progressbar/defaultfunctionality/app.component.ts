 
import { Component, ViewChild } from '@angular/core';

import { jqxProgressBarComponent } from '../../../../../jqwidgets-ts/angular_jqxprogressbar';
import { jqxButtonComponent }      from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxCheckBoxComponent }    from '../../../../../jqwidgets-ts/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    templateUrl: '../app/progressbar/defaultfunctionality/app.component.htm'
})

export class AppComponent
{
    @ViewChild('horizontal') myHorizontalProgressBar: jqxProgressBarComponent;
    @ViewChild('vertical') myVerticalProgressBar: jqxProgressBarComponent;

    valueInput: number;
    isUpdated: boolean = false;

    renderText(text: string): string
    {
        return "<span class='jqx-rc-all' style='background: #ffe8a6; color: #e53d37; font-style: italic;'>" + text + "</span>";
    }

    getValueInput(): number
    {
        return parseInt((<any>document.getElementById('ValueInput')).value);
    }

    onClick(): void
    {
        let value = this.getValueInput();
        if (!isNaN(value))
        {
            this.valueInput = value;
            this.myHorizontalProgressBar.val(value);
            this.myVerticalProgressBar.val(value);
            this.isUpdated = true;
        }
    }

    onCheckBox(event: any): void
    {
        let value = this.getValueInput();
        if (value != null && this.isUpdated)
        {
            this.myHorizontalProgressBar.value(this.valueInput);
            this.myVerticalProgressBar.value(this.valueInput);
        }

        let isChecked = event.args.checked;
        this.myHorizontalProgressBar.showText(isChecked);
        this.myVerticalProgressBar.showText(isChecked);
    }

    onCustomTextCheckBox(event: any): void
    {
        let value = this.getValueInput();
        if (value != null && this.isUpdated)
        {
            this.myHorizontalProgressBar.value(this.valueInput);
            this.myVerticalProgressBar.value(this.valueInput);
        }

        if (event.args.checked)
        {
            this.myHorizontalProgressBar.renderText(this.renderText);
            this.myVerticalProgressBar.renderText(this.renderText);
        }
        else
        {
            this.myHorizontalProgressBar.renderText(null);
            this.myVerticalProgressBar.renderText(null);
        }
    }
}
