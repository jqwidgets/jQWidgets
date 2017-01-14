 
import { Component } from '@angular/core';

import { jqxRadioButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxradiobutton';

@Component({
    selector: 'my-app',
    template:
       `<fieldset style="width: 230px; margin-top:1em; margin-bottom: 1em; border: 1px solid lightgrey;">
            Sex is {{ value | json }} 
        </fieldset>

        <jqxRadioButton value='Man'
             [width]='250' [height]='25'
             [checked]='true' [(ngModel)]='value'>
             <span>Sex: Man</span>
        </jqxRadioButton>

        <jqxRadioButton value='Female' 
             [width]='250' [height]='25'
             [checked]='false' [(ngModel)]='value' >
            <span>Sex: Female</span>
        </jqxRadioButton>`
})

export class AppComponent
{
    value: boolean;
}
