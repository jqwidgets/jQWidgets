 
import { Component } from '@angular/core';

import { jqxDropDownListComponent } from '../../../../../jqwidgets-ts/angular_jqxdropdownlist';

@Component({
    selector: 'my-app',
    template: `
        <fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em; border: 1px solid lightgrey;">
            The value is {{ value | json }}
        </fieldset>

        <jqxDropDownList [(ngModel)]='value'
            [width]='200' [height]='25' [source]='source' [selectedIndex]='1'>
        </jqxDropDownList>`
}) 

export class AppComponent  
{ 
    value: string = 'Americano';

    source: string[] =
    [
        "Affogato",
        "Americano",
        "Bicerin",
        "Breve",
        "Café Bombón",
        "Café au lait",
        "Caffé Corretto"
    ];  
}
