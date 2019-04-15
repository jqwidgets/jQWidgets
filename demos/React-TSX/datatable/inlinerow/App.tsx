import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';


class App extends React.PureComponent<{}, IDataTableProps> {

    private myDataTable = React.createRef<JqxDataTable>();
    private shipCountryInput = React.createRef<JqxInput>();
    private myAddButton = React.createRef<JqxButton>();
    private myEditButton = React.createRef<JqxButton>();
    private myDeleteButton = React.createRef<JqxButton>();
    private myCancelButton = React.createRef<JqxButton>();
    private myUpdateButton = React.createRef<JqxButton>();
    private rowIndex: number;

    constructor(props: {}) {
        super(props);
        this.onRowSelect = this.onRowSelect.bind(this);
        this.onRowUnselect = this.onRowUnselect.bind(this);
        this.onRowEndEdit = this.onRowEndEdit.bind(this);
        this.onRowBeginEdit = this.onRowBeginEdit.bind(this);
        this.updateButtons = this.updateButtons.bind(this);

        const source = {
            dataFields: [
                { name: 'OrderID', type: 'int' },
                { name: 'Freight', type: 'float' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            dataType: 'xml',
            id: 'OrderID',
            record: 'Order',
            root: 'Orders',
            url: 'orderdetails.xml'
        };

        const renderToolbar = (toolBar: any): void => {
            const theme = jqx.theme;

            const toTheme = (className: string): string => {
                if (theme === '') {
                    return className;
                }
                return className + ' ' + className + '-' + theme;
            }

            // appends buttons to the status bar.
            const container = document.createElement('div');
            container.id = "myContainer";
            const fragment = document.createDocumentFragment();

            container.style.cssText = 'overflow: hidden; height: 100%; width: 100%';

            const createButtons = (name: string, cssClass: string): any => {
                const button = document.createElement('div');
                button.style.cssText = 'float: left;';

                return button;
            }

            const buttons = [
                createButtons('addButton', toTheme('jqx-icon-plus')),
                createButtons('editButton', toTheme('jqx-icon-edit')),
                createButtons('deleteButton', toTheme('jqx-icon-delete')),
                createButtons('cancelButton', toTheme('jqx-icon-cancel')),
                createButtons('updateButton', toTheme('jqx-icon-save'))
            ];

            for (const btn of buttons) {
                fragment.appendChild(btn);
            }

            container.appendChild(fragment);
            toolBar[0].appendChild(container);

            const addHandler = () => {
                if (!this.myAddButton.current!.getOptions('disabled')) {
                    // add new empty row.
                    this.myDataTable.current!.addRow(null, {}, 'first')
                    // select the first row and clear the selection.
                    this.myDataTable.current!.clearSelection();
                    this.myDataTable.current!.selectRow(0);
                    // edit the new row.
                    this.myDataTable.current!.beginRowEdit(0);
                    this.updateButtons('add');
                }
            };

            const editHandler = () => {
                if (!this.myEditButton.current!.getOptions('disabled')) {
                    this.myDataTable.current!.beginRowEdit(this.rowIndex);
                    this.updateButtons('edit');
                }
            };

            const deleteHandler = () => {
                if (!this.myDeleteButton.current!.getOptions('disabled')) {
                    this.myDataTable.current!.deleteRow(this.rowIndex);
                    this.updateButtons('delete');
                }
            };

            const cancelHandler = () => {
                if (!this.myCancelButton.current!.getOptions('disabled')) {
                    // cancel changes.
                    this.myDataTable.current!.endRowEdit(this.rowIndex, true);
                }
            };

            const saveHandler = () => {
                if (!this.myUpdateButton.current!.getOptions('disabled')) {
                    // save changes.
                    this.myDataTable.current!.endRowEdit(this.rowIndex, false);
                }
            };

            const buttonStyle = { margin: '2px', padding: '3px', border: 'none' };
            const iconStyle = { margin: '4px', width: '16px', height: '16px' };

            ReactDOM.render(
                <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Add'}>
                    <JqxButton theme={'material-purple'} ref={this.myAddButton} onClick={addHandler} style={buttonStyle}
                        width={25} height={25}>
                        <div className={toTheme('jqx-icon-plus')} style={iconStyle} />
                    </JqxButton>
                </JqxTooltip>,
                buttons[0]
            );
            ReactDOM.render(
                <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Edit'}>
                    <JqxButton theme={'material-purple'} ref={this.myEditButton} onClick={editHandler} style={buttonStyle}
                        width={25} height={25} disabled={true}>
                        <div className={toTheme('jqx-icon-edit')} style={iconStyle} />
                    </JqxButton>
                </JqxTooltip>,
                buttons[1]
            );
            ReactDOM.render(
                <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Delete'}>
                    <JqxButton theme={'material-purple'} ref={this.myDeleteButton} onClick={deleteHandler} style={buttonStyle}
                        width={25} height={25} disabled={true}>
                        <div className={toTheme('jqx-icon-delete')} style={iconStyle} />
                    </JqxButton>
                </JqxTooltip>,
                buttons[2]
            );
            ReactDOM.render(
                <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Cancel'}>
                    <JqxButton theme={'material-purple'} ref={this.myCancelButton} onClick={cancelHandler} style={buttonStyle}
                        width={25} height={25} disabled={true}>
                        <div className={toTheme('jqx-icon-cancel')} style={iconStyle} />
                    </JqxButton>
                </JqxTooltip>,
                buttons[3]
            );
            ReactDOM.render(
                <JqxTooltip theme={'material-purple'} position={'bottom'} content={'Save Changes'}>
                    <JqxButton theme={'material-purple'} ref={this.myUpdateButton} onClick={saveHandler} style={buttonStyle}
                        width={25} height={25} disabled={true}>
                        <div className={toTheme('jqx-icon-save')} style={iconStyle} />
                    </JqxButton>
                </JqxTooltip>,
                buttons[4]
            );
        };

        const columns: IDataTableProps['columns'] = [
            { text: 'Order ID', editable: false, dataField: 'OrderID', width: 200 },
            { text: 'Freight', dataField: 'Freight', cellsFormat: 'f', cellsAlign: 'right', align: 'right', width: 200 },
            {
                columnType: 'custom',
                createEditor: (row: any, cellValue: any, editor: any, width: any, height: any): void => {
                    const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic', 'Congo, Republic of the', 'Costa Rica', 'Cote d`Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Mongolia', 'Morocco', 'Monaco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Samoa', 'San Marino', ' Sao Tome', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

                    ReactDOM.render(
                        <JqxInput theme={'material-purple'} ref={this.shipCountryInput} 
                            width={'100%'} height={'100%'} source={countries} />,
                        editor[0]
                    );

                    editor.find('input')[0].style.paddingLeft = '4px';
                    editor.find('input')[0].style.border = 'none';
                    editor.find('input')[0].style.boxSizing = 'border-box';

                    editor.find('input')[0].value = cellValue;
                },
                dataField: 'ShipCountry',
                getEditorValue: (row: any, cellvalue: any, editor: any): string => {
                    // return the editor's value.
                    return editor.find('input')[0].value;
                },
                initEditor: (row: any, cellvalue: any, editor: any, celltext: any, width: any, height: any): void => {
                    // set the editor's current value. The callback is called each time the editor is displayed.         
                    if (!cellvalue) {
                        cellvalue = '';
                    }
                    editor.find('input')[0].value = cellvalue;
                },
                text: 'Ship Country',
                width: 250,
            },
            { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
        ];

        this.state = {
            columns,
            renderToolbar,
            source: new jqx.dataAdapter(source)
        };
    }

    public render() {
        return (
            <JqxDataTable theme={'material-purple'} ref={this.myDataTable}
                onRowSelect={this.onRowSelect} onRowUnselect={this.onRowUnselect}
                onRowBeginEdit={this.onRowBeginEdit} onRowEndEdit={this.onRowEndEdit}
                // @ts-ignore 
                width={'100%'} source={this.state.source} columns={this.state.columns}
                altRows={true} editable={true} pageable={true} pagerButtonsCount={8}
                showToolbar={true} toolbarHeight={35} renderToolbar={this.state.renderToolbar} />
        );
    }

    private onRowSelect(event: any): void {
        this.rowIndex = event.args.index;
        this.updateButtons('Select');
    };

    private onRowUnselect(event: any): void {
        this.updateButtons('Unselect');
    };

    private onRowEndEdit(event: any): void {
        this.updateButtons('End Edit');
    };

    private onRowBeginEdit(event: any): void {
        this.updateButtons('Edit');
    };

    private updateButtons(action: string): void {
        switch (action) {
            case 'Select':
                this.myAddButton.current!.setOptions({ disabled: false });
                this.myDeleteButton.current!.setOptions({ disabled: false });
                this.myEditButton.current!.setOptions({ disabled: false });
                this.myCancelButton.current!.setOptions({ disabled: true });
                this.myUpdateButton.current!.setOptions({ disabled: true });
                break;
            case 'Unselect':
                this.myAddButton.current!.setOptions({ disabled: false });
                this.myDeleteButton.current!.setOptions({ disabled: true });
                this.myEditButton.current!.setOptions({ disabled: true });
                this.myCancelButton.current!.setOptions({ disabled: true });
                this.myUpdateButton.current!.setOptions({ disabled: true });
                break;
            case 'Edit':
                this.myAddButton.current!.setOptions({ disabled: true });
                this.myDeleteButton.current!.setOptions({ disabled: true });
                this.myEditButton.current!.setOptions({ disabled: true });
                this.myCancelButton.current!.setOptions({ disabled: false });
                this.myUpdateButton.current!.setOptions({ disabled: false });
                break;
            case 'End Edit':
                this.myAddButton.current!.setOptions({ disabled: false });
                this.myDeleteButton.current!.setOptions({ disabled: false });
                this.myEditButton.current!.setOptions({ disabled: false });
                this.myCancelButton.current!.setOptions({ disabled: true });
                this.myUpdateButton.current!.setOptions({ disabled: true });
                break;
        }
    };
}

export default App;