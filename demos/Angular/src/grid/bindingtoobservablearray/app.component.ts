import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('log', { static: false }) log: ElementRef;

    ngAfterViewInit(): void {
        this.updateLog(this.observableArray);
    }

    observableArray: any = new jqx.observableArray(generatedata(2, false), (changed: any): void => {
        this.updateLog(this.observableArray);
    });

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    source: any =
    {
        localdata: this.observableArray,
        datatype: 'obserableArray',
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'Name', datafield: 'firstname', width: 120 },
        { text: 'Last Name', datafield: 'lastname', width: 120 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
    ];

    updateLog(observableArray: any): void {
        let rows = '';
        for (let i = 0; i < observableArray.length; i++) {
            rows += observableArray.toJSON(['firstname', 'lastname', 'productname', 'quantity', 'price', 'total'], observableArray[i]);
            rows += '<br/>';
        }
        let container = document.getElementById('log');
        this.log.nativeElement.innerHTML = rows;
    }

    addItemBtnOnClick() {
        let row = generatedata(1, false)[0];
        let temp = this.observableArray;
        temp.push(row);
        this.observableArray = temp
    };

    deleteItemBtnOnClick() {
        if (this.observableArray.length > 0) {
            let temp = this.observableArray;
            temp.splice(0, 1);
            this. observableArray = temp
        }
    };

    updateItemBtnOnClick() {
        if (this.observableArray.length > 0) {
            let row = generatedata(1, false)[0];
            let temp = this.observableArray;
            temp.set(0, row);
            this.observableArray = temp
        }
    };

    updatePathBtnOnClick() {
        if (this.observableArray.length > 0) {
            let row = generatedata(1, false)[0];
            let temp = this.observableArray;
            temp.set('0.firstname', row.firstname);
            temp.set('0.lastname', row.lastname);
            this.observableArray = temp
        }
    };
}