<template>
    <div>
        <JqxGrid :width="getWidth" height="150" :source="dataAdapter" :columns="columns" :columnsresize="true">
        </JqxGrid>

        <br />
        <br />

        <JqxButton style="float: left; margin-right: 5px" @click="addItemBtnOnClick()">Add Item</JqxButton>
        <JqxButton style="float: left; margin-right: 5px" @click="deleteItemBtnOnClick()">Delete Item</JqxButton>
        <JqxButton style="float: left; margin-right: 5px" @click="updateItemBtnOnClick()">Update Item</JqxButton>
        <JqxButton style="float: left" @click="updatePathBtnOnClick()">Update Path</JqxButton>

        <br />

        <div ref="log" style="clear: both"></div>
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
                columns: [
                    { text: 'Name', datafield: 'firstname', width: 120 },
                    { text: 'Last Name', datafield: 'lastname', width: 120 },
                    { text: 'Product', datafield: 'productname', width: 180 },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {

            this.observableArray = new jqx.observableArray(generatedata(2, false), (changed) => {
                this.updateLog(this.observableArray);
            });

            const source = {
                localdata: this.observableArray,
                datatype: 'obserableArray',
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ]
            };

            this.dataAdapter = new jqx.dataAdapter(source);

        },
        mounted: function () {
            this.updateLog(this.observableArray);
        },
        methods: {
            updateLog: function (observableArray) {
                let rows = '';
                for (let i = 0; i < observableArray.length; i++) {
                    rows += observableArray.toJSON(['firstname', 'lastname', 'productname', 'quantity', 'price', 'total'], observableArray[i]);
                    rows += '<br/>';
                }
                let container = document.getElementById('log');
                this.$refs.log.innerHTML = rows;
            },
            addItemBtnOnClick: function () {
                let row = generatedata(1, false)[0];
                let temp = this.observableArray;
                temp.push(row);
                this.observableArray = temp
            },
            deleteItemBtnOnClick: function () {
                if (this.observableArray.length > 0) {
                    let temp = this.observableArray;
                    temp.splice(0, 1);
                    this.observableArray = temp
                }
            },
            updateItemBtnOnClick: function () {
                if (this.observableArray.length > 0) {
                    let row = generatedata(1, false)[0];
                    let temp = this.observableArray;
                    temp.set(0, row);
                    this.observableArray = temp;
                }
            },
            updatePathBtnOnClick: function () {
                if (this.observableArray.length > 0) {
                    let row = generatedata(1, false)[0];
                    let temp = this.observableArray;
                    temp.set('0.firstname', row.firstname);
                    temp.set('0.lastname', row.lastname);
                    this.observableArray = temp
                }
            }
        }
    }
</script>

<style>
</style>