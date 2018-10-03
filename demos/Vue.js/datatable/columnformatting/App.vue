<template>
    <div>
        <JqxDataTable ref="myDataTable"
                      :width="getWidth" :source="dataAdapter" :columns="columns"
                      :sortable="true" :pageable="true" :columnsResize="true">
        </JqxDataTable>

        <div style="font-size: 13px; font-family: Verdana; width: 600px; margin-top: 10px">
            <div style="float: left; width: 300px">
                <h4>Shipped Date</h4>

                <JqxDropDownList @change="dateFormats($event)"
                                 :height="25" :autoDropDownHeight="true"
                                 :selectedIndex="1" :source="dateSource">
                </JqxDropDownList>

            </div>
            <div style="float: left; width: 300px">
                <h4>Cells Alignment</h4>

                <JqxDropDownList @change="numberFormats($event)"
                                 :height="25" :autoDropDownHeight="true"
                                 :selectedIndex="2" :source="numberSource">
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
                    { text: 'Freight', datafield: 'Freight', width: '50%', cellsFormat: 'F2', cellsalign: 'right' }
                ],
                dateSource: ['Short Date', 'Long Date', 'Long date, Short Time', 'Long date, Long Time', 'Month/Year', 'Month/Day', 'Custom'],
                numberSource: ['n', 'f', 'f2', 'f3', 'c', 'c2', 'c3', 'p', 'p2', 'p3']
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
            dateFormats: function (event) {
                let index = event.args.index;
                switch (index) {
                    case 0:
                        this.$refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'd');
                        break;
                    case 1:
                        this.$refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'D');
                        break;
                    case 2:
                        this.$refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'f');
                        break;
                    case 3:
                        this.$refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'F');
                        break;
                    case 4:
                        this.$refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'Y');
                        break;
                    case 5:
                        this.$refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'M');
                        break;
                    case 6:
                        this.$refs.myDataTable.setColumnProperty('ShippedDate', 'cellsFormat', 'yyyy-MM-dd HH:mm:ss');
                        break;
                }
            },
            numberFormats: function (event) {
                let index = event.args.index;
                switch (index) {
                    case 0:
                        this.$refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'n');
                        break;
                    case 1:
                        this.$refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'f');
                        break;
                    case 2:
                        this.$refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'f2');
                        break;
                    case 3:
                        this.$refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'f3');
                        break;
                    case 4:
                        this.$refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'c');
                        break;
                    case 5:
                        this.$refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'c2');
                        break;
                    case 6:
                        this.$refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'c3');
                        break;
                    case 7:
                        this.$refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'p');
                        break;
                    case 8:
                        this.$refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'p2');
                        break;
                    case 9:
                        this.$refs.myDataTable.setColumnProperty('Freight', 'cellsFormat', 'p3');
                        break;
                }
            }
        }
    };
</script>

<style>
</style>