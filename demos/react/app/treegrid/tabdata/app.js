import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTreeGrid.on('bindingComplete', () => {
            this.refs.myTreeGrid.expandRow(34);
        });
    }
    render () {
        // prepare the data
        let source =
        {
            dataType: "tab",
            dataFields: [
                { name: "Id", type: "number" },
                { name: "Name", type: "string" },
                { name: "ParentID", type: "number" },
                { name: "Population", type: "number" }
            ],
            hierarchy:
            {
                keyDataField: { name: 'Id' },
                parentDataField: { name: 'ParentID' }
            },
            id: 'Id',
            url: '../sampledata/locations.tsv'
        };
        let dataAdapter = new $.jqx.dataAdapter(source);
        // create Tree Grid
        let columns = [
            { text: 'Location Name', dataField: "Name", align: 'center', width: '50%' },
            { text: 'Population', dataField: "Population", align: 'center', width: '50%'}
        ];
        return (
            <JqxTreeGrid
                ref='myTreeGrid'
                width={850} 
                height={400} 
                source={dataAdapter} 
                columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
