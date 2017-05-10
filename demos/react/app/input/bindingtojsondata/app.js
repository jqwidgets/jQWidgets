import React from 'react';
import ReactDOM from 'react-dom';

import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myInput.on('select', (event) => {
            if (event.args) {
                let item = event.args.item;
                if (item) {
                    let valueElement = document.createElement('div');
                    valueElement.innerHTML = 'Value: ' + item.value;

                    let labelElement = document.createElement('div');
                    labelelement.innerHTML = 'Label: ' + item.label;

                    let selectionLog = document.getElementById('selectionLog');
                    selectionLog.innerHTML = '';

                    selectionLog.appendChild(labelElement);
                    selectionLog.appendChild(valueElement);
                }
            }
        });
    }
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
                <JqxInput ref='myInput'
                    width={200} height={25} source={dataAdapter} placeHolder={'Contact Name:'}
                    valueMember={'CompanyName'} displayMember={'ContactName'}
                />
                <br />
                <label style={{ fontFamily: 'Verdana', fontSize: 10 }}>ex: Ana</label>
                <div style={{ fontFamily: 'Verdana', fontSize: 13 }} id='selectionLog' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
