<template>
    <div>
        <JqxDataTable ref="myDataTable" @rowDoubleClick="onRowDoubleClick($event)"
                      :width="getWidth" :source="dataAdapter" :columns="columns"
                      :altRows="true" :sortable="true" :pageable="true"
                      :pagerButtonsCount="8">
        </JqxDataTable>

        <JqxWindow ref=myWindow @close="myWindowOnClose()"
                   :width="270" :height="235" :resizable="false" :autoOpen="false" :position="{ left: 85, top: 43 }">
            <div>Edit Dialog</div>
            <div style="overflow: hidden">
                <table style="table-layout: fixed; border-style: none">
                    <tbody>
                        <tr>
                            <td align='right'>
                                Order ID:
                            </td>
                            <td align='left'>
                                <JqxInput ref="orderID" :width="150" :height="30" :disabled="true"></JqxInput>
                            </td>
                        </tr>
                        <tr>
                            <td align='right'>
                                Freight:
                            </td>
                            <td align='left'>
                                <JqxNumberInput ref="freight"
                                                :width="156" :height="30" :spinButtons="true" :inputMode="'simple'">
                                </JqxNumberInput>
                            </td>
                        </tr>
                        <tr>
                            <td align='right'>
                                Ship Country:
                            </td>
                            <td align='left'>
                                <JqxInput ref="shipCountry" :width="150" :height="30" :source="countries"></JqxInput>
                            </td>
                        </tr>
                        <tr>
                            <td align='right'>
                                Shipped Date:
                            </td>
                            <td align='left'>
                                <JqxDateTimeInput ref="shipDate"
                                                  :width="156" :height="30">
                                </JqxDateTimeInput>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2' align='right'>
                                <br />
                                <JqxButton @click="cancelBtnOnClick()" style="margin-left: 5px; float: right"
                                           :width="80" :height="30">
                                    Cancel
                                </JqxButton>
                                <JqxButton @click="saveBtnOnClick()" style="float: right"
                                           :width="80" :height="30">
                                    Save
                                </JqxButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </JqxWindow>
    </div>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";
    import JqxWindow from "jqwidgets-scripts/jqwidgets-vue/vue_jqxwindow.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";
    import JqxNumberInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnumberinput.vue";
    import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxDataTable,
            JqxWindow,
            JqxInput,
            JqxNumberInput,
            JqxDateTimeInput,
            JqxButton
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Order ID', editable: false, dataField: 'OrderID', width: 200 },
                    { text: 'Freight', dataField: 'Freight', cellsFormat: 'f2', cellsAlign: 'right', align: 'right', width: 200 },
                    { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                    { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'd' }
                ],
                countries: new Array('Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic', 'Congo, Republic of the', 'Costa Rica', 'Cote d`Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guinea', 'Guinea- Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Mongolia', 'Morocco', 'Monaco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Samoa', 'San Marino', ' Sao Tome', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe')
            }
        },
        beforeCreate: function () {
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
            onRowDoubleClick: function (event) {
                let args = event.args;
                let index = args.index;
                let row = args.row;
                this.tempIndexHolder = index;
                // Update the widgets inside Window.
                this.$refs.myWindow.setTitle('Edit Row: ' + row.OrderID);
                this.$refs.myWindow.open();
                this.$refs.myDataTable.disabled = true;
                this.$refs.orderID.value = row.OrderID;
                this.$refs.freight.value = row.Freight;
                this.$refs.shipCountry.value = row.ShipCountry;
                this.$refs.shipDate.value = row.ShippedDate;
            },
            cancelBtnOnClick: function () {
                this.$refs.myWindow.close();
            },
            saveBtnOnClick: function () {
                this.$refs.myWindow.close();
                // Update edited row.
                let editRow = parseInt(this.tempIndexHolder);
                let rowData = {
                    OrderID: this.$refs.orderID.value,
                    Freight: this.$refs.freight.val(),
                    ShipCountry: this.$refs.shipCountry.value,
                    ShippedDate: this.$refs.shipDate.value
                };
                this.$refs.myDataTable.updateRow(editRow, rowData);
            },
            myWindowOnClose: function () {
                this.$refs.myDataTable.disabled = false;
            }
        }
    };
</script>

<style>
    .jqx-button {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>