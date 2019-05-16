import * as React from 'react';
 


import JqxPivotGrid, { IPivotGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpivotgrid';

class App extends React.PureComponent<{}, IPivotGridProps> {

    constructor(props: {}) {
        super(props);

        const pivotDataSource = this.createPivotDataSource();

        this.state = {
            source: pivotDataSource
        }
    }

    public render() {
        return (
            <JqxPivotGrid theme={'material-purple'} style={{ width: 800, height: 400 }} source={this.state.source}
                treeStyleRows={true} autoResize={false} multipleSelectionEnabled={true} />
        );
    }

    private createPivotDataSource(): any {
        // prepare sample data
        const data = [];

        const countries = [
            'Germany', 'France', 'United States', 'Italy', 'Spain', 'Finland', 'Canada', 'Japan', 'Brazil', 'United Kingdom', 'China', 'India', 'South Korea', 'Romania', 'Greece'
        ];

        const dataPoints = [
            '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
        ];

        for (let i = 0; i < countries.length * 2; i++) {
            const row: any = {};
            const value = parseFloat(dataPoints[Math.round((Math.random() * 100)) % dataPoints.length]);


            row.country = countries[i % countries.length];
            row.value = value;

            data[i] = row;
        }

        // create a data source and data adapter
        const source = {                       
            datafields: [
                { name: 'country', type: 'string' },
                { name: 'value', type: 'number' }
            ],
            datatype: 'array',
            localdata: data
        };

        const dataAdapter = new jqx.dataAdapter(source);
        dataAdapter.dataBind();

        // create a pivot data source from the dataAdapter
        const pivotDataSource = new jqx.pivot(
            dataAdapter,
            {
                columns: [],
                pivotValuesOnRows: false,
                rows: [{ dataField: 'country', width: 190 }],
                values: [
                    { dataField: 'value', width: 200, 'function': 'min', text: 'cells left alignment', formatSettings: { align: 'left', prefix: '', decimalPlaces: 2 } },
                    { dataField: 'value', width: 200, 'function': 'max', text: 'cells center alignment', formatSettings: { align: 'center', prefix: '', decimalPlaces: 2 } },
                    { dataField: 'value', width: 200, 'function': 'average', text: 'cells right alignment', formatSettings: { align: 'right', prefix: '', decimalPlaces: 2 } }
                ]
            }
        );

        return pivotDataSource;
    }
}

export default App;