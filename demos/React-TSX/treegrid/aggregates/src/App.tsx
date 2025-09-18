import * as React from 'react';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

function App() {
    const myTreeGrid = React.useRef<JqxTreeGrid>(null);

    const source: any = React.useMemo(() => ({
        dataFields: [
            { name: "Id", type: "number" },
            { name: "Name", type: "string" },
            { name: "ParentID", type: "number" },
            { name: "Population", type: "number" }
        ],
        dataType: 'tab',
        hierarchy: {
            keyDataField: { name: 'Id' },
            parentDataField: { name: 'ParentID' }
        },
        id: 'Id',
        url: 'locations.tsv'
    }), []);

    const dataAdapter: any = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    const columns = React.useMemo(() => [
        { align: 'center', dataField: 'Name', text: 'Location Name', width: '50%' },
        { aggregates: ['min', 'max', 'count'], align: 'center', dataField: 'Population', text: 'Population', width: '50%' }
    ], []);

    const ready = React.useCallback(() => {
        myTreeGrid.current && myTreeGrid.current.expandRow(34);
    }, []);

    return (
        <JqxTreeGrid
            theme="material-purple"
            ref={myTreeGrid}
            width="100%"
            pageable
            pageSize={25}
            showAggregates
            showSubAggregates
            aggregatesHeight={70}
            sortable
            height={400}
            source={dataAdapter}
            columns={columns}
            ready={ready}
        />
    );
}

export default App;