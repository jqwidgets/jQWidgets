import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myDataTable', { static: false }) myDataTable: jqxDataTableComponent;
    @ViewChild('myDropDownList', { static: false }) myDropDownList: jqxDropDownListComponent;
    @ViewChild('myListBox', { static: false }) myListBox: jqxListBoxComponent;

    ngAfterViewInit(): void {
        this.updateMyListBox('firstname');
    }

    handleCheckChange: boolean = true;

    source: any =
    {
        localData: generatedata(200, false),
        dataFields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' }
        ],
        dataType: 'array'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    columns: any[] =
    [
        { text: 'First Name', dataField: 'firstname', width: 190 },
        { text: 'Last Name', dataField: 'lastname', width: 190 },
        { text: 'Product', dataField: 'productname', width: 170 },
        { text: 'Quantity', dataField: 'quantity', cellsAlign: 'right' }
    ];

    dropDownListSource: any[] =
    [
        { label: 'First Name', value: 'firstname' },
        { label: 'Last Name', value: 'lastname' },
        { label: 'Product', value: 'productname' },
        { label: 'Quantity', value: 'quantity' }
    ];

    updateMyListBox(dataField: string): void {
        this.myDataTable.clearFilters();
        let myListBoxAdapter = new jqx.dataAdapter(this.source,
            {
                uniqueDataFields: [dataField],
                autoBind: true
            });
        let uniqueRecords = myListBoxAdapter.records;
        uniqueRecords.splice(0, 0, '(Select All)');
        this.myListBox.setOptions({ source: uniqueRecords, displayMember: dataField });
        this.myListBox.checkAll();
    }

    applyFilter(dataField: string): void {
        this.myDataTable.clearFilters();
        let filtertype = 'stringfilter';
        if (dataField == 'date') filtertype = 'datefilter';
        if (dataField == 'price' || dataField == 'quantity') filtertype = 'numericfilter';
        // create a new group of filters.
        let filtergroup = new jqx.filter();
        // get listbox's checked items.
        let checkedItems = this.myListBox.getCheckedItems();
        if (checkedItems.length == 0) {
            let filter_or_operator = 1;
            let filtervalue = 'Empty';
            let filtercondition = 'equal';
            let filter = filtergroup.createfilter(filtertype, filtervalue, filtercondition);
            filtergroup.addfilter(filter_or_operator, filter);
        }
        else {
            for (let i = 0; i < checkedItems.length; i++) {
                let filter_or_operator = 1;
                // set filter's value.
                let filtervalue = checkedItems[i].label;
                // set filter's condition.
                let filtercondition = 'equal';
                // create new filter.
                let filter = filtergroup.createfilter(filtertype, filtervalue, filtercondition);
                // add the filter to the filter group.
                filtergroup.addfilter(filter_or_operator, filter);
            }
        }
        // add the filters.
        this.myDataTable.addFilter(dataField, filtergroup);
        // apply the filters.
        this.myDataTable.applyFilters();
    }

    listBoxOnCheckChange(event: any): void {
        if (!this.handleCheckChange)
            return;

        if (event.args.label !== '(Select All)') {
            // update the state of the 'Select All' listbox item.
            this.handleCheckChange = false;
            this.myListBox.checkIndex(0);
            let checkedItems = this.myListBox.getCheckedItems();
            let items = this.myListBox.getItems();
            if (checkedItems.length == 1) {
                this.myListBox.uncheckIndex(0);
            }
            else if (items.length != checkedItems.length) {
                this.myListBox.indeterminateIndex(0);
            }
            this.handleCheckChange = true;
        }
        else {
            // check/uncheck all items if 'Select All' is clicked.
            this.handleCheckChange = false;
            if (event.args.checked) {
                this.myListBox.checkAll();
            }
            else {
                this.myListBox.uncheckAll();
            }
            this.handleCheckChange = true;
        }
    };

    // handle columns selection.
    dropDownListOnSelect(event: any): void {
        this.updateMyListBox(event.args.item.value);
    };

    // applies the filter.
    applyFilterBtnOnClick(): void {
        let dataField = this.myDropDownList.getSelectedItem().value;
        this.applyFilter(dataField);
    };

    // clears the filter.
    clearfilterBtnOnClick(): void {
        this.myDataTable.clearFilters();
    };
}

