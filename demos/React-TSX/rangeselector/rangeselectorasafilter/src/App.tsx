import * as React from 'react';
import { useRef, useMemo, useCallback } from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

function App() {
    const myGrid = useRef<JqxGrid>(null);
    const myRangeSelector = useRef<JqxRangeSelector>(null);

    const columngroups = useMemo(() => [
        { text: 'Major scientific discoveries in the 19th century', align: 'center', name: 'header' }
    ], []);

    const columns = useMemo(() => [
        { text: 'Discovery', columngroup: 'header', datafield: 'discovery', width: 250 },
        { text: 'Scientist', columngroup: 'header', datafield: 'scientist', width: 210 },
        { text: 'Year', columngroup: 'header', datafield: 'year', cellsformat: 'yyyy' }
    ], []);

    const source = useMemo(() => {
        const sourceConfig = {
            datafields: [
                { name: 'discovery', type: 'string' },
                { name: 'scientist', type: 'string' },
                { name: 'year', type: 'date' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'discoveries.txt'
        };
        return new jqx.dataAdapter(sourceConfig);
    }, []);

    const applyFilter = useCallback((from: any, to: any) => {
        myGrid.current!.clearfilters();
        const filtertype = 'datefilter';
        const filtergroup = new jqx.filter();
        const filteOrOperator = 0;
        const filtervalueFrom = from;
        const filterconditionFrom = 'GREATER_THAN_OR_EQUAL';
        const filterFrom = filtergroup.createfilter(filtertype, filtervalueFrom, filterconditionFrom);
        filtergroup.addfilter(filteOrOperator, filterFrom);
        const filtervalueTo = to;
        const filterconditionTo = 'LESS_THAN_OR_EQUAL';
        const filterTo = filtergroup.createfilter(filtertype, filtervalueTo, filterconditionTo);
        filtergroup.addfilter(filteOrOperator, filterTo);
        myGrid.current!.addfilter('year', filtergroup);
        myGrid.current!.applyfilters();
    }, []);

    const onChange = useCallback((event: any) => {
        const range = event.args;
        let min = myRangeSelector.current!.getOptions('min');
        let max = myRangeSelector.current!.getOptions('max');
        min = new Date(min);
        max = new Date(max);
        if (range.from.getTime() === min.getTime() && range.to.getTime() === max.getTime()) {
            myGrid.current!.clearfilters();
        } else {
            applyFilter(range.from, range.to);
        }
    }, [applyFilter]);

    return (
        <div>
            <label style={{ fontSize: '13px', fontFamily: 'Verdana' }}>
                Major scientific discoveries in selected period:
            </label>
            <JqxGrid
                theme="material-purple"
                ref={myGrid}
                style={{ marginTop: '10px' }}
                width="100%"
                height={300}
                columns={columns}
                source={source}
                filterable={true}
                columngroups={columngroups}
            />
            <br />
            <label style={{ fontSize: '13px', marginTop: '10px', fontFamily: 'Verdana' }}>
                Select period:
            </label>
            <br />
            <JqxRangeSelector
                theme="material-purple"
                ref={myRangeSelector}
                onChange={onChange}
                width="100%"
                height={80}
                min="January 01, 1800"
                max="January 01, 1900"
                labelsFormat="yyyy"
                markersFormat="yyyy"
                majorTicksInterval={{ years: 10 }}
                minorTicksInterval="year"
            />
        </div>
    );
}

export default App;