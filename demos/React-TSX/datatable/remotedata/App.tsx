import * as React from 'react';
 


import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

class App extends React.PureComponent<{}, IDataTableProps> {

    constructor(props: {}) {
        super(props);

        const source = {
            dataFields: [
                { name: 'countryName', type: 'string' },
                { name: 'name', type: 'string' },
                { name: 'population', type: 'float' },
                { name: 'continentCode', type: 'string' }
            ],
            dataType: 'jsonp',
            url: 'http://api.geonames.org/searchJSON'
        };

        this.state = {
            columns: [
                { text: 'Country Name', dataField: 'countryName', width: 200 },
                { text: 'City', dataField: 'name', width: 250 },
                { text: 'Population', dataField: 'population', cellsFormat: 'f', width: 250 },
                { text: 'Continent Code', dataField: 'continentCode' }
            ],
            source: new jqx.dataAdapter(source, {
                formatData(data: any): any {
                    data.featureClass = 'P';
                    data.style = 'full';
                    data.username = 'jqwidgets';
                    data.maxRows = 50;

                    return data;
                }
            })
        };
    }

    public render() {
        return (
            <JqxDataTable theme={'material-purple'}
                // @ts-ignore 
                width={'100%'} source={this.state.source} columns={this.state.columns}
                pageable={true} columnsResize={true} pagerButtonsCount={10} />
        );
    }
}

export default App;