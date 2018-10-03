<template>
    <div>
        <label style="font-size: 13px; font-family: Verdana;">
            Major scientific discoveries in selected period:
        </label>
        <JqxGrid ref="myGrid" style="margin-top: 10px;"
                 :width="getWidthGrid" :height="300"
                 :source="dataAdapter"
                 :filterable="true"
                 :columngroups="columngroups"
                 :columns="columns">
        </JqxGrid>
        <br />
        <label style="font-size: 13px; margin-top: 10px; font-family: Verdana;">
            Select period:
        </label>
        <br />
        <JqxRangeSelector ref="myRangeSelector"
                          @change="change($event)"
                          :width="getWidthRange"
                          :height="80"
                          :min="min"
                          :max="max"
                          :range="range"
                          :labelsFormat="'yyyy'"
                          :markersFormat="'yyyy'"
                          :minorTicksInterval="'year'"
                          :majorTicksInterval="{ years: 10 }">
        </JqxRangeSelector>
    </div>
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
                getWidthGrid: '90%',
                getWidthRange: '90%',
                min: new Date(1798, 12, 31),
                max: new Date(1900, 1, 1),
                range: { from: new Date(1800, 1, 1), to: new Date(1900, 1, 1) },
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