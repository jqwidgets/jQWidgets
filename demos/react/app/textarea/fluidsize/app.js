import React from 'react';
import ReactDOM from 'react-dom';

import JqxTextArea from '../../../jqwidgets-react/react_jqxtextarea.js';

class App extends React.Component {
    render () {
        let url = '../sampledata/customers.txt';
        // prepare the data
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'CompanyName' },
                    { name: 'ContactName' }
                ],
                url: url
            };
        let dataAdapter = new $.jqx.dataAdapter(source);
        // Create a jqxInput
        return (
            <div>

                <JqxTextArea ref='myTextArea'
                    width={'30%'} height={80} source={dataAdapter}
                    displayMember={'ContactName'} valueMember={'CompanyName'}
                    placeHolder={'Contact Name:'}
                />
                <label style={{fontFamily: 'Verdana', fontSize: 10}}>
                    ex: Ana</label>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
