import { Component, ViewChild } from '@angular/core';

import { jqxTagCloudComponent } from 'jqwidgets-ng/jqxtagcloud'; 
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTagCloud', { static: false }) myTagCloud: jqxTagCloudComponent;
    @ViewChild('myInput1', { static: false }) myInput1: jqxInputComponent;
    @ViewChild('myInput2', { static: false }) myInput2: jqxInputComponent;
    @ViewChild('myInput3', { static: false }) myInput3: jqxInputComponent;

 	getWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return 600;
	}
	
    unemploymentRate: any[] =
    [
        { 'country': 'Namibia', 'rate': 37.6 },
        { 'country': 'Macedonia, FYR', 'rate': 32.0 },
        { 'country': 'Latvia', 'rate': 18.7 },
        { 'country': 'Lithuania', 'rate': 17.8 },
        { 'country': 'Estonia', 'rate': 16.9 },
        { 'country': 'Serbia', 'rate': 16.6 },
        { 'country': 'Georgia', 'rate': 16.5 },
        { 'country': 'Yemen, Rep.', 'rate': 14.6 },
        { 'country': 'Slovak Republic', 'rate': 14.4 },
        { 'country': 'Dominican Republic', 'rate': 14.2 },
        { 'country': 'Tunisia', 'rate': 14.2 },
        { 'country': 'Armenia', 'rate': 28.6 },
        { 'country': 'Bosnia and Herzegovina', 'rate': 27.2 },
        { 'country': 'Lesotho', 'rate': 25.3 },
        { 'country': 'South Africa', 'rate': 24.7 },
        { 'country': 'Spain', 'rate': 20.1 },
        { 'country': 'Albania', 'rate': 13.8 },
        { 'country': 'Ireland', 'rate': 13.6 },
        { 'country': 'Jordan', 'rate': 12.9 },
        { 'country': 'Greece', 'rate': 12.5 }
    ];

    source: any =
    {
        datatype: 'array',
        localdata: this.unemploymentRate,
        datafields: [
            { name: 'country' },
            { name: 'rate' }
        ]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    setFontSizeBtnOnClick(): void {
        this.myTagCloud.setOptions({
            minFontSize: this.myInput1.val(),
            maxFontSize: this.myInput2.val(),
            fontSizeUnit: this.myInput3.val(),
        });
    }
}