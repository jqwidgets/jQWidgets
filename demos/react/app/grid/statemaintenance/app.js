import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        let state = null;
        this.refs.saveState.on('click', () => {
            // save the current state of jqxGrid.
            state = this.refs.myGrid.savestate();
        })
            ;
        this.refs.loadState.on('click', () => {
            // load the Grid's state.
            if (state) {
                this.refs.myGrid.loadstate(state);
            }
            else {
                this.refs.myGrid.loadstate();
            }
        });
    }
    render() {
        let source =
            {
                datatype: 'xml',
                datafields: [
                    { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
                    { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
                    { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:OrderID',
                url: '../sampledata/orders.xml',
                pager: (pagenum, pagesize, oldpagenum) => {
                    // callback called when a page or page size is changed.
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source);


        let columns =
            [
                { text: 'Ship Name', filtercondition: 'starts_with', datafield: 'ShipName', width: 250 },
                { text: 'Ship City', datafield: 'ShipCity', width: 200 },
                { text: 'Ship Country', datafield: 'ShipCountry' }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid ref='myGrid'
                    width={850} source={dataAdapter} pageable={true}
                    sortable={true} altrows={true} filterable={true}
                    columnsreorder={true} showfilterrow={true}
                    autoloadstate={false} autosavestate={false}
                    autoheight={true} editable={true} columnsresize={true}
                    selectionmode={'multiplerowsextended'} columns={columns}
                />
                <div style={{ marginTop: 30 }}>
                    <JqxButton ref='saveState' value='Save State' style={{ float: 'left' }} />
                    <JqxButton ref='loadState' value='Load State' style={{ float: 'left', marginLeft: 5 }} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
