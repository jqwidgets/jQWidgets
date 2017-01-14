 
import { Component } from '@angular/core';

import { jqxTagCloudComponent } from '../../../../../jqwidgets-ts/angular_jqxtagcloud';

@Component({
    selector: 'my-app',
    template:
        `<jqxTagCloud
            [width]='600' [source]='dataAdapter'
            [displayMember]='"countryName"' [valueMember]='"technologyRating"'>
        </jqxTagCloud>`
})

export class AppComponent
{
    generateData(): any
    {
        let data: Array<any> = [];

        data.push
            (
                { countryName: "Australia", technologyRating: 35 },
                { countryName: "United States", technologyRating: 60 },
                { countryName: "Germany", technologyRating: 55 },
                { countryName: "Brasil", technologyRating: 20 },
                { countryName: "United Kingdom", technologyRating: 50 },
                { countryName: "Japan", technologyRating: 80 }
            );

        return data;
    }

    source: any =
    {
        localdata: this.generateData(),
        datatype: "array",
        datafields: [
            { name: 'countryName' },
            { name: 'technologyRating' }
        ]
    }

    dataAdapter: any = new $.jqx.dataAdapter(this.source, {});
}
