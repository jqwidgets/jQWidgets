<template>
    <JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns">
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
                columns: this.columns
            }
        },
        beforeCreate: function () {
            let data = [];
            let datafields = [];
            this.columns = [];

            for(let i = 0; i < 200; i++) {
                let row = {};
                for (let j = 0; j < 200; j++) {
                    row['Name' + j] = 'Cell ' + (1 + i) + '.' + (1 + j);
                    if (i == 0) {
                        this.columns.push({ datafield: 'Name' + j, text: 'Column ' + (1 + j), width: 100 });
                        datafields.push({ name: 'Name' + j, type: 'string' });
                    }
                }
                data[i] = row;
            }          

            this.source = {
                localdata: data,
                datatype: 'array',
                datafields: datafields
            };
        }
    }
</script>

<style>
</style>