import { Component, ViewChild, ElementRef } from '@angular/core';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('cellBeginEditLog', { static: false }) cellBeginEditLog: ElementRef;
    @ViewChild('cellEndEditLog', { static: false }) cellEndEditLog: ElementRef;

    source: any =
    {
        localdata: generatedata(200, false),
        datatype: 'array',
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'date', type: 'date' }
        ]
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 80 },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 80 },
        { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
        {
            text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd',
            validation: (cell: any, value: any): any => {
                if (value == '')
                    return true;
                let year = value.getFullYear();
                if (year >= 2017) {
                    return { result: false, message: 'Ship Date should be before 1/1/2017' };
                }
                return true;
            }
        },
        {
            text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'numberinput',
            validation: (cell: any, value: number): any => {
                if (value < 0 || value > 150) {
                    return { result: false, message: 'Quantity should be in the 0-150 interval' };
                }
                return true;
            },
            createeditor: (row: number, cellvalue: any, editor: any): void => {
                editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
            }
        },
        {
            text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
            validation: (cell: any, value: number): any => {
                if (value < 0 || value > 15) {
                    return { result: false, message: 'Price should be in the 0-15 interval' };
                }
                return true;
            },
            createeditor: (row: number, cellvalue: any, editor: any): void => {
                editor.jqxNumberInput({ digits: 3 });
            }
        }
    ];

    rowValues: string = '';

    myGridOnCellBeginEdit(event: any): void {
        let args = event.args;
        if (args.datafield === 'firstname') {
            this.rowValues = '';
        }
        this.rowValues += args.value.toString() + '    ';
        if (args.datafield === 'price') {
            this.cellBeginEditLog.nativeElement.innerHTML = 'Begin Row Edit: ' + (1 + args.rowindex) + ', Data: ' + this.rowValues;
        }
    };

    myGridOnCellEndEdit(event: any): void {
        let args = event.args;
        if (args.datafield === 'firstname') {
            this.rowValues = '';
        }
        this.rowValues += args.value.toString() + '    ';
        if (args.datafield === 'price') {
            this.cellEndEditLog.nativeElement.innerHTML = 'End Row Edit: ' + (1 + args.rowindex) + ', Data: ' + this.rowValues;
        }
    };
}