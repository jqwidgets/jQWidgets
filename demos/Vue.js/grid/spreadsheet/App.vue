<template>
    <div>
        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :columnsresize="true" :editable="true" :selectionmode="'multiplecellsadvanced'">
        </JqxGrid>
        <div style="margin-top: 20px; float: left">
            <JqxButton @click="myBtnOnClick()">Export to Excel</JqxButton>
        </div>
    </div>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxGrid,
            JqxButton
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: this.columns
            }
        },
        beforeCreate: function () {
            this.columns = [];
            let datafields = [];
          
            const numberrenderer = (row, column, value) => {
                return '<div style="text-align: center; margin-top: 5px;">' + (1 + value) + '</div>';
            };

            generateData = () => {
                for(let i = 0; i < 26; i++) {
                    let text = String.fromCharCode(65 + i);
                    if (i == 0) {
                        let cssclass = 'jqx-widget-header';
                        this.columns[this.columns.length] = { pinned: true, exportable: false, text: '', columntype: 'number', cellclassname: cssclass, cellsrenderer: numberrenderer };
                    }
                    datafields[datafields.length] = { name: text };
                    this.columns[this.columns.length] = { text: text, datafield: text, width: 60, align: 'center' };
                }
            };
            generateData();

            this.source = {
                unboundmode: true,
                totalrecords: 100,
                datafields: datafields
            };
        },
        methods: {
            myBtnOnClick: function () {
                this.$refs.myGrid.exportdata('xls', 'jqxGrid', false);
            }
        }
    }
</script>

<style>
</style>