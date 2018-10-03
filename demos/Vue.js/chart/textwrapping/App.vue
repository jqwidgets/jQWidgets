<template>
    <JqxChart style="width: 850px; height: 500px"
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
                titlePadding: { left: 90, top: 0, right: 0, bottom: 0 },
                xAxis: {
                    dataField: 'Country',
                    title: { verticalAlignment: 'center' },
                    formatFunction: (value, dataIndex) => {
                        if (value == 'USA')
                            return 'United<br>States';
                        return value;
                    }
                },
                seriesGroups: [
                    {
                        type: 'column',
                        columnsGapPercent: 50,
                        valueAxis:
                            {
                                unitInterval: 5000,
                                title: { text: 'GDP & Debt per Capita($)' }
                            },
                        series: [
                            { dataField: 'GDP', displayText: 'GDP per Capita' },
                            { dataField: 'Debt', displayText: 'Debt per Capita' }
                        ],
                        legendFormatFunction: this.legendFormatFunction,
                        verticalTextAlignment: 'center'
                    },
                    {
                        type: 'line',
                        valueAxis:
                            {
                                unitInterval: 10,
                                visible: false,
                                title: { text: 'Debt (% of GDP)' }
                            },
                        legendFormatFunction: this.legendFormatFunction,
                        verticalTextAlignment: 'center',
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
        },
        methods: {
            legendFormatFunction: function (value) {
                if (value == 'Debt per Capita')
                    return 'Debt per<br>Capita';
                if (value == 'GDP per Capita')
                    return 'GDP per<br>Capita';
                if (value == 'Debt (% of GDP)')
                    return 'Debt<br>(% of GDP)';
                return value;
            }
        }
    };
</script>

<style>
</style>