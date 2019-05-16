import * as React from 'react';
 

import * as ReactDOM from "react-dom";

import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();
    private addButton = React.createRef<JqxButton>();
    private editButton = React.createRef<JqxButton>();
    private deleteButton = React.createRef<JqxButton>();
    private cancelButton = React.createRef<JqxButton>();
    private updateButton = React.createRef<JqxButton>();

    private rowKey: any = '';
    private newRowID: any = null;

    constructor(props: {}) {
        super(props);

        this.rowSelect = this.rowSelect.bind(this);
        this.rowUnselect = this.rowUnselect.bind(this);
        this.rowBeginEdit = this.rowBeginEdit.bind(this);
        this.rowEndEdit = this.rowEndEdit.bind(this);

        const source: any = {
            addRow: (rowID?: any, rowData?: any, position?: any, parentID?: any, commit?: any) => {
                // synchronize with the server - send insert command
                // call commit with parameter true if the synchronization with the server is successful 
                // and with parameter false if the synchronization failed.
                // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                this.newRowID = rowID;
                commit(true);
            },
            dataFields: [
                { name: 'Id', type: 'number' },
                { name: 'Name', type: 'string' },
                { name: 'ParentID', type: 'number' },
                { name: 'Population', type: 'number' }
            ],
            dataType: 'tab',
            deleteRow: (rowID?: any, commit?: any) => {
                // synchronize with the server - send delete command
                // call commit with parameter true if the synchronization with the server is successful 
                // and with parameter false if the synchronization failed.
                commit(true);
            },
            hierarchy:
            {
                keyDataField: { name: 'Id' },
                parentDataField: { name: 'ParentID' }
            },
            id: 'Id',
            updateRow: (rowID?: any, rowData?: any, commit?: any) => {
                // synchronize with the server - send update command
                // call commit with parameter true if the synchronization with the server is successful 
                // and with parameter false if the synchronization failed.
                commit(true);
            },
            url: './assets/sampledata/locations.tsv'
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            columns: [
                { text: 'Location Name', dataField: 'Name', align: 'center', width: '50%' },
                { text: 'Population', dataField: 'Population', align: 'right', cellsAlign: 'right', width: '50%' }
            ],
            renderToolbar: (toolBar: any) => {
                const toTheme = (className: string) => {
                    // @ts-ignore
                    if (theme === "") {
                        return className;
                    }
                    // @ts-ignore
                    return className + "-" + theme + " " + className;
                };
                const container = document.createElement('div');
                container.style.cssText = 'overflow: hidden; position: relative; height: 100%; width: 100%;';
                const createButton = () => {
                    const button = document.createElement('div');
                    button.style.cssText = 'float: left; padding: 0px; margin: 0px;';
                    return button;
                };

                toolBar[0].appendChild(container);
                const addButtonDom = createButton();
                const editButtonDom = createButton();
                const deleteButtonDom = createButton();
                const cancelButtonDom = createButton();
                const updateButtonDom = createButton();

                container.appendChild(addButtonDom);
                container.appendChild(editButtonDom);
                container.appendChild(deleteButtonDom);
                container.appendChild(cancelButtonDom);
                container.appendChild(updateButtonDom);

                const isDisabled = (button: any) => {
                    return button.current!.getOptions('disabled');
                };

                const addHandler = () => {
                    if (!isDisabled(this.addButton)) {
                        this.myTreeGrid.current!.expandRow(this.rowKey);
                        // add new empty row.
                        this.myTreeGrid.current!.addRow(null, {}, 'first', this.rowKey);
                        // select the first row and clear the selection.
                        this.myTreeGrid.current!.clearSelection();
                        this.myTreeGrid.current!.selectRow(this.newRowID);
                        // edit the new row.
                        this.myTreeGrid.current!.beginRowEdit(this.newRowID);
                        // this.updateButtons('add');
                        this.updateButtons('Add');
                    }
                };

                const editHandler = () => {
                    if (!this.editButton.current!.props!.disabled) {
                        this.myTreeGrid.current!.beginRowEdit(this.rowKey);
                        this.updateButtons('Edit');
                    }
                };

                const deleteHandler = () => {
                    if (!isDisabled(this.deleteButton)) {
                        const selection = this.myTreeGrid.current!.getSelection();
                        if (selection.length > 1) {
                            for (const key of selection) {
                                this.myTreeGrid.current!.deleteRow(key.Id);
                            }
                        }
                        else {
                            this.myTreeGrid.current!.deleteRow(this.rowKey);
                        }

                        this.updateButtons('Delete');
                    }
                };

                const cancelHandler = () => {
                    if (!isDisabled(this.cancelButton)) {
                        // cancel changes.
                        this.myTreeGrid.current!.endRowEdit(this.rowKey, true);
                    }
                };

                const updateHandler = () => {
                    if (!isDisabled(this.updateButton)) {
                        this.myTreeGrid.current!.endRowEdit(this.rowKey, false);
                    }
                };

                const iconStyle = { margin: '4px', width: '16px', height: '16px' };

                const addComponent =
                    <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Add'}>
                        <JqxButton theme={'material-purple'} ref={this.addButton}
                            onClick={addHandler}
                            disabled={true} height={25} width={25}>
                            <div className={toTheme('jqx-icon-plus')} style={iconStyle} />
                        </JqxButton>
                    </JqxTooltip>;
                const editComponent =
                    <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Edit'}>
                        <JqxButton theme={'material-purple'} ref={this.editButton}
                            onClick={editHandler}
                            disabled={true} height={25} width={25}>
                            <div className={toTheme('jqx-icon-edit')} style={iconStyle} />
                        </JqxButton>
                    </JqxTooltip>;
                const deleteComponent =
                    <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Delete'}>
                        <JqxButton theme={'material-purple'} ref={this.deleteButton}
                            onClick={deleteHandler}
                            disabled={true} height={25} width={25}>
                            <div className={toTheme('jqx-icon-delete')} style={iconStyle} />
                        </JqxButton>
                    </JqxTooltip>;
                const cancelComponent =
                    <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Cancel'}>
                        <JqxButton theme={'material-purple'} ref={this.cancelButton}
                            onClick={cancelHandler}
                            disabled={true} height={25} width={25}>
                            <div className={toTheme('jqx-icon-cancel')} style={iconStyle} />
                        </JqxButton>
                    </JqxTooltip>;
                const updateComponent =
                    <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Update'}>
                        <JqxButton theme={'material-purple'} ref={this.updateButton}
                            onClick={updateHandler}
                            disabled={true} height={25} width={25}>
                            <div className={toTheme('jqx-icon-save')} style={iconStyle} />
                        </JqxButton>
                    </JqxTooltip>;

                ReactDOM.render(addComponent, addButtonDom);
                ReactDOM.render(editComponent, editButtonDom);
                ReactDOM.render(deleteComponent, deleteButtonDom);
                ReactDOM.render(cancelComponent, cancelButtonDom);
                ReactDOM.render(updateComponent, updateButtonDom);
            },
            source: dataAdapter
        }
    }

    public render() {
        return (
            <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                onRowSelect={this.rowSelect}
                onRowUnselect={this.rowUnselect}
                onRowBeginEdit={this.rowBeginEdit}
                onRowEndEdit={this.rowEndEdit}
                // @ts-ignore
                width={'100%'}
                source={this.state.source}
                pageable={true}
                editable={true}
                showToolbar={true}
                altRows={true}
                pagerButtonsCount={8}
                toolbarHeight={35}
                renderToolbar={this.state.renderToolbar}
                columns={this.state.columns}
            />
        );
    }

    private setButtonState = (button: any, state: boolean) => {
        button.current!.setOptions({ disabled: state });
    };

    private updateButtons = (action: string, buttons?: any) => {
        switch (action) {
            case 'Select':
                this.setButtonState(this.addButton, false);
                this.setButtonState(this.deleteButton, false);
                this.setButtonState(this.editButton, false);
                this.setButtonState(this.cancelButton, false);
                this.setButtonState(this.updateButton, false);
                break;
            case 'Unselect':
                this.setButtonState(this.addButton, true);
                this.setButtonState(this.deleteButton, true);
                this.setButtonState(this.editButton, true);
                this.setButtonState(this.cancelButton, true);
                this.setButtonState(this.updateButton, true);

                break;
            case 'Edit':
                this.setButtonState(this.addButton, true);
                this.setButtonState(this.deleteButton, true);
                this.setButtonState(this.editButton, true);
                this.setButtonState(this.cancelButton, false);
                this.setButtonState(this.updateButton, false);
                break;
            case 'End Edit':
                this.setButtonState(this.addButton, false);
                this.setButtonState(this.deleteButton, false);
                this.setButtonState(this.editButton, false);
                this.setButtonState(this.cancelButton, true);
                this.setButtonState(this.updateButton, true);
                break;
        }
    };

    // Event handling
    private rowSelect(event: any): void {
        const args = event.args;
        this.rowKey = args.key;
        this.updateButtons('Select');
    }

    private rowUnselect(event: any): void {
        this.updateButtons('Unselect');
    }

    private rowBeginEdit(event: any): void {
        this.updateButtons('Edit');
    }

    private rowEndEdit(event: any): void {
        this.updateButtons('End Edit');
    }
}

export default App;
