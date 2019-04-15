import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            dataFields: [
                { name: 'name', type: 'string' },
                { name: 'type', type: 'string' },
                { name: 'calories', type: 'int' },
                { name: 'totalfat', type: 'string' },
                { name: 'protein', type: 'string' }
            ],
            dataType: 'json',
            id: 'id',
            url: 'beverages.txt'
        };

        this.state = {
            columns: [
                { text: 'Name', dataField: 'name', width: 300 },
                { text: 'Beverage Type', dataField: 'type', width: 300 },
                { text: 'Calories', dataField: 'calories', width: 180 },
                { text: 'Total Fat', dataField: 'totalfat', width: 120 },
                { text: 'Protein', dataField: 'protein' }
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