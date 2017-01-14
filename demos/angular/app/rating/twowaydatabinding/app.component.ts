 
import { Component } from '@angular/core';

import { jqxRatingComponent } from '../../../../../jqwidgets-ts/angular_jqxrating';

@Component({
    selector: 'my-app',
    template:
        `<fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em; border: 1px solid lightgrey;">
            Value is {{ value | json }}
        </fieldset>

        <jqxRating [(ngModel)]='value'
            [width]='350' [height]='35' [value]='3'>
        </jqxRating>`
})

export class AppComponent
{
    value: number = 3;
}
