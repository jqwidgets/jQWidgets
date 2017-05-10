import React from 'react';
import ReactDOM from 'react-dom';

import JqxComboBox from '../../../jqwidgets-react/react_jqxcombobox.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.bottomAlign.on('checked', () => {
            this.refs.myComboBox.dropDownVerticalAlignment('bottom');
        });
        this.refs.topAlign.on('checked', () => {
            this.refs.myComboBox.dropDownVerticalAlignment('top');
        });
    }
    render() {
        var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'CompanyName' },
                    { name: 'ContactName' }
                ],
                id: 'id',
                url: '../sampledata/customers.txt',
                async: false
            };

        var dataAdapter = new $.jqx.dataAdapter(source);


        return (
            <div>
                <JqxComboBox ref='myComboBox' style={{ float: 'left', marginTop: 270 }}
                    width={150} height={25} source={dataAdapter} selectedIndex={0}
                    dropDownVerticalAlignment={'top'} dropDownWidth={200}
                    displayMember={'ContactName'} valueMember={'CompanyName'}
                />
                <div style={{ float: 'left', fontSize: 13, fontFamily: 'Verdana', marginLeft: 100, marginTop:270 }} id="selectionlog">
                    <h3>Alignment</h3>
                    <JqxRadioButton ref='topAlign' checked={true}>Top</JqxRadioButton>
                    <JqxRadioButton ref='bottomAlign' checked={false} style={{ marginTop: 10 }}>Bottom</JqxRadioButton>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
