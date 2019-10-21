import { Component, ViewChild, ElementRef } from '@angular/core';   import { jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';  import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

import { generatedata } from './../../../sampledata/generatedata';

   @Component({     selector: 'app-root',     templateUrl: './app.component.html'
 })   export class AppComponent {     @ViewChild('myDataTable', { static: false }) myDataTable: jqxDataTableComponent;     @ViewChild('myInput', { static: false }) myInput: jqxInputComponent;     @ViewChild('selectedRows', { static: false }) selectedRows: ElementRef; 
    source: any =
    {
        localData: generatedata(15, false),
        datatype: "array",
        dataFields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ]
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);      columns: any[] =     [         { text: 'First Name', dataField: 'firstname', width: 200 },
        { text: 'Last Name', dataField: 'lastname', width: 200 },
        { text: 'Product', dataField: 'productname', width: 180 },
        { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
        { text: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right' }     ];      selectionInfo() {
        // gets selected row indexes. The method returns an Array of indexes.
        let selection = this.myDataTable.getSelection();
        let selectedRows = '<br/>Selected Row Indexes:<br/>';
        if (selection && selection.length > 0) {
            let rows = this.myDataTable.getRows();
            for (let i = 0; i < selection.length; i++) {
                let rowData = selection[i];
                selectedRows += rows.indexOf(rowData);
                if (i < selection.length - 1) {
                    selectedRows += ', ';
                }
                if (i > 1 && i % 8 === 0) {
                    selectedRows += '<br/>';
                }
            }
        }
        this.selectedRows.nativeElement.innerHTML = selectedRows;
    }      dropDownOnChange(event: any): void {
        switch (event.args.index) {
            case 0:
                // disable multiple rows selection with Shift or Ctrl.
                this.myDataTable.selectionMode('singleRow');
                break;
            case 1:
                // enable multiple rows selection with Shift or Ctrl.
                this.myDataTable.selectionMode('multipleRows');
                break;
        }
    };

    rowSelectBtnOnClick(): void {
        let index = parseInt(this.myInput.val());
        this.myDataTable.selectRow(index);
    };

    clearSelectionBtnOnClick(): void {
        this.myDataTable.clearSelection();
    };

    tableOnRowSelect(event: any): void {
        // event arguments
        let args = event.args;
        // row index
        let index = args.index;
        // row data
        let rowData = args.row;
        // row key
        let rowKey = args.key;
        this.selectionInfo();
    };

    tableOnRowUnselect(event: any): void {
        // event arguments
        let args = event.args;
        // row index
        let index = args.index;
        // row data
        let rowData = args.row;
        // row key
        let rowKey = args.key;
        this.selectionInfo();
    };
 }