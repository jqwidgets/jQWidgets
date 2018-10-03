<template>
    <div style="font-size: 13px; font-family: Verdana; float: left">
        <JqxGrid ref="myGrid"
                 :width="getWidth" :source="dataAdapter" :columns="columns"
                 :sortable="true" :altrows="true" :autoheight="true"
                 :selectionmode="'multiplecellsadvanced'">
        </JqxGrid>

        <div style="margin-top: 20px">
            <div style="margin-left: 10px; float: left">

                <JqxButton @click="btnOnClick()">Print</JqxButton>
            </div>
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
                    { text: 'First Name', datafield: 'firstname', width: 120 },
                    { text: 'Last Name', datafield: 'lastname', width: 120 },
                    { text: 'Product', datafield: 'productname', width: 177 },
                    { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellsalign: 'center', align: 'center' },
                    { text: 'Ship Date', datafield: 'date', width: 120, align: 'right', cellsalign: 'right', cellsformat: 'd' },
                    { text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right' },
                    { text: 'Price', datafield: 'price', cellsalign: 'right', align: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(10),
                datatype: 'array',
                datafields: [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ]
            };
        },
        methods: {
            btnOnClick: function () {
                let gridContent = this.$refs.myGrid.exportdata('html');
                let newWindow = window.open('', '', 'width=800, height=500'),
                    document = newWindow.document.open(),
                    pageContent =
                        '<!DOCTYPE html>\n' +
                        '<html>\n' +
                        '<head>\n' +
                        '<meta charset="utf-8" />\n' +
                        '<title>jQWidgets Grid</title>\n' +
                        '</head>\n' +
                        '<body>\n' + gridContent + '\n</body>\n</html>';
                document.write(pageContent);
                document.close();
                newWindow.print();
            }
        }
    }
</script>

<style>
</style>