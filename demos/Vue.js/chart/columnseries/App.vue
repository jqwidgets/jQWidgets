<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Economic comparison'"
              :description="'GDP and Debt in 2010'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :columnSeriesOverlap="false" :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
    </JqxChart>
</template>

<script>
    import JqxChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue';

    export default {
        components: {
            JqxChart
        },
        data: function () {

            return {
                dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } }),
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    dataField: 'Country',
                    gridLines: { visible: true },
                    valuesOnTicks: false
                },
                seriesGroups: [
                    {
                        type: 'column',
                        valueAxis:
                            {
                                visible: true,
                                unitInterval: 5000,
                                title: { text: 'GDP & Debt per Capita($)<br>' }
                            },
                        series: [
                            { dataField: 'GDP', displayText: 'GDP per Capita' },
                            { dataField: 'Debt', displayText: 'Debt per Capita' }
                        ]
                    },
                    {
                        type: 'line',
                        valueAxis:
                            {
                                visible: true,
                                position: 'right',
                                unitInterval: 10,
                                title: { text: 'Debt (% of GDP)' },
                                gridLines: { visible: false },
                                labels: { horizontalAlignment: 'left' }
                            },
                        series: [
                            { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source =
                {
                    datatype: 'csv',
                    datafields: [
                        { name: 'Country' },
                        { name: 'GDP' },
                        { name: 'DebtPercent' },
                        { name: 'Debt' }
                    ],
                    url: 'gdp_dept_2010.txt'
                };
        }
    }
</script>

<style>
</style>