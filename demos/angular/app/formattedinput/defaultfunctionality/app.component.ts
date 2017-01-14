 
import { Component } from '@angular/core';

import { jqxFormattedInputComponent } from '../../../../../jqwidgets-ts/angular_jqxformattedinput';

@Component({
    selector: 'my-app',
    template: 
        `<jqxFormattedInput
            [width]='250' [height]='25' [radix]='"decimal"'
            [value]='15' [spinButtons]='true' [dropDown]='true'>
        </jqxFormattedInput>`
})

export class AppComponent
{

}
