import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxLoader from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxloader';

class App extends React.PureComponent<{}, IGridProps> {

    private myLoader = React.createRef<JqxLoader>();

    constructor(props: {}) {
        super(props);

        const source = {
            datafields: [
                { name: 'countryName', type: 'string' },
                { name: 'name', type: 'string' },
                { name: 'population', type: 'float' },
                { name: 'continentCode', type: 'string' }
            ],
            datatype: 'jsonp',
            url: 'http://api.geonames.org/searchJSON'
        };

        const dataAdapter = new jqx.dataAdapter(source, {
            formatData: (data: any): any => {
                (Object as any).assign(data, {
                    featureClass: "P",
                    maxRows: 50,
                    style: "full",                    
                    username: "jqwidgets"
                });

                return data;
            },
            loadComplete: (): void => {
                this.myLoader.current!.close();
            },
            loadError: (xhr: any, status: any, error: any): void => { alert(error); }            
        });

        this.state = {
            columns: [
                { text: 'Country Name', datafield: 'countryName', width: 200 },
                { text: 'City', datafield: 'name', width: 170 },
                { text: 'Population', datafield: 'population', cellsformat: 'f', width: 170 },
                { text: 'Continent Code', datafield: 'continentCode', minwidth: 110 }
            ],
            source: dataAdapter
        }
    }

    public render() {
        return (
            <div>
                <JqxLoader theme={'material-purple'} ref={this.myLoader}
                    width={100} height={60} imagePosition={'top'} autoOpen={true} />

                <JqxGrid theme={'material-purple'}
                    // @ts-ignore
                    width={'100%'} height={400} source={this.state.source} columnsresize={true}
                    showdefaultloadelement={false} autoshowloadelement={false} columns={this.state.columns} />
            </div>
        );
    }
}

export default App;