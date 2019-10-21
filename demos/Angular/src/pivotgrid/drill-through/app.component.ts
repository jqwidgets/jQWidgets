import { Component, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { jqxPivotGridComponent } from 'jqwidgets-ng/jqxpivotgrid';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   @ViewChild('pivotGrid1', { static: false }) pivotGrid1: jqxPivotGridComponent; 
   @ViewChild('drillThroughWindow', { static: false }) drillThroughWindow: jqxWindowComponent; 
   @ViewChild('tableSrcRecords', { static: false }) tableSrcRecords: jqxDataTableComponent; 
   
   constructor()
   {
      this.pivotDataSource = this.createPivotDataSource();
   }
   
  	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
 
   ngAfterViewInit(): void {
	   let pivotRow = this.pivotGrid1.getPivotRows().items[0];
	   let pivotColumn = this.pivotGrid1.getPivotColumns().items[0].valueItems[0];
	   
	   this.drillThrough(pivotRow, pivotColumn);
   }
   
   pivotDataSource: null;
   sampleData = null;
 
   tableSrcRecordsColumns: any[] = [
     { text: 'First name', dataField: 'firstname', width: 200 },
     { text: 'Last name', dataField: 'lastname', width: 200 },
     { text: 'Product', editable: false, dataField: 'productname', width: 180 },
     { text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right', align: 'right' },
     { text: 'Unit Price', dataField: 'price', width: 90, cellsAlign: 'right', align: 'right', cellsFormat: 'c2' },
     { text: 'Total', dataField: 'total', cellsAlign: 'right', align: 'right', cellsFormat: 'c2' }
   ];
 
   createPivotDataSource(): any {
      // prepare sample data
      let data = new Array();

      let firstNames =
      [
         "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
      ];

      let lastNames =
      [
         "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
      ];

      let productNames =
      [
         "Black Tea", "Green Tea", "Caffe Espresso"
      ];

      let priceValues =
      [
         "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
      ];

      for (let i = 0; i < 500; i++) {
         let row = {};
         let productindex = Math.floor(Math.random() * productNames.length);
         let price = parseFloat(priceValues[productindex]);
         let quantity = 1 + Math.round(Math.random() * 10);

         row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
         row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
         row["productname"] = productNames[productindex];
         row["price"] = price;
         row["quantity"] = quantity;
         row["total"] = price * quantity;

         data[i] = row;
      }
     
      this.sampleData = data;

      // create a data source and data adapter
      let source =
      {
        localdata: data,
        datatype: "array",
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

      let dataAdapter = new jqx.dataAdapter(source);
      dataAdapter.dataBind();
      
      // create a pivot data source from the dataAdapter
      let pivotDataSource = new jqx.pivot(
         dataAdapter,
         {
         pivotValuesOnRows: false,
         totals: {rows: {subtotals: true, grandtotals: true}, columns: {subtotals: false, grandtotals: true}},
         rows: [{ dataField: 'firstname' }, { dataField: 'lastname'}],
         columns: [{ dataField: 'productname' }],
         values: [
            { dataField: 'price', 'function': 'sum', text: 'sum', formatSettings: { prefix: '$', decimalPlaces: 2 } },
            { dataField: 'price', 'function': 'count', text: 'count' },
            { dataField: 'price', 'function': 'average', text: 'average', formatSettings: { prefix: '$', decimalPlaces: 2} }
         ]
         }
      );
      
      return pivotDataSource;      
   }
   
   drillThrough(pivotRow, pivotColumn): void
   {
      let pivotGridInstance = this.pivotGrid1.getInstance();      
      let rows = pivotGridInstance.getPivotCells().drillThroughCell(pivotRow, pivotColumn);
      
      let drillThroughRows = [];
      for (let i = 0; i < rows.length; i++)
         drillThroughRows[i] = this.sampleData[rows[i]]

      let drillThroughSrc =
      {
         localData: drillThroughRows,
         dataType: "array",
         dataFields:
         [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
         ]
      };
     
      let drillThroughDataAdapter = new jqx.dataAdapter(drillThroughSrc);
	  this.tableSrcRecords.source(drillThroughDataAdapter); 

      this.drillThroughWindow.open();
   }

   onPivotCellDblClick(event: any): void {
      var args = event.args;
      this.drillThrough(args.pivotRow, args.pivotColumn);      
   }
}