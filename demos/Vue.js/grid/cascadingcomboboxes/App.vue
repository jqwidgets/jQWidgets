<template>
    <JqxGrid ref="myGrid"
             :width="300" :source="dataAdapter" :columns="columns"
             :autoheight="true" :editable="true" :selectionmode="'singlecell'">
    </JqxGrid>
</template>

<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";

    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    {
                        text: 'Country', datafield: 'Country', width: 150, columntype: 'combobox',
                        cellvaluechanging: (row, datafield, columntype, oldvalue, newvalue) => {
                            if (newvalue != oldvalue) {
                                this.$refs.myGrid.setcellvalue(row, 'City', 'Select a city...');
                            };
                        }
                    },
                    {
                        text: 'City', datafield: 'City', width: 150, columntype: 'combobox',
                        initeditor: (row, cellvalue, editor, celltext, cellwidth, cellheight) => {
                            let country = this.$refs.myGrid.getcellvalue(row, 'Country');
                            let city = editor.val();
                            let cities = new Array();
                            switch (country) {
                                case 'Belgium':
                                    cities = ['Bruges', 'Brussels', 'Ghent'];
                                    break;
                                case 'France':
                                    cities = ['Bordeaux', 'Lille', 'Paris'];
                                    break;
                                case 'USA':
                                    cities = ['Los Angeles', 'Minneapolis', 'Washington'];
                                    break;
                            };
                            editor.jqxComboBox({ autoDropDownHeight: true, source: cities });
                            if (city != 'Select a city...') {
                                let index = cities.indexOf(city);
                                editor.jqxComboBox('selectIndex', index);
                            }
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {
            const data = '[{ "Country": "Belgium", "City": "Brussels"}, {"Country": "France", "City": "Paris"}, {"Country": "USA", "City": "Washington" }]';

            this.source = {
                datatype: 'json',
                datafields: [
                    { name: 'Country', type: 'string' },
                    { name: 'City', type: 'string' }
                ],
                localdata: data
            };
        }
    }
</script>

<style>
</style>