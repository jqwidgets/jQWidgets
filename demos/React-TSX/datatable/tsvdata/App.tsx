import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            dataFields: [
                { name: 'Year', type: 'int' },
                { name: 'HPI', type: 'float' },
                { name: 'BuildCost', type: 'float' },
                { name: 'Population', type: 'float' },
                { name: 'Rate', type: 'float' }
            ],
            dataType: 'tab',
            id: 'id',
            url: 'homeprices.txt'
        };

        this.state = {
            columns: [
                { text: 'Year', dataField: 'Year', width: 200 },
                { text: 'HPI', dataField: 'HPI', cellsFormat: 'f2', width: 200 },
                { text: 'Build Cost', dataField: 'BuildCost', cellsFormat: 'f2', width: 180 },
                { text: 'Population', dataField: 'Population', cellsFormat: 'f2', width: 100 },
                { text: 'Rate', dataField: 'Rate', cellsFormat: 'f5' }
            ],
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <JqxDataTable theme={'material-purple'}
                // @ts-ignore 
                width={'100%'} source={this.state.source} columns={this.state.columns}
                columnsResize={true} pageable={true} pagerButtonsCount={10} />
        );
    }
}

export default App;