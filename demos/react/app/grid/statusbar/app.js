import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxWindow from '../../../jqwidgets-react/react_jqxwindow.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.clearButton.on('click', () => {
            this.refs.myGrid.clearfilters();
        });
        // find records that match a criteria.
        this.refs.findButton.on('click', () => {
            this.refs.myGrid.clearfilters();
            var searchColumnIndex = this.refs.myDropDownList.selectedIndex();
            var datafield = "";
            switch (searchColumnIndex) {
                case 0:
                    datafield = "firstname";
                    break;
                case 1:
                    datafield = "lastname";
                    break;
                case 2:
                    datafield = "productname";
                    break;
                case 3:
                    datafield = "quantity";
                    break;
                case 4:
                    datafield = "price";
                    break;
            }
            var searchText = this.refs.inputField.val();
            var filtergroup = new $.jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = searchText;
            var filtercondition = 'contains';
            var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.addfilter(filter_or_operator, filter);
            this.refs.myGrid.addfilter(datafield, filtergroup);
            // apply the filters.
            this.refs.myGrid.applyfilters();
        });
    }
    getData() {
        let source =
            {
                localdata: generatedata(15),
                datatype: "array",
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'available', type: 'bool' }
                ],
                updaterow: (rowid, rowdata, commit) => {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    commit(true);
                }
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        return dataAdapter;
    }
    render() {
        
        let columns =
            [
                { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
                { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
                { text: 'Product', datafield: 'productname', width: 170 },
                { text: 'In Stock', datafield: 'available', columntype: 'checkbox', width: 125 },
                { text: 'Quantity', datafield: 'quantity', width: 85, cellsalign: 'right', cellsformat: 'n2' },
                { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ];

        let renderstatusbar = (statusbar) => {
            let buttonsContainer = document.createElement('div');
            buttonsContainer.cssText = 'overflow: hidden; position: relative; margin: 5px;';

            let addButtonContainer = document.createElement('div');
            let deleteButtonContainer = document.createElement('div');
            let reloadButtonContainer = document.createElement('div');
            let searchButtonContainer = document.createElement('div');

            buttonsContainer.appendChild(addButtonContainer);
            buttonsContainer.appendChild(deleteButtonContainer);
            buttonsContainer.appendChild(reloadButtonContainer);
            buttonsContainer.appendChild(searchButtonContainer);

            statusbar[0].appendChild(buttonsContainer);

            let addButton = ReactDOM.render(
                <JqxButton style={{ float: 'left', marginLeft: 5, marginTop: 6 }}
                    width={80} height={25} imgSrc={'../../images/add.png'} value='Add'
                    imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'}
                />, addButtonContainer);

            let deleteButton = ReactDOM.render(
                <JqxButton style={{ float: 'left', marginLeft: 5, marginTop: 6 }}
                    width={80} height={25} imgSrc={'../../images/close.png'} value='Delete'
                    imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'}
                />, deleteButtonContainer);

            let reloadButton = ReactDOM.render(
                <JqxButton style={{ float: 'left', marginLeft: 5, marginTop: 6 }}
                    width={80} height={25} imgSrc={'../../images/refresh.png'} value='Reload'
                    imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'}
                />, reloadButtonContainer);

            let searchButton = ReactDOM.render(
                <JqxButton style={{ float: 'left', marginLeft: 5, marginTop: 6 }}
                    width={80} height={25} imgSrc={'../../images/search.png'} value='Find'
                    imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'}
                />, searchButtonContainer);


            // add new row.
            addButton.on('click', (event) => {
                var datarow = generatedata(1);
                this.refs.myGrid.addrow(null, datarow[0]);
            });
            // delete selected row.
            deleteButton.on('click', (event) => {
                var selectedrowindex = this.refs.myGrid.getselectedrowindex();
                var rowscount = this.refs.myGrid.getdatainformation().rowscount;
                var id = this.refs.myGrid.getrowid(selectedrowindex);
                this.refs.myGrid.deleterow(id);
            });
            // reload grid data.
            reloadButton.on('click', (event) => {
                this.refs.myGrid.source(this.getData());
    
            });
            // search for a record.
            searchButton.on('click', (event) => {
                this.refs.myWindow.open();
                this.refs.myWindow.move(60, 60);
            });
        }

        return (
            <div>
                <JqxGrid ref='myGrid'
                    width={850} source={this.getData()} showstatusbar={true}
                    renderstatusbar={renderstatusbar} columns={columns}
                />
                <JqxWindow ref="myWindow"
                    width={210} height={180} autoOpen={false} resizable={false}
                >
                    <div>Find Record</div>
                    <div style={{ overflow: 'hidden' }}>
                        <div>Find what:</div>
                        <div style={{ marginTop: 5 }}>
                            <JqxInput ref='inputField' width={194} height={23} />
                        </div>
                        <div style={{ marginTop: 7, clear: 'both' }}>Look in:</div>
                        <div style={{ marginTop: 5 }}>
                            <JqxDropDownList ref='myDropDownList'
                                width={200} height={23} selectedIndex={0} autoDropDownHeight={true}
                                source={['First Name', 'Last Name', 'Product', 'Quantity', 'Price']}
                            />

                        </div>
                        <div>
                            <JqxButton style={{ marginTop: 15, marginLeft: 50, float: 'left' }}
                                value="Find" width={70} ref="findButton" />
                            <JqxButton style={{ marginLeft: 5, marginTop: 15, float: 'left' }}
                                value="Clear" width={70} ref="clearButton" />
                        </div>
                    </div>
                </JqxWindow>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
