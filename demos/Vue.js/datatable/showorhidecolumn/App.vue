<template>
    <div>
        <JqxListBox style="float: left" @checkChange="listBoxOnCheckChange($event)"
                    :width="150" :height="200" :source="listSource" :checkboxes="true">
        </JqxListBox>

        <JqxDataTable ref="myDataTable" style="float: left; margin-left: 20px;"
                      :source="dataAdapter" :columns="columns" :pageable="true"
                      :columnsResize="true" :pagerButtonsCount="10">
        </JqxDataTable>
    </div>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";

    export default {
        components: {
            JqxDataTable,
            JqxListBox
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Name', datafield: 'name', width: 200 },
                    { text: 'Beverage Type', dataField: 'type', width: 200 },
                    { text: 'Calories', dataField: 'calories', width: 200 }
                ],
                listSource: [
                    { label: 'Beverage Type', value: 'type', checked: true },
                    { label: 'Calories', value: 'calories', checked: true }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                dataType: 'json',
                dataFields: [
                    { name: 'name' },
                    { name: 'type' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat' },
                    { name: 'protein' }
                ],
                id: 'id',
                url: 'beverages.txt'
            };
        },
        methods: {
            listBoxOnCheckChange: function (event) {
                this.$refs.myDataTable.beginUpdate();
                if (event.args.checked) {
                    this.$refs.myDataTable.showColumn(event.args.value);
                }
                else {
                    this.$refs.myDataTable.hideColumn(event.args.value);
                }
                this.$refs.myDataTable.endUpdate();
            }
        }
    };
</script>

<style>
</style>