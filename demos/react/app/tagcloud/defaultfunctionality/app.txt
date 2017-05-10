import React from 'react';
import ReactDOM from 'react-dom';

import JqxTagCloud from '../../../jqwidgets-react/react_jqxtagcloud.js';

class App extends React.Component {
    render () {
        let data = [
            { countryName: "Australia", technologyRating: 35 },
            { countryName: "United States", technologyRating: 60 },
            { countryName: "Germany", technologyRating: 55 },
            { countryName: "Brasil", technologyRating: 20 },
            { countryName: "United Kingdom", technologyRating: 50 },
            { countryName: "Japan", technologyRating: 80 }
        ];
        let source =
        {
            localdata: data,
            datatype: "array",
            datafields: [
                { name: 'countryName' },
                { name: 'technologyRating' }
            ]
        };
        let dataAdapter = new $.jqx.dataAdapter(source);
        return (
            <JqxTagCloud
                width={600} source={dataAdapter}
                displayMember={'countryName'} valueMember={'technologyRating'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
