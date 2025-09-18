import React, { useRef, useState, useCallback } from 'react';
import * as ReactDOM from "react-dom";
import './App.css';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
    const myTreeGrid = useRef<JqxTreeGrid>(null);
    const addButton = useRef<JqxButton>(null);
    const editButton = useRef<JqxButton>(null);
    const deleteButton = useRef<JqxButton>(null);
    const cancelButton = useRef<JqxButton>(null);
    const updateButton = useRef<JqxButton>(null);

    const rowKeyRef = useRef<any>('');
    const newRowIDRef = useRef<any>(null);

    const [treeProps] = useState<ITreeGridProps>(() => {
        const source: any = {
            addRow: (rowID?: any, rowData?: any, position?: any, parentID?: any, commit?: any) => {
                newRowIDRef.current = rowID;
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
                commit(true);
            },
            hierarchy: {
                keyDataField: { name: 'Id' },
                parentDataField: { name: 'ParentID' }
            },
            id: 'Id',
            updateRow: (rowID?: any, rowData?: any, commit?: any) => {
                commit(true);
            },
            url: './assets/sampledata/locations.tsv'
        };
        const dataAdapter: any = new jqx.dataAdapter(source);

        return {
            columns: [
                { text: 'Location Name', dataField: 'Name', align: 'center', width: '50%' },
                { text: 'Population', dataField: 'Population', align: 'right', cellsAlign: 'right', width: '50%' }
            ],
            source: dataAdapter,
            renderToolbar: (toolBar: any) => {
                const toTheme = (className: string) => className;
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
                    if (!isDisabled(addButton)) {
                        myTreeGrid.current!.expandRow(rowKeyRef.current);
                        myTreeGrid.current!.addRow(null, {}, 'first', rowKeyRef.current);
                        myTreeGrid.current!.clearSelection();
                        myTreeGrid.current!.selectRow(newRowIDRef.current);
                        myTreeGrid.current!.beginRowEdit(newRowIDRef.current);
                        updateButtons('Add');
                    }
                };

                const editHandler = () => {
                    if (!editButton.current!.props!.disabled) {
                        myTreeGrid.current!.beginRowEdit(rowKeyRef.current);
                        updateButtons('Edit');
                    }
                };

                const deleteHandler = () => {
                    if (!isDisabled(deleteButton)) {
                        const selection = myTreeGrid.current!.getSelection();
                        if (selection.length > 1) {
                            for (const key of selection) {
                                myTreeGrid.current!.deleteRow(key.Id);
                            }
                        } else {
                            myTreeGrid.current!.deleteRow(rowKeyRef.current);
                        }
                        updateButtons('Delete');
                    }
                };

                const cancelHandler = () => {
                    if (!isDisabled(cancelButton)) {
                        myTreeGrid.current!.endRowEdit(rowKeyRef.current, true);
                    }
                };

                const updateHandler = () => {
                    if (!isDisabled(updateButton)) {
                        myTreeGrid.current!.endRowEdit(rowKeyRef.current, false);
                    }
                };

                const iconStyle = { margin: '4px', width: '16px', height: '16px' };

                const addComponent =
                    <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Add'}>
                        <JqxButton theme={'material-purple'} ref={addButton}
                            onClick={addHandler}
                            disabled={true} height={25} width={25}>
                            <div className={toTheme('jqx-icon-plus')} style={iconStyle} />
                        </JqxButton>
                    </JqxTooltip>;
                const editComponent =
                    <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Edit'}>
                        <JqxButton theme={'material-purple'} ref={editButton}
                            onClick={editHandler}
                            disabled={true} height={25} width={25}>
                            <div className={toTheme('jqx-icon-edit')} style={iconStyle} />
                        </JqxButton>
                    </JqxTooltip>;
                const deleteComponent =
                    <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Delete'}>
                        <JqxButton theme={'material-purple'} ref={deleteButton}
                            onClick={deleteHandler}
                            disabled={true} height={25} width={25}>
                            <div className={toTheme('jqx-icon-delete')} style={iconStyle} />
                        </JqxButton>
                    </JqxTooltip>;
                const cancelComponent =
                    <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Cancel'}>
                        <JqxButton theme={'material-purple'} ref={cancelButton}
                            onClick={cancelHandler}
                            disabled={true} height={25} width={25}>
                            <div className={toTheme('jqx-icon-cancel')} style={iconStyle} />
                        </JqxButton>
                    </JqxTooltip>;
                const updateComponent =
                    <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Update'}>
                        <JqxButton theme={'material-purple'} ref={updateButton}
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
            }
        };
    });

    const setButtonState = useCallback((button: any, state: boolean) => {
        if (button.current) {
            button.current.setOptions({ disabled: state });
        }
    }, []);

    const updateButtons = useCallback((action: string) => {
        switch (action) {
            case 'Select':
                setButtonState(addButton, false);
                setButtonState(deleteButton, false);
                setButtonState(editButton, false);
                setButtonState(cancelButton, false);
                setButtonState(updateButton, false);
                break;
            case 'Unselect':
                setButtonState(addButton, true);
                setButtonState(deleteButton, true);
                setButtonState(editButton, true);
                setButtonState(cancelButton, true);
                setButtonState(updateButton, true);
                break;
            case 'Edit':
                setButtonState(addButton, true);
                setButtonState(deleteButton, true);
                setButtonState(editButton, true);
                setButtonState(cancelButton, false);
                setButtonState(updateButton, false);
                break;
            case 'End Edit':
                setButtonState(addButton, false);
                setButtonState(deleteButton, false);
                setButtonState(editButton, false);
                setButtonState(cancelButton, true);
                setButtonState(updateButton, true);
                break;
        }
    }, [setButtonState, addButton, editButton, deleteButton, cancelButton, updateButton]);

    const rowSelect = useCallback((event: any) => {
        const args = event.args;
        rowKeyRef.current = args.key;
        updateButtons('Select');
    }, [updateButtons]);

    const rowUnselect = useCallback(() => {
        updateButtons('Unselect');
    }, [updateButtons]);

    const rowBeginEdit = useCallback(() => {
        updateButtons('Edit');
    }, [updateButtons]);

   