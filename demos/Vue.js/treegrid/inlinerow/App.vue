<template>
    <JqxTreeGrid ref="myTreeGrid"
        @rowSelect="onRowSelect($event)" 
        @rowUnselect="onRowUnselect($event)"
        @rowEndEdit="onRowEndEdit($event)" 
        @rowBeginEdit="onRowBeginEdit($event)"
        :width="width"
        :pageable="true"
        :editable="true"
        :showToolbar="true"
        :altRows="true"
        :pagerButtonsCount="8"
        :toolbarHeight="35"
        :ready="ready"        
        :renderToolbar="renderToolbar"
        :columns="columns"
        :source="dataAdapter">
    </JqxTreeGrid>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';
    
    export default {
        components: {
            JqxTreeGrid,
            JqxButton
        },
        data: function () {
            return {
                width: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),                
                columns: [
                    { text: 'Location Name', dataField: "Name", align: 'center', width: '50%' },
                    { text: 'Population', dataField: "Population", align: 'right', cellsAlign: 'right', width: '50%' }
                ]
            }
        },
        beforeCreate: function () {
            this.rowKey = null;        
            this.newRowID = null;
            this.myAddButton;
            this.myEditButton;
            this.myDeleteButton;
            this.myCancelButton;
            this.myUpdateButton;
            
            // prepare the data
            this.source = {
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
                url: 'locations.tsv',
                addRow: (rowID, rowData, position, parentID, commit) => {
                    // synchronize with the server - send insert command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                    commit(true);
                    this.newRowID = rowID;
                },
                updateRow: (rowID, rowData, commit) => {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    commit(true);
                },
                deleteRow: (rowID, commit) => {
                    // synchronize with the server - send delete command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    commit(true);
                }
            };
        },
        methods: {
            ready: function () {
                // called when the DatatreeGrid is loaded.
            },
            renderToolbar: function (toolBar) {
                let toTheme = (className) => {
                    if (theme == "") return className;
                    return className + " " + className + "-" + theme;
                };
                let container = document.createElement('div');
                container.style.cssText = 'overflow: hidden; position: relative; height: 100%; width: 100%;';

                let createButton = (cssClass) => {
                    const button = document.createElement('div');
                    button.style.cssText = 'float: left; padding: 3px; margin: 2px;';
                    const iconDiv = document.createElement('div');
                    iconDiv.style.cssText = 'margin: 4px; width: 16px; height: 16px;';
                    iconDiv.className = cssClass;
                    button.appendChild(iconDiv);

                    return button;
                };

                toolBar[0].appendChild(container);

                let addButton = createButton(toTheme('jqx-icon-plus'));
                let editButton = createButton(toTheme('jqx-icon-edit'));
                let deleteButton = createButton(toTheme('jqx-icon-delete'));
                let updateButton = createButton(toTheme('jqx-icon-save'));
                let cancelButton = createButton(toTheme('jqx-icon-cancel'));
                container.appendChild(addButton);
                container.appendChild(editButton);
                container.appendChild(deleteButton);
                container.appendChild(updateButton);
                container.appendChild(cancelButton);

                const buttonOptions = { cursor: "pointer", disabled: true, enableDefault: false,  height: 25, width: 25 };
                this.myAddButton = jqwidgets.createInstance(addButton, 'jqxButton', buttonOptions);
                this.myEditButton = jqwidgets.createInstance(editButton, 'jqxButton', buttonOptions);
                this.myDeleteButton = jqwidgets.createInstance(deleteButton, 'jqxButton', buttonOptions);
                this.myUpdateButton = jqwidgets.createInstance(updateButton, 'jqxButton', buttonOptions);
                this.myCancelButton = jqwidgets.createInstance(cancelButton, 'jqxButton', buttonOptions);

                let tooltipOptions = { position: 'bottom', content: 'Add' };
                const myAddButtonTooltip = jqwidgets.createInstance(addButton, 'jqxTooltip', tooltipOptions);
                tooltipOptions.content = "Edit";
                const myEditButtonTooltip = jqwidgets.createInstance(editButton, 'jqxTooltip', tooltipOptions);
                tooltipOptions.content = "Delete";
                const myDeleteButtonTooltip = jqwidgets.createInstance(deleteButton, 'jqxTooltip', tooltipOptions);
                tooltipOptions.content = "Save Changes";
                const myUpdateButtonTooltip = jqwidgets.createInstance(updateButton, 'jqxTooltip', tooltipOptions);
                tooltipOptions.content = "Cancel";
                const myCancelButtonTooltip = jqwidgets.createInstance(cancelButton, 'jqxTooltip', tooltipOptions);

                this.myAddButton.addEventHandler('click', (event) => {
                    if (!this.myAddButton.disabled) {
                        this.$refs.myTreeGrid.expandRow(this.rowKey);
                        // add new empty row.
                        this.$refs.myTreeGrid.addRow(null, {}, 'first', this.rowKey);
                        // select the first row and clear the selection.
                        this.$refs.myTreeGrid.clearSelection();
                        this.$refs.myTreeGrid.selectRow(this.newRowID);
                        // edit the new row.
                        this.$refs.myTreeGrid.beginRowEdit(this.newRowID);
                        this.updateButtons('add');
                    }
                });
                this.myCancelButton.addEventHandler('click', (event) => {
                    if (!this.myCancelButton.disabled) {
                        // cancel changes.
                        this.$refs.myTreeGrid.endRowEdit(this.rowKey, true);
                    }
                });
                this.myUpdateButton.addEventHandler('click', (event) => {
                    if (!this.myUpdateButton.disabled) {
                        // save changes.
                        this.$refs.myTreeGrid.endRowEdit(this.rowKey, false);
                    }
                });
                this.myEditButton.addEventHandler('click', (event) => {
                    if (!this.myEditButton.disabled) {
                        this.$refs.myTreeGrid.beginRowEdit(this.rowKey);
                        this.updateButtons('edit');
                    }
                });
                this.myDeleteButton.addEventHandler('click', (event) => {
                    if (!this.myDeleteButton.disabled) {
                        let selection = this.$refs.myTreeGrid.getSelection();
                        if (selection.length > 1) {
                            let keys = new Array();
                            for (let i = 0; i < selection.length; i++) {
                                keys.push(this.$refs.myTreeGrid.getKey(selection[i]));                                    
                            }

                            this.$refs.myTreeGrid.deleteRow(keys);
                        } else {
                            this.$refs.myTreeGrid.deleteRow(this.rowKey);
                        }
                        
                        this.updateButtons('delete');
                    }
                });
            },
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
            onRowSelect(event) {
                this.rowKey = event.args.key;
                this.updateButtons('Select');
            },
            onRowUnselect(event) {
                this.updateButtons('Unselect');
            },
            onRowEndEdit(event) {
                this.updateButtons('End Edit');
            },
            onRowBeginEdit(event) {
                this.updateButtons('Edit');
            }
        }
    }
</script>

<style>
</style>
