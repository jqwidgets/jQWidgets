import * as React from 'react';
 


import { generateordersdata } from './../public/generatedata';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';
// import { getLocalization } from 'public/localization';


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
            localData: generateordersdata(10)
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            columns: [
                { align: "center", dataField: "name", text: "Bestellung Name", width: 250 },
                { align: "center", dataField: "customer", text: "Auftraggeber", width: 250 },
                { align: "center", cellsAlign: "right", cellsFormat: "c2", dataField: "price", text: "Preis", width: 180 },
                {
                    align: "center", cellsFormat: "dd-MMMM-yyyy hh:mm",
                    cellsRenderer: (rowKey?: number, column?: any, cellValue?: any, rowData?: any, cellText?: string) => {
                        if (rowData.level === 0) {
                            return dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                        }

                        return cellText;
                    },
                    dataField: "date",
                    text: "Bestellung Datum"
                }
            ],
            localization: {
                pagerfirstbuttonstring: 'first',
                pagergotopagestring: 'Gehe zu',
                pagerlastbuttonstring: 'last',
                pagernextbuttonstring: 'voriger',
                pagerpreviousbuttonstring: 'nächster',
                pagerrangestring: ' von ',
                pagershowrowsstring: 'Zeige Zeile:'
            },
            // localization: getLocalization('de'),
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
                source={this.state.source}
                pageable={true}
                pagerMode={"advanced"}
                sortable={true}
                localization={this.state.localization}
                columns={this.state.columns}
                ready={this.state.ready}
            />
        );
    }
}

export default App;
