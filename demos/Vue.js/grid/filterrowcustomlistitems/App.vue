<template>
    <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns"
             :showfilterrow="true" :filterable="true">
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
                    { text: 'Name', filtertype: 'list', filteritems: this.items, datafield: 'name', width: 200 },
                    { text: 'Product', filtertype: 'checkedlist', filteritems: ['Black Tea', 'Green Tea', 'Caffe Latte'], datafield: 'productname' }
                ]
            }
        },
        beforeCreate: function () {
            const data = generatedata(500, false);

            this.source = {
                localdata: data,
                datafields:
                    [
                        { name: 'name', type: 'string' },
                        { name: 'productname', type: 'string' }
                    ],
                datatype: 'array'
            };

            const generateItems = () => {
                let items = new Array();
                items.push(data[0].name);
                items.push(data[1].name);
                items.push(data[2].name);
                items.push(data[3].name);
                items.push(data[4].name);

                return items;
            };

            this.items = generateItems();
        }
    }
</script>

<style>
</style>