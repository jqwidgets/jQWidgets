import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

        const source: any =
        {
            datafields: [
                { name: 'countryName', type: 'string' },
                { name: 'name', type: 'string' },
                { name: 'population', type: 'float' },
                { name: 'continentCode', type: 'string' }
            ],
            datatype: 'jsonp',
            url: 'http://api.geonames.org/searchJSON'
        };

        this.state = {
            columns: [
                { text: 'Country Name', datafield: 'countryName', width: 200 },
                { text: 'City', datafield: 'name', width: 170 },
                { text: 'Population', datafield: 'population', cellsformat: 'f', width: 170 },
                { text: 'Continent Code', datafield: 'continentCode', minwidth: 110 }
            ],
            source: new jqx.dataAdapter(source,
                {
                    formatData: (data: any): any => {
                        data.featureClass = 'P';
                        data.style = 'full';
                        data.maxRows = 50;
                        data.username = 'jqwidgets';
                        return data;
                    }
                }
            )
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns} columnsresize={true} />
        );
    }
}

export default App;