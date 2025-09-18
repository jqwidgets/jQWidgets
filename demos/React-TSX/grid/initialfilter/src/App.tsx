import * as React from 'react';
import { useRef, useCallback, useState, useMemo } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);

    const source = useMemo(() => ({
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
    }), []);

    const columns = useMemo(() => [
        { text: 'First Name', datafield: 'firstname', width: 160 },
        { text: 'Last Name', datafield: 'lastname', width: 160 },
        { text: 'Product', datafield: 'productname', width: 170 },
        { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ], []);

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);

    const firstNameColumnFilter = useCallback(() => {
        const filtergroup = new jqx.filter();
        const filterOrOperator = 1;
        const filtervalue = 'Nancy';
        const filtercondition = 'contains';
        const filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filterOrOperator, filter);
        myGrid.current?.addfilter('firstname', filtergroup);
        myGrid.current?.applyfilters();
    }, []);

    const ready = useCallback(() => {
        setTimeout(() => {
            firstNameColumnFilter();
        });
    }, [firstNameColumnFilter]);

    return (
        <JqxGrid
            theme="material-purple"
            ref={myGrid}
            // @ts-ignore
            width="100%"
            source={dataAdapter}
            columns={columns}
            filterable={true}
            sortable={true}
            ready={ready}
        />
    );
};

export default App;