import React from 'react';
import ReactDOM from 'react-dom';

import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myDropDownList.on('select', (event) => {
            // save the index in cookie.
            $.jqx.cookie.cookie('jqxDropDownList_jqxWidget', event.args.index);
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

        let index = $.jqx.cookie.cookie('jqxDropDownList_jqxWidget');
        if (undefined == index) index = 0;

        return (
            <JqxDropDownList ref='myDropDownList'
                width={200} height={25} source={dataAdapter} selectedIndex={index}
                displayMember={'ContactName'} valueMember={'CompanyName'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
