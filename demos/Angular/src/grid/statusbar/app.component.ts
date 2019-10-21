import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
    @ViewChild('myDropDownList', { static: false }) myDropDownList: jqxDropDownListComponent;
    @ViewChild('myInput', { static: false }) myInput: jqxInputComponent;
    @ViewChild('myWindow', { static: false }) myWindow: jqxWindowComponent;

    ngAfterViewInit(): void {
        this.createButtons();
    }

    dropDownSource: string[] = ['First Name', 'Last Name', 'Product', 'Quantity', 'Price'];

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    getAdapter = (): any => {
        let source: any =
            {
                localdata: generatedata(15),
                datatype: 'array',
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'available', type: 'bool' }
                ],
                updaterow: (rowid: number, rowdata: any, commit: any): void => {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    commit(true);
                }
            };

        let dataAdapter: any = new jqx.dataAdapter(source);

        return dataAdapter;
    }

    dataAdapter = this.getAdapter();

    columns =
    [
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
        { text: 'Product', datafield: 'productname', width: 170 },
        { text: 'In Stock', datafield: 'available', columntype: 'checkbox', width: 125 },
        { text: 'Quantity', datafield: 'quantity', width: 85, cellsalign: 'right', cellsformat: 'n2' },
        { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];

    createButtonsContainers(statusbar: any): void {
        let buttonsContainer = document.createElement('div');
        buttonsContainer.style.cssText = 'overflow: hidden; position: relative; margin: 5px;';

        let addButtonContainer = document.createElement('div');
        let deleteButtonContainer = document.createElement('div');
        let reloadButtonContainer = document.createElement('div');
        let searchButtonContainer = document.createElement('div');

        addButtonContainer.id = 'addButton';
        deleteButtonContainer.id = 'deleteButton';
        reloadButtonContainer.id = 'reloadButton';
        searchButtonContainer.id = 'searchButton';

        addButtonContainer.style.cssText = 'float: left; margin-left: 5px;';
        deleteButtonContainer.style.cssText = 'float: left; margin-left: 5px;';
        reloadButtonContainer.style.cssText = 'float: left; margin-left: 5px;';
        searchButtonContainer.style.cssText = 'float: left; margin-left: 5px;';

        buttonsContainer.appendChild(addButtonContainer);
        buttonsContainer.appendChild(deleteButtonContainer);
        buttonsContainer.appendChild(reloadButtonContainer);
        buttonsContainer.appendChild(searchButtonContainer);

        statusbar[0].appendChild(buttonsContainer);
    }

    createButtons(): void {
        let addButtonOptions = {
            width: 80, height: 25, value: 'Add',
            imgSrc: './../../../images/add.png',
            imgPosition: 'center', textPosition: 'center',
            textImageRelation: 'imageBeforeText'
        }
        let addButton = jqwidgets.createInstance('#addButton', 'jqxButton', addButtonOptions);

        let deleteButtonOptions = {
            width: 80, height: 25, value: 'Delete',
            imgSrc: './../../../images/close.png',
            imgPosition: 'center', textPosition: 'center',
            textImageRelation: 'imageBeforeText'
        }
        let deleteButton = jqwidgets.createInstance('#deleteButton', 'jqxButton', deleteButtonOptions);

        let reloadButtonOptions = {
            width: 80, height: 25, value: 'Reload',
            imgSrc: './../../../images/refresh.png',
            imgPosition: 'center', textPosition: 'center',
            textImageRelation: 'imageBeforeText'
        }
        let reloadButton = jqwidgets.createInstance('#reloadButton', 'jqxButton', reloadButtonOptions);

        let searchButtonOptions = {
            width: 80, height: 25, value: 'Find',
            imgSrc: './../../../images/search.png',
            imgPosition: 'center', textPosition: 'center',
            textImageRelation: 'imageBeforeText'
        }
        let searchButton = jqwidgets.createInstance('#searchButton', 'jqxButton', searchButtonOptions);

        // add new row.
        addButton.addEventHandler('click', (event: any): void => {
            let datarow = generatedata(1);
            this.myGrid.addrow(null, datarow[0]);
        });
        // delete selected row.
        deleteButton.addEventHandler('click', (event: any): void => {
            let selectedrowindex = this.myGrid.getselectedrowindex();
            let rowscount = this.myGrid.getdatainformation().rowscount;
            let id = this.myGrid.getrowid(selectedrowindex);
            this.myGrid.deleterow(id);
        });
        // reload grid data.
        reloadButton.addEventHandler('click', (event: any): void => {
            this.myGrid.source(this.getAdapter());
        });
        // search for a record.
        searchButton.addEventHandler('click', (event: any): void => {
            this.myWindow.open();
            this.myWindow.move(60, 60);
        });
    }

    findBtnOnClick(): void {
        this.myGrid.clearfilters();
        let searchColumnIndex = this.myDropDownList.selectedIndex();
        let datafield = '';
        switch (searchColumnIndex) {
            case 0:
                datafield = 'firstname';
                break;
            case 1:
                datafield = 'lastname';
                break;
            case 2:
                datafield = 'productname';
                break;
            case 3:
                datafield = 'quantity';
                break;
            case 4:
                datafield = 'price';
                break;
        }
        let searchText = this.myInput.val();
        let filtergroup = new jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = searchText;
        let filtercondition = 'contains';
        let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filter_or_operator, filter);
        this.myGrid.addfilter(datafield, filtergroup);
        // apply the filters.
        this.myGrid.applyfilters();
    }

    clearBtnOnClick(): void {
        this.myGrid.clearfilters();
    }
}
