import { Component, ViewChild } from '@angular/core';

import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';
import { jqxInputComponent }    from 'jqwidgets-ng/jqxinput';
import { jqxPanelComponent }    from 'jqwidgets-ng/jqxpanel';

import { generateordersdata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTreeGrid', { static: false }) myTreeGrid: jqxTreeGridComponent;
    @ViewChild('myInput', { static: false }) myInput: jqxInputComponent;
    @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;

    source: any =
    {
        dataType: 'array',
        dataFields: [
            { name: 'name', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'id', type: 'number' },
            { name: 'parentid', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'date', type: 'date' },
            { name: 'customer', type: 'string' }
        ],
        hierarchy:
        {
            keyDataField: { name: 'id' },
            parentDataField: { name: 'parentid' }
        },
        id: 'id',
        localData: generateordersdata(10)
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns =
    [
        { text: 'Order Name', dataField: 'name', align: 'center', width: 250 },
        { text: 'Customer', dataField: 'customer', align: 'center', width: 250 },
        { text: 'Price', dataField: 'price', cellsFormat: 'c2', align: 'center', cellsAlign: 'right', width: 80 },
        {
            text: 'Order Date', dataField: 'date', align: 'center', cellsFormat: 'dd-MMMM-yyyy hh:mm',
            cellsRenderer: (rowKey: any, column: any, cellValue: any, rowData: any, cellText: any): any => {
                if (rowData.level === 0) {
                    return this.dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                }
                return cellText;
            }
        }
    ];

    ready = (): void => {
        this.myTreeGrid.expandRow(2);
    };

    pagerModeDropDownListOnSelect(event: any): void {
        if (event.args.index == 0) {
            this.myTreeGrid.pagerMode('default');
        }
        else {
            this.myTreeGrid.pagerMode('advanced');
        }
    };

    pagerPositionDropDownListOnSelect(event: any): void {
        if (event.args.index == 0) {
            this.myTreeGrid.pagerPosition('top');
        }
        else if (event.args.index == 1) {
            this.myTreeGrid.pagerPosition('bottom');
        }
        else {
            this.myTreeGrid.pagerPosition('both');
        }
    };

    btnOnClick(): void {
        let page = parseInt(this.myInput.val());
        if (!isNaN(page)) {
            page--;
            if (page < 0) page = 0;
            this.myTreeGrid.goToPage(page);
        }
    };

    loop: number = 0;
    myTreeGridOnPageChanged(event: any): void {
        if (this.loop >= 5) {
            this.myPanel.clearcontent();
            this.loop = 0;
        }

        this.loop++;
        let args = event.args;
        let eventData = "<div>Page:" + (1 + args.pagenum) + ", Page Size: " + args.pageSize + "</div>";
        this.myPanel.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
    };

    myTreeGridOnPageSizeChanged(event): void {
        this.myPanel.clearcontent();
        let args = event.args;
        let eventData = "<div>Page: " + (1 + args.pagenum) + ", Page Size: " + args.pageSize + ", Old Page Size: " + args.oldpageSize + "</div>";
        this.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    };
}