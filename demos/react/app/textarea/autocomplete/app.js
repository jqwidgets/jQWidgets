import React from 'react';
import ReactDOM from 'react-dom';

import JqxTextArea from '../../../jqwidgets-react/react_jqxtextarea.js';

class App extends React.Component {
    render () {
        let source = (query, response) => {
            let dataAdapter = new $.jqx.dataAdapter({
                datatype: 'jsonp',
                datafields: [{
                    name: 'countryName'
                }, {
                    name: 'name'
                }, {
                    name: 'population',
                    type: 'float'
                }, {
                    name: 'continentCode'
                }, {
                    name: 'adminName1'
                }],
                url: 'http://api.geonames.org/searchJSON',
                data: {
                    featureClass: 'P',
                    style: 'full',
                    maxRows: 12,
                    username: 'jqwidgets'
                }
            }, {
                autoBind: true,
                formatData: (data) => {
                    data.name_startsWith = query;
                    return data;
                },
                loadComplete: (data) => {
                    if (data.geonames.length > 0) {
                        response($.map(data.geonames, (item) => {
                            return {
                                label: item.name + (item.adminName1 ? ', ' + item.adminName1 : '') + ', ' + item.countryName,
                                value: item.name
                            }
                        }));
                    }
                }
            });
        };
        return (
            <JqxTextArea
                width={200} height={75} source={source}
                placeHolder={'Enter a City'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
