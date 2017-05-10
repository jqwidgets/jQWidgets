import React from 'react';
import ReactDOM from 'react-dom';

import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'CompanyName' },
                    { name: 'ContactName' }
                ],
                url: '../sampledata/customers.txt'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);
        return (
            <div>
                <JqxInput
                    width={'30%'} height={35} source={dataAdapter} placeHolder={'Contact Name:'}
                    displayMember={'ContactName'} valueMember={'CompanyName'}
                />
                <br />
                <label style={{ fontFamily: 'Verdana', fontSize: 10 }}>ex: Ana</label>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
