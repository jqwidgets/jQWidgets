<template>
    <div>
        <span style="margin-top: 6px; font-size: 12px; font-family: verdana; float: left">Customers:</span>

        <JqxComboBox ref="customersComboBox" style="margin-left: 5px; float: left"
                     @select="customersOnSelect($event)"
                     :width="300" :height="25" :source="customersAdapter" :valueMember="'CustomerID'"
                     :placeHolder="'Select customer...'" :displayMember="'CompanyName'">
        </JqxComboBox>

        <div style="clear: both"></div>
        <div style="margin-top: 20px"></div>

        <span style="margin-top: 6px; font-size: 12px; font-family: verdana; float: left">Orders:</span>

        <JqxComboBox ref="ordersComboBox" style="margin-left: 5px; float: left"
                     @select="ordersOnSelect($event)"
                     :width="300" :height="25" :source="ordersAdapter" :valueMember="'CustomerID'"
                     :placeHolder="'Select order...'" :displayMember="'OrderID'" :disabled="true">
        </JqxComboBox>

        <div style="clear: both"></div>
        <div id="orderInfo" style="margin-top: 25px; font-size: 12px"></div>
    </div>
</template>

<script>
    import JqxComboBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcombobox.vue";
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";

    export default {
        components: {
            JqxComboBox,
            JqxDataTable
        },
        data: function () {
            return {
                customersAdapter: new jqx.dataAdapter(this.customersSource),
                ordersAdapter: new jqx.dataAdapter(this.ordersSource)
            }
        },
        beforeCreate: function () {

            this.customersSource = {
                dataType: 'json',
                dataFields: [
                    { name: 'CompanyName' },
                    { name: 'CustomerID' }
                ],
                url: 'customers.txt'
            };

            this.ordersSource = {
                dataType: 'json',
                dataFields: [
                    { name: 'CustomerID' },
                    { name: 'OrderID' },
                    { name: 'ShipCity' },
                    { name: 'OrderDate' },
                    { name: 'ShipName' },
                    { name: 'ShipCountry' },
                    { name: 'ShipAddress' }
                ],
                url: 'orders.txt'
            };
        },
        methods: {
            customersOnSelect: function (event) {
                if (event.args) {
                    this.$refs.ordersComboBox.setOptions({ disabled: false, selectedIndex: -1 });
                    let value = event.args.item.value;
                    let ordersSource = this.$refs.ordersComboBox.source._source;
                    ordersSource.data = { CustomerID: value };
                    let ordersAdapter = new jqx.dataAdapter(ordersSource, {
                        beforeLoadComplete: (records) => {
                            let filteredRecords = new Array();
                            for (let i = 0; i < records.length; i++) {
                                if (records[i].CustomerID == value)
                                    filteredRecords.push(records[i]);
                            }
                            return filteredRecords;
                        }
                    });
                    this.$refs.ordersComboBox.setOptions({ source: ordersAdapter, autoDropDownHeight: ordersAdapter.records.length > 10 ? false : true });
                }
            },
            ordersOnSelect: function (event) {
                if (event.args) {
                    let index = this.$refs.ordersComboBox.selectedIndex;
                    if (index !== -1) {
                        let record = this.ordersAdapter.records[index];
                        let detailsSource =
                            {
                                dataType: 'json',
                                dataFields: [
                                    { name: 'CustomerID' },
                                    { name: 'OrderID' },
                                    { name: 'ShipCity' },
                                    { name: 'OrderDate' },
                                    { name: 'ShipName' },
                                    { name: 'ShipCountry' },
                                    { name: 'ShipAddress' }
                                ],
                                localData: record
                            };
                        let detailsAdapter = new jqx.dataAdapter(detailsSource);

                        let options = {
                            source: detailsAdapter,
                            width: 500,
                            columns: [
                                { text: 'Order Date', dataField: 'OrderDate', cellsFormat: 'd' },
                                { text: 'Ship Country', dataField: 'ShipCountry' },
                                { text: 'Ship Address', dataField: 'ShipAddress' },
                                { text: 'Ship Name', dataField: 'ShipName' }
                            ]
                        };

                        jqwidgets.createInstance('#orderInfo', 'jqxDataTable', options);
                    }
                }
            }
        }
    };
</script>

<style>
</style>