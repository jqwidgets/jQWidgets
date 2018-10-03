<template>
    <div>
        <h3 style="font-size: 16px; font-family: Verdana">Data Source: 'http://services.odata.org'</h3>

        <JqxDataTable :width="getWidth" :source="dataAdapter" :columns="columns"
                      :altRows="true" :pageable="true" :serverProcessing="true"
                      :groups="['ShipCountry']" :groupsRenderer="groupsRenderer"
                      :pagerButtonsCount="10">
        </JqxDataTable>
    </div>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";

    export default {
        components: {
            JqxDataTable
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source,
                    {
                        formatData: (data) => {
                            if (this.source.totalRecords) {
                                // update the $skip and $top params of the OData service.
                                // data.pagenum - page number starting from 0.
                                // data.pagesize - page size
                                data.$skip = data.pagenum * data.pagesize;
                                data.$top = data.pagesize;
                                data.$orderby = 'ShipCountry asc';
                            }
                            return data;
                        },
                        downloadComplete: (data, status, xhr) => {
                            if (!this.source.totalRecords) {
                                this.source.totalRecords = data.value.length;
                            }
                        },
                        loadError: (xhr, status, error) => {
                            throw new Error('http://services.odata.org: ' + error.toString());
                        }
                    }
                ),
                columns: [
                    { text: 'Ship Name', dataField: 'ShipName', width: 250 },
                    { text: 'Ship Country', hidden: true, dataField: 'ShipCountry', width: 250 },
                    { text: 'Ship City', dataField: 'ShipCity', width: 150 },
                    { text: 'Ship Address', dataField: 'ShipAddress' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                dataType: 'json',
                dataFields: [
                    { name: 'ShipCountry', type: 'string' },
                    { name: 'ShipCity', type: 'string' },
                    { name: 'ShipAddress', type: 'string' },
                    { name: 'ShipName', type: 'string' },
                    { name: 'Freight', type: 'number' },
                    { name: 'ShippedDate', type: 'date' }
                ],
                root: 'value',
                url: 'http://services.odata.org/V3/Northwind/Northwind.svc/Orders?$format=json&$callback=?'
            };
        },
        methods: {
            groupsRenderer: function (value, rowData, level) {
                return 'Ship Country: ' + value;
            }
        }
    };
</script>

<style>
</style>