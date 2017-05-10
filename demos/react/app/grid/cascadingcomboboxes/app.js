import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let data = '[{ "Country": "Belgium", "City": "Brussels"}, {"Country": "France", "City": "Paris"}, {"Country": "USA", "City": "Washington" }]';

        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'Country', type: 'string' },
                    { name: 'City', type: 'string' }
                ],
                localdata: data
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                {
                    text: 'Country', datafield: 'Country', width: 150, columntype: 'combobox',
                    cellvaluechanging: (row, datafield, columntype, oldvalue, newvalue) => {
                        if (newvalue != oldvalue) {
                            this.refs.myGrid.setcellvalue(row, 'City', 'Select a city...');
                        };
                    }
                },
                {
                    text: 'City', datafield: 'City', width: 150, columntype: 'combobox',
                    initeditor: (row, cellvalue, editor, celltext, cellwidth, cellheight) => {
                        let country = this.refs.myGrid.getcellvalue(row, 'Country');
                        let city = editor.val();
                        let cities = new Array();
                        switch (country) {
                            case 'Belgium':
                                cities = ['Bruges', 'Brussels', 'Ghent'];
                                break;
                            case 'France':
                                cities = ['Bordeaux', 'Lille', 'Paris'];
                                break;
                            case 'USA':
                                cities = ['Los Angeles', 'Minneapolis', 'Washington'];
                                break;
                        };
                        editor.jqxComboBox({ autoDropDownHeight: true, source: cities });
                        if (city != 'Select a city...') {
                            let index = cities.indexOf(city);
                            editor.jqxComboBox('selectIndex', index);
                        }
                    }
                }
            ];

        return ( 
            <JqxGrid ref='myGrid'
                width={300} source={dataAdapter} selectionmode={'singlecell'}
                autoheight={true} editable={true} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
