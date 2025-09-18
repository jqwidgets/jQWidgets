import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import './App.css';
import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

function App() {
    const myGrid = useRef<JqxGrid>(null);
    const myPanel = useRef<JqxPanel>(null);
    const count = useRef<number>(0);

    const [columns] = useState([
        { text: 'First Name', datafield: 'firstname', width: 160 },
        { text: 'Last Name', datafield: 'lastname', width: 160 },
        { text: 'Product', datafield: 'productname', width: 170 },
        { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ]);

    const [source] = useState(() => {
        const src: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(500, false)
        };
        return new jqx.dataAdapter(src);
    });

    const addfilter = useCallback(() => {
        const filtergroup = new jqx.filter();
        const filterOrOperator = 1;
        let filtervalue = 'Beate';
        let filtercondition = 'contains';
        const filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtervalue = 'Andrew';
        filtercondition = 'starts_with';
        const filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filterOrOperator, filter1);
        filtergroup.addfilter(filterOrOperator, filter2);
        myGrid.current?.addfilter('firstname', filtergroup, true);
        myGrid.current?.applyfilters();
    }, []);

    const ready = useCallback(() => {
        setTimeout(() => {
            addfilter();
        });
    }, [addfilter]);

    const onFilter = useCallback((event: any) => {
        if (count.current > 1) {
            myPanel.current?.clearcontent();
            const filterinfo = myGrid.current?.getfilterinformation() || [];
            for (const info of filterinfo) {
                const eventData = 'Filter Column: ' + info.filtercolumntext;
                myPanel.current?.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
            }
        }
        count.current += 1;
    }, []);

    const clearFilteringBtnOnClick = useCallback(() => {
        myGrid.current?.clearfilters();
    }, []);

    const filterBackgroundOnChange = useCallback((event: any) => {
        myGrid.current?.setOptions({ showfiltercolumnbackground: event.args.checked });
    }, []);

    const filterIconsOnChange = useCallback((event: any) => {
        myGrid.current?.setOptions({ autoshowfiltericon: !event.args.checked });
    }, []);

    return (
        <div>
            <JqxGrid
                theme="material-purple"
                ref={myGrid}
                onFilter={onFilter}
                width="100%"
                source={source}
                columns={columns}
                filterable
                sortable
                ready={ready}
                autoshowfiltericon
            />
            <div style={{ marginTop: '30px' }}>
                <div style={{ width: '200px', float: 'left', marginRight: '10px' }}>
                    <JqxButton theme="material-purple" onClick={clearFilteringBtnOnClick} width={100} height={20}>
                        Remove Filter
                    </JqxButton>
                    <JqxCheckBox
                        theme="material-purple"
                        onChange={filterBackgroundOnChange}
                        height={25}
                        checked={true}
                    >
                        Filter Background
                    </JqxCheckBox>
                    <JqxCheckBox
                        theme="material-purple"
                        onChange={filterIconsOnChange}
                        height={25}
                    >
                        Show All Filter Icons
                    </JqxCheckBox>
                </div>
                <div style={{ float: 'left' }}>
                    Event Log:
                    <JqxPanel theme="material-purple" ref={myPanel} width={300} height={80} />
                </div>
            </div>
        </div>
    );
}

export default App;