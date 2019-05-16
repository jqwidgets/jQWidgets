import * as React from 'react';
 


import { generateordersdata } from './../public/generatedata';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();

    constructor(props: {}) {
        super(props);
        const source: any = {
            dataFields: [
                { name: 'name', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'id', type: 'string' },
                { name: 'parentid', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'date', type: 'date' },
                { name: 'customer', type: 'string' }
            ],
            dataType: 'array',
            hierarchy:
            {
                keyDataField: { name: 'id' },
                parentDataField: { name: 'parentid' }
            },
            id: 'id',
            localData: generateordersdata(200)
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            columns: [
                { align: "center", dataField: "name", text: "Order Name", width: 220 },
                { align: "center", dataField: "customer", text: "Customer", width: 200 },
                { align: "center", cellsAlign: "right", cellsFormat: "c2", dataField: "price", text: "Price", width: 80 },
                {
                    align: "center", cellsFormat: "dd-MMMM-yyyy hh:mm",
                    cellsRenderer: (rowKey?: number, column?: any, cellValue?: any, rowData?: any, cellText?: any) => {
                        if (rowData.level === 0) {
                            return dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                        }

                        return cellText;
                    },
                    dataField: "date",
                    text: "Order Date"
                }
            ],
            ready: (): void => {
                setTimeout(() => {
                    this.myTreeGrid.current!.expandRow(2);
                }, 0);
            },
            source: dataAdapter
        }
    }

    public render() {
        return (
            <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                // @ts-ignore
                width={'100%'}
                height={'auto'}
                source={this.state.source}
                pageable={true}
                sortable={true}
                columns={this.state.columns}
                ready={this.state.ready}
            />
        );
    }
}

export default App;
