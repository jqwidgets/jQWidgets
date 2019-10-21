import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('TreeGrid', { static: false }) treeGrid: jqxTreeGridComponent;
	
   	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
 
    source: any =
    {
        dataType: 'tab',
        dataFields: [
            { name: 'Id', type: 'number' },
            { name: 'Name', type: 'string' },
            { name: 'ParentID', type: 'number' },
            { name: 'Population', type: 'number' }
        ],
        hierarchy:
        {
            keyDataField: { name: 'Id' },
            parentDataField: { name: 'ParentID' }
        },
        id: 'Id',
        url: './../../../sampledata/locations.tsv',
        addRow: (rowID, rowData, position, parentID, commit) => {
            // synchronize with the server - send insert command
            // call commit with parameter true if the synchronization with the server is successful 
            // and with parameter false if the synchronization failed.
            // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
            this.newRowID = rowID;
            commit(true);
        },
        updateRow: (rowID, rowData, commit) => {
            // synchronize with the server - send update command
            // call commit with parameter true if the synchronization with the server is successful 
            // and with parameter false if the synchronization failed.
            commit(true);
        },
        deleteRow: (rowID, commit) => {
            // synchronize with the server - send delete command
            // call commit with parameter true if the synchronization with the server is successful 
            // and with parameter false if the synchronization failed.
            commit(true);
        }
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    newRowID = null;
    theme: string = '';
    buttonsObject: any = null;

    updateButtons(action: string, buttons: any): void {
        switch (action) {
            case 'Select':
                buttons.addButton.jqxButton({ disabled: false });
                buttons.deleteButton.jqxButton({ disabled: false });
                buttons.editButton.jqxButton({ disabled: false });
                buttons.cancelButton.jqxButton({ disabled: true });
                buttons.updateButton.jqxButton({ disabled: true });
                break;
            case 'Unselect':
                buttons.addButton.jqxButton({ disabled: true });
                buttons.deleteButton.jqxButton({ disabled: true });
                buttons.editButton.jqxButton({ disabled: true });
                buttons.cancelButton.jqxButton({ disabled: true });
                buttons.updateButton.jqxButton({ disabled: true });
                break;
            case 'Edit':
                buttons.addButton.jqxButton({ disabled: true });
                buttons.deleteButton.jqxButton({ disabled: true });
                buttons.editButton.jqxButton({ disabled: true });
                buttons.cancelButton.jqxButton({ disabled: false });
                buttons.updateButton.jqxButton({ disabled: false });
                break;
            case 'End Edit':
                buttons.addButton.jqxButton({ disabled: false });
                buttons.deleteButton.jqxButton({ disabled: false });
                buttons.editButton.jqxButton({ disabled: false });
                buttons.cancelButton.jqxButton({ disabled: true });
                buttons.updateButton.jqxButton({ disabled: true });
                break;
        }
    }

    renderToolbar = (toolBar) => {
        let toTheme = (className) => {
            if (this.theme == '') return className;
            return className + ' ' + className + '-' + this.theme;
        }
        // appends buttons to the status bar.
        let container: any = $('<div style="overflow: hidden; position: relative; height: 100%; width: 100%;"></div>');
        let buttonTemplate: any = '<div style="float: left; padding: 3px; margin: 2px;"><div style="margin: 4px; width: 16px; height: 16px;"></div></div>';
        let addButton: any = $(buttonTemplate);
        let editButton: any = $(buttonTemplate);
        let deleteButton: any = $(buttonTemplate);
        let cancelButton: any = $(buttonTemplate);
        let updateButton: any = $(buttonTemplate);
        container.append(addButton);
        container.append(editButton);
        container.append(deleteButton);
        container.append(cancelButton);
        container.append(updateButton);
        toolBar.append(container);
        addButton.jqxButton({ cursor: 'pointer', enableDefault: false, disabled: true, height: 25, width: 25 });
        addButton.find('div:first').addClass(toTheme('jqx-icon-plus'));
        addButton.jqxTooltip({ position: 'bottom', content: 'Add' });
        editButton.jqxButton({ cursor: 'pointer', disabled: true, enableDefault: false, height: 25, width: 25 });
        editButton.find('div:first').addClass(toTheme('jqx-icon-edit'));
        editButton.jqxTooltip({ position: 'bottom', content: 'Edit' });
        deleteButton.jqxButton({ cursor: 'pointer', disabled: true, enableDefault: false, height: 25, width: 25 });
        deleteButton.find('div:first').addClass(toTheme('jqx-icon-delete'));
        deleteButton.jqxTooltip({ position: 'bottom', content: 'Delete' });
        updateButton.jqxButton({ cursor: 'pointer', disabled: true, enableDefault: false, height: 25, width: 25 });
        updateButton.find('div:first').addClass(toTheme('jqx-icon-save'));
        updateButton.jqxTooltip({ position: 'bottom', content: 'Save Changes' });
        cancelButton.jqxButton({ cursor: 'pointer', disabled: true, enableDefault: false, height: 25, width: 25 });
        cancelButton.find('div:first').addClass(toTheme('jqx-icon-cancel'));
        cancelButton.jqxTooltip({ position: 'bottom', content: 'Cancel' });
        
        this.buttonsObject = {
            addButton: addButton,
            editButton: editButton,
            deleteButton: deleteButton,
            cancelButton: cancelButton,
            updateButton: updateButton,
        };
        
        addButton.click((event) => {
            if (!addButton.jqxButton('disabled')) {
                this.treeGrid.expandRow(this.rowKey);
                // add new empty row.
                this.treeGrid.addRow(null, {}, 'first', this.rowKey);
                // select the first row and clear the selection.
                this.treeGrid.clearSelection();
                this.treeGrid.selectRow(this.newRowID);
                // edit the new row.
                this.treeGrid.beginRowEdit(this.newRowID);
                this.updateButtons('add', this.buttonsObject);
            }
        });

        cancelButton.click((event) => {
            if (!cancelButton.jqxButton('disabled')) {
                // cancel changes.
                this.treeGrid.endRowEdit(this.rowKey, true);
            }
        });

        updateButton.click((event) => {
            if (!updateButton.jqxButton('disabled')) {
                this.treeGrid.endRowEdit(this.rowKey, false);
            }
        });

        editButton.click(() => {
            if (!editButton.jqxButton('disabled')) {
                this.treeGrid.beginRowEdit(this.rowKey);
                this.updateButtons('edit', this.buttonsObject);
            }
        });

        deleteButton.click(() => {
            if (!deleteButton.jqxButton('disabled')) {
                let selection = this.treeGrid.getSelection();
                if (selection.length > 1) {
                    for (let i = 0; i < selection.length; i++) {
                        let key = this.treeGrid.getKey(selection[i]);
                        this.treeGrid.deleteRow(key);
                    }   
                }
                else {
                    this.treeGrid.deleteRow(this.rowKey);
                }
                this.updateButtons('delete', this.buttonsObject);
            }
        });
    };
    
    rowKey = null;

    rowSelect(event: any): void {
        let args = event.args;
        this.rowKey = args.key;
        this.updateButtons('Select', this.buttonsObject);
    };

    rowUnselect(event: any): void {
        this.updateButtons('Unselect', this.buttonsObject);
    };

    rowEndEdit(event: any): void {
        this.updateButtons('End Edit', this.buttonsObject);
    };

    rowBeginEdit(event: any): void {
        this.updateButtons('Edit', this.buttonsObject);
    };

    columns: any[] = [
        { text: 'Location Name', dataField: 'Name', align: 'center', width: '50%' },
        { text: 'Population', dataField: 'Population', align: 'right', cellsAlign: 'right', width: '50%' }
    ];    
}