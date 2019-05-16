import * as React from 'react';
 


import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();
    private dataAdapter: any;

    constructor(props: {}) {
        super(props);

        const data: any[] = [
            { "budget": "1230000", "children": [{ "id": "2", "name": "Finance Division", "budget": "423000", "location": "San Antonio", "children": [{ "id": "3", "name": "Accounting Department", "budget": "113000", "location": "San Antonio" }, { "id": "4", "name": "Investment Department", "budget": "310000", "location": "San Antonio", "children": [{ "id": "5", "name": "Banking Office", "budget": "240000", "location": "San Antonio" }, { "id": "6", "name": "Bonds Office", "budget": "70000", "location": "San Antonio" }] }] }, { "id": "7", "name": "Operations Division", "budget": "600000", "location": "Miami", "children": [{ "id": "8", "name": "Manufacturing Department", "budget": "300000", "location": "Miami" }, { "id": "9", "name": "Public Relations Department", "budget": "200000", "location": "Miami" }, { "id": "10", "name": "Sales Department", "budget": "100000", "location": "Miami" }] }, { "id": "11", "name": "Research Division", "budget": "200000", "location": "Boston" }], "id": "1", "location": "Las Vegas", "name": "Corporate Headquarters" }
        ];

        const source: any = {
            dataFields: [
                { name: 'name', type: 'string' },
                { name: 'budget', type: 'number' },
                { name: 'id', type: 'number' },
                { name: 'children', type: 'array' },
                { name: 'location', type: 'string' }
            ],
            dataType: 'json',
            hierarchy:
            {
                root: 'children'
            },
            id: 'id',
            localData: data
        };

        this.dataAdapter = new jqx.dataAdapter(source);

        this.state = {
            columnGroups: [{ align: 'center', name: 'JSTCorp', text: 'JST Corp.' }],
            columns: [
                { align: 'center', dataField: 'name', text: 'Name', width: 300 },
                { align: 'center', cellsAlign: 'center', dataField: 'location', text: 'Location', width: 250 },
                {
                    aggregates: ['sum'],
                    aggregatesRenderer: (aggregatesText: string, column: any, element: any, aggregates: any, type: any) => {
                        let renderString = '';
                        if (type === 'aggregates') {
                            renderString = '<div style="margin: 4px; float: right;  height: 100%;">';
                        }
                        else {
                            renderString = '<div style="float: right;  height: 100%;">';
                        }

                        const euro = this.dataAdapter.formatNumber(0.74 * aggregates.sum, 'f2');
                        const usd = this.dataAdapter.formatNumber(aggregates.sum, 'f2');
                        renderString += "<table><tr><td rowspan='2'><strong>Total: </strong></td><td>" + usd + " USD</td><tr><td>" + euro + " EUR</td></tr></table>";
                        return renderString;
                    },
                    align: 'center',
                    cellsAlign: 'center',
                    cellsFormat: 'c2',
                    dataField: 'budget',
                    text: 'Budget',
                }
            ],
            ready: (): void => {
                setTimeout(() => {
                    this.myTreeGrid.current!.expandRow(1);
                    this.myTreeGrid.current!.expandRow(2);
                });
            },
            source: this.dataAdapter
        }
    }

    public render() {
        return (
            <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                // @ts-ignore
                width={'100%'}
                source={this.state.source}
                altRows={true}
                showSubAggregates={true}
                columnsResize={true}
                columns={this.state.columns}
                ready={this.state.ready}
            />
        );
    }
}

export default App;
