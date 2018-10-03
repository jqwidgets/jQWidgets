import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: 'array',
        localdata: {},
        totalrecords: 1000000
    }

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    rendergridrows = (params: any): any[] => {
        let data = this.generateData(params.startindex, params.endindex);
        return data;
    }

    totalcolumnrenderer = (row: number, column: any, cellvalue: any): string => {
        let newCellValue = jqx.dataFormat.formatnumber(cellvalue, 'c2');
        return '<span style="margin: 6px 3px; font-size: 12px; float: right; font-weight: bold;">' + newCellValue + '</span>';
    }

    columns: any[] =
    [
        { text: 'Id', datafield: 'id', width: 50 },
        { text: 'First Name', datafield: 'firstname', width: 120 },
        { text: 'Last Name', datafield: 'lastname', width: 120 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 100, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', width: 100, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', cellsrenderer: this.totalcolumnrenderer, cellsalign: 'right' }
    ];

    firstNames: string[] =
      [
          'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
      ];

    lastNames: string[] =
      [
          'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
      ];

    productNames: string[] =
      [
          'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
      ];

      priceValues: string[] =
      [
          '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
      ];

    generateData(startindex: number, endindex: number): any {
        let data = {};
        for (let i = startindex; i < endindex; i++) {
            let row = {};
            let productindex = Math.floor(Math.random() * this.productNames.length);
            let price = parseFloat(this.priceValues[productindex]);
            let quantity = 1 + Math.round(Math.random() * 10);
            row['id'] = i;
            row['firstname'] = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
            row['lastname'] = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
            row['productname'] = this.productNames[productindex];
            row['price'] = price;
            row['quantity'] = quantity;
            row['total'] = price * quantity;
            data[i] = row;
        }
        return data;
    }
}