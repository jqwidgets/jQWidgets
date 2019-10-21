import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

    source: any =
    {
        localdata: generatedata(10, false),
        datafields:
        [
            { name: 'name', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' }
        ],
        datatype: 'array'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    getSourceAdapter = (name: any): any => {
        let source =
            {
                localdata: generatedata(10, false),
                datafields:
                [
                    { name: 'name', type: 'string' },
                    { name: 'productname', type: 'string' }
                ],
                datatype: 'array'
            };
        let fields = new Array();
        fields.push(name);
        let dataAdapter = new jqx.dataAdapter(source, { autoBind: true, autoSort: true, uniqueDataFields: fields, autoSortField: name });
        return dataAdapter.records;
    }

    myInput;
    myDropDownList;
    myDateTimeInput;
    myNumberInput;

    columns: any[] =
    [
        {
            text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215,
            createEverPresentRowWidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): HTMLElement => {
                let container = document.createElement('input');
                container.id = 'myInput';
                container.style.border = 'none';
                htmlElement[0].appendChild(container);

                let options = {
                    width: '100%', height: 30, source: this.getSourceAdapter('name'),
                    popupZIndex: 999999, placeHolder: 'Enter Name: ', displayMember: 'name'
                };

                setTimeout(_ => this.myInput = jqwidgets.createInstance('#myInput', 'jqxInput', options));

                return container;
            },
            initEverPresentRowWidget: (datafield: string, htmlElement: HTMLElement): void => {
            },
            getEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement, validate: any): any => {
                let value = this.myInput.val();
                return value;
            },
            resetEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement): void => {
                this.myInput.val('');
            }
        },
        {
            text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220,
            createEverPresentRowWidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): HTMLElement => {
                let container = document.createElement('div');
                container.id = 'myDropDownList';
                container.style.border = 'none';
                htmlElement[0].appendChild(container);

                let options = {
                    width: '100%', height: 30, source: this.getSourceAdapter('productname'),
                    popupZIndex: 999999, placeHolder: 'Enter Product: ', displayMember: 'productname'
                };

                this.myDropDownList = jqwidgets.createInstance('#myDropDownList', 'jqxDropDownList', options);

                return container;
            },
            getEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement, validate: any): any => {
                let selectedItem = this.myDropDownList.getSelectedItem();
                if (!selectedItem)
                    return '';
                let value = selectedItem.label;
                return value;
            },
            resetEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement): void => {
                this.myDropDownList.clearSelection();
            }
        },
        {
            text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd',
            createEverPresentRowWidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): HTMLElement => {
                let container = document.createElement('div');
                container.id = 'myDateTimeInput';
                container.style.border = 'none';
                htmlElement[0].appendChild(container);

                let options = {
                    width: '100%', height: 30, value: null,
                    popupZIndex: 999999, placeHolder: 'Enter Date: '
                };

                this.myDateTimeInput = jqwidgets.createInstance('#myDateTimeInput', 'jqxDateTimeInput', options);

                return container;
            },
            initEverPresentRowWidget: (datafield: string, htmlElement: HTMLElement): void => {
            },
            getEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement, validate: any): any => {
                let value = this.myDateTimeInput.val();
                return value;
            },
            resetEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement): void => {
                this.myDateTimeInput.val(null);
            }
        },
        {
            text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right',
            createEverPresentRowWidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): HTMLElement => {
                let container = document.createElement('div');
                container.id = 'myNumberInput';
                container.style.border = 'none';
                htmlElement[0].appendChild(container);

                let options = {
                    width: '100%', height: 30, decimalDigits: 0, inputMode: 'simple'
                };

                this.myNumberInput = jqwidgets.createInstance('#myNumberInput', 'jqxNumberInput', options);

                return container;
            },
            initEverPresentRowWidget: (datafield: string, htmlElement: HTMLElement): void => {
            },
            getEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement, validate: any): any => {
                let value = this.myNumberInput.val();
                if (value == '') value = 0;
                return parseInt(value);
            },
            resetEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement): void => {
                this.myNumberInput.val('');
            }
        },
        { text: '', datafield: 'addButtonColumn', width: 50 },
        { text: '', datafield: 'resetButtonColumn', width: 50 }
    ];

    topRadioBtnOnChecked(): void {
        if (this.myGrid) {
            this.myGrid.everpresentrowactions('add reset');
        }
    };

    bottomRadioBtnOnChecked(): void {
        if (this.myGrid) {
            this.myGrid.everpresentrowactions('addBottom reset');
        }
    };
}