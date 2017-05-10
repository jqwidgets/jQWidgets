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
                datatype: "jsonp",
                datafields: [
                    { name: 'countryName' },
                    { name: 'name' },
                    { name: 'population', type: 'float' },
                    { name: 'continentCode' }
                ],
                url: "http://api.geonames.org/searchJSON",
                data: {
                    featureClass: "P",
                    style: "full",
                    maxRows: 50,
                    username: "jqwidgets"
                }
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false });
        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxComboBox ref='myComboBox'
                    width={200} height={25} selectedIndex={0} source={dataAdapter}
                    displayMember={'countryName'} valueMember={'name'}
                />
                <div id='selectionlog' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
