<template>
    <div style="font-size: 13px; font-family: Verdana; float: left;">
        <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns" :columnsresize="true">
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
                    { text: 'Company Name', datafield: 'CompanyName', width: 250 },
                    { text: 'Contact Name', datafield: 'ContactName', width: 150 },
                    { text: 'Contact Title', datafield: 'ContactTitle', width: 180 },
                    { text: 'City', datafield: 'City', width: 120 },
                    { text: 'Postal Code', datafield: 'PostalCode', width: 90 },
                    { text: 'Country', datafield: 'Country', width: 100 }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'xml',
                datafields: [
                    { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
                    { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
                    { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
                    { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
                    { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
                    { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:CustomerID',
                url: 'customers.xml'
            };
        }
    }
</script>