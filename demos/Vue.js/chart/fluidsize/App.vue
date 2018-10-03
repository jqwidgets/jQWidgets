<template> 
    <JqxChart style="width: 80%; height: 50%"
        :title="'Economic comparison'" 
        :description="'GDP and Debt in 2010'"
        :showLegend="true" :enableAnimations="true" :padding="padding"
        :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
        :seriesGroups="seriesGroups" :colorScheme="'scheme01'">
    </JqxChart>
</template>

    <script>
    import JqxChart from "jqwidgets-scripts/jqwidgets-vue/vue_jqxchart.vue";

    export default {
        components: {
            JqxChart
            },
            data: function () {
                return {
                    dataAdapter: new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source + '" : ' + error); } }),
                    padding: { left: 5, top: 5, right: 5, bottom: 5 },
                    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                    xAxis: {
                        dataField: 'Country',
                        gridLines: { visible: true }
                    },
                    seriesGroups: [
                        {
                            type: 'column',
                            columnsGapPercent: 50,
                            valueAxis:
                                {
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
                                    unitInterval: 10,
                                    title: { text: 'Debt (% of GDP)<br>' },
                                    position: 'right',
                                    gridLines: { visible: false }
                                },
                            series: [
                                { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
                            ]
                        }
                    ]
                }
            },
        beforeCreate: function() {

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
    };
    </script>

<style>
    html, body {
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding: 0;
      margin: 0;
    }
</style>