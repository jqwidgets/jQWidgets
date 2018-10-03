<template>
    <div>
        <JqxGrid ref="myGrid" v-on:filter="gridOnFilter()"
                 :width="850" :height="230" :filterable="true"
                 :source="dataAdapter" :columns="columns" :showfilterrow="true">
        </JqxGrid>

        <JqxChart ref="myChart" style="width: 850px; height: 500px; margin-top: 50px"
                  :title="'Fitness & exercise weekly scorecard'"
                  :description="'Time spent in vigorous exercise'"
                  :showLegend="true" :enableAnimations="true" :padding="padding"
                  :titlePadding="titlePadding" :source="sampleData" :xAxis="xAxis"
                  :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
        </JqxChart>
    </div>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';
    import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

    export default {
        components: {
            JqxChart,
            JqxGrid
        },
        data: function () {
            return {
                sampleData: this.sampleData,
                dataAdapter: new jqx.dataAdapter({
                    datafields: [
                        { name: "Day", type: "string" },
                        { name: "Keith", type: "number" },
                        { name: "Erica", type: "number" },
                        { name: "George", type: "number" }
                    ],
                    localdata: this.sampleData,
                    datatype: 'array'
                }),
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Day',
                    gridLines: { visible: true }
                },
                seriesGroups:
                    [
                        {
                            type: 'column',
                            columnsGapPercent: 50,
                            seriesGapPercent: 0,
                            valueAxis:
                                {
                                    visible: true,
                                    unitInterval: 10,
                                    minValue: 0,
                                    maxValue: 100,
                                    title: { text: 'Time in minutes' }
                                },
                            series: [
                                { dataField: 'Keith', displayText: 'Keith' },
                                { dataField: 'Erica', displayText: 'Erica' },
                                { dataField: 'George', displayText: 'George' }
                            ]
                        }
                    ],
                columns: [
                    { text: "Day", width: '40%', datafield: "Day", filteritems: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], filtertype: "checkedlist" },
                    { text: "Keith", width: '20%', datafield: "Keith" },
                    { text: "Erica", width: '20%', datafield: "Erica" },
                    { text: "George", width: '20%', datafield: "George" }
                ]
            }
        },
        beforeCreate: function () {

            this.sampleData = [
                { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
                { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
                { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
                { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
                { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
                { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
                { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
            ];
        },
        methods: {
            gridOnFilter: function () {
                const rows = this.$refs.myGrid.getrows();
                this.$refs.myChart.source = rows;
                this.$refs.myChart.refresh();
            }
        }
    }
</script>

<style>
</style>