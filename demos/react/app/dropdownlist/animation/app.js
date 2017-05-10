import React from 'react';
import ReactDOM from 'react-dom';

import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.noneAnimation.on('checked', () => {
            this.refs.myDropDownList.animationType('none');
        });
        this.refs.slideAnimation.on('checked', () => {
            this.refs.myDropDownList.animationType('slide');
        });
        this.refs.fadeAnimation.on('checked', () => {
            this.refs.myDropDownList.animationType('fade');
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
                    <h3>Animation Type</h3>
                    <JqxRadioButton ref='noneAnimation' checked={false}>
                        None
                    </JqxRadioButton>
                    <JqxRadioButton style={{ marginTop: 10 }} ref='slideAnimation' checked={false}>
                        Slide
                    </JqxRadioButton>
                    <JqxRadioButton style={{ marginTop: 10 }} ref='fadeAnimation' checked={true}>
                        Fade
                    </JqxRadioButton>
                </div>
                <JqxDropDownList ref='myDropDownList' style={{ float: 'left', marginTop: 20, marginLeft: 100 }}
                    width={150} height={25} source={dataAdapter} selectedIndex={0} animationType={'fade'}
                    dropDownHorizontalAlignment={'right'} dropDownWidth={200}
                    displayMember={'ContactName'} valueMember={'CompanyName'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
