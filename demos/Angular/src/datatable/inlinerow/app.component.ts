import { Component, ViewChild } from '@angular/core';

import { jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDataTable', { static: false }) myDataTable: jqxDataTableComponent;

    rowIndex: number;

    myAddButton: jqwidgets.jqxButton;
    myEditButton: jqwidgets.jqxButton;
    myDeleteButton: jqwidgets.jqxButton;
    myCancelButton: jqwidgets.jqxButton;
    myUpdateButton: jqwidgets.jqxButton;

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    source: any =
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
        root: 'Orders',
        record: 'Order',
        dataType: 'xml',
        id: 'OrderID',
        url: './../../../sampledata/orderdetails.xml'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    renderToolbar = (toolBar: any): void => {
        let theme = jqx.theme;

        let toTheme = (className: string): string => {
            if (theme == '') return className;
            return className + ' ' + className + '-' + theme;
        }

        // appends buttons to the status bar.
        let container = document.createElement('div');
        let fragment = document.createDocumentFragment();

        container.style.cssText = 'overflow: hidden; position: hidden; height: "100%"; width: "100%"'

        let createButtons = (name: string, cssClass: string): any => {
            this[name] = document.createElement('div');
            this[name].style.cssText = 'padding: 3px; margin: 2px; float: left; border: none'

            let iconDiv = document.createElement('div');
            iconDiv.style.cssText = 'margin: 4px; width: 16px; height: 16px;'
            iconDiv.className = cssClass;

            this[name].appendChild(iconDiv);
            return this[name];
        }

        let buttons = [
            createButtons('addButton', toTheme('jqx-icon-plus')),
            createButtons('editButton', toTheme('jqx-icon-edit')),
            createButtons('deleteButton', toTheme('jqx-icon-delete')),
            createButtons('cancelButton', toTheme('jqx-icon-cancel')),
            createButtons('updateButton', toTheme('jqx-icon-save'))
        ];

        for (let i = 0; i < buttons.length; i++) {
            fragment.appendChild(buttons[i]);
        }

        container.appendChild(fragment)
        toolBar[0].appendChild(container);

        let addButtonOptions: jqwidgets.ButtonOptions =
            {
                height: 25, width: 25
            }
        let otherButtonsOptions: jqwidgets.ButtonOptions =
            {
                disabled: true, height: 25, width: 25
            }
        // we use TypeScript way of creating widgets here
        this.myAddButton = jqwidgets.createInstance(buttons[0], 'jqxButton', addButtonOptions);
        this.myEditButton = jqwidgets.createInstance(buttons[1], 'jqxButton', otherButtonsOptions);
        this.myDeleteButton = jqwidgets.createInstance(buttons[2], 'jqxButton', otherButtonsOptions);
        this.myCancelButton = jqwidgets.createInstance(buttons[3], 'jqxButton', otherButtonsOptions);
        this.myUpdateButton = jqwidgets.createInstance(buttons[4], 'jqxButton', otherButtonsOptions);

        let addTooltopOptions: jqwidgets.TooltipOptions =
            {
                position: 'bottom', content: 'Add'
            }
        let editTooltopOptions: jqwidgets.TooltipOptions =
            {
                position: 'bottom', content: 'Edit'
            }
        let deleteTooltopOptions: jqwidgets.TooltipOptions =
            {
                position: 'bottom', content: 'Delete'
            }
        let updateTooltopOptions: jqwidgets.TooltipOptions =
            {
                position: 'bottom', content: 'Save Changes'
            }
        let cancelTooltopOptions: jqwidgets.TooltipOptions =
            {
                position: 'bottom', content: 'Cancel'
            }

        let myAddToolTip: jqwidgets.jqxTooltip = jqwidgets.createInstance(buttons[0], 'jqxTooltip', addTooltopOptions);
        let myEditToolTip: jqwidgets.jqxTooltip = jqwidgets.createInstance(buttons[1], 'jqxTooltip', editTooltopOptions);
        let myDeleteToolTip: jqwidgets.jqxTooltip = jqwidgets.createInstance(buttons[2], 'jqxTooltip', deleteTooltopOptions);
        let myCancelToolTip: jqwidgets.jqxTooltip = jqwidgets.createInstance(buttons[3], 'jqxTooltip', cancelTooltopOptions);
        let myUpdateToolTip: jqwidgets.jqxTooltip = jqwidgets.createInstance(buttons[4], 'jqxTooltip', updateTooltopOptions);


        this.myAddButton.addEventHandler('click', (event: any) => {
            if (!this.myAddButton.disabled) {
                //add new empty row.
                this.myDataTable.addRow(null, {}, 'first')
                //select the first row and clear the selection.
                this.myDataTable.clearSelection();
                this.myDataTable.selectRow(0);
                //edit the new row.
                this.myDataTable.beginRowEdit(0);
                this.updateButtons('add');
            }
        });

        this.myEditButton.addEventHandler('click', (event: any) => {
            if (!this.myEditButton.disabled) {
                this.myDataTable.beginRowEdit(this.rowIndex);
                this.updateButtons('edit');
            }
        });

        this.myDeleteButton.addEventHandler('click', (event: any) => {
            if (!this.myDeleteButton.disabled) {
                this.myDataTable.deleteRow(this.rowIndex);
                this.updateButtons('delete');
            }
        });

        this.myCancelButton.addEventHandler('click', (event: any) => {
            if (!this.myCancelButton.disabled) {
                //cancel changes.
                this.myDataTable.endRowEdit(this.rowIndex, true);
            }
        });

        this.myUpdateButton.addEventHandler('click', (event: any) => {
            if (!this.myUpdateButton.disabled) {
                //save changes.
                this.myDataTable.endRowEdit(this.rowIndex, false);
            }
        });
    };

    columns: any[] =
    [
        { text: 'Order ID', editable: false, dataField: 'OrderID', width: 200 },
        { text: 'Freight', dataField: 'Freight', cellsFormat: 'f', cellsAlign: 'right', align: 'right', width: 200 },
        {
            text: 'Ship Country', dataField: 'ShipCountry', width: 250, columnType: 'custom',
            createEditor: (row: any, cellValue: any, editor: any, width: any, height: any): void => {
                // create jqxInput editor.
                let inputContainer = document.createElement('input');
                inputContainer.className = 'shipCountry';
                inputContainer.style.cssText = 'border: none; box-sizing: border-box; padding-left: 4px;'
                editor[0].appendChild(inputContainer);

                let countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic', 'Congo, Republic of the', 'Costa Rica', 'Cote d`Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Mongolia', 'Morocco', 'Monaco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Samoa', 'San Marino', ' Sao Tome', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

                let InputOptions: jqwidgets.InputOptions = {
                    source: countries,
                    width: '100%',
                    height: '100%'
                }
                let myInput: jqwidgets.jqxInput = jqwidgets.createInstance('.shipCountry', 'jqxInput', InputOptions)
                myInput.val(cellValue);
            },
            initEditor: (row: any, cellvalue: any, editor: any, celltext: any, width: any, height: any): void => {
                // set the editor's current value. The callback is called each time the editor is displayed.         
                if (!cellvalue) cellvalue = '';
                let inputField = editor.find('input');
                inputField.val(cellvalue);
            },
            getEditorValue: (row: any, cellvalue: any, editor: any): void => {
                // return the editor's value.
                return editor.find('input').val();
            }
        },
        { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
    ];

    updateButtons(action: string): void {
        switch (action) {
            case 'Select':
                this.myAddButton.setOptions({ disabled: false });
                this.myDeleteButton.setOptions({ disabled: false });
                this.myEditButton.setOptions({ disabled: false });
                this.myCancelButton.setOptions({ disabled: true });
                this.myUpdateButton.setOptions({ disabled: true });
                break;
            case 'Unselect':
                this.myAddButton.setOptions({ disabled: false });
                this.myDeleteButton.setOptions({ disabled: true });
                this.myEditButton.setOptions({ disabled: true });
                this.myCancelButton.setOptions({ disabled: true });
                this.myUpdateButton.setOptions({ disabled: true });
                break;
            case 'Edit':
                this.myAddButton.setOptions({ disabled: true });
                this.myDeleteButton.setOptions({ disabled: true });
                this.myEditButton.setOptions({ disabled: true });
                this.myCancelButton.setOptions({ disabled: false });
                this.myUpdateButton.setOptions({ disabled: false });
                break;
            case 'End Edit':
                this.myAddButton.setOptions({ disabled: false });
                this.myDeleteButton.setOptions({ disabled: false });
                this.myEditButton.setOptions({ disabled: false });
                this.myCancelButton.setOptions({ disabled: true });
                this.myUpdateButton.setOptions({ disabled: true });
                break;
        }
    }

    onRowSelect(event: any): void {
        this.rowIndex = event.args.index;
        this.updateButtons('Select');
    };

    onRowUnselect(event: any): void {
        this.updateButtons('Unselect');
    };

    onRowEndEdit(event: any): void {
        this.updateButtons('End Edit');
    };

    onRowBeginEdit(event: any): void {
        this.updateButtons('Edit');
    };
}

