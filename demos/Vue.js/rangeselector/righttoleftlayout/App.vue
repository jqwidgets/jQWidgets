<template>
    <JqxRangeSelector ref="myRangeSelector"
                      :width="getWidth"
                      :height="100"
                      :min="min"
                      :max="max"
                      :range="range"
                      :minorTicksInterval="minorTicksInterval"
                      :majorTicksInterval="majorTicksInterval"
                      :rtl="true">
    </JqxRangeSelector>
</template>

<script>
    import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxrangeselector.vue';
    import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

    export default {
        components: {
            JqxRangeSelector,
            JqxGrid
        },
        data: function () {
            return {
                getWidth: '90%',
                min: 0,
                max: 100,
                range: { from: 40, to: 60 },
                minorTicksInterval: 1,
                majorTicksInterval: 10,
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: "Discovery", columngroup: "header", datafield: "discovery", width: 250 },
                    { text: "Scientist", columngroup: "header", datafield: "scientist", width: 210 },
                    { text: "Year", columngroup: "header", datafield: "year", cellsformat: "yyyy" }
                ],
                columngroups: [
                    { text: "Major scientific discoveries in the 19th century", align: "center", name: "header" }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                    datatype: 'json',
                    datafields: [
                        { name: 'discovery', type: 'string' },
                        { name: 'scientist', type: 'string' },
                        { name: 'year', type: 'date' }
                    ],
                    id: 'id',
                url: 'discoveries.txt'
                };
        },
        methods: {
            change: function(event) {
                let range = event.args;
                let min = this.$refs.myRangeSelector.min;
                let max = this.$refs.myRangeSelector.max;

                min = new Date(min);
                max = new Date(max);

                if (range.from.getTime() == min.getTime() && range.to.getTime() == max.getTime()) {
                    this.$refs.myGrid.clearfilters();
                } else {
                    this.applyFilter(range.from, range.to);
                };
            },
            applyFilter: function (from, to) {
                this.$refs.myGrid.clearfilters();
                let filtertype = 'datefilter';
                let filtergroup = new jqx.filter();
                let filter_or_operator = 0;
                let filtervalueFrom = from;
                let filterconditionFrom = 'GREATER_THAN_OR_EQUAL';
                let filterFrom = filtergroup.createfilter(filtertype, filtervalueFrom, filterconditionFrom);
                filtergroup.addfilter(filter_or_operator, filterFrom);
                let filtervalueTo = to;
                let filterconditionTo = 'LESS_THAN_OR_EQUAL';
                let filterTo = filtergroup.createfilter(filtertype, filtervalueTo, filterconditionTo);
                filtergroup.addfilter(filter_or_operator, filterTo);
                this.$refs.myGrid.addfilter('year', filtergroup);
                this.$refs.myGrid.applyfilters();
            }
        }
    }
</script>

<style>
</style>