<template>
    <div>
        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :showfilterrow="true" :filterable="true"
                 :selectionmode="'multiplecellsadvanced'">
        </JqxGrid>

        <div style="margin-top: 20px">


            <JqxButton @click="btnOnClick()" :width="150">Remove Filter</JqxButton>
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
                columns: [
                    { text: 'Name', columntype: 'textbox', filtercondition: 'starts_with', datafield: 'name', width: '30%' },
                    { text: 'Range', datafield: 'range', filtertype: 'range', cellsalign: 'right', width: '35%', cellsformat: 'd' },
                    { text: 'Date', datafield: 'date', filtertype: 'date', cellsalign: 'right', width: '35%', cellsformat: 'd' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(500, false),
                datafields: [
                    { name: 'name', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'range', map: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' }
                ],
                datatype: 'array'
            };
        },
        methods: {
            btnOnClick: function () {
                this.$refs.myGrid.clearfilters();
            }
        }
    }
</script>