import React from 'react';
import ReactDOM from 'react-dom';

import JqxComboBox from '../../../jqwidgets-react/react_jqxcombobox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myComboBox.on('select', (event) => {
            if (event.args) {
                let item = event.args.item;
                if (item) {
                    let valueElement = document.createElement('div');
                    valueElement.innerHTML = 'Value: ' + item.value;
                    let labelElement = document.createElement('div');
                    labelElement.innerHTML = 'Label: ' + item.label;
                    let selectionLog = document.getElementById('selectionlog');
                    while (selectionLog.firstChild) {
                        selectionLog.removeChild(selectionLog.firstChild);
                    }
                    selectionLog.appendChild(labelElement);
                    selectionLog.appendChild(valueElement);
                }
            }
        });
    }
    render() {
        let source =
            {
                datatype: 'xml',
                datafields: [
                    { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
                    { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:CustomerID',
                url: '../sampledata/customers.xml'
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false });
        return (
            <div>
                <JqxComboBox ref='myComboBox'
                    width={250} height={25} selectedIndex={0} source={dataAdapter}
                    displayMember={'ContactName'} valueMember={'CompanyName'}
                />
                <div style={{ fontSize: 12, fontFamily: 'Verdana' }} id='selectionlog' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
