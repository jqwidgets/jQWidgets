 
import { Component } from '@angular/core';

import { jqxBarGaugeComponent } from '../../../../../jqwidgets-ts/angular_jqxbargauge';

@Component({
    selector: 'my-app',
    template:
        `<jqxBarGauge
            [width]='600' [height]='600' [colorScheme]='"scheme02"' 
            [max]='150' [values]='values' [tooltip]='tooltip'>
         </jqxBarGauge>`
})

export class AppComponent
{
    tooltip: any =
    {
        visible: true,
        formatFunction: (value: string) => 
        {
            let realVal = parseInt(value);
            return ('Year: 2016<br/>Price Index:' + realVal);
        }
    }

    values: number[] = [102, 115, 130, 137];
}
