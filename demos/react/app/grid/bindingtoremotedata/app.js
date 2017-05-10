import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'jsonp',
                datafields: [
                    { name: 'countryName', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'population', type: 'float' },
                    { name: 'continentCode', type: 'string' }
                ],
                url: 'http://api.geonames.org/searchJSON'
            };

        let dataAdapter = new $.jqx.dataAdapter(source,
            {
                formatData: (data) => {
                    $.extend(data, {
                        featureClass: 'P',
                        style: 'full',
                        maxRows: 50,
                        username: 'jqwidgets'
                    });
                    return data;
                }
            }
        );

        let columns =
            [
                { text: 'Country Name', datafield: 'countryName', width: 200 },
                { text: 'City', datafield: 'name', width: 170 },
                { text: 'Population', datafield: 'population', cellsformat: 'f', width: 170 },
                { text: 'Continent Code', datafield: 'continentCode', minwidth: 110 }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid
                    width={850} source={dataAdapter} columnsresize={true} columns={columns}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
