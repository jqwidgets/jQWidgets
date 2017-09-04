import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxGridComponent } from '../../../jqwidgets-ts/angular_jqxgrid'
import { jqxButtonComponent } from '../../../jqwidgets-ts/angular_jqxbuttons'
import { jqxInputComponent } from '../../../jqwidgets-ts/angular_jqxinput';

import { generatedata } from '../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('mySelectRowBtn') mySelectRowBtn: jqxButtonComponent;
    @ViewChild('myInput1') myInput1: jqxInputComponent;
    @ViewChild('myInput2') myInput2: jqxInputComponent;
    @ViewChild('selectedRowIndex') selectedRowIndex: ElementRef;
    @ViewChild('unselectedRowIndex') unselectedRowIndex: ElementRef;

    source: any =
    {
        localdata: generatedata(200, false),
        datafields:
        [
            { name: 'id', type: 'number' },
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        datatype: 'array'
    }

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'First Name', datafield: 'firstname', width: 200 },
        { text: 'Last Name', datafield: 'lastname', width: 200 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];

    ready = (): void => {
        this.myGrid.selectrow(2);
    }

    dropDownSource: string[] = ['none', 'single row', 'multiple rows', 'multiple rows extended', 'multiple rows advanced'];

    scrollToBtnOnClick(): void {
        let index = parseInt(this.myInput1.val());
        if (!isNaN(index)) {
            this.myGrid.ensurerowvisible(index);
        }
    };

    selectRowBtnOnClick(): void {
        let index = parseInt(this.myInput2.val());
        if (!isNaN(index)) {
            this.myGrid.selectrow(index);
        }
    };

    clearSelectionBtnOnClick(): void {
        this.myGrid.clearselection();
    };

    enableSelectionOnSelect(event: any): void {
        let index = event.args.index;
        this.mySelectRowBtn.disabled(false);
        switch (index) {
            case 0:
                this.myGrid.selectionmode('none');
                this.mySelectRowBtn.disabled(true);
                break;
            case 1:
                this.myGrid.selectionmode('singlerow');
                break;
            case 2:
                this.myGrid.selectionmode('multiplerows');
                break;
            case 3:
                this.myGrid.selectionmode('multiplerowsextended');
                break;
            case 4:
                this.myGrid.selectionmode('multiplerowsadvanced');
                break;
        }
    };

    enableHoverOnChange(event: any): void {
        this.myGrid.enablehover(event.args.checked);
    };

    myGridOnRowSelect(event: any): void {
        this.selectedRowIndex.nativeElement.innerHTML = event.args.rowindex;
    };

    myGridOnRowUnselect(event: any): void {
        this.unselectedRowIndex.nativeElement.innerHTML = event.args.rowindex;
    };
}