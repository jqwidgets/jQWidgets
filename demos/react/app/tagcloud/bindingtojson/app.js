import React from 'react';
import ReactDOM from 'react-dom';

import JqxTagCloud from '../../../jqwidgets-react/react_jqxtagcloud.js';

class App extends React.Component {
    render () {
        let url = '../sampledata/beverages.txt';
        // prepare the data
        let source =
        {
            datatype: 'json',
            datafields: [
                { name: 'calories' },
                { name: 'name' }
            ],
            url: url
        };
        let dataAdapter = new $.jqx.dataAdapter(source, {});
        return (
            <JqxTagCloud
                width={600} source={dataAdapter}
                displayMember={'name'} valueMember={'calories'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
