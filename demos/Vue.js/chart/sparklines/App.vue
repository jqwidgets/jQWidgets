<template>
    <JqxDataTable :width="getWidth" :source="dataAdapter" :columns="columns" :rendered="rendered"
                  :enableHover="false" :sortable="true" :selectionMode="'none'" />
</template>

<script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";

    export default {
        components: {
            JqxChart,
            JqxDataTable
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    {
                        text: 'City', align: 'center', dataField: 'city', width: 250,
                    },
                    {
                        text: 'Store locations', align: 'center', dataField: 'count', width: 200
                    },
                    {
                        text: 'Monthly sales', align: 'center', dataField: 'monthlySales'
                    },
                    {
                        text: 'Daily sales trend', align: 'center', dataField: 'dailyTrend',
                        cellsRenderer: (row, column, value, rowData) => {
                            const div = '<div id="sparklineContainer' + row + '" style="margin: 0; margin-bottom: 0; width: 100%; height: 40px;"></div>';
                            return div;
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.data = [
                { city: 'London', count: 24, monthlySales: 1128430, dailyTrend: [12, 8, 9, 3, 4, 5, 6, 2, 3, 4, 5, 6, 12, 4, 11, 4, 13, 9, 10, 12, 12, 8, 13, 7, 15, 9, 11, 12, 9, 8] },
                { city: 'New York', count: 35, monthlySales: 1434650, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
                { city: 'Berlin', count: 11, monthlySales: 498430, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
                { city: 'Madrid', count: 4, monthlySales: 181760, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
                { city: 'Paris', count: 9, monthlySales: 381760, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
            ];

            this.source = {
                localData: this.data,
                dataType: 'array'
            };
        },
        methods: {
            createSparkline: function (selector, data, type) {
                const options =
                    {
                        title: '',
                        description: '',
                        showLegend: false,
                        enableAnimations: false,
                        showBorderLine: false,
                        showToolTips: false,
                        backgroundColor: 'transparent',
                        padding: { left: 0, top: 0, right: 0, bottom: 0 },
                        titlePadding: { left: 0, top: 0, right: 0, bottom: 0 },
                        source: data,
                        xAxis:
                        {
                            visible: false,
                            valuesOnTicks: false
                        },
                        colorScheme: 'scheme01',
                        seriesGroups:
                        [
                            {
                                type: type,
                                columnsGapPercent: 0,
                                columnsMaxWidth: 2,
                                valueAxis:
                                {
                                    minValue: 0,
                                    visible: false
                                },
                                series: [
                                    {
                                        linesUnselectMode: 'click',
                                        colorFunction: (value, itemIndex, serie, group) => {
                                            return (value < 10) ? '#307DD7' : '#AA4643';
                                        }
                                    }
                                ]
                            }
                        ]
                    };

                jqwidgets.createInstance(`#${selector}`, 'jqxChart', options);
            },
            rendered: function () {
                for (let i = 0; i < this.data.length; i++) {
                    this.createSparkline('sparklineContainer' + i, this.data[i].dailyTrend, i % 2 == 0 ? 'column' : 'line');
                }
            }
        }
    };
</script>

<style>
</style>