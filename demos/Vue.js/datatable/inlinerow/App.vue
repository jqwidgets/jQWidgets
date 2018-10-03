<template>
    <JqxDataTable ref="myDataTable"
                  @rowSelect="onRowSelect($event)" @rowUnelect="onRowUnselect($event)"
                  @rowEndEdit="onRowEndEdit($event)" @rowBeginEdit="onRowBeginEdit($event)"
                  :width="getWidth" :source="dataAdapter" :columns="columns"
                  :altRows="true" :editable="true" :pageable="true"
                  :pagerButtonsCount="8" :showToolbar="true" :toolbarHeight="35"
                  :renderToolbar="renderToolbar">
    </JqxDataTable>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxToolTip from "jqwidgets-scripts/jqwidgets-vue/vue_jqxtooltip.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";

    export default {
        components: {
            JqxDataTable
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Order ID', editable: false, dataField: 'OrderID', width: 200 },
                    { text: 'Freight', dataField: 'Freight', cellsFormat: 'f', cellsAlign: 'right', align: 'right', width: 200 },
                    {
                        text: 'Ship Country', dataField: 'ShipCountry', width: 250, columnType: 'custom',
                        createEditor: (row, cellValue, editor, width, height) => {
                            // create jqxInput editor.
                            const inputContainer = document.createElement('input');
                            inputContainer.className = 'shipCountry';
                            inputContainer.style.cssText = 'border: none; box-sizing: border-box; padding-left: 4px;'
                            editor[0].appendChild(inputContainer);

                            const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic', 'Congo, Republic of the', 'Costa Rica', 'Cote d`Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Mongolia', 'Morocco', 'Monaco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Samoa', 'San Marino', ' Sao Tome', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

                            const inputOptions = {
                                source: countries,
                                width: '100%',
                                height: '100%'
                            };

                            const myInput = jqwidgets.createInstance('.shipCountry', 'jqxInput', inputOptions)
                            myInput.val(cellValue);
                        },
                        initEditor: (row, cellvalue, editor, celltext, width, height) => {
                            // set the editor's current value. The callback is called each time the editor is displayed.
                            if (!cellvalue) cellvalue = '';
                            const inputField = editor.find('input');
                            inputField.val(cellvalue);
                        },
                        getEditorValue: (row, cellvalue, editor) => {
                            // return the editor's value.
                            return editor.find('input').val();
                        }
                    },
                    { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
                ]
            }
        },
        beforeCreate: function () {
            this.rowIndex;

            this.myAddButton;
            this.myEditButton;
            this.myDeleteButton;
            this.myCancelButton;
            this.myUpdateButton;

            this.source = {
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
                url: 'orderdetails.xml'
            };
        },
        methods: {
            updateButtons: function (action) {
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
            },
            renderToolbar: function (toolBar) {
                const theme = jqx.theme;

                const toTheme = (className) => {
                    if (theme == '') {
                        return className;
                    }
                    return className + ' ' + className + '-' + theme;
                }

                // appends buttons to the status bar.
                let container = document.createElement('div');
                let fragment = document.createDocumentFragment();

                container.style.cssText = 'overflow: hidden; position: hidden; height: "100%"; width: "100%"';

                const createButtons = (name, cssClass) => {

                    const button = document.createElement('div');
                    button.style.cssText = 'padding: 3px; margin: 2px; float: left; border: none';

                    const iconDiv = document.createElement('div');
                    iconDiv.style.cssText = 'margin: 4px; width: 16px; height: 16px;';
                    iconDiv.className = cssClass;

                    button.appendChild(iconDiv);
                    return button;
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

                container.appendChild(fragment);
                toolBar[0].appendChild(container);

                const addButtonOptions = { height: 25, width: 25 };
                const otherButtonsOptions = { disabled: true, height: 25, width: 25 };

                // we use TypeScript way of creating widgets here
                this.myAddButton = jqwidgets.createInstance(buttons[0], 'jqxButton', addButtonOptions);
                this.myEditButton = jqwidgets.createInstance(buttons[1], 'jqxButton', otherButtonsOptions);
                this.myDeleteButton = jqwidgets.createInstance(buttons[2], 'jqxButton', otherButtonsOptions);
                this.myCancelButton = jqwidgets.createInstance(buttons[3], 'jqxButton', otherButtonsOptions);
                this.myUpdateButton = jqwidgets.createInstance(buttons[4], 'jqxButton', otherButtonsOptions);

                const addTooltipOptions = { position: 'bottom', content: 'Add' };
                const editTooltipOptions = { position: 'bottom', content: 'Edit' };
                const deleteTooltipOptions = { position: 'bottom', content: 'Delete' };
                const updateTooltipOptions = { position: 'bottom', content: 'Save Changes' };
                const cancelTooltipOptions = { position: 'bottom', content: 'Cancel' };

                const myAddToolTip = jqwidgets.createInstance(buttons[0], 'jqxTooltip', addTooltipOptions);
                const myEditToolTip = jqwidgets.createInstance(buttons[1], 'jqxTooltip', editTooltipOptions);
                const myDeleteToolTip = jqwidgets.createInstance(buttons[2], 'jqxTooltip', deleteTooltipOptions);
                const myCancelToolTip = jqwidgets.createInstance(buttons[3], 'jqxTooltip', cancelTooltipOptions);
                const myUpdateToolTip = jqwidgets.createInstance(buttons[4], 'jqxTooltip', updateTooltipOptions);


                this.myAddButton.addEventHandler('click', (event) => {
                    if (!this.myAddButton.disabled) {
                        //add new empty row.
                        this.$refs.myDataTable.addRow(null, {}, 'first')
                        //select the first row and clear the selection.
                        this.$refs.myDataTable.clearSelection();
                        this.$refs.myDataTable.selectRow(0);
                        //edit the new row.
                        this.$refs.myDataTable.beginRowEdit(0);
                    }
                });

                this.myEditButton.addEventHandler('click', (event) => {
                    if (!this.myEditButton.disabled) {
                        this.$refs.myDataTable.beginRowEdit(this.rowIndex);
                    }
                });

                this.myDeleteButton.addEventHandler('click', (event) => {
                    if (!this.myDeleteButton.disabled) {
                        this.$refs.myDataTable.deleteRow(this.rowIndex);
                    }
                });

                this.myCancelButton.addEventHandler('click', (event) => {
                    if (!this.myCancelButton.disabled) {
                        //cancel changes.
                        this.$refs.myDataTable.endRowEdit(this.rowIndex, true);
                    }
                });

                this.myUpdateButton.addEventHandler('click', (event) => {
                    if (!this.myUpdateButton.disabled) {
                        //save changes.
                        this.$refs.myDataTable.endRowEdit(this.rowIndex, false);
                    }
                });
            },
            onRowSelect: function (event) {
                this.rowIndex = event.args.index;
                this.updateButtons('Select');
            },
            onRowUnselect: function (event) {
                this.updateButtons('Unselect');
            },
            onRowEndEdit: function (event) {
                this.updateButtons('End Edit');
            },
            onRowBeginEdit: function (event) {
                this.updateButtons('Edit');
            }
        }
    };
</script>

<style>
</style>