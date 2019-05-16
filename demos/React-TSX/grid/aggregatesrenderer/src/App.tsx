import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private theme = jqx.theme;

    constructor(props: {}) {
        super(props);

        const source: any =
        {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(200, false),
            updaterow: (rowid: any, rowdata: any, commit: any): any => {
                // synchronize with the server - send update command   
                commit(true);
            }
        };

        const columns: IGridProps['columns'] =
            [
                {
                    aggregatesrenderer: (aggregates: any, column: any, element: any): string => {
                        const renderstring = '<div class="jqx-widget-content jqx-widget-content-' + this.theme + '" style="float: left; width: 100%; height: 100%; "/>';
                        return renderstring;
                    },
                    columntype: 'textbox', datafield: 'firstname', text: 'First Name', width: 190                    
                },
                {
                    aggregatesrenderer: (aggregates: any, column: any, element: any): string => {
                        const renderstring = '<div class="jqx-widget-content jqx-widget-content-' + this.theme + '" style="float: left; width: 100%; height: 100%; "/>';
                        return renderstring;
                    },
                    columntype: 'textbox', datafield: 'lastname', text: 'Last Name', width: 190                    
                },
                {
                    aggregatesrenderer: (aggregates: any, column: any, element: any): string => {
                        const renderstring = '<div class="jqx-widget-content jqx-widget-content-' + this.theme + '" style="float: left; width: 100%; height: 100%; "/>';
                        return renderstring;
                    },
                    datafield: 'productname', text: 'Product', width: 170                  
                },
                {
                    aggregates: ['min', 'max'],
                    aggregatesrenderer: (aggregates: any, column: any, element: any): string => {
                        let renderstring = '<div class="jqx-widget-content jqx-widget-content-' + this.theme + '" style="float: left; width: 100%; height: 100%; ">';
                        for (const obj of Object.keys(aggregates)) {
                            const name = obj === 'min' ? 'Min' : 'Max';
                            const color = obj === 'max' ? 'green' : 'red';
                            const value = aggregates[obj];
                            renderstring += '<div style="color: ' + color + '; position: relative; margin: 6px; text-align: right; overflow: hidden">' + name + ': ' + value + '</div>';
                        }
                        renderstring += '</div>';
                        return renderstring;
                    },
                    cellsalign: 'right', cellsformat: 'n2', datafield: 'quantity', text: 'Quantity', width: 85               
                },
                {
                    aggregates: ['sum', 'avg'],
                    aggregatesrenderer: (aggregates: any, column: any, element: any, summaryData: any): string => {
                        let renderstring = '<div class="jqx-widget-content jqx-widget-content-' + this.theme + '" style="float: left; width: 100%; height: 100%;">';
                        for (const obj of Object.keys(aggregates)) {
                            const name = obj === 'sum' ? 'Sum' : 'Avg';
                            let color = 'green';
                            const value = aggregates[obj];

                            if (obj === 'sum' && summaryData.sum < 650) {
                                color = 'red';
                            }
                            if (obj === 'avg' && summaryData.avg < 4) {
                                color = 'red';
                            }

                            renderstring += '<div style="color: ' + color + '; position: relative; margin: 6px; text-align: right; overflow: hidden;">' + name + ': ' + value + '</div>';
                        }
                        renderstring += '</div>';
                        return renderstring;
                    },
                    cellsalign: 'right', cellsformat: 'c2', datafield: 'price', text: 'Price'                                    
                }
            ];

        this.state = {
            columns,
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} showstatusbar={true} 
                editable={true} showaggregates={true} statusbarheight={50}
                columns={this.state.columns} selectionmode={'singlecell'} />
        );
    }
}

export default App;