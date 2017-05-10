import React from 'react';
import ReactDOM from 'react-dom';

import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myListBox.on('select', (event) => {
            if (event.args) {
                let item = event.args.item;
                if (item) {
                    let valueElement = document.createElement('div');
                    let labelElement = document.createElement('div');

                    valueElement.innerHTML = 'Value: ' + item.value;
                    labelElement.innerHTML = 'Label: ' + item.label;

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
                id: 'id',
                url: '../sampledata/customers.txt'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);
        return (
            <div>
                <JqxListBox ref='myListBox'
                    width={200} height={250} source={dataAdapter}
                    displayMember={'ContactName'} valueMember={'CompanyName'}
                />
                <div style={{ marginTop: 30, fontSize: 13, fontFamily: 'Verdana' }} id='selectionLog' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
