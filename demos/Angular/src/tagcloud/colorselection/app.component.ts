import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTagCloudComponent } from 'jqwidgets-ng/jqxtagcloud';
import { jqxDropDownButtonComponent } from 'jqwidgets-ng/jqxdropdownbutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myTagCloud', { static: false }) myTagCloud: jqxTagCloudComponent;
    @ViewChild('myDropDownButton1', { static: false }) myDropDownButton1: jqxDropDownButtonComponent;
    @ViewChild('myDropDownButton2', { static: false }) myDropDownButton2: jqxDropDownButtonComponent;

 	getWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return 600;
	}
	
    ngAfterViewInit(): void {
        this.myDropDownButton1.setContent(this.getTextElementByColor(new jqx.color({ hex: '00AA99' })));
        this.myDropDownButton2.setContent(this.getTextElementByColor(new jqx.color({ hex: 'FF0000' })));
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

    dataAdapter = new jqx.dataAdapter(this.source);

    getTextElementByColor(color: any): any {
        let colorContainer = document.createElement('div');
        colorContainer.setAttribute('style', 'text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;');
        if (color == 'transparent' || color.hex == '') {
            return colorContainer.innerText = 'transparent';
        }

        colorContainer.innerText = '#' + color.hex;
        let nThreshold = 105;
        let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';

        colorContainer.style.color = foreColor;
        colorContainer.style.backgroundColor = '#' + color.hex;
        colorContainer.className += ' jqx-rc-all';
        return colorContainer;
    };

    myColorPickerOnColorChange(event: any): void {
        this.myDropDownButton1.setContent(this.getTextElementByColor(event.args.color));
        this.myTagCloud.minColor('#' + event.args.color.hex);
    };

    myColorPicker2OnColorChange(event: any): void {
        this.myDropDownButton2.setContent(this.getTextElementByColor(event.args.color));
        this.myTagCloud.maxColor('#' + event.args.color.hex);
    };
}