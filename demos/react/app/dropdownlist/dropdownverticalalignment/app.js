import React from 'react';
import ReactDOM from 'react-dom';

import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.topAlign.on('checked', () => {
            this.refs.myDropDownList.dropDownVerticalAlignment('top');
        });
        this.refs.bottomAlign.on('checked', () => {
            this.refs.myDropDownList.dropDownVerticalAlignment('bottom');
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
                <JqxDropDownList ref='myDropDownList' style={{ float: 'left', marginTop: 270}}
                    width={150} height={25} source={dataAdapter} selectedIndex={0}
                    dropDownVerticalAlignment={'top'} dropDownWidth={200}
                    displayMember={'ContactName'} valueMember={'CompanyName'}
                />
                <div style={{ float: 'left', fontSize: 13, fontFamily: 'Verdana', marginLeft: 100, marginTop: 270 }} id='selectionlog'>
                    <h3>Alignment</h3>
                    <JqxRadioButton ref='topAlign' checked={true}>
                        Top
                    </JqxRadioButton>
                    <JqxRadioButton style={{ marginTop: 10 }} ref='bottomAlign' checked={false}>
                        Bottom
                    </JqxRadioButton>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
