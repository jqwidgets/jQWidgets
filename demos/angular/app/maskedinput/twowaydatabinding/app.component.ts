 
import { Component } from '@angular/core';

import { jqxMaskedInputComponent } from '../../../../../jqwidgets-ts/angular_jqxmaskedinput';

@Component({
    selector: 'my-app',
    template: 
        `<fieldset style="width: 225px; margin-top:1em; margin-bottom: 1em; border: 1px solid lightgrey;">
            Phone Number is {{ number | json }}
         </fieldset>

        <div style='margin-top: 10px;'>Phone Number</div>

        <jqxMaskedInput #phoneInput [(ngModel)]='number'
            [width]='250' [height]='25' [mask]='"(###)###-####"'>
        </jqxMaskedInput>`
})

export class AppComponent
{
    number: string = '';
}