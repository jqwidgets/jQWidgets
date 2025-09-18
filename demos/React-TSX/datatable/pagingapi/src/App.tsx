import * as React from 'react';
import { useRef, useState } from 'react';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

const App = () => {
    const myDataTable = useRef<JqxDataTable>(null);
    const myInput = useRef<JqxInput>(null);
    const myPanel = useRef<JqxPanel>(null);

    const source = React.useMemo(() => ({
        dataFields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        dataType: 'array',
        localData: generatedata(200, false)
    }), []);

    const columns: IDataTableProps['columns'] = [
        { text: 'Name', dataField: 'firstname', width: 200 },
        { text: 'Last Name', dataField: 'lastname', width: 200 },
        { text: 'Product', editable: false, dataField: 'productname', width: 180 },
        { text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right' },
        { text: 'Unit Price', dataField: 'price', width: 80, cellsAlign: 'right', cellsFormat: 'c2' },
        { text: 'Total', dataField: 'total', cellsAlign: 'right', cellsFormat: 'c2' }
    ];

    const [pagerModeSelected, setPagerModeSelected] = useState<IDropDownListProps['selectedIndex']>(0);
    const [pagerMode, setPagerMode] = useState<IDataTableProps['pagerMode']>('default');
    const [pagerPositionSelected, setPagerPositionSelected] = useState<IDropDownListProps['selectedIndex']>(2);
    const [pagerPosition, setPagerPosition] = useState<IDataTableProps['pagerPosition']>('both');
    const [dataAdapter] = useState(new jqx.dataAdapter(source));

    const pagerModeListOnSelect = (event: any) => {
        const index = event.args.index;
        const mode = index === 0 ? 'default' : 'advanced';
        setPagerModeSelected(index);
        setPagerMode(mode);
    };

    const pagerPositionListOnSelect = (event: any) => {
        const index = event.args.index;
        let position: IDataTableProps['pagerPosition'];
        if (index === 0) position = 'top';
        else if (index === 1) position = 'bottom';
        else position = 'both';
        setPagerPositionSelected(index);
        setPagerPosition(position);
    };

    const btnOnClick = () => {
        const value = myInput.current?.getOptions('value');
        let page = parseInt(value, 10);
        if (!isNaN(page)) {
            page--;
            if (page < 0) page = 0;
            myDataTable.current?.goToPage(page);
        }
    };

    const tableOnPageChanged = (event: any) => {
        const count = document.getElementsByClassName('logged');
        if (count.length >= 5) {
            myPanel.current?.clearcontent();
        }
        const args = event.args;
        const eventData = '<div>Page:' + (1 + args.pagenum) + ', Page Size: ' + args.pageSize + '</div>';
        myPanel.current?.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
    };

    const tableOnPageSizeChanged = (event: any) => {
        myPanel.current?.clearcontent();
        const args = event.args;
        const eventData = '<div>Page:' + (1 + args.pagenum) + ', Page Size: ' + args.pageSize + ', Old Page Size: ' + args.oldPageSize + '</div>';
        myPanel.current?.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    };

    return (
        <div>
            <JqxDataTable
                theme={'material-purple'}
                ref={myDataTable}
                style={{ float: 'left' }}
                onPageChanged={tableOnPageChanged}
                onPageSizeChanged={tableOnPageSizeChanged}
                // @ts-ignore
                width={'100%'}
                source={dataAdapter}
                columns={columns}
                pageable={true}
                altRows={true}
                pagerPosition={pagerPosition}
                pagerMode={pagerMode}
            />

            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left', marginLeft: '30px' }}>
                <div><strong>Settings</strong></div>
                <div style={{ marginTop: '10px' }}>
                    <div>Pager Mode:</div>

                    <JqxDropDownList
                        theme={'material-purple'}
                        style={{ marginTop: '5px' }}
                        onSelect={pagerModeListOnSelect}
                        width={120}
                        height={25}
                        selectedIndex={pagerModeSelected}
                        source={['default', 'advanced']}
                        autoDropDownHeight={true}
                    />

                    <div style={{ marginTop: '10px' }}>Pager Position:</div>

                    <JqxDropDownList
                        theme={'material-purple'}
                        style={{ marginTop: '5px' }}
                        onSelect={pagerPositionListOnSelect}
                        width={120}
                        height={25}
                        selectedIndex={pagerPositionSelected}
                        source={['top', 'bottom', 'both']}
                        autoDropDownHeight={true}
                    />

                    <div style={{ marginTop: '10px' }}>Go to Page:</div>

                    <div style={{ marginTop: '5px', marginRight: '5px', float: 'left' }}>
                        <JqxInput
                            theme={'material-purple'}
                            ref={myInput}
                            width={120}
                            height={25}
                            value={1}
                        />
                    </div>

                    <div style={{ marginTop: '6px', float: 'left' }}>
                        <JqxButton
                            theme={'material-purple'}
                            onClick={btnOnClick}
                            height={20}
                        >
                            Apply
                        </JqxButton>
                    </div>

                </div>
                <div style={{ clear: 'both' }} />
                <div style={{ marginTop: '10px' }}>
                    <div>Event Log:</div>
                    <JqxPanel
                        theme={'material-purple'}
                        ref={myPanel}
                        style={{ marginTop: '5px' }}
                        width={155}
                        height={150}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;