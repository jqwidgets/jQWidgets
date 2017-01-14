 
import { Component } from '@angular/core';

import { jqxSwitchButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxswitchbutton';


@Component({
    selector: 'my-app',
    template:
        `<fieldset style="width: 220px; margin-top:1em; margin-bottom: 1em; border: 1px solid lightgrey;">
            Value is "{{ value | json }}"
        </fieldset>

        <jqxSwitchButton [(ngModel)]='value'
            [width]='81' [height]='27'>
        </jqxSwitchButton>`

})

export class AppComponent
{
    value: boolean = false;
}
