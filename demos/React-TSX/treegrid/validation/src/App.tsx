import * as React from 'react';
 


import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();

    constructor(props: {}) {
        super(props);

        const data: any[] = [
            {
                'budget': '1230000',
                'children':
                    [
                        {
                            'budget': '423000',
                            'children':
                                [
                                    {
                                        'budget': '113000',
                                        'id': '3',
                                        'location': 'San Antonio',
                                        'name': 'Accounting Department'
                                    },
                                    {
                                        'budget': '310000',
                                        'children': [
                                            { 'budget': '240000', 'id': '5', 'location': 'San Antonio', 'name': 'Banking Office' },
                                            { 'budget': '70000', 'id': '6', 'location': 'San Antonio', 'name': 'Bonds Office' }
                                        ],
                                        'id': '4',
                                        'location': 'San Antonio',
                                        'name': 'Investment Department'
                                    }
                                ],
                            'id': '2',
                            'location': 'San Antonio',
                            'name': 'Finance Division'
                        },
                        {
                            'budget': '600000',
                            'children':
                                [
                                    { 'budget': '300000', 'id': '8', 'location': 'Miami', 'name': 'Manufacturing Department' },
                                    { 'budget': '200000', 'id': '9', 'location': 'Miami', 'name': 'Public Relations Department' },
                                    { 'budget': '100000', 'id': '10', 'location': 'Miami', 'name': 'Sales Department' }
                                ],
                            'id': '7',
                            'location': 'Miami',
                            'name': 'Operations Division'

                        },
                        { 'budget': '200000', 'id': '11', 'location': 'Boston', 'name': 'Research Division' }
                    ],
                'id': '1',
                'location': 'Las Vegas',
                'name': 'Corporate Headquarters'
            }
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

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            columns: [
                { editable: false, dataField: 'id', text: 'ID', width: 150 },
                {
                    dataField: 'name',
                    text: 'Name',
                    validation: (cell: any, value: any) => {
                        if (value.toString().length < 4) {
                            return { message: 'Name should be minimum 4 characters', result: false };
                        }
                        return true;
                    },
                    width: 270,
                },
                {
                    align: "right",
                    cellsAlign: "right",
                    cellsFormat: "c2",
                    dataField: 'budget',
                    text: 'Budget',
                    validation: (cell: any, value: any) => {
                        if (parseInt(value, 10) < 0 || parseInt(value, 10) > 1300000 || value === '') {
                            return { message: 'Budget should be in the 0-1 300 000 interval', result: false };
                        }

                        return true;
                    },
                    width: 200
                },
                { 
                    dataField: 'location', text: 'Location',
                    validation: (cell: any, value: any) => {
                        if (value.toString().length < 4) {
                            return { message: 'location should be minimum 4 characters', result: false };
                        }
                        return true;
                    }
                }
            ],
            ready: (): void => {
                setTimeout(() => {
                    // Expand rows with ID = 1, 2 and 7
                    this.myTreeGrid.current!.expandRow(1);
                    this.myTreeGrid.current!.expandRow(2);
                    this.myTreeGrid.current!.expandRow(7);
                });
            },
            source: dataAdapter
        }
    }


    public render() {
        return (
            <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                // @ts-ignore
                width={'100%'}
                source={this.state.source}
                altRows={true}
                autoRowHeight={false}
                editable={true}
                columns={this.state.columns}
                ready={this.state.ready}
            />
        );
    }
}

export default App;
