import React from 'react';
import ReactDOM from 'react-dom';

import JqxTagCloud from '../../../jqwidgets-react/react_jqxtagcloud.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.addItem.on('click', () => {
            let row = generatedata(1)[0];
            this.refs.tagCloud.insertAt(0, row);
        });
        
        this.refs.deleteItem.on('click', () => {
            this.refs.tagCloud.removeAt(0);
        });
        
        this.refs.updateItem.on('click', () => {
            let row = generatedata(1)[0];
            this.refs.tagCloud.updateAt(0, row);
        });
    }
    render () {
        let data = generatedata(50);
        let source =
        {
            datatype: 'array',
            localdata: data,
            datafields: [
                { name: 'productname' },
                { name: 'price' }
            ]
        };
        let dataAdapter = new $.jqx.dataAdapter(source, {});
        
        return (
            <div>

                This demo demonstrates how to add a tag in first position or update/remove the tag in first position.
                <JqxTagCloud ref='tagCloud'
                    width={600} source={dataAdapter} fontSizeUnit={'px'} 
                    minFontSize={12} maxFontSize={20} 
                    displayMember={'productname'} valueMember={'price'}
                    urlBase={'http://localhost/'} minColor={'#00AA99'} maxColor={'#FF0000'}
                />
                <br />
                <br />
                <JqxButton ref='addItem' value='Add Item' style={{ float: 'left', marginRight: 5 }} />
                <JqxButton ref='deleteItem' value='Delete First Item' style={{ float: 'left', marginRight: 5 }} />
                <JqxButton ref='updateItem' value='Update First Item' />
                <br />
                <div id="log"></div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
