import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const data = useMemo(() => generatedata(100, false), []);
    const compare = useCallback((value1: any, value2: any): any => {
        value1 = String(value1).toLowerCase();
        value2 = String(value2).toLowerCase();
        try {
            const tmpvalue1 = parseFloat(value1);
            if (isNaN(tmpvalue1)) {
                if (value1 < value2) { return -1; }
                if (value1 > value2) { return 1; }
            }
            else {
                const tmpvalue2 = parseFloat(value2);
                if (tmpvalue1 < tmpvalue2) { return -1; }
                if (tmpvalue1 > tmpvalue2) { return 1; }
            }
        }
        catch (error) {
            alert(error);
        }
        return 0;
    }, []);
    const source = useMemo(() => {
        const customsortfunc = (column: any, direction: string | boolean): void => {
            let sortdata = new Array();
            let dir = direction;
            if (dir === 'ascending') { dir = true; }
            if (dir === 'descending') { dir = false; }
            if (dir != null) {
                for (const dataItem of data) {
                    sortdata.push(dataItem);
                }
            }
            else {
                sortdata = data;
            }
            const tmpToString = Object.prototype.toString;
            const that: any = {};
            Object.prototype.toString = (typeof column === 'function') ? column : () => that[column];
            if (dir != null) {
                sortdata.sort(compare);
                if (!dir) {
                    sortdata.reverse();
                }
            }
            s.localdata = sortdata;
            if (myGrid.current) {
                myGrid.current.updatebounddata('sort');
            }
            Object.prototype.toString = tmpToString;
        };
        const s: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            datatype: 'array',
            localdata: data,
            sort: customsortfunc
        };
        return s;
    }, [data, compare, myGrid]);
    const columns = useMemo(() => [
        { text: 'First Name', datafield: 'firstname', width: 200 },
        { text: 'Last Name', datafield: 'lastname', width: 200 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
    ], []);
    const ready = useCallback(() => {
        setTimeout(() => {
            if (myGrid.current) {
                myGrid.current.sortby('firstname', 'asc');
            }
        });
    }, []);
    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source]);
    return (
        <JqxGrid
            theme="material-purple"
            ref={myGrid}
            width="100%"
            source={dataAdapter}
            columns={columns}
            pageable={true}
            sortable={true}
            autoheight={true}
            ready={ready}
        />
    );
};

export default App;