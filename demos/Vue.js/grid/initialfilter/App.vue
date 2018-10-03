<template>
    <JqxGrid ref="myGrid"
             :width="getWidth" :source="dataAdapter" :columns="columns"
             :filterable="true" :sortable="true" :ready="ready">
    </JqxGrid>
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
                    { text: 'First Name', datafield: 'firstname', width: 160 },
                    { text: 'Last Name', datafield: 'lastname', width: 160 },
                    { text: 'Product', datafield: 'productname', width: 170 },
                    { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(500, false),
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'date', type: 'date' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' }
                    ],
                datatype: 'array'
            };
        },
        methods: {
            firstNameColumnFilter: function() {
                let filtergroup = new jqx.filter();
                let filter_or_operator = 1;
                let filtervalue = 'Nancy';
                let filtercondition = 'contains';
                let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                filtergroup.addfilter(filter_or_operator, filter);
                this.$refs.myGrid.addfilter('firstname', filtergroup);
                this.$refs.myGrid.applyfilters();
            },
            ready: function () {
                this.firstNameColumnFilter();
            }
        }
    }
</script>

<style>
</style>