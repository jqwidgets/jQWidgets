 
import { Component } from '@angular/core';

import { jqxPasswordInputComponent } from '../../../../../jqwidgets-ts/angular_jqxpasswordinput';

@Component({
    selector: 'my-app',
    template: `
        <fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em; border: 1px solid lightgrey;">
           Password is {{ password | json }}
        </fieldset>

        <jqxPasswordInput [(ngModel)]='password'  #asd
            [width]='200' [height]='21'
            [showStrength]='true' [showStrengthPosition]='"right"'>
        </jqxPasswordInput>`
})

export class AppComponent
{
    password: string = '';
}
