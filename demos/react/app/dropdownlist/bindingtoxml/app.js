import React from 'react';
import ReactDOM from 'react-dom';

import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myDropDownList.on('select', (event) => {
            if (event.args) {
                let item = event.args.item;
                if (item) {
                    let valueelement = document.createElement('div');
                    valueelement.innerHTML = 'Value: ' + item.value;

                    let labelelement = document.createElement('div');
                    labelelement.innerHTML = 'Label: ' + item.label;

                    let selectionLog = document.getElementById('selectionlog');
                    selectionLog.innerHTML = '';
                    selectionLog.appendChild(labelelement);
                    selectionLog.appendChild(valueelement);
                }
            }
        });
    }
    render() {
        let source = {
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
                <JqxDropDownList ref='myDropDownList'
                    width={200} height={25} source={dataAdapter} selectedIndex={1}
                    displayMember={'ContactName'} valueMember={'CompanyName'}
                />
                <div style={{ fontSize: 12, fontFamily: 'Verdana' }} id='selectionlog' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
