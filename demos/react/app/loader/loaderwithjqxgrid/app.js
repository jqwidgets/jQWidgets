import React from 'react';
import ReactDOM from 'react-dom';

import JqxLoader from '../../../jqwidgets-react/react_jqxloader.js';
import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myGrid.on('bindingcomplete', () => {
            this.refs.myLoader.close();
        });
    }
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

        let dataAdapter = new $.jqx.dataAdapter(source, {
            formatData: (data) => {
                $.extend(data, {
                    featureClass: 'P',
                    style: 'full',
                    maxRows: 50,
                    username: 'jqwidgets'
                });
                return data;
            }
        });

        let columns =
            [
                { text: 'Country Name', datafield: 'countryName', width: 200 },
                { text: 'City', datafield: 'name', width: 170 },
                { text: 'Population', datafield: 'population', cellsformat: 'f', width: 170 },
                { text: 'Continent Code', datafield: 'continentCode', minwidth: 110 }
            ];
        return (
            <div>
                <JqxLoader ref='myLoader' style={{ marginTop: 230  }}
                    width={100} height={60} imagePosition={'top'} autoOpen={true}
                />
                <JqxGrid ref='myGrid'
                    width={850} height={400} source={dataAdapter}
                    columnsresize={true} showdefaultloadelement={false}
                    autoshowloadelement={false} columns={columns}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
