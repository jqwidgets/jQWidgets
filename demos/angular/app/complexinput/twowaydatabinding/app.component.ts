 
import { Component } from '@angular/core';

import { jqxComplexInputComponent } from '../../../../../jqwidgets-ts/angular_jqxcomplexinput';

@Component({
    selector: 'my-app',
    template:
        `<fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em; border: 1px solid lightgrey;">
            The value is {{ value | json }}
        </fieldset>

        <jqxComplexInput [(ngModel)]='value'
            [width]='250' [height]='25' [value]='"15 + 7.2i"'>
        </jqxComplexInput>`
}) 

export class AppComponent
{ 
    value: string = "15 + 7.2i"; 
}
