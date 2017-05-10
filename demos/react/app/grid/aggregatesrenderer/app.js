import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                localdata: generatedata(200),
                datatype: 'array',
                updaterow: (rowid, rowdata, commit) => {
                    // synchronize with the server - send update command   
                    commit(true);
                },
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ]
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                {
                    text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 190,
                    aggregatesrenderer: (aggregates, column, element) => {
                        let renderstring = '<div class="jqx-widget-content jqx-widget-content-' + theme + '" style="float: left; width: 100%; height: 100%; "/>';
                        return renderstring;
                    }
                },
                {
                    text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 190,
                    aggregatesrenderer: (aggregates, column, element) => {
                        let renderstring = '<div class="jqx-widget-content jqx-widget-content-' + theme + '" style="float: left; width: 100%; height: 100%; "/>';
                        return renderstring;
                    }
                },
                {
                    text: 'Product', datafield: 'productname', width: 170,
                    aggregatesrenderer: (aggregates, column, element) => {
                        let renderstring = '<div class="jqx-widget-content jqx-widget-content-' + theme + '" style="float: left; width: 100%; height: 100%; "/>';
                        return renderstring;
                    }
                },
                {
                    text: 'Quantity', datafield: 'quantity', width: 85, cellsalign: 'right', cellsformat: 'n2', aggregates: ['min', 'max'],
                    aggregatesrenderer: (aggregates, column, element) => {
                        let renderstring = '<div class="jqx-widget-content jqx-widget-content-' + theme + '" style="float: left; width: 100%; height: 100%; ">';
                        $.each(aggregates, (key, value) => {
                            let name = key == 'min' ? 'Min' : 'Max';
                            let color = key == 'max' ? 'green' : 'red';
                            renderstring += '<div style="color: ' + color + '; position: relative; margin: 6px; text-align: right; overflow: hidden">' + name + ': ' + value + '</div>';
                        });
                        renderstring += '</div>';
                        return renderstring;
                    }
                },
                {
                    text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum', 'avg'],
                    aggregatesrenderer: function (aggregates, column, element, summaryData) {
                        let renderstring = '<div class="jqx-widget-content jqx-widget-content-' + theme + '" style="float: left; width: 100%; height: 100%;">';
                        $.each(aggregates, (key, value) => {
                            let name = key == 'sum' ? 'Sum' : 'Avg';
                            let color = 'green';
                            if (key == 'sum' && summaryData['sum'] < 650) {
                                color = 'red';
                            }
                            if (key == 'avg' && summaryData['avg'] < 4) {
                                color = 'red';
                            }
                            renderstring += '<div style="color: ' + color + '; position: relative; margin: 6px; text-align: right; overflow: hidden;">' + name + ': ' + value + '</div>';
                        });
                        renderstring += '</div>';
                        return renderstring;
                    }
                }
            ];

        return (
            <JqxGrid
                width={850} source={dataAdapter} showstatusbar={true}
                editable={true} showaggregates={true} statusbarheight={50}
                columns={columns} selectionmode={'singlecell'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
