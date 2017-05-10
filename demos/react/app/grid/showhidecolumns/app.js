import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myListBox.on('checkChange', (event) => {
            this.refs.myGrid.beginupdate();
            if (event.args.checked) {
                this.refs.myGrid.showcolumn(event.args.value);
            }
            else {
                this.refs.myGrid.hidecolumn(event.args.value);
            }
            this.refs.myGrid.endupdate();
        });
    }
    render() {
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'name' },
                    { name: 'type' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat' },
                    { name: 'protein' }
                ],
                id: 'id',
                url: '../sampledata/beverages.txt'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Name', datafield: 'name', width: 100, hidden: true },
                { text: 'Beverage Type', datafield: 'type' },
                { text: 'Calories', datafield: 'calories' },
                { text: 'Total Fat', datafield: 'totalfat' },
                { text: 'Protein', datafield: 'protein' }
            ];

        let listBoxSource =
            [
                { label: 'Name', value: 'name', checked: false }, { label: 'Beverage Type', value: 'type', checked: true },
                { label: 'Calories', value: 'calories', checked: true }, { label: 'Total Fat', value: 'totalfat', checked: true },
                { label: 'Protein', value: 'protein', checked: true }
            ];

        return (
            <div>
                <JqxListBox ref='myListBox' style={{ float: 'left' }}
                    width={200} height={200} source={listBoxSource} checkboxes={true}
                />
                <JqxGrid ref='myGrid' style={{ marginLeft: 20, float: 'left' }}
                    width={600} source={dataAdapter} columnsresize={true} columns={columns}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
