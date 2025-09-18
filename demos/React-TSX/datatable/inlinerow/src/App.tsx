import * as React from 'react';
import * as ReactDOM from 'react-dom';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';

const App = () => {
    const myDataTable = React.useRef<JqxDataTable>(null);
    const shipCountryInput = React.useRef<JqxInput>(null);
    const myAddButton = React.useRef<JqxButton>(null);
    const myEditButton = React.useRef<JqxButton>(null);
    const myDeleteButton = React.useRef<JqxButton>(null);
    const myCancelButton = React.useRef<JqxButton>(null);
    const myUpdateButton = React.useRef<JqxButton>(null);
    const rowIndex = React.useRef<number | undefined>(undefined);

    const source = React.useMemo(() => ({
        dataFields: [
            { name: 'OrderID', type: 'int' },
            { name: 'Freight', type: 'float' },
            { name: 'ShipName', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShippedDate', type: 'date' }
        ],
        dataType: 'xml',
        id: 'OrderID',
        record: 'Order',
        root: 'Orders',
        url: 'orderdetails.xml'
    }), []);

    const toTheme = React.useCallback((className: string) => {
        const theme = jqx.theme;
        if (theme === '') {
            return className;
        }
        return className + ' ' + className + '-' + theme;
    }, []);

    const updateButtons = React.useCallback((action: string) => {
        switch (action) {
            case 'Select':
                myAddButton.current?.setOptions({ disabled: false });
                myDeleteButton.current?.setOptions({ disabled: false });
                myEditButton.current?.setOptions({ disabled: false });
                myCancelButton.current?.setOptions({ disabled: true });
                myUpdateButton.current?.setOptions({ disabled: true });
                break;
            case 'Unselect':
                myAddButton.current?.setOptions({ disabled: false });
                myDeleteButton.current?.setOptions({ disabled: true });
                myEditButton.current?.setOptions({ disabled: true });
                myCancelButton.current?.setOptions({ disabled: true });
                myUpdateButton.current?.setOptions({ disabled: true });
                break;
            case 'Edit':
                myAddButton.current?.setOptions({ disabled: true });
                myDeleteButton.current?.setOptions({ disabled: true });
                myEditButton.current?.setOptions({ disabled: true });
                myCancelButton.current?.setOptions({ disabled: false });
                myUpdateButton.current?.setOptions({ disabled: false });
                break;
            case 'End Edit':
                myAddButton.current?.setOptions({ disabled: false });
                myDeleteButton.current?.setOptions({ disabled: false });
                myEditButton.current?.setOptions({ disabled: false });
                myCancelButton.current?.setOptions({ disabled: true });
                myUpdateButton.current?.setOptions({ disabled: true });
                break;
        }
    }, []);

    const onRowSelect = React.useCallback((event: any) => {
        rowIndex.current = event.args.index;
        updateButtons('Select');
    }, [updateButtons]);

    const onRowUnselect = React.useCallback((event: any) => {
        updateButtons('Unselect');
    }, [updateButtons]);

    const onRowEndEdit = React.useCallback((event: any) => {
        updateButtons('End Edit');
    }, [updateButtons]);

    const onRowBeginEdit = React.useCallback((event: any) => {
        updateButtons('Edit');
    }, [updateButtons]);

    const renderToolbar = React.useCallback((toolBar: any) => {
        const theme = jqx.theme;
        const container = document.createElement('div');
        container.id = "myContainer";
        const fragment = document.createDocumentFragment();
        container.style.cssText = 'overflow: hidden; height: 100%; width: 100%';

        const createButtons = (_name: string, _cssClass: string) => {
            const button = document.createElement('div');
            button.style.cssText = 'float: left;';
            return button;
        };

        const buttons = [
            createButtons('addButton', toTheme('jqx-icon-plus')),
            createButtons('editButton', toTheme('jqx-icon-edit')),
            createButtons('deleteButton', toTheme('jqx-icon-delete')),
            createButtons('cancelButton', toTheme('jqx-icon-cancel')),
            createButtons('updateButton', toTheme('jqx-icon-save'))
        ];

        for (const btn of buttons) {
            fragment.appendChild(btn);
        }
        container.appendChild(fragment);
        toolBar[0].appendChild(container);

        const addHandler = () => {
            if (!myAddButton.current!.getOptions('disabled')) {
                myDataTable.current!.addRow(null, {}, 'first');
                myDataTable.current!.clearSelection();
                myDataTable.current!.selectRow(0);
                myDataTable.current!.beginRowEdit(0);
                updateButtons('add');
            }
        };

        const editHandler = () => {
            if (!myEditButton.current!.getOptions('disabled')) {
                if (rowIndex.current !== undefined) {
                    myDataTable.current!.beginRowEdit(rowIndex.current);
                    updateButtons('edit');
                }
            }
        };

        const deleteHandler = () => {
            if (!myDeleteButton.current!.getOptions('disabled')) {
                if (rowIndex.current !== undefined) {
                    myDataTable.current!.deleteRow(rowIndex.current);
                    updateButtons('delete');
                }
            }
        };

        const cancelHandler = () => {
            if (!myCancelButton.current!.getOptions('disabled')) {
                if (rowIndex.current !== undefined) {
                    myDataTable.current!.endRowEdit(rowIndex.current, true);
                }
            }
        };

        const saveHandler = () => {
            if (!myUpdateButton.current!.getOptions('disabled')) {
                if (rowIndex.current !== undefined) {
                    myDataTable.current!.endRowEdit(rowIndex.current, false);
                }
            }
        };

        const buttonStyle = { margin: '2px', padding: '3px', border: 'none' };
        const iconStyle = { margin: '4px', width: '16px', height: '16px' };

        ReactDOM.render(
            <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Add'}>
                <JqxButton theme={'material-purple'} ref={myAddButton} onClick={addHandler} style={buttonStyle} width={25} height={25}>
                    <div className={toTheme('jqx-icon-plus')} style={iconStyle} />
                </JqxButton>
            </JqxTooltip>,
            buttons[0]
        );
        ReactDOM.render(
            <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Edit'}>
                <JqxButton theme={'material-purple'} ref={myEditButton} onClick={editHandler} style={buttonStyle} width={25} height={25} disabled={true}>
                    <div className={toTheme('jqx-icon-edit')} style={iconStyle} />
                </JqxButton>
            </JqxTooltip>,
            buttons[1]
        );
        ReactDOM.render(
            <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Delete'}>
                <JqxButton theme={'material-purple'} ref={myDeleteButton} onClick={deleteHandler} style={buttonStyle} width={25} height={25} disabled={true}>
                    <div className={toTheme('jqx-icon-delete')} style={iconStyle} />
                </JqxButton>
            </JqxTooltip>,
            buttons[2]
        );
        ReactDOM.render(
            <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Cancel'}>
                <JqxButton theme={'material-purple'} ref={myCancelButton} onClick={cancelHandler} style={buttonStyle} width={25} height={25} disabled={true}>
                    <div className={toTheme('jqx-icon-cancel')} style={iconStyle} />
                </JqxButton>
            </JqxTooltip>,
            buttons[3]
        );
        ReactDOM.render(
            <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Save Changes'}>
                <JqxButton theme={'material-purple'} ref={myUpdateButton} onClick={saveHandler} style={buttonStyle} width={25} height={25} disabled={true}>
                    <div className={toTheme('jqx-icon-save')} style={iconStyle} />
                </JqxButton>
            </JqxTooltip>,
            buttons[4]
        );
    }, [toTheme, updateButtons]);

    const columns = React.useMemo<IDataTableProps['columns']