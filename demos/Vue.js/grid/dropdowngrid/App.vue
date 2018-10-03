<template>
    <JqxDropDownButton ref="myDropDownButton" :width="150" :height="25">

        <JqxGrid ref="myGrid" @rowselect="myGridOnRowSelect($event)"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :pageable="true" :columnsresize="true" :autoheight="true">
        </JqxGrid>

    </JqxDropDownButton>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    import JqxDropDownButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownbutton.vue";

    export default {
        components: {
            JqxGrid,
            JqxDropDownButton
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', columntype: 'textbox', datafield: 'firstname' },
                    { text: 'Last Name', datafield: 'lastname', columntype: 'textbox' },
                    { text: 'Product', columntype: 'dropdownlist', datafield: 'productname' },
                    { text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right' },
                    { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(100, false),
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' }
                    ],
                datatype: 'array'
            };
        },
        mounted: function () {
            this.$refs.myGrid.selectrow(0);
            this.myGridOnRowSelect({ args: { rowindex: 0 } });
        },
        methods: {
            myGridOnRowSelect: function (event) {
                let args = event.args;
                let row = this.$refs.myGrid.getrowdata(args.rowindex);
                let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + row['firstname'] + ' ' + row['lastname'] + '</div>';
                this.$refs.myDropDownButton.setContent(dropDownContent);
            }
        }
    }
</script>

<style>
</style>