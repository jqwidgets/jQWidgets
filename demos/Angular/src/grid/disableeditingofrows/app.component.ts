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
        ],
        updaterow: (rowid: any, rowdata: any, commit: any): void => {
            // synchronize with the server - send update command   
            commit(true);
        }
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    cellbeginedit = (row: number, datafield: string, columntype: any, value: any): void | boolean => {
        if (row == 0 || row == 2 || row == 5) return false;
    }

    cellsrenderer = (row: number, column: any, value: any, defaultHtml: string): string => {
        if (row == 0 || row == 2 || row == 5) {
            let element = defaultHtml.substring(0, 61) + "; color: #999" + defaultHtml.substring(61);
            return element;
        }
        return defaultHtml;
    }

    columns: any[] =
    [
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 80, cellbeginedit: this.cellbeginedit, cellsrenderer: this.cellsrenderer },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 80, cellbeginedit: this.cellbeginedit, cellsrenderer: this.cellsrenderer },
        { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 190, cellbeginedit: this.cellbeginedit, cellsrenderer: this.cellsrenderer },
        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellbeginedit: this.cellbeginedit },
        {
            text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, cellsalign: 'right', cellsformat: 'd', cellbeginedit: this.cellbeginedit,
            validation: (cell: any, value: any): any => {
                let year = value.getFullYear();
                if (year >= 2015) {
                    return { result: false, message: 'Ship Date should be before 1/1/2015' };
                }
                return true;
            }, cellsrenderer: this.cellsrenderer
        },
        {
            text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right', columntype: 'numberinput',
            validation: (cell: any, value: number): any => {
                if (value < 0 || value > 150) {
                    return { result: false, message: 'Quantity should be in the 0-150 interval' };
                }
                return true;
            },
            initeditor: (row: number, cellvalue: any, editor: any): void => {
                editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
            }, cellbeginedit: this.cellbeginedit, cellsrenderer: this.cellsrenderer
        },
        {
            text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
            validation: (cell: any, value: number): any => {
                if (value < 0 || value > 15) {
                    return { result: false, message: 'Price should be in the 0-15 interval' };
                }
                return true;
            },
            initeditor: (row: number, cellvalue: any, editor: any): void => {
                editor.jqxNumberInput({ digits: 3 });
            }, cellbeginedit: this.cellbeginedit, cellsrenderer: this.cellsrenderer
        }
    ];

    myGridOnCellBeginEdit(event: any): void {
        let args = event.args;
        this.cellBeginEditLog.nativeElement.innerHTML = 'Event Type: cellbeginedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
    };

    myGridOnCellEndEdit(event: any): void {
        let args = event.args;
        this.cellEndEditLog.nativeElement.innerHTML = 'Event Type: cellendedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
    };
}