import React from 'react';
import ReactDOM from 'react-dom';

import JqxTextArea from '../../../jqwidgets-react/react_jqxtextarea.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTextArea.on('select', (event) => {
            if (event.args) {
                let item = event.args.item;
                if (item) {
                    let selectionlog = document.getElementById('selectionlog');
                    selectionlog.innerHTML = '<div>Value: ' + item.value + '</div><div>Label: ' + item.label + '</div>';
                }
            }
        });
    }
    render () {
        let url = '../sampledata/customers.txt';
        // prepare the data
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'CompanyName' },
                    { name: 'ContactName' }
                ],
                url: url
            };
        let dataAdapter = new $.jqx.dataAdapter(source);
        // Create a jqxInput
        return (
            <div>

                <JqxTextArea ref='myTextArea'
                    width={200} height={40} source={dataAdapter}
                    displayMember={'ContactName'} valueMember={'CompanyName'}
                    placeHolder={'Contact Name:'}
                />
                <label style={{fontFamily: 'Verdana', fontSize: 10}}>
                        ex: Ana</label>
                <div style={{fontFamily: 'Verdana', fontSize: 13}} id='selectionlog'></div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
