<template>
    <div>
        <JqxDataTable ref="myDataTable"
                      :width="getWidth" :source="dataAdapter" :columns="columns"
                      :sortable="true" :pageable="true" :columnsResize="true">
        </JqxDataTable>

        <div style="font-size: 13px; font-family: Verdana; width: 600px; margin-top: 10px">
            <div style="float: left; width: 300px">
                <h4>Column Alignment</h4>

                <JqxDropDownList @change="columnAlignment($event)"
                                 :height="25" :autoDropDownHeight="true"
                                 :selectedIndex="0" :source="dropDownsSource">
                </JqxDropDownList>

            </div>
            <div style="float: left; width: 300px">
                <h4>Cells Alignment</h4>

                <JqxDropDownList @change="cellsAlignment($event)"
                                 :height="25" :autoDropDownHeight="true"
                                 :selectedIndex="0" :source="dropDownsSource">
                </JqxDropDownList>

            </div>
        </div>
    </div>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxDataTable,
            JqxDropDownList
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Shipped Date', datafield: 'ShippedDate', width: '50%', cellsFormat: 'D' },
                    { text: 'Freight', datafield: 'Freight', width: '50%', cellsFormat: 'F2' }
                ],
                dropDownsSource: ['Left', 'Center', 'Right']
            }
        },
        beforeCreate: function () {

            this.source = {
                datatype: 'xml',
                datafields: [
                    { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                    { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                    { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
                    { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
                    { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
                    { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:OrderID',
                url: 'orders.xml'
            };
        },
        methods: {
            columnAlignment: function (event) {
                let index = event.args.index;
                switch (index) {
                    case 0:
                        this.$refs.myDataTable.setColumnProperty('ShippedDate', 'align', 'left');
                        this.$refs.myDataTable.setColumnProperty('Freight', 'align', 'left');
                        break;
                    case 1:
                        this.$refs.myDataTable.setColumnProperty('ShippedDate', 'align', 'center');
                        this.$refs.myDataTable.setColumnProperty('Freight', 'align', 'center');
                        break;
                    case 2:
                        this.$refs.myDataTable.setColumnProperty('ShippedDate', 'align', 'right');
                        this.$refs.myDataTable.setColumnProperty('Freight', 'align', 'right');
                        break;
                }
            },
            cellsAlignment: function (event) {
                let index = event.args.index;
                switch (index) {
                    case 0:
                        this.$refs.myDataTable.setColumnProperty('ShippedDate', 'cellsAlign', 'left');
                        this.$refs.myDataTable.setColumnProperty('Freight', 'cellsAlign', 'left');
                        break;
                    case 1:
                        this.$refs.myDataTable.setColumnProperty('ShippedDate', 'cellsAlign', 'center');
                        this.$refs.myDataTable.setColumnProperty('Freight', 'cellsAlign', 'center');
                        break;
                    case 2:
                        this.$refs.myDataTable.setColumnProperty('ShippedDate', 'cellsAlign', 'right');
                        this.$refs.myDataTable.setColumnProperty('Freight', 'cellsAlign', 'right');
                        break;
                }
            }
        }
    };
</script>

<style>
</style>