import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            dataFields: [
                { name: 'Date', type: 'date' },
                { name: 'S&P 500', type: 'float' },
                { name: 'NASDAQ', type: 'float' }
            ],
            dataType: 'csv',
            url: 'nasdaq_vs_sp500.txt'
        };

        this.state = {
            columns: [
                { text: 'Date', dataField: 'Date', cellsFormat: 'D', width: 250 },
                { text: 'S&P 500', dataField: 'S&P 500', width: 300, cellsFormat: 'f' },
                { text: 'NASDAQ', dataField: 'NASDAQ', cellsFormat: 'f' }
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