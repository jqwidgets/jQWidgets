import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';
import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myListBox.on('checkChange', (event) => {
            this.refs.myDataTable.beginUpdate();
            if (event.args.checked) {
                this.refs.myDataTable.showColumn(event.args.value);
            }
            else {
                this.refs.myDataTable.hideColumn(event.args.value);
            }
            this.refs.myDataTable.endUpdate();
        });
    }
    render() {
        let source =
            {
                dataType: 'json',
                dataFields: [
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
                { text: 'Name', datafield: 'name', width: 200 },
                { text: 'Beverage Type', dataField: 'type', width: 200 },
                { text: 'Calories', dataField: 'calories', width: 200 }
            ];

        let listSource =
            [
                { label: 'Beverage Type', value: 'type', checked: true },
                { label: 'Calories', value: 'calories', checked: true }
            ];

        return (
            <div>
                <JqxListBox ref='myListBox' style={{ float: 'left' }}
                    width={150} height={200} source={listSource} checkboxes={true}
                />
                <JqxDataTable ref='myDataTable' style={{ float: 'left', marginLeft: 20 }}
                    source={dataAdapter} pagerButtonsCount={10}
                    pageable={true} columnsResize={true} columns={columns}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
