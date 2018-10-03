<template>
    <div>
        <JqxTreeGrid ref="myTreeGrid"
            :width="width"
            :height="350"
            :sortable="true"
            :ready="ready"
            :columns="columns"
            :source="dataAdapter">
        </JqxTreeGrid>
        <div style="font-size: 13px; font-family: Verdana; width: 600px; margin-top: 10px;">
            <div style="float: left; width: 300px;">
                <h4>Shipped Date</h4>
                <JqxDropDownList
                    @change="dateListOnChange($event)"
                    :autoDropDownHeight="true"
                    :source="dateSource"
                    :height="25"
                    :selectedIndex="0">
                </JqxDropDownList>
            </div>
            <div style="float: left; width: 300px;">
                <h4>Price</h4>
                <JqxDropDownList
                    @change="priceListOnChange($event)"
                    :autoDropDownHeight="true"
                    :source="priceSource"
                    :height="25"
                    :selectedIndex="5">
                </JqxDropDownList>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxTreeGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreegrid.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';
    
    export default {
        components: {
            JqxTreeGrid,
            JqxDropDownList
        },
        data: function () {
            return {
                dateSource: ['Short Date', 'Long Date', 'Long date, Short Time', 'Long date, Long Time', 'Month/Year', 'Month/Day', 'Custom'],
                priceSource:  ['n', 'f1', 'f2', 'f3', 'c1', 'c2', 'c3', 'p', 'p2', 'p3'],
                width: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),                
                columns: [
                    { text: 'Order Name', dataField: "name", align: 'center', width: 200 },
                    { text: 'Customer', dataField: "customer", align: 'center', width: 200 },
                    { text: 'Price', dataField: "price", cellsFormat: "c2", align: 'center', cellsAlign: 'right', width: 100 },
                    {
                        text: 'Order Date', dataField: "date", align: 'right', cellsFormat: "d", cellsAlign: 'right'
                    }
                ]
            }
        },        
        beforeCreate: function () {
            // prepare the data
            this.source = {
                dataType: "array",
                dataFields: [
                    { name: "name", type: "string" },
                    { name: "quantity", type: "number" },
                    { name: "id", type: "number" },
                    { name: "parentid", type: "number" },
                    { name: "price", type: "number" },
                    { name: "date", type: "date" },
                    { name: "customer", type: "string" }
                ],
                hierarchy:
                {
                    keyDataField: { name: 'id' },
                    parentDataField: { name: 'parentid' }
                },
                id: 'id',
                localData: generateordersdata()
            };         
        },
        methods: {
            ready: function () {
                this.$refs.myTreeGrid.expandRow(2);
            },
            dateListOnChange: function (event) {
                let index = event.args.index;
                switch (index) {
                    case 0:
                        this.$refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'd');
                        break;
                    case 1:
                        this.$refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'D');
                        break;
                    case 2:
                        this.$refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'f');
                        break;
                    case 3:
                        this.$refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'F');
                        break;
                    case 4:
                        this.$refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'Y');
                        break;
                    case 5:
                        this.$refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'M');
                        break;
                    case 6:
                        this.$refs.myTreeGrid.setColumnProperty('date', 'cellsFormat', 'yyyy-MM-dd HH:mm:ss');
                        break;
                }
            },
            priceListOnChange: function (event) {
                let index = event.args.index;
                switch (index) {
                    case 0:
                        this.$refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'n');
                        break;
                    case 1:
                        this.$refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'f1');
                        break;
                    case 2:
                        this.$refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'f2');
                        break;
                    case 3:
                        this.$refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'f3');
                        break;
                    case 4:
                        this.$refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'c1');
                        break;
                    case 5:
                        this.$refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'c2');
                        break;
                    case 6:
                        this.$refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'c3');
                        break;
                    case 7:
                        this.$refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'p');
                        break;
                    case 8:
                        this.$refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'p2');
                        break;
                    case 9:
                        this.$refs.myTreeGrid.setColumnProperty('price', 'cellsFormat', 'p3');
                        break;
                }
            }
        }
    }
</script>

<style>
</style>
