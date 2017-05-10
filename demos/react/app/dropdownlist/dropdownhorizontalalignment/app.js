import React from 'react';
import ReactDOM from 'react-dom';

import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.rightAlign.on('checked', () => {
            this.refs.myDropDownList.dropDownHorizontalAlignment('right');
        });
       this.refs.leftAlign.on('checked', () => {
           this.refs.myDropDownList.dropDownHorizontalAlignment('left');
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
                <div style={{ float: 'left', fontSize: 13, fontFamily: 'Verdana' }} id='selectionlog'>
                    <h3>Alignment</h3>
                    <JqxRadioButton ref='leftAlign' checked={false}>
                        Left
                    </JqxRadioButton>
                    <JqxRadioButton style={{ marginTop: 10 }} ref='rightAlign' checked={true}>
                        Right
                    </JqxRadioButton>
                </div>
                <JqxDropDownList ref='myDropDownList' style={{ float: 'left', marginTop: 20, marginLeft: 100 }}
                    width={150} height={25} source={dataAdapter} selectedIndex={0}
                    dropDownHorizontalAlignment={'right'} dropDownWidth={200}
                    displayMember={'ContactName'} valueMember={'CompanyName'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
