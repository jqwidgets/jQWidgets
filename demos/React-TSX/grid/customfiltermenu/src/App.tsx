import React, { useRef, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const myPanel = useRef<JqxPanel>(null);
    const myInput = useRef<JqxInput>(null);

    const source: any = {
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        datatype: 'array',
        localdata: generatedata(500, false)
    };

    const dataAdapter = new jqx.dataAdapter(source);

    const buildFilterPanel = useCallback((filterPanel: any, datafield: string) => {
        const dataSource = {
            async: false,
            datatype: 'array',
            localdata: dataAdapter.records
        };
        const inputDataAdapter = new jqx.dataAdapter(dataSource, {
            async: false,
            autoBind: false,
            autoSort: true,
            autoSortField: datafield,
            uniqueDataFields: [datafield]
        });
        const column = myGrid.current!.getcolumn(datafield);

        const filterButtonClick = () => {
            const filtergroup = new jqx.filter();
            const filterOrOperator = 1;
            const filtervalue = myInput.current!.getOptions('value');
            const filtercondition = 'contains';
            const filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.addfilter(filterOrOperator, filter1);
            myGrid.current!.addfilter(datafield, filtergroup);
            myGrid.current!.applyfilters();
            myGrid.current!.closemenu();
        };

        const filterClearButtonClick = () => {
            myGrid.current!.removefilter(datafield, false);
            myGrid.current!.applyfilters();
            myGrid.current!.closemenu();
        };

        ReactDOM.render(
            <div>
                <JqxInput
                    theme={'material-purple'}
                    ref={myInput}
                    style={{ margin: '5px' }}
                    width={175}
                    height={20}
                    source={inputDataAdapter}
                    displayMember={'datafield'}
                    popupZIndex={99999}
                    placeHolder={`Enter ${column.text}`}
                />
                <div style={{ height: '25px', marginLeft: '20px', marginTop: '7px' }}>
                    <JqxButton
                        theme={'material-purple'}
                        style={{ marginLeft: '16px', float: 'left' }}
                        onClick={filterButtonClick}
                        width={45}
                        height={25}
                        value={'Filter'}
                    />
                    <JqxButton
                        theme={'material-purple'}
                        style={{ marginLeft: '12px', float: 'left' }}
                        onClick={filterClearButtonClick}
                        width={45}
                        height={25}
                        value={'Clear'}
                    />
                </div>
            </div>,
            filterPanel[0]
        );
    }, [dataAdapter]);

    const columnmenuopening = useCallback((menu: any, datafield: any, height: any) => {
        const column: any = myGrid.current!.getcolumn(datafield);
        if (column.filtertype === 'custom') {
            menu.height(155);
            setTimeout(() => {
                menu.find('input').focus();
            }, 25);
        } else {
            menu.height(height);
        }
    }, []);

    const [columns] = useState([
        {
            createfilterpanel: (datafield: string, filterPanel: any): void => {
                buildFilterPanel(filterPanel, datafield);
            },
            datafield: 'firstname',
            filtertype: 'custom',
            text: 'First Name',
            width: 160
        },
        {
            createfilterpanel: (datafield: string, filterPanel: any): void => {
                buildFilterPanel(filterPanel, datafield);
            },
            datafield: 'lastname',
            filtertype: 'custom',
            text: 'Last Name',
            width: 160
        },
        { text: 'Product', datafield: 'productname', filtertype: 'checkedlist', width: 170 },
        { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ]);

    const [gridSource] = useState(dataAdapter);

    const myGridOnFilter = useCallback(() => {
        myPanel.current!.clearcontent();
        const filterinfo = myGrid.current!.getfilterinformation();
        for (const filterinfoItem of filterinfo) {
            const eventData = 'Filter Column: ' + filterinfoItem.filtercolumntext;
            myPanel.current!.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        }
    }, []);

    const removeFilterBtnOnClick = useCallback(() => {
        myGrid.current!.clearfilters();
    }, []);

    const filterBackgroundCheckBoxOnChange = useCallback((event: any) => {
        myGrid.current!.setOptions({ showfiltercolumnbackground: event.args.checked });
    }, []);

    const filterIconsCheckBoxOnChange = useCallback((event: any) => {
        myGrid.current!.setOptions({ autoshowfiltericon: !event.args.checked });
    }, []);

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                onFilter={myGridOnFilter}
                width={'100%'}
                source={gridSource}
                columns={columns}
                sortable={true}
                filterable={true}
                autoshowfiltericon={true}
                columnmenuopening={columnmenuopening}
            />

            <div style={{ marginTop: '30px' }}>
                <div style={{ width: '200px', float: 'left', marginRight: '10px' }}>
                    <JqxButton
                        theme={'material-purple'}
                        width={120}
                        height={20}
                        onClick={removeFilterBtnOnClick}
                    >
                        Remove Filter
                    </JqxButton>
                    <JqxCheckBox
                        theme={'material-purple'}
                        onChange={filterBackgroundCheckBoxOnChange}
                        height={25}
                        checked={true}
                    >
                        Filter Background
                    </JqxCheckBox>
                    <JqxCheckBox
                        theme={'material-purple'}
                        height={25}
                        onChange={filterIconsCheckBoxOnChange}
                    >
                        Show All Filter Icons
                    </JqxCheckBox>
                </div>
                <div style={{ float: 'left' }}>
                    Event Log:
                    <JqxPanel theme={'material-purple'} ref={myPanel} width={300} height={80} />
                </div>
            </div>
        </div>
    );
};

export default App;