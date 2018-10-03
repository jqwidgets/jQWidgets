<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">

        <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns"
                 :pageable="true" :autoheight="true" :editable="true"
                 :selectionmode="'singlecell'">
        </JqxGrid>

    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";

    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    {
                        text: 'Ship City', datafield: 'ShipCity', width: 150, columntype: 'combobox',
                        createeditor: (row, column, editor) => {
                            // assign a new data source to the combobox.
                            let list = ['Stuttgart', 'Rio de Janeiro', 'Strasbourg'];
                            editor.jqxComboBox({ autoDropDownHeight: true, source: list, promptText: 'Please Choose:' });
                        },
                        // update the editor's value before saving it.
                        cellvaluechanging: (row, column, columntype, oldvalue, newvalue) => {
                            // return the old value, if the new value is empty.
                            if (newvalue == '') return oldvalue;
                        }
                    },
                    {
                        text: 'Ship Country', datafield: 'ShipCountry', width: 150, columntype: 'dropdownlist',
                        createeditor: (row, column, editor) => {
                            // assign a new data source to the dropdownlist.
                            let list = ['Germany', 'Brazil', 'France'];
                            editor.jqxDropDownList({ autoDropDownHeight: true, source: list });
                        },
                        // update the editor's value before saving it.
                        cellvaluechanging: (row, column, columntype, oldvalue, newvalue) => {
                            // return the old value, if the new value is empty.
                            if (newvalue == '') return oldvalue;
                        }
                    },
                    { text: 'Ship Name', datafield: 'ShipName', columntype: 'combobox' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'xml',
                datafields: [
                    { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                    { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                    { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
                    { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
                    { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
                    { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:OrderID',
                url: 'orders.xml'
            };
        }
    }
</script>

<style>
</style>