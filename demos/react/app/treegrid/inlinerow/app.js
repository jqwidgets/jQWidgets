import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';

class App extends React.Component {
    componentDidMount() {
        //this.refs.myTreeGrid.expandRow(2);
    }
    render () {
        let newRowID = null;
        // prepare the data
        let source =
        {
            dataType: "tab",
            dataFields: [
                { name: "Id", type: "number" },
                { name: "Name", type: "string" },
                { name: "ParentID", type: "number" },
                { name: "Population", type: "number" }
            ],
            hierarchy:
            {
                keyDataField: { name: 'Id' },
                parentDataField: { name: 'ParentID' }
            },
            id: 'Id',
            url: '../sampledata/locations.tsv',
            addRow: (rowID, rowData, position, parentID, commit) => {
                // synchronize with the server - send insert command
                // call commit with parameter true if the synchronization with the server is successful 
                // and with parameter false if the synchronization failed.
                // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                commit(true);
                newRowID = rowID;
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
        let dataAdapter = new $.jqx.dataAdapter(source, {
            loadComplete: () => {
                // data is loaded.
            }
        });

        let renderToolbar= (toolBar) => {
            let toTheme = (className) => {
                if (theme == "") return className;
                return className + " " + className + "-" + theme;
            }
            // appends buttons to the status bar.
            let container = $("<div style='overflow: hidden; position: relative; height: 100%; width: 100%;'></div>");
            let buttonTemplate = "<div style='float: left; padding: 3px; margin: 2px;'><div style='margin: 4px; width: 16px; height: 16px;'></div></div>";
            let addButton = $(buttonTemplate);
            let editButton = $(buttonTemplate);
            let deleteButton = $(buttonTemplate);
            let cancelButton = $(buttonTemplate);
            let updateButton = $(buttonTemplate);
            container.append(addButton);
            container.append(editButton);
            container.append(deleteButton);
            container.append(cancelButton);
            container.append(updateButton);
            toolBar.append(container);
            addButton.jqxButton({cursor: "pointer", enableDefault: false, disabled: true, height: 25, width: 25 });
            addButton.find('div:first').addClass(toTheme('jqx-icon-plus'));
            addButton.jqxTooltip({ position: 'bottom', content: "Add"});
            editButton.jqxButton({ cursor: "pointer", disabled: true, enableDefault: false,  height: 25, width: 25 });
            editButton.find('div:first').addClass(toTheme('jqx-icon-edit'));
            editButton.jqxTooltip({ position: 'bottom', content: "Edit"});
            deleteButton.jqxButton({ cursor: "pointer", disabled: true, enableDefault: false,  height: 25, width: 25 });
            deleteButton.find('div:first').addClass(toTheme('jqx-icon-delete'));
            deleteButton.jqxTooltip({ position: 'bottom', content: "Delete"});
            updateButton.jqxButton({ cursor: "pointer", disabled: true, enableDefault: false,  height: 25, width: 25 });
            updateButton.find('div:first').addClass(toTheme('jqx-icon-save'));
            updateButton.jqxTooltip({ position: 'bottom', content: "Save Changes"});
            cancelButton.jqxButton({ cursor: "pointer", disabled: true, enableDefault: false,  height: 25, width: 25 });
            cancelButton.find('div:first').addClass(toTheme('jqx-icon-cancel'));
            cancelButton.jqxTooltip({ position: 'bottom', content: "Cancel"});
            let updateButtons = (action) => {
                switch (action) {
                    case "Select":
                        addButton.jqxButton({ disabled: false });
                        deleteButton.jqxButton({ disabled: false });
                        editButton.jqxButton({ disabled: false });
                        cancelButton.jqxButton({ disabled: true });
                        updateButton.jqxButton({ disabled: true });
                        break;
                    case "Unselect":
                        addButton.jqxButton({ disabled: true });
                        deleteButton.jqxButton({ disabled: true });
                        editButton.jqxButton({ disabled: true });
                        cancelButton.jqxButton({ disabled: true });
                        updateButton.jqxButton({ disabled: true });
                        break;
                    case "Edit":
                        addButton.jqxButton({ disabled: true });
                        deleteButton.jqxButton({ disabled: true });
                        editButton.jqxButton({ disabled: true });
                        cancelButton.jqxButton({ disabled: false });
                        updateButton.jqxButton({ disabled: false });
                        break;
                    case "End Edit":
                        addButton.jqxButton({ disabled: false });
                        deleteButton.jqxButton({ disabled: false });
                        editButton.jqxButton({ disabled: false });
                        cancelButton.jqxButton({ disabled: true });
                        updateButton.jqxButton({ disabled: true });
                        break;
                }
            }
            let rowKey = null;
            this.refs.myTreeGrid.on('rowSelect', (event) => {
                let args = event.args;
                rowKey = args.key;
                updateButtons('Select');
            });
            this.refs.myTreeGrid.on('rowUnselect', (event) => {
                updateButtons('Unselect');
            });
            this.refs.myTreeGrid.on('rowEndEdit', (event) => {
                updateButtons('End Edit');
            });
            this.refs.myTreeGrid.on('rowBeginEdit', (event) => {
                updateButtons('Edit');
            });
            addButton.click((event) => {
                if (!addButton.jqxButton('disabled')) {
                    this.refs.myTreeGrid.expandRow(rowKey);
                    // add new empty row.
                    this.refs.myTreeGrid.addRow(null, {}, 'first', rowKey);
                    // select the first row and clear the selection.
                    this.refs.myTreeGrid.clearSelection();
                    this.refs.myTreeGrid.selectRow(newRowID);
                    // edit the new row.
                    this.refs.myTreeGrid.beginRowEdit(newRowID);
                    updateButtons('add');
                }
            });
            cancelButton.click((event) => {
                if (!cancelButton.jqxButton('disabled')) {
                    // cancel changes.
                    this.refs.myTreeGrid.endRowEdit(rowKey, true);
                }
            });
            updateButton.click((event) => {
                if (!updateButton.jqxButton('disabled')) {
                    // save changes.
                    this.refs.myTreeGrid.endRowEdit(rowKey, false);
                }
            });
            editButton.click(() => {
                if (!editButton.jqxButton('disabled')) {
                    this.refs.myTreeGrid.beginRowEdit(rowKey);
                    updateButtons('edit');
                }
            });
            deleteButton.click(() => {
                if (!deleteButton.jqxButton('disabled')) {
                    let selection = this.refs.myTreeGrid.getSelection();
                    if (selection.length > 1) {
                        let keys = new Array();
                        for (let i = 0; i < selection.length; i++) {
                            keys.push(this.refs.myTreeGrid.getKey(selection[i]));
                        }
                        this.refs.myTreeGrid.deleteRow(keys);
                    }
                    else {
                        this.refs.myTreeGrid.deleteRow(rowKey);
                    }
                    updateButtons('delete');
                }
            });
        };
        // create Tree Grid
        let columns = [
            { text: 'Location Name', dataField: "Name", align: 'center', width: '50%' },
            { text: 'Population', dataField: "Population", align: 'right', cellsAlign: 'right', width: '50%' }
        ];
        return (
            <JqxTreeGrid ref='myTreeGrid'
                width={850}
                source={dataAdapter}
                pageable={true}
                editable={true}
                showToolbar={true}
                altRows={true}
                pagerButtonsCount={8}
                toolbarHeight={35}
                renderToolbar={renderToolbar}
                columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
