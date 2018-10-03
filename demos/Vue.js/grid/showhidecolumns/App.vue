<template>
    <div>
        <JqxListBox style="float: left" @checkChange="myListBoxOnCheckChange($event)"
                    :width="200" :height="200" :source="listBoxSource" :checkboxes="true">
        </JqxListBox>

        <JqxGrid ref="myGrid" style="float: left; margin-left: 20px"
                 :width="600" :source="dataAdapter" :columns="columns" :columnsresize="true">
        </JqxGrid>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";

    export default {
        components: {
            JqxGrid,
            JqxListBox,
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Name', datafield: 'name', width: 100, hidden: true },
                    { text: 'Beverage Type', datafield: 'type' },
                    { text: 'Calories', datafield: 'calories' },
                    { text: 'Total Fat', datafield: 'totalfat' },
                    { text: 'Protein', datafield: 'protein' }
                ],
                listBoxSource: [
                    { label: 'Name', value: 'name', checked: false },
                    { label: 'Beverage Type', value: 'type', checked: true },
                    { label: 'Calories', value: 'calories', checked: true },
                    { label: 'Total Fat', value: 'totalfat', checked: true },
                    { label: 'Protein', value: 'protein', checked: true }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'json',
                datafields: [
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
            myListBoxOnCheckChange: function(event) {
                this.$refs.myGrid.beginupdate();
                if (event.args.checked) {
                    this.$refs.myGrid.showcolumn(event.args.value);
                }
                else {
                    this.$refs.myGrid.hidecolumn(event.args.value);
                }
                this.$refs.myGrid.endupdate();
            }
        }
    }
</script>

<style>
</style>