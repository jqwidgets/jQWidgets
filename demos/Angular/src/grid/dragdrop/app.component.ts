import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

import { generatedata } from './../../../sampledata/generatedata';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid1', { static: false }) myGrid1: jqxGridComponent;
    @ViewChild('myGrid2', { static: false }) myGrid2: jqxGridComponent;

    source: any =
    {
        localdata: generatedata(100, false),
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' }
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

    columns: any[] =
    [
        { text: 'First Name', dataField: 'firstname', width: 300 },
        { text: 'Last Name', dataField: 'lastname', width: 300 },
        { text: 'Product', dataField: 'productname' }
    ];

    source2: any =
    {
        totalrecords: 10,
        unboundmode: true,
        datafields:
        [
            { name: 'firstname' },
            { name: 'lastname' },
            { name: 'productname' }
        ]
    };

    columns2: any[] =
    [
        { text: 'First Name', dataField: 'firstname', width: 300 },
        { text: 'Last Name', dataField: 'lastname', width: 300 },
        { text: 'Product', dataField: 'productname' }
    ];

    rendered = (type: any): void => {
        // Initialize the DragDrop plug-in. Set it's drop target to the second Grid.
        let options = {
            revert: true,
            dragZIndex: 99999,
            appendTo: 'body',
            dropAction: 'none',
            initFeedback: (feedback: any): void => {
                feedback.height(25);
            }
        };

        let uglyGridDragDropCells = jqwidgets.createInstance('.jqx-grid-cell', 'jqxDragDrop', options);
        let flattenGridDragDropCells = flatten(uglyGridDragDropCells);

        function flatten(arr: any[]): any[] {
            return arr.reduce((flat: any[], toFlatten: any[]): any[] => {
                return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
            }, []);
        }

        // Add Event Handlers
        for (let i = 0; i < flattenGridDragDropCells.length; i++) {
            // Disable revert when the dragged cell is over the second Grid.
            flattenGridDragDropCells[i].addEventHandler('dropTargetEnter', (): void => {
                flattenGridDragDropCells[i].revert = false;
            });

            // Enable revert when the dragged cell is outside the second Grid.
            flattenGridDragDropCells[i].addEventHandler('dropTargetLeave', (): void => {
                flattenGridDragDropCells[i].revert = true;
            });

            // initialize the dragged object.
            flattenGridDragDropCells[i].addEventHandler('dragStart', (event: any): void => {
                let value = event.target.innerHTML;
                let position = jqx.position(event.args);
                let cell = this.myGrid1.getcellatposition(position.left, position.top);
                flattenGridDragDropCells[i].data = { value: value };
            });

            // Set the new cell value when the dragged cell is dropped over the second Grid.      
            flattenGridDragDropCells[i].addEventHandler('dragEnd', (event: any): void => {
                let value = event.target.innerHTML;
                value = value.slice(0, 37) + value.slice(62);
                let position = jqx.position(event.args);
                let cell = this.myGrid2.getcellatposition(position.left, position.top);
                if (typeof cell !== 'boolean') {
                    this.myGrid2.setcellvalue(cell.row, (cell.column).toString(), value);
                }
            });
        }
    };   
}