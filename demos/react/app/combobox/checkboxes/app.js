import React from 'react';
import ReactDOM from 'react-dom';

import JqxComboBox from '../../../jqwidgets-react/react_jqxcombobox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myComboBox.checkIndex(0);

        this.refs.myComboBox.on('checkChange', (event) => {
            if (event.args) {
                let item = event.args.item;
                if (item) {
                    let valueElement = document.createElement('div');
                    valueElement.innerHTML = 'Value: ' + item.value;
                    let labelElement = document.createElement('div');
                    labelElement.innerHTML = 'Label: ' + item.label;
                    let checkedElement = document.createElement('div');
                    checkedElement.innerHTML = 'Checked: ' + item.checked;
                    let selectionLog = document.getElementById('selectionlog');
                    while (selectionLog.firstChild) {
                        selectionLog.removeChild(selectionLog.firstChild);
                    }
                    selectionLog.appendChild(labelElement);
                    selectionLog.appendChild(valueElement);
                    selectionLog.appendChild(checkedElement);


                    let items = this.refs.myComboBox.getCheckedItems();
                    let checkedItems = '';
                    $.each(items, function (index) {
                        checkedItems += this.label + ', ';
                    });
                    document.getElementById('checkedItemsLog').innerHTML = checkedItems;
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
                url: '../sampledata/customers.txt',
                async: false
            };
        let dataAdapter = new $.jqx.dataAdapter(source);
        return (
            <div>
                <JqxComboBox ref='myComboBox' style={{ float: 'left' }}
                    width={200} height={25} source={dataAdapter} checkboxes={true}
                    displayMember={'ContactName'} valueMember={'CompanyName'}
                />
                <div style={{ float: 'left', marginLeft: 20, fontSize: 13, fontFamily: 'Verdana' }}>
                    <div id='selectionlog' />
                    <div style={{ maxWidth: 300, marginTop: 20 }} id='checkedItemsLog' />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
