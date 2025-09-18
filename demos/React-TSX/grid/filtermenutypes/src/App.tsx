import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import './App.css';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const myPanel = useRef<JqxPanel>(null);
    const flag = useRef<boolean>(false);

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

    const columns = [
        { text: 'First Name', datafield: 'firstname', filtertype: 'list', width: 160 },
        { text: 'Last Name', datafield: 'lastname', filtertype: 'list', width: 160 },
        { text: 'Product', datafield: 'productname', filtertype: 'checkedlist', width: 170 },
        { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];

    const [dataAdapter] = useState(() => new jqx.dataAdapter(source));
    const [showfiltercolumnbackground, setShowfiltercolumnbackground] = useState(true);
    const [autoshowfiltericon, setAutoshowfiltericon] = useState(true);

    const addfilter = useCallback(() => {
        if (myGrid.current) {
            const filtergroup = new jqx.filter();
            const filterOrOperator = 1;
            const filtervalue = 'Andrew';
            const filtercondition = 'equal';
            const filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.addfilter(filterOrOperator, filter1);
            myGrid.current.addfilter('firstname', filtergroup);
            myGrid.current.applyfilters();
        }
    }, []);

    const ready = useCallback(() => {
        setTimeout(() => {
            addfilter();
        });
    }, [addfilter]);

    const myGridOnFilter = useCallback((event: any) => {
        if (flag.current) {
            myPanel.current?.clearcontent();
            const filterinfo = myGrid.current!.getfilterinformation();
            for (const info of filterinfo) {
                const eventData = 'Filter Column: ' + info.filtercolumntext;
                myPanel.current!.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
            }
        }
        flag.current = true;
    }, []);

    const clearFilteringBtnOnClick = useCallback(() => {
        myGrid.current?.clearfilters();
    }, []);

    const filterBackgroundOnChange = useCallback((event: any) => {
        const checked = event.args.checked;
        setShowfiltercolumnbackground(checked);
        myGrid.current?.setOptions({ showfiltercolumnbackground: checked });
    }, []);

    const filterIconsOnChange = useCallback((event: any) => {
        const checked = event.args.checked;
        setAutoshowfiltericon(!checked);
        myGrid.current?.setOptions({ autoshowfiltericon: !checked });
    }, []);

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                onFilter={myGridOnFilter}
                width={'100%'}
                source={dataAdapter}
                columns={columns}
                filterable={true}
                sortable={true}
                ready={ready}
                autoshowfiltericon={autoshowfiltericon}
                showfiltercolumnbackground={showfiltercolumnbackground}
            />
            <div style={{ marginTop: '30px' }}>
                <div style={{ width: '200px', float: 'left', marginRight: '10px' }}>
                    <JqxButton
                        theme={'material-purple'}
                        onClick={clearFilteringBtnOnClick}
                        width={100}
                        height={20}
                    >
                        Remove Filter
                    </JqxButton>
                    <JqxCheckBox
                        theme={'material-purple'}
                        style={{ marginTop: '10px' }}
                        onChange={filterBackgroundOnChange}
                        height={25}
                        checked={showfiltercolumnbackground}
                    >
                        Filter Background
                    </JqxCheckBox>
                    <JqxCheckBox
                        theme={'material-purple'}
                        style={{ marginTop: '10px' }}
                        onChange={filterIconsOnChange}
                        height={25}
                        checked={!autoshowfiltericon}
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