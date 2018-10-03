<template>
    <JqxTreeMap 
        :width="850" 
        :height="600"
        :baseColor="'#0afaaa'"
        :renderCallbacks="renderCallbacks"
        :source="records">
    </JqxTreeMap>
</template>

<script>
    import JqxTreeMap from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreemap.vue';

    export default {
        components: {
            JqxTreeMap
        },
        
        beforeCreate: function () {
            this.renderCallbacks =
            {
                '*': (element, data) => {
                    if (!data.parent) {
                        element.css({
                            backgroundColor: '#fff',
                            border: '1px solid #aaa'
                        });
                    }
                    else {
                        let nThreshold = 105;
                        let bgDelta = (data.rgb.r * 0.299) + (data.rgb.g * 0.587) + (data.rgb.b * 0.114);
                        let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
                        element.css({
                            color: foreColor
                        });
                    }
                }
            };

            this.data = [
                {
                    "id": "2",
                    "parentid": "1",
                    "text": "Hot Chocolate",
                    "value": "$5.2"
                }, {
                    "id": "3",
                    "parentid": "1",
                    "text": "Peppermint Hot Chocolate",
                    "value": "$4.0"
                }, {
                    "id": "4",
                    "parentid": "1",
                    "text": "Salted Caramel Hot Chocolate",
                    "value": "$2.4"
                }, {
                    "id": "5",
                    "parentid": "1",
                    "text": "White Hot Chocolate",
                    "value": "$2.5"
                }, {
                    "text": "Chocolate Beverage",
                    "id": "1",
                    "parentid": "-1",
                    "value": "$1.1"
                }, {
                    "id": "6",
                    "text": "Espresso Beverage",
                    "parentid": "-1",
                    "value": "$0.9"
                }, {
                    "id": "7",
                    "parentid": "6",
                    "text": "Caffe Americano",
                    "value": "$1.2"
                }, {
                    "id": "8",
                    "text": "Caffe Latte",
                    "parentid": "6",
                    "value": "$3.3"
                }, {
                    "id": "9",
                    "text": "Caffe Mocha",
                    "parentid": "6",
                    "value": "$2.5"
                }, {
                    "id": "10",
                    "text": "Cappuccino",
                    "parentid": "6",
                    "value": "$1.5"
                }, {
                    "id": "11",
                    "text": "Pumpkin Spice Latte",
                    "parentid": "6",
                    "value": "$1.6"
                }, {
                    "id": "12",
                    "text": "Frappuccino",
                    "parentid": "-1"
                }, {
                    "id": "13",
                    "text": "Caffe Vanilla Frappuccino",
                    "parentid": "12",
                    "value": "$1.2"
                }
            ];

            let source = {
                datatype: "json",
                datafields: [
                    { name: 'id' },
                    { name: 'parentid' },
                    { name: 'text' },
                    { name: 'value' }
                ],
                id: 'id',
                localdata: this.data
            };
            // create data adapter.
            let dataAdapter = new $.jqx.dataAdapter(source);
            // perform Data Binding.
            dataAdapter.dataBind();
            // get the treemap sectors. The first parameter is the item's id. The second parameter is the parent item's id. The 'items' parameter represents 
            // the sub items collection name. Each jqxTreeMap item has a 'label' property, but in the JSON data, we have a 'text' field. The last parameter 
            // specifies the mapping between the 'text' and 'label' fields.  
            this.records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }]);

                
        }
    }
</script>

<style>
</style>
