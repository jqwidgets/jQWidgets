import * as React from 'react';
import { useRef, useCallback, useMemo } from 'react';

import { generateordersdata } from './../public/generatedata';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

const App = () => {
    const myTreeGrid = useRef<JqxTreeGrid>(null);
    const myPanel = useRef<JqxPanel>(null);
    const myInput = useRef<JqxInput>(null);
    const loopRef = useRef<number>(0);

    const dataAdapter = useMemo(() => {
        const source: any = {
            dataFields: [
                { name: 'name', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'id', type: 'string' },
                { name: 'parentid', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'date', type: 'date' },
                { name: 'customer', type: 'string' }
            ],
            dataType: 'array',
            hierarchy: {
                keyDataField: { name: 'id' },
                parentDataField: { name: 'parentid' }
            },
            id: 'id',
            localData: generateordersdata(10)
        };
        return new jqx.dataAdapter(source);
    }, []);

    const columns = useMemo(() => [
        { align: "center", dataField: "name", text: "Order Name", width: 250 },
        { align: "center", dataField: "customer", text: "Customer", width: 250 },
        { align: "center", cellsAlign: "right", cellsFormat: "c2", dataField: "price", text: "Price", width: 80 },
        {
            align: "center",
            cellsFormat: "dd-MMMM-yyyy hh:mm",
            cellsRenderer: (rowKey?: number, column?: any, cellValue?: any, rowData?: any, cellText?: any) => {
                if (rowData.level === 0) {
                    return dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                }
                return cellText;
            },
            dataField: "date",
            text: "Order Date"
        }
    ], [dataAdapter]);

    const ready = useCallback(() => {
        setTimeout(() => {
            myTreeGrid.current?.expandRow(1);
        }, 0);
    }, []);

    const myTreeGridOnPageChanged = useCallback((event: any) => {
        if (loopRef.current >= 5) {
            myPanel.current?.clearcontent();
            loopRef.current = 0;
        }
        loopRef.current++;
        const args = event.args;
        const eventData = `<div>Page:${1 + args.pagenum}, Page Size: ${args.pageSize}</div>`;
        myPanel.current?.prepend(`<div class="logged" style="margin-top: 5px;">${eventData}</div>`);
    }, []);

    const myTreeGridOnPageSizeChanged = useCallback((event: any) => {
        myPanel.current?.clearcontent();
        const args = event.args;
        const eventData = `<div>Page: ${1 + args.pagenum}, Page Size: ${args.pageSize}, Old Page Size: ${args.oldpageSize}</div>`;
        myPanel.current?.prepend(`<div style="margin-top: 5px;">${eventData}</div>`);
    }, []);

    const pagerModeDropDownListOnSelect = useCallback((event: any) => {
        if (event.args.index === 0) {
            myTreeGrid.current?.setOptions({ pagerMode: "default" });
        } else {
            myTreeGrid.current?.setOptions({ pagerMode: "advanced" });
        }
    }, []);

    const pagerPositionDropDownListOnSelect = useCallback((event: any) => {
        if (event.args.index === 0) {
            myTreeGrid.current?.setOptions({ pagerPosition: "top" });
        } else if (event.args.index === 1) {
            myTreeGrid.current?.setOptions({ pagerPosition: "bottom" });
        } else {
            myTreeGrid.current?.setOptions({ pagerPosition: "both" });
        }
    }, []);

    const btnOnClick = useCallback(() => {
        let page = parseInt(myInput.current?.getOptions('value'), 10);
        if (!isNaN(page)) {
            page--;
            if (page < 0) {
                page = 0;
            }
            myTreeGrid.current?.goToPage(page);
        }
    }, []);

    const styleDivs: React.CSSProperties = { marginTop: 10 };

    return (
        <div>
            <div style={{ float: "left" }}>
                <JqxTreeGrid
                    theme={'material-purple'}
                    ref={myTreeGrid}
                    onPageChanged={myTreeGridOnPageChanged}
                    onPageSizeChanged={myTreeGridOnPageSizeChanged}
                    width={560}
                    source={dataAdapter}
                    sortable={true}
                    pageable={true}
                    pagerMode={"advanced"}
                    pagerPosition={"both"}
                    autoRowHeight={false}
                    columns={columns}
                    ready={ready}
                />
            </div>
            <div style={{ float: 'left', fontSize: '13px', fontFamily: 'Verdana', marginLeft: '30px' }}>
                <div><strong>Settings</strong></div>
                <div style={styleDivs}>
                    <div>Pager Mode:</div>
                    <JqxDropDownList
                        theme={'material-purple'}
                        onSelect={pagerModeDropDownListOnSelect}
                        width={120}
                        height={25}
                        selectedIndex={1}
                        source={['default', 'advanced']}
                        autoDropDownHeight={true}
                    />
                    <div style={styleDivs}>Pager Position:</div>
                    <JqxDropDownList
                        theme={'material-purple'}
                        onSelect={pagerPositionDropDownListOnSelect}
                        width={120}
                        height={25}
                        selectedIndex={2}
                        source={['top', 'bottom', 'both']}
                        autoDropDownHeight={true}
                    />
                    <div style={styleDivs}>Go to Page:</div>
                    <div style={{ marginTop: 8, float: "left" }}>
                        <JqxInput
                            theme={'material-purple'}
                            ref={myInput}
                            style={{ float: "left" }}
                            width={120}
                            height={25}
                            value={1}
                        />
                    </div>
                    <JqxButton
                        theme={'material-purple'}
                        style={{ margin: '7px 5px 0 5px', float: "left" }}
                        onClick={btnOnClick}
                    >
                        Apply
                    </JqxButton>
                </div>
                <div style={{ marginTop: '10px', display: 'inline-block' }}>
                    <div>Event Log:</div>
                    <JqxPanel
                        theme={'material-purple'}
                        ref={myPanel}
                        style={{ marginTop: 5 }}
                        width={150}
                        height={150}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
