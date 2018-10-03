<template>
    <JqxChart style="width: 850px; height: 500px"
              :title="'Economic comparison'"
              :description="'GDP and Debt in 2010'"
              :showLegend="true" :enableAnimations="true" :padding="padding"
              :titlePadding="titlePadding" :source="dataAdapter" :xAxis="xAxis"
              :seriesGroups="seriesGroups" :colorScheme="'scheme02'">
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
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                xAxis: {
                    position: 'top',
                    dataField: 'Country',
                    gridLines: { visible: true }
                },
                seriesGroups: [
                    {
                        type: 'column',
                        columnsGapPercent: 50,
                        valueAxis:
                            {
                                title: { text: 'GDP & Debt per Capita($)' }
                            },
                        series: [
                            {
                                dataField: 'GDP',
                                displayText: 'GDP per Capita',
                                labels: {
                                    visible: true,
                                    verticalAlignment: 'top',
                                    offset: { x: 0, y: -20 }
                                },
                                formatFunction: (value) => {
                                    return Math.round(value / 1000) + 'K';
                                }
                            },
                            {
                                dataField: 'Debt',
                                displayText: 'Debt per Capita',
                                labels: {
                                    visible: true,
                                    verticalAlignment: 'top',
                                    offset: { x: 0, y: -20 }
                                },
                                formatFunction: (value) => {
                                    return Math.round(value / 1000) + 'K';
                                }
                            }
                        ]
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
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