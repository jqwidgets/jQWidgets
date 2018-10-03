<template>
    <JqxTreeGrid ref="treeGrid"
                 :width="getWidth"
                 :source="dataAdapter"
                 :pageable="true"
                 :columnsResize="true"
                 :altRows="true"
                 :icons="icons"
                 :columns="columns"
                 :ready="ready">
    </JqxTreeGrid>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';;

    export default {
        components: {
            JqxTreeGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'City', dataField: 'City', width: 250 },
                    { text: 'Company Name', dataField: 'CompanyName', minWidth: 100, width: 200 },
                    { text: 'Contact Name', dataField: 'ContactName', width: 150 },
                    { text: 'Contact Title', dataField: 'ContactTitle', width: 300 },
                    { text: 'Postal Code', dataField: 'PostalCode', width: 120 }
                ]
            }
        },
        beforeCreate: function () {

            this.source = {
                datatype: 'xml',
                datafields: [
                    { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
                    { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
                    { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle' },
                    { name: 'City', map: 'm\\:properties>d\\:City' },
                    { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode' },
                    { name: 'Country', map: 'm\\:properties>d\\:Country' }
                ],
                hierarchy: {
                    groupingDataFields: [
                        { name: 'Country' }
                    ]
                },
                root: 'entry',
                record: 'content',
                id: { name: 'CustomerID', map: 'm\\:properties>d\\:CustomerID' },
                url: 'customers.xml'
            };
        },
        methods: {
            ready: function () {
                this.$refs.treeGrid.expandRow(0);
            },
            icons: function (rowKey, rowData) {
                let level = rowData.level;
                if (level == 0) {
                    // each group row has a label member that contains the information displayed on the group row.
                    let country = rowData.label;
                    return '../images/' + $.trim(country.toLowerCase()) + '.png';
                }
                return false;
            }
        }
    }
</script>

<style>
</style>