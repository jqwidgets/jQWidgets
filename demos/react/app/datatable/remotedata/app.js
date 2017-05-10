import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let source =
            {
                dataType: 'jsonp',
                dataFields: [
                    { name: 'countryName', type: 'string' },
                    { name: 'name', type: 'string' },
                    { name: 'population', type: 'float' },
                    { name: 'continentCode', type: 'string' }
                ],
                url: 'http://api.geonames.org/searchJSON'
            };

        let dataAdapter = new $.jqx.dataAdapter(source,
            {
                formatData: function (data) {
                    $.extend(data, {
                        featureClass: 'P',
                        style: 'full',
                        username: 'jqwidgets',
                        maxRows: 50
                    });
                    return data;
                }
            }
        );

        let columns =
            [
                { text: 'Country Name', dataField: 'countryName', width: 200 },
                { text: 'City', dataField: 'name', width: 250 },
                { text: 'Population', dataField: 'population', cellsFormat: 'f', width: 250 },
                { text: 'Continent Code', dataField: 'continentCode' }
            ];

        return (
            <JqxDataTable
                width={850} source={dataAdapter} columnsResize={true}
                pageable={true} pagerButtonsCount={10} columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
