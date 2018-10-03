<template>
    <JqxTree :width="300" :source="records"></JqxTree>
</template>

<script>
    import JqxTree from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtree.vue';

    export default {
        components: {
            JqxTree
        },    
        beforeCreate: function () {
            const source = {
                datatype: 'xml',
                datafields: [
                    { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
                    { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
                    { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle' },
                    { name: 'City', map: 'm\\:properties>d\\:City' },
                    { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode' },
                    { name: 'Country', map: 'm\\:properties>d\\:Country' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:CustomerID',
                url: 'customers.xml',
                async: false
            };

            const dataAdapter = new jqx.dataAdapter(source, { autoBind: true });
    
            this.records = dataAdapter.getGroupedRecords(['Country', 'City'], 'items', 'label', [{ name: 'uid', map: 'value' }, { name: 'CompanyName', map: 'label' }], 'row', 'value');
        }
    }
</script>