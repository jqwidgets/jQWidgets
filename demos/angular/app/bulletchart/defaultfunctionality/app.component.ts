 
import { Component } from '@angular/core';

import { jqxBulletChartComponent } from 'jqwidgets-ts/angular_jqxbulletchart';

@Component({
    selector: 'my-app',
    template: 
        `<jqxBulletChart
            [width]='500' [height]='80' [barSize]='"40%"' [labelsFormat]='"c"'
            [showTooltip]='true' [title]='title' [description]='description' 
            [ranges]='ranges' [pointer]='pointer' [target]='target' [ticks]='ticks'>
         </jqxBulletChart>`
})

export class AppComponent
{
    title: string = "Revenue 2014 YTD";

    description: string = "(U.S. $ in thousands)";

    ranges: any[] = [
        { startValue: 0, endValue: 200, color: "#000000", opacity: 0.5 },
        { startValue: 200, endValue: 250, color: "#000000", opacity: 0.3 },
        { startValue: 250, endValue: 300, color: "#000000", opacity: 0.1 }
    ];

    pointer: any = { value: 270, label: "Revenue 2014 YTD", size: "25%", color: "Black" };

    target: any = { value: 260, label: "Revenue 2013 YTD", size: 4, color: "Black" };

    ticks: any = { position: "both", interval: 50, size: 10 };        
}
