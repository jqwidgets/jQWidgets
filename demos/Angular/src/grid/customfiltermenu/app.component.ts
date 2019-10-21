import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
    @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;

    source: any =
    {
        localdata: generatedata(500, false),
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        datatype: 'array'
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
        {
            text: 'First Name', datafield: 'firstname', width: 160,
            filtertype: 'custom',
            createfilterpanel: (datafield: string, filterPanel: any): void => {
                this.buildFilterPanel(filterPanel, datafield);
            }
        },
        {
            text: 'Last Name', datafield: 'lastname',
            filtertype: 'custom',
            createfilterpanel: (datafield: string, filterPanel: any): void => {
                this.buildFilterPanel(filterPanel, datafield);
            },
            width: 160
        },
        { text: 'Product', datafield: 'productname', filtertype: 'checkedlist', width: 170 },
        { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];

    columnmenuopening = (menu: any, datafield: any, height: any): void => {
        let column: any = this.myGrid.getcolumn(datafield);
        if (column.filtertype === 'custom') {
            menu.height(155);
            setTimeout(() => {
                menu.find('input').focus();
            }, 25);
        }
        else menu.height(height);
    };

    buildFilterPanel = (filterPanel: any, datafield: string): void => {

        let inputContainer = document.createElement('input');
        inputContainer.id = 'inputContainer';
        inputContainer.style.margin = '5px';

        let buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'filter';
        Object.assign(buttonsContainer.style, { height: '25px', marginLeft: '20px', marginTop: '7px' })

        let filterButtonContainer = document.createElement('div');
        let filterClearButtonContainer = document.createElement('div');

        filterButtonContainer.style.cssText = 'margin-left: 16px; float: left';
        filterClearButtonContainer.style.cssText = 'margin-left: 12px; float: left';

        filterButtonContainer.id = 'filterButtonContainer';
        filterClearButtonContainer.id = 'filterClearButtonContainer';

        buttonsContainer.appendChild(filterButtonContainer);
        buttonsContainer.appendChild(filterClearButtonContainer);

        filterPanel[0].appendChild(inputContainer);
        filterPanel[0].appendChild(buttonsContainer);

        let filterButtonOptions = { width: 45, height: 25, value: 'Filter' };
        let filterButton = jqwidgets.createInstance('#filterButtonContainer', 'jqxButton', filterButtonOptions);

        let filterClearButtonOptions = { width: 45, height: 25, value: 'Clear' };
        let filterClearButton = jqwidgets.createInstance('#filterClearButtonContainer', 'jqxButton', filterClearButtonOptions);

        let dataSource =
            {
                localdata: this.dataAdapter.records,
                datatype: 'array',
                async: false
            }
        let dataadapter = new jqx.dataAdapter(dataSource,
            {
                autoBind: false,
                autoSort: true,
                autoSortField: datafield,
                async: false,
                uniqueDataFields: [datafield]
            });

        let column = this.myGrid.getcolumn(datafield);

        let inputOptions = {
            width: 175, height: 20, source: dataadapter,
            displayMember: 'datafield', popupZIndex: 99999,
            placeHolder: `Enter ${column.text}`
        };

        let input = jqwidgets.createInstance('#inputContainer', 'jqxInput', inputOptions);

        filterButton.addEventHandler('click', () => {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = input.val();
            let filtercondition = 'contains';
            let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.addfilter(filter_or_operator, filter1);
            // add the filters.
            this.myGrid.addfilter(datafield, filtergroup);
            // apply the filters.
            this.myGrid.applyfilters();
            this.myGrid.closemenu();
        });

        filterClearButton.addEventHandler('click', () => {
            this.myGrid.removefilter(datafield, false);
            // apply the filters.
            this.myGrid.applyfilters();
            this.myGrid.closemenu();
        });
    }

    myGridOnFilter(): void {
        this.myPanel.clearcontent();
        let filterinfo = this.myGrid.getfilterinformation();
        let eventData = 'Triggered "filter" event';
        for (let i = 0; i < filterinfo.length; i++) {
            let eventData = 'Filter Column: ' + filterinfo[i].filtercolumntext;
            this.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        }
    };

    removeFilterBtnOnClick(): void {
        this.myGrid.clearfilters();
    };

    filterBackgroundCheckBoxOnChange(event: any): void {
        this.myGrid.showfiltercolumnbackground(event.args.checked);
    };

    filterIconsCheckBoxOnChange(event: any): void {
        this.myGrid.autoshowfiltericon(!event.args.checked);
    };
}