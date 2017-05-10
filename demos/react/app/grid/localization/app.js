import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let data = generatedata(250);

        let source =
            {
                localdata: data,
                datafields:
                [
                    { name: 'name', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ],
                datatype: 'array'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                { text: 'Name', columntype: 'textbox', filtertype: 'textbox', datafield: 'name', width: 180 },
                { text: 'Produkt', filtertype: 'textbox', datafield: 'productname', width: 220 },
                { text: 'Datum', datafield: 'date', columntype: 'datetimeinput', filtertype: 'date', width: 210, cellsalign: 'right', cellsformat: 'd' },
                { text: 'Qt.', datafield: 'quantity', columntype: 'numberinput', filtertype: 'textbox', cellsalign: 'right', width: 60 },
                { text: 'Preis', datafield: 'price', columntype: 'numberinput', filtertype: 'textbox', cellsformat: 'c2', cellsalign: 'right' }
            ];

        //getLocalization comes from localization.js script inserted in the html
        let localization = getLocalization('de');

        return (
            <JqxGrid
                width={850} source={dataAdapter} pageable={true}
                showfilterrow={true} filterable={true}
                autoheight={true} editable={true} columns={columns}
                selectionmode={'singlecell'} localization={localization}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
