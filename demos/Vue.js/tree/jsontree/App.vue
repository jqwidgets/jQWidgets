<template>
    <JqxTree :width="300" :source="records"></JqxTree>
</template>

<script>
    import JqxTree from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtree.vue';

    export default {
        components: {
            JqxTree
        },    
        beforeCreate: function () {
            const data =
                [
                    {
                        'id': '2',
                        'parentid': '1',
                        'text': 'Hot Chocolate',
                        'value': '$2.3'
                    }, {
                        'id': '3',
                        'parentid': '1',
                        'text': 'Peppermint Hot Chocolate',
                        'value': '$2.3'
                    }, {
                        'id': '4',
                        'parentid': '1',
                        'text': 'Salted Caramel Hot Chocolate',
                        'value': '$2.3'
                    }, {
                        'id': '5',
                        'parentid': '1',
                        'text': 'White Hot Chocolate',
                        'value': '$2.3'
                    }, {
                        'text': 'Chocolate Beverage',
                        'id': '1',
                        'parentid': '-1',
                        'value': '$2.3'
                    }, {
                        'id': '6',
                        'text': 'Espresso Beverage',
                        'parentid': '-1',
                        'value': '$2.3'
                    }, {
                        'id': '7',
                        'parentid': '6',
                        'text': 'Caffe Americano',
                        'value': '$2.3'
                    }, {
                        'id': '8',
                        'text': 'Caffe Latte',
                        'parentid': '6',
                        'value': '$2.3'
                    }, {
                        'id': '9',
                        'text': 'Caffe Mocha',
                        'parentid': '6',
                        'value': '$2.3'
                    }, {
                        'id': '10',
                        'text': 'Cappuccino',
                        'parentid': '6',
                        'value': '$2.3'
                    }, {
                        'id': '11',
                        'text': 'Pumpkin Spice Latte',
                        'parentid': '6',
                        'value': '$2.3'
                    }, {
                        'id': '12',
                        'text': 'Frappuccino',
                        'parentid': '-1'
                    }, {
                        'id': '13',
                        'text': 'Caffe Vanilla Frappuccino',
                        'parentid': '12',
                        'value': '$2.3'
                    }, {
                        'id': '15',
                        'text': '450 calories',
                        'parentid': '13',
                        'value': '$2.3'
                    }, {
                        'id': '16',
                        'text': '16g fat',
                        'parentid': '13',
                        'value': '$2.3'
                    }, {
                        'id': '17',
                        'text': '13g protein',
                        'parentid': '13',
                        'value': '$2.3'
                    }, {
                        'id': '14',
                        'text': 'Caffe Vanilla Frappuccino Light',
                        'parentid': '12',
                        'value': '$2.3'
                    }
                ];

            const source = {
                datatype: 'json',
                datafields: [
                    { name: 'id' },
                    { name: 'parentid' },
                    { name: 'text' },
                    { name: 'value' }
                ],
                id: 'id',
                localdata: data
            };

            const dataAdapter = new jqx.dataAdapter(source, { autoBind: true });
    
            this.records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }]);
        }
    }
</script>