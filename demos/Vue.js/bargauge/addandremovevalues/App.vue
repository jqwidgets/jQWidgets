<template>
    <div>
        <JqxBarGauge ref="myBarGauge" style="float: left"
                     :width="getWidth" :height="600" :relativeInnerRadius="0.2" :max="500"
                     :values="[450, 15, 330]" :baseValue="50" :startAngle="0" :endAngle="360"
                     :title="'Nutritional Values'" :colorScheme="'scheme05'" :tooltip="tooltip"
                     :barSpacing="9" :animationDuration="0" :labels="labels">
        </JqxBarGauge>

        <div style="margin-left: 50px; margin-top: 150px; float: left;">
            <JqxListBox ref="myListBox" @checkChange="onCheckChange()"
                        :width="230" :source="dataAdapter" :displayMember="'name'"
                        :valueMember="'calories'" :checkboxes="true">
            </JqxListBox>

            <br />
            <br />
            <div ref='log'>
                <strong>Summary calories: 970</strong>
            </div>
        </div>
    </div>
</template>

<script>
    import JqxBarGauge from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbargauge.vue';
    import JqxListBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue';

    export default {
        components: {
            JqxBarGauge,
            JqxListBox
        },
        data: function () {
            return {
                getWidth: '90%',
                tooltip: {
                    visible: true,
                    formatFunction: (value, index) => {
                        let items = this.$refs.myListBox.getCheckedItems();
                        let item = items[index];
                        return item.label + ': ' + value + ' cal.';
                    }
                },
                labels: {
                    formatFunction: (value) => {
                        return value + ' cal.';
                    },
                    precision: 0,
                    indent: 15,
                    connectorWidth: 1
                },
                dataAdapter: new jqx.dataAdapter(this.source)
            }
        },
        beforeCreate: function () {
            const data = [{
                'id': '1',
                'name': 'Hot Chocolate',
                'calories': '370'
            }, {
                'id': '2',
                'name': 'Peppermint Hot Chocolate',
                'calories': '440'
            }, {
                'id': '3',
                'name': 'Salted Caramel Hot Chocolate',
                'calories': '450'
            }, {
                'id': '4',
                'name': 'White Hot Chocolate',
                'calories': '420'
            }, {
                'id': '5',
                'name': 'Caffe Americano',
                'calories': '15'
            }, {
                'id': '6',
                'name': 'Caffe Latte',
                'calories': '190'
            }, {
                'id': '7',
                'name': 'Caffe Mocha',
                'calories': '330'
            }];

            this.source = {
                datatype: 'json',
                datafields: [
                    { name: 'name' },
                    { name: 'calories', type: 'int' }
                ],
                id: 'id',
                localdata: data
            }
        },
        mounted: function () {
            this.$refs.myListBox.checkIndex(2);
            this.$refs.myListBox.checkIndex(5);
            this.$refs.myListBox.checkIndex(6);
        },
        methods: {
            onCheckChange: function () {
                let items = this.$refs.myListBox.getCheckedItems();
                let arrayOfItems = this.convertToArray(items);
                let log = this.$refs.log;
                log.innerHTML = '<strong>Summary calories: ' + this.getSum(arrayOfItems) + '</strong>';
                this.$refs.myBarGauge.val(arrayOfItems);
            },
            getSum: function (array) {
                array = array || [];
                let sum = 0;
                if (array.length) {
                    for (let i = 0; i < array.length; i += 1) {
                        sum += array[i];
                    }
                }
                return sum;
            },
            convertToArray: function (items) {
                let preparedArray = new Array(items.length);
                for (let i = 0; i < items.length; i += 1) {
                    preparedArray[i] = items[i].value;
                }
                return preparedArray;
            }
        }
    }
</script>

<style scoped>
</style>