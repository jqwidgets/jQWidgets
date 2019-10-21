import { Component } from '@angular/core';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    data: any = generatedata(500, false);

    source: any =
    {
        localdata: this.data,
        datafields:
        [
            { name: 'name', type: 'string' },
            { name: 'productname', type: 'string' }
        ],
        datatype: 'array'
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    items: any[] = this.generateItems();

    generateItems(): any[] {
        let items = new Array();
        items.push(this.data[0].name);
        items.push(this.data[1].name);
        items.push(this.data[2].name);
        items.push(this.data[3].name);
        items.push(this.data[4].name);

        return items;
    }

    columns: any[] =
    [
        { text: 'Name', filtertype: 'list', filteritems: this.items, datafield: 'name', width: 200 },
        { text: 'Product', filtertype: 'checkedlist', filteritems: ['Black Tea', 'Green Tea', 'Caffe Latte'], datafield: 'productname' }
    ];
}