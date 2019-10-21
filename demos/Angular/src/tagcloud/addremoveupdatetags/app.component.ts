import { Component, ViewChild } from '@angular/core';

import { jqxTagCloudComponent } from 'jqwidgets-ng/jqxtagcloud';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent  {
    @ViewChild('tagCloud', { static: false }) tagCloud: jqxTagCloudComponent;
   
    getWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return 600;
	}
	
    source: any =
    {
        datatype: 'array',
        localdata: generatedata(50, false),
        datafields: [
            { name: 'productname' },
            { name: 'price' }
        ]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    addItemClick(): void {
        let row = generatedata(1, false)[0];
        this.tagCloud.insertAt(0, row);
    };

    deleteItemClick(): void {
        this.tagCloud.removeAt(0);
    };

    updateItemClick(): void {
        let row = generatedata(1, false)[0];
        this.tagCloud.updateAt(0, row);
    };
}