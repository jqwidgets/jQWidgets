<template>
    <JqxMenu :source="records"
             :mode="'vertical'"
             :width="150">
    </JqxMenu>
</template>
<script>
    import JqxMenu from "jqwidgets-scripts/jqwidgets-vue/vue_jqxmenu.vue"

    export default {
        components: {
            JqxMenu
        },
        data: function () {
            return {
                records: this.getAdapter(this.source).getGroupedRecords(['ContactTitle', 'ContactName'], 'items', 'label', [{ name: 'ContactName', map: 'label' }])
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: "xml",
                datafields: [
                    { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
                    { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
                    { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle' },
                    { name: 'City', map: 'm\\:properties>d\\:City' },
                    { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode' },
                    { name: 'Country', map: 'm\\:properties>d\\:Country' }
                ],
                root: "entry",
                record: "content",
                id: 'm\\:properties>d\\:CustomerID',
                url: 'customers.xml',
                async: false
            }
        },
        methods: {
            getAdapter: function(source) {
                let dataAdapter = new jqx.dataAdapter(source);
                // perform Data Binding.
                dataAdapter.dataBind();
                return dataAdapter;
            }
        }
    }
</script>

<style>
</style>
