 
import { Component } from '@angular/core';

import { jqxCheckBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    template: 
        `<fieldset style="width: 250px; margin-top:1em; margin-bottom: 1em; border: 1px solid lightgrey;">
            Checkbox is in "{{ state | json }}" state
        </fieldset>
        <jqxCheckBox [(ngModel)]='state'
            [width]='120' [height]='25' [checked]='true' [hasThreeStates]='true'>
            <span>CheckBox</span>
        </jqxCheckBox>`
})

export class AppComponent
{ 
    state: string;
}
