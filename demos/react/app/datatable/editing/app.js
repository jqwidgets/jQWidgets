import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
  render() {
    let ordersSource =
    {
        dataFields: [
            { name: 'OrderID', type: 'int' },
            { name: 'Freight', type: 'float' },
            { name: 'ShipName', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShippedDate', type: 'date' }
        ],
        root: "Orders",
        record: "Order",
        dataType: "xml",
        id: 'OrderID',
        url: '../sampledata/orderdetails.xml',
        addRow:  (rowID, rowData, position, commit) => {
            commit(true);
        },
        updateRow:  (rowID, rowData, commit) => {
            commit(true);
        },
        deleteRow:  (rowID, commit) => {
            commit(true);
        }
    };
    let dataAdapter = new $.jqx.dataAdapter(ordersSource);
    let renderToolbar = (toolBar) =>
    {
        let toTheme =  (className) => {
            if (theme == "") return className;
            return className + " " + className + "-" + theme;
        }
        // appends buttons to the status bar.
        let container = $("<div style='overflow: hidden; position: relative; height: 100%; width: 100%;'></div>");
        let buttonTemplate = "<div style='float: left; padding: 3px; margin: 2px;'><div style='margin: 4px; width: 16px; height: 16px;'></div></div>";
        let addButton = $(buttonTemplate);
        let editButton = $(buttonTemplate);
        let deleteButton = $(buttonTemplate);
        let cancelButton = $(buttonTemplate);
        let updateButton = $(buttonTemplate);
        container.append(addButton);
        container.append(editButton);
        container.append(deleteButton);
        container.append(cancelButton);
        container.append(updateButton);
        toolBar.append(container);
        addButton.jqxButton({cursor: "pointer", enableDefault: false,  height: 25, width: 25 });
        addButton.find('div:first').addClass(toTheme('jqx-icon-plus'));
        addButton.jqxTooltip({ position: 'bottom', content: "Add"});
        editButton.jqxButton({ cursor: "pointer", disabled: true, enableDefault: false,  height: 25, width: 25 });
        editButton.find('div:first').addClass(toTheme('jqx-icon-edit'));
        editButton.jqxTooltip({ position: 'bottom', content: "Edit"});
        deleteButton.jqxButton({ cursor: "pointer", disabled: true, enableDefault: false,  height: 25, width: 25 });
        deleteButton.find('div:first').addClass(toTheme('jqx-icon-delete'));
        deleteButton.jqxTooltip({ position: 'bottom', content: "Delete"});
        updateButton.jqxButton({ cursor: "pointer", disabled: true, enableDefault: false,  height: 25, width: 25 });
        updateButton.find('div:first').addClass(toTheme('jqx-icon-save'));
        updateButton.jqxTooltip({ position: 'bottom', content: "Save Changes"});
        cancelButton.jqxButton({ cursor: "pointer", disabled: true, enableDefault: false,  height: 25, width: 25 });
        cancelButton.find('div:first').addClass(toTheme('jqx-icon-cancel'));
        cancelButton.jqxTooltip({ position: 'bottom', content: "Cancel"});
        let updateButtons =  (action) => {
            switch (action) {
                case "Select":
                    addButton.jqxButton({ disabled: false });
                    deleteButton.jqxButton({ disabled: false });
                    editButton.jqxButton({ disabled: false });
                    cancelButton.jqxButton({ disabled: true });
                    updateButton.jqxButton({ disabled: true });
                    break;
                case "Unselect":
                    addButton.jqxButton({ disabled: false });
                    deleteButton.jqxButton({ disabled: true });
                    editButton.jqxButton({ disabled: true });
                    cancelButton.jqxButton({ disabled: true });
                    updateButton.jqxButton({ disabled: true });
                    break;
                case "Edit":
                    addButton.jqxButton({ disabled: true });
                    deleteButton.jqxButton({ disabled: true });
                    editButton.jqxButton({ disabled: true });
                    cancelButton.jqxButton({ disabled: false });
                    updateButton.jqxButton({ disabled: false });
                    break;
                case "End Edit":
                    addButton.jqxButton({ disabled: false });
                    deleteButton.jqxButton({ disabled: false });
                    editButton.jqxButton({ disabled: false });
                    cancelButton.jqxButton({ disabled: true });
                    updateButton.jqxButton({ disabled: true });
                    break;
            }
        }
        let rowIndex = null;
        this.refs.DataTable.on('rowSelect', (event) => {
            let args = event.args;
            rowIndex = args.index;
            updateButtons('Select');
        });
        this.refs.DataTable.on('rowUnselect', (event) => {
            updateButtons('Unselect');
        });
        this.refs.DataTable.on('rowEndEdit', (event) => {
            updateButtons('End Edit');
        });
        this.refs.DataTable.on('rowBeginEdit', (event) => {
            updateButtons('Edit');
        });
        addButton.click( (event) => {
            if (!addButton.jqxButton('disabled')) {
                // add new empty row.
                this.refs.DataTable.addRow(null, {}, 'first');
                // select the first row and clear the selection.
                this.refs.DataTable.clearSelection();
                this.refs.DataTable.selectRow(0);
                // edit the new row.
                this.refs.DataTable.beginRowEdit(0);
                updateButtons('add');
            }
        });
        cancelButton.click( (event) => {
            if (!cancelButton.jqxButton('disabled')) {
                // cancel changes.
                this.refs.DataTable.endRowEdit(rowIndex, true);
            }
        });
        updateButton.click( (event) => {
            if (!updateButton.jqxButton('disabled')) {
                // save changes.
                this.refs.DataTable.endRowEdit(rowIndex, false);
            }
        });
        editButton.click( () => {
            if (!editButton.jqxButton('disabled')) {
                this.refs.DataTable.beginRowEdit(rowIndex);
                updateButtons('edit');
            }
        });
        deleteButton.click( () => {
            if (!deleteButton.jqxButton('disabled')) {
                this.refs.DataTable.deleteRow(rowIndex);
                updateButtons('delete');
            }
        });
    };
    let columns =
    [
      { text: 'Order ID', editable: false, dataField: 'OrderID', width: 200 },
      { text: 'Freight', dataField: 'Freight', cellsFormat: 'f', cellsAlign: 'right', align: 'right', width: 200},
      {
          text: 'Ship Country', dataField: 'ShipCountry', width: 250,
          columnType: 'custom',
          createEditor:  (row, cellValue, editor, width, height) => {
              // create jqxInput editor.
              let textBox = $("<input style='padding-left: 4px; box-sizing: border-box; -moz-box-sizing: border-box; border: none;'/>").appendTo(editor);;
              let countries = new Array("Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe");
              textBox.jqxInput({ source: countries, width: '100%', height: '100%' });
              textBox.val(cellValue);
          },
          initEditor:  (row, cellValue, editor) => {
              // set jqxInput editor's initial value.
              editor.find('input').val(cellValue);
          },
          getEditorValue:  (index, value, editor) => {
              // get jqxInput editor's value.
              return editor.find('input').val();
          }
      },
      { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy'}
    ];
    return (
      <JqxDataTable ref='DataTable'
        width={850} source={dataAdapter} pageable={true}
        editable={true} showToolbar={true} altRows={true}
        pagerButtonsCount={8} toolbarHeight={35}
        renderToolbar={renderToolbar} columns={columns}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
