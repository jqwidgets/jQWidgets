<template>
    <JqxGrid ref="myGrid"
             :width="getWidth" :columnsresize="true">
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
                getWidth: '90%'
            }
        },
        beforeCreate: function () {

            const source = {
                datatype: 'json',
                url: 'rows_and_columns.txt'
            };

            const dataAdapter = new jqx.dataAdapter(source, {
                autoBind: true,
                downloadComplete: (data) => {
                    let columns = data[0].columns;
                    let rows = data[1].rows;
                    let gridAdapter = new jqx.dataAdapter({
                        datafields: [
                            { name: 'id', type: 'number' },
                            { name: 'name', type: 'string' },
                            { name: 'type', type: 'string' },
                            { name: 'calories', type: 'int' },
                            { name: 'totalfat', type: 'string' },
                            { name: 'protein', type: 'string' }
                        ],
                        id: 'id',
                        localdata: rows
                    });

                    this.$refs.myGrid.hideloadelement();
                    this.$refs.myGrid.beginupdate();
                    this.$refs.myGrid.setOptions
                        ({
                            source: gridAdapter,
                            columns: columns
                        });
                    this.$refs.myGrid.endupdate();
                }
            });
        }
    }
</script>

<style>
</style>