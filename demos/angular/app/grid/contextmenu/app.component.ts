import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGridComponent } from '../../../jqwidgets-ts/angular_jqxgrid'
import { jqxMenuComponent } from '../../../jqwidgets-ts/angular_jqxmenu';
import { jqxInputComponent } from '../../../jqwidgets-ts/angular_jqxinput';
import { jqxNumberInputComponent } from '../../../jqwidgets-ts/angular_jqxnumberinput';
import { jqxWindowComponent } from '../../../jqwidgets-ts/angular_jqxwindow';

import { generatedata } from '../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myWindow') myWindow: jqxWindowComponent;
    @ViewChild('firstName') firstName: jqxInputComponent;
    @ViewChild('lastName') lastName: jqxInputComponent;
    @ViewChild('product') product: jqxInputComponent;
    @ViewChild('quantity') quantity: jqxNumberInputComponent;
    @ViewChild('price') price: jqxNumberInputComponent;
    @ViewChild('myMenu') myMenu: jqxMenuComponent;

    ngAfterViewInit(): void {
        document.addEventListener('contextmenu', event => event.preventDefault());
    }

    editrow: number = -1;

    source: any =
    {
        localdata: generatedata(25, false),
        datatype: 'array',
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'First Name', datafield: 'firstname', width: 200 },
        { text: 'Last Name', datafield: 'lastname', width: 200 },
        { text: 'Product', datafield: 'productname', width: 190 },
        { text: 'Quantity', datafield: 'quantity', width: 90, cellsalign: 'right' },
        { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];

    myGridOnContextMenu(): boolean {
        return false;
    }

    myGridOnRowClick(event: any): void | boolean {
        if (event.args.rightclick) {
            this.myGrid.selectrow(event.args.rowindex);
            let scrollTop = window.scrollY;
            let scrollLeft = window.scrollX;
            this.myMenu.open(parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);
            return false;
        }
    };

    myMenuOnItemClick(event: any): void {
        let args = event.args;
        let rowindex = this.myGrid.getselectedrowindex();
        if (args.innerHTML == 'Edit Selected Row') {
            this.editrow = rowindex;
            this.myWindow.position({ x: 60, y: 60 });
            // get the clicked row's data and initialize the input fields.
            let dataRecord = this.myGrid.getrowdata(this.editrow);
            this.firstName.val(dataRecord.firstname);
            this.lastName.val(dataRecord.lastname);
            this.product.val(dataRecord.productname);
            this.quantity.decimal(dataRecord.quantity);
            this.price.decimal(dataRecord.price);
            // show the popup window.
            this.myWindow.open();
        }
        else {
            let rowid = this.myGrid.getrowid(rowindex);
            this.myGrid.deleterow(rowid);
        }
    };

    SaveBtnOnClick(): void {
        if (this.editrow >= 0) {
            let row = {
                firstname: this.firstName.val(), lastname: this.lastName.val(), productname: this.product.val(),
                quantity: parseInt(this.quantity.decimal()), price: parseFloat(this.price.decimal())
            };
            let rowid = this.myGrid.getrowid(this.editrow);
            this.myGrid.updaterow(rowid, row);
            this.myWindow.hide();
        }
    };

    CancelBtnOnClick(): void {
        this.myWindow.hide();
    };
}

