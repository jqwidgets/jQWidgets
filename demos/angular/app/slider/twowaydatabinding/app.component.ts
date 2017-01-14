 
import { Component } from '@angular/core';

import { jqxSliderComponent } from '../../../../../jqwidgets-ts/angular_jqxslider';
import { jqxCheckBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    template: 
        `<fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em; border: 1px solid lightgrey;">
            Value is {{ value | json }}
        </fieldset>

        <jqxSlider [(ngModel)]='value'
            [height]='60' [min]='0' [max]='100'
            [value]='25' [mode]='"fixed"' [tooltip]='true'
            [showTickLabels]='true' [ticksFrequency]='25'>
        </jqxSlider>`
})

export class AppComponent
{
    value: number = 25;
}
