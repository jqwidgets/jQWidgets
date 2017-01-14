 
import { Component } from '@angular/core';

import { jqxNumberInputComponent } from '../../../../../jqwidgets-ts/angular_jqxnumberinput';

@Component({
    selector: 'my-app',
    template: `
        <fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em; border: 1px solid lightgrey;">
           Value is {{ value | json }}
        </fieldset>

        <div style='margin-top: 10px;'>Currency</div>
        <jqxNumberInput [(ngModel)]='value'
            [width]='250' [height]='25' [symbol]='"$"' [spinButtons]='true'>
        </jqxNumberInput>`
})

export class AppComponent
{
    value: string = '$__,___,__0.00';
}