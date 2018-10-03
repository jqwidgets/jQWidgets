<template>
    <JqxRangeSelector ref="myRangeSelector"
                      :width="getWidth"
                      :height="100"
                      :min="min"
                      :max="max"
                      :range="range"
                      :labelsFormat="labelsFormat"
                      :markersFormat="markersFormat"
                      :minorTicksInterval="minorTicksInterval"
                      :majorTicksInterval="majorTicksInterval">
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
                min: new Date(2014, 5, 1, 0, 0, 0),
                max: new Date(2014, 5, 1, 24, 0, 0),
                range: { from: new Date(2014, 5, 1, 4, 0, 0), to: new Date(2014, 5, 1, 12, 0, 0) },
                minorTicksInterval: { minutes: 30 },
                majorTicksInterval: { hours: 4 },
                labelsFormat: 'hh:mm tt',
                markersFormat: 'hh:mm tt',
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