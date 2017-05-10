import React from 'react';
import ReactDOM from 'react-dom';

import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myDropDownList.checkIndex(0);

        this.refs.myDropDownList.on('checkChange', (event) => {
            if (event.args) {
                let item = event.args.item;
                if (item) {
                    let valueelement = document.createElement('div');
                    valueelement.innerHTML = 'Value: ' + item.value;

                    let labelelement = document.createElement('div');
                    labelelement.innerHTML = 'Label: ' + item.label;

                    let checkedelement = document.createElement('div');
                    checkedelement.innerHTML = 'Checked: ' + item.checked;

                    let selectionLog = document.getElementById('selectionlog');
                    selectionLog.innerHTML = '';
                    selectionLog.appendChild(labelelement);
                    selectionLog.appendChild(valueelement);
                    selectionLog.appendChild(checkedelement);

                    let items = this.refs.myDropDownList.getCheckedItems();
                    let checkedItems = '';
                    for (let i = 0; i < items.length; i++) {
                        checkedItems += items[i].label + ', ';
                    }
                    document.getElementById('checkedItemsLog').innerHTML = checkedItems;
                }
            }
        });
    }
    render() {
        let source = {
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
                <JqxDropDownList ref='myDropDownList' style={{ float: 'left' }}
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
